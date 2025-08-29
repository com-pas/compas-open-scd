import { expect } from '@open-wc/testing';
import { stub, restore } from 'sinon';

import { CompasNSDocFileService } from '../../../src/compas-services/CompasNSDocFileService.js';

interface NsDocFileResponse {
  id: string;
  nsdocId: string;
  filename: string;
  checksum: string;
}

describe('CompasNSDocFileService', () => {
  let fetchStub: sinon.SinonStub;

  beforeEach(() => {
    fetchStub = stub(window, 'fetch');
  });

  afterEach(() => {
    restore();
  });

  it('should list all NSDoc files', async () => {
    const mockManifest = [
      'IEC_61850-7-2_2003A2-en.nsdoc',
      'IEC_61850-7-3_2007B3-en.nsdoc',
      'IEC_61850-8-1_2011A1-en.nsdoc',
    ];

    const validNsdocContent = `<?xml version="1.0" encoding="UTF-8"?>
      <NSDoc xmlns="http://www.iec.ch/61850/2016/NSD" id="IEC 61850-7-2">
        <Doc id="IEC61850-7-2"><Title>Test</Title></Doc>
      </NSDoc>`;

    fetchStub.callsFake((url: string) => {
      if (url.includes('manifest.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockManifest),
        });
      }

      return Promise.resolve({
        ok: true,
        text: () => Promise.resolve(validNsdocContent),
      });
    });

    const service = CompasNSDocFileService();
    const result = await service.listNsdocFiles();

    expect(result).to.have.property('files');
    expect(result.files).to.be.an('array');
    expect(result.files.length).to.equal(3);

    result.files.forEach((file: NsDocFileResponse) => {
      expect(file).to.have.property('id');
      expect(file).to.have.property('nsdocId');
      expect(file).to.have.property('filename');
      expect(file).to.have.property('checksum');
      expect(file.filename).to.match(
        /^IEC_61850-[0-9]+-[0-9]+_\d{4}[A-Z]\d+-en\.nsdoc$/
      );
    });
  });

  it('should get NSDOC file content', async () => {
    const mockManifest = ['IEC_61850-7-2_2003A2-en.nsdoc'];
    const validNsdocContent = `<?xml version="1.0" encoding="UTF-8"?>
      <NSDoc xmlns="http://www.iec.ch/61850/2016/NSD" id="IEC 61850-7-2">
        <Doc id="IEC61850-7-2"><Title>Test</Title></Doc>
      </NSDoc>`;

    fetchStub.callsFake((url: string) => {
      if (url.includes('manifest.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockManifest),
        });
      }

      return Promise.resolve({
        ok: true,
        text: () => Promise.resolve(validNsdocContent),
      });
    });

    const service = CompasNSDocFileService();

    const listResult = await service.listNsdocFiles();
    const firstFile = listResult.files[0];
    const contentResult = await service.getNsdocFile(firstFile.id);
    const doc = new DOMParser().parseFromString(
      contentResult.content,
      'text/xml'
    );
    const nsElement = doc.querySelector('NSDoc');

    expect(contentResult).to.have.property('content');
    expect(nsElement).to.not.be.null;
    expect(nsElement?.getAttribute('xmlns')).to.equal(
      'http://www.iec.ch/61850/2016/NSD'
    );
    expect(nsElement?.getAttribute('id')).to.equal('IEC 61850-7-2');

    const docElement = doc.querySelector('Doc');
    expect(docElement).to.not.be.null;
    expect(docElement?.getAttribute('id')).to.equal('IEC61850-7-2');
  });

  it('should fail on missing file', async () => {
    fetchStub.callsFake((url: string) => {
      if (url.includes('manifest.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([]),
        });
      }

      return Promise.resolve({
        ok: false,
        status: 404,
      });
    });

    const service = CompasNSDocFileService();
    const invalidId = 'invalid-id-123';

    try {
      await service.getNsdocFile(invalidId);
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error).to.equal(`Unable to find nsDoc file with id ${invalidId}`);
    }
  });

  it('should handle version selection correctly', async () => {
    const mockManifest = [
      'IEC_61850-7-2_2003A2-en.nsdoc',
      'IEC_61850-7-2_2003B1-en.nsdoc',
      'IEC_61850-8-1_2011A1-en.nsdoc',
      'IEC_61850-8-1_2011B2-en.nsdoc',
    ];

    const validNsdocContent72 = `<?xml version="1.0" encoding="UTF-8"?>
      <NSDoc xmlns="http://www.iec.ch/61850/2016/NSD" id="IEC 61850-7-2">
        <Doc id="IEC61850-7-2"><Title>Test 7-2</Title></Doc>
      </NSDoc>`;

    const validNsdocContent81 = `<?xml version="1.0" encoding="UTF-8"?>
      <NSDoc xmlns="http://www.iec.ch/61850/2016/NSD" id="IEC 61850-8-1">
        <Doc id="IEC61850-8-1"><Title>Test 8-1</Title></Doc>
      </NSDoc>`;

    fetchStub.callsFake((url: string) => {
      if (url.includes('manifest.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockManifest),
        });
      }

      const filename = url.split('/').pop() || '';
      if (filename.includes('7-2')) {
        return Promise.resolve({
          ok: true,
          text: () => Promise.resolve(validNsdocContent72),
        });
      } else if (filename.includes('8-1')) {
        return Promise.resolve({
          ok: true,
          text: () => Promise.resolve(validNsdocContent81),
        });
      }

      return Promise.resolve({
        ok: false,
        status: 404,
      });
    });

    const service = CompasNSDocFileService();
    const result = await service.listNsdocFiles();

    const filesByStandard = new Map<string, NsDocFileResponse[]>();
    result.files.forEach((file: NsDocFileResponse) => {
      if (!filesByStandard.has(file.nsdocId)) {
        filesByStandard.set(file.nsdocId, []);
      }
      filesByStandard.get(file.nsdocId)!.push(file);
    });

    filesByStandard.forEach((files, standardId) => {
      expect(files).to.have.length(
        1,
        `Standard ${standardId} should have only one file (latest version)`
      );
    });
  });

  it('should handle schema validation correctly', async () => {
    const mockManifest = [
      'IEC_61850-7-2_2003A2-en.nsdoc',
      'IEC_61850-INVALID_2023A1-en.nsdoc',
    ];

    const validNsdocContent = `<?xml version="1.0" encoding="UTF-8"?>
      <NSDoc xmlns="http://www.iec.ch/61850/2016/NSD" id="IEC 61850-7-2">
        <Doc id="IEC61850-7-2"><Title>Test</Title></Doc>
      </NSDoc>`;

    const invalidNsdocContent = `<?xml version="1.0" encoding="UTF-8"?>
      <NSDoc xmlns="http://example.com/invalid" id="IEC 61850-INVALID">
        <Doc id="IEC61850-INVALID"><Title>Invalid</Title></Doc>
      </NSDoc>`;

    fetchStub.callsFake((url: string) => {
      if (url.includes('manifest.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockManifest),
        });
      }

      const filename = url.split('/').pop() || '';
      if (filename.includes('INVALID')) {
        return Promise.resolve({
          ok: true,
          text: () => Promise.resolve(invalidNsdocContent),
        });
      }

      return Promise.resolve({
        ok: true,
        text: () => Promise.resolve(validNsdocContent),
      });
    });

    const service = CompasNSDocFileService();
    const result = await service.listNsdocFiles();

    expect(result.files).to.be.an('array');

    const invalidFile = result.files.find((f: NsDocFileResponse) =>
      f.filename.includes('INVALID')
    );
    expect(invalidFile).to.be.undefined;
  });
});
