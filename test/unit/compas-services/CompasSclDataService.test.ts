import { expect } from '@open-wc/testing';
import { restore, stub } from 'sinon';

import { CompasSettings } from '../../../src/compas/CompasSettings.js';
import { CompasSclDataService } from '../../../src/compas-services/CompasSclDataService.js';

const MALICIOUS_TYPE = '../../admin';
const MALICIOUS_ID = '../../etc/passwd';
const MALICIOUS_VERSION = '../secret';

const VALID_TYPE = 'SCD';
const VALID_ID = '380b5e70-4753-4b59-b5b4-d51ceb26a30c';
const VALID_VERSION = '1.0.0';

function fakeXmlResponse(body = '<Root/>'): Response {
  return <Response>(<unknown>{
    ok: true,
    text: () => Promise.resolve(body),
  });
}

async function expectRejected(promise: Promise<unknown>): Promise<void> {
  let rejected = false;
  await promise.catch(() => {
    rejected = true;
  });
  expect(rejected, 'expected promise to be rejected').to.be.true;
}

describe('CompasSclDataService input validation', () => {
  let fetchStub: sinon.SinonStub;

  beforeEach(() => {
    // Force REST (non-websocket) code paths so we can inspect the fetch URL.
    CompasSettings().setCompasSetting('useWebsockets', 'off');
    fetchStub = stub(window, 'fetch');
    fetchStub.callsFake(() =>
      Promise.resolve(
        fakeXmlResponse('<Response><SclData>&lt;SCL/&gt;</SclData></Response>')
      )
    );
  });

  afterEach(() => {
    restore();
    localStorage.removeItem('useWebsockets');
  });

  describe('rejects malicious input before sending any request', () => {
    it('rejects a malicious type in listScls', async () => {
      const service = CompasSclDataService();
      await expectRejected(service.listScls(MALICIOUS_TYPE));
      expect(fetchStub.called).to.be.false;
    });

    it('rejects a malicious type or id in listSclVersions', async () => {
      const service = CompasSclDataService();
      await expectRejected(service.listSclVersions(MALICIOUS_TYPE, VALID_ID));
      await expectRejected(service.listSclVersions(VALID_TYPE, MALICIOUS_ID));
      expect(fetchStub.called).to.be.false;
    });

    it('rejects an empty id in listSclVersions', async () => {
      const service = CompasSclDataService();
      await expectRejected(service.listSclVersions(VALID_TYPE, ''));
      expect(fetchStub.called).to.be.false;
    });

    it('rejects a malicious type or id in getSclDocument', async () => {
      const service = CompasSclDataService();
      const element = document.createElement('div');
      await expectRejected(
        service.getSclDocument(element, MALICIOUS_TYPE, VALID_ID)
      );
      await expectRejected(
        service.getSclDocument(element, VALID_TYPE, MALICIOUS_ID)
      );
      expect(fetchStub.called).to.be.false;
    });

    it('rejects an empty id in getSclDocument', async () => {
      const service = CompasSclDataService();
      const element = document.createElement('div');
      await expectRejected(service.getSclDocument(element, VALID_TYPE, ''));
      expect(fetchStub.called).to.be.false;
    });

    it('rejects a malicious type, id or version in getSclDocumentVersion', async () => {
      const service = CompasSclDataService();
      const element = document.createElement('div');
      await expectRejected(
        service.getSclDocumentVersion(
          element,
          MALICIOUS_TYPE,
          VALID_ID,
          VALID_VERSION
        )
      );
      await expectRejected(
        service.getSclDocumentVersion(
          element,
          VALID_TYPE,
          MALICIOUS_ID,
          VALID_VERSION
        )
      );
      await expectRejected(
        service.getSclDocumentVersion(
          element,
          VALID_TYPE,
          VALID_ID,
          MALICIOUS_VERSION
        )
      );
      expect(fetchStub.called).to.be.false;
    });

    it('rejects an empty id in getSclDocumentVersion', async () => {
      const service = CompasSclDataService();
      const element = document.createElement('div');
      await expectRejected(
        service.getSclDocumentVersion(element, VALID_TYPE, '', VALID_VERSION)
      );
      expect(fetchStub.called).to.be.false;
    });

    it('rejects a malicious type, id or version in deleteSclDocumentVersion', async () => {
      const service = CompasSclDataService();
      await expectRejected(
        service.deleteSclDocumentVersion(
          MALICIOUS_TYPE,
          VALID_ID,
          VALID_VERSION
        )
      );
      await expectRejected(
        service.deleteSclDocumentVersion(
          VALID_TYPE,
          MALICIOUS_ID,
          VALID_VERSION
        )
      );
      await expectRejected(
        service.deleteSclDocumentVersion(
          VALID_TYPE,
          VALID_ID,
          MALICIOUS_VERSION
        )
      );
      expect(fetchStub.called).to.be.false;
    });

    it('rejects an empty id in deleteSclDocumentVersion', async () => {
      const service = CompasSclDataService();
      await expectRejected(
        service.deleteSclDocumentVersion(VALID_TYPE, '', VALID_VERSION)
      );
      expect(fetchStub.called).to.be.false;
    });

    it('rejects a malicious type or id in deleteSclDocument', async () => {
      const service = CompasSclDataService();
      await expectRejected(service.deleteSclDocument(MALICIOUS_TYPE, VALID_ID));
      await expectRejected(service.deleteSclDocument(VALID_TYPE, MALICIOUS_ID));
      expect(fetchStub.called).to.be.false;
    });

    it('rejects an empty id in deleteSclDocument', async () => {
      const service = CompasSclDataService();
      await expectRejected(service.deleteSclDocument(VALID_TYPE, ''));
      expect(fetchStub.called).to.be.false;
    });

    it('rejects a malicious type in addSclDocument', async () => {
      const service = CompasSclDataService();
      const element = document.createElement('div');
      const doc = new DOMParser().parseFromString('<SCL/>', 'application/xml');
      await expectRejected(
        service.addSclDocument(element, MALICIOUS_TYPE, {
          sclName: 'test',
          comment: null,
          doc,
        })
      );
      expect(fetchStub.called).to.be.false;
    });

    it('rejects a malicious type or id in updateSclDocument', async () => {
      const service = CompasSclDataService();
      const element = document.createElement('div');
      const doc = new DOMParser().parseFromString('<SCL/>', 'application/xml');
      await expectRejected(
        service.updateSclDocument(element, MALICIOUS_TYPE, VALID_ID, {
          changeSet: 'MINOR' as any,
          comment: null,
          doc,
        })
      );
      await expectRejected(
        service.updateSclDocument(element, VALID_TYPE, MALICIOUS_ID, {
          changeSet: 'MINOR' as any,
          comment: null,
          doc,
        })
      );
      expect(fetchStub.called).to.be.false;
    });

    it('rejects an empty id in updateSclDocument', async () => {
      const service = CompasSclDataService();
      const element = document.createElement('div');
      const doc = new DOMParser().parseFromString('<SCL/>', 'application/xml');
      await expectRejected(
        service.updateSclDocument(element, VALID_TYPE, '', {
          changeSet: 'MINOR' as any,
          comment: null,
          doc,
        })
      );
      expect(fetchStub.called).to.be.false;
    });
  });

  describe('rejects malicious input before opening any websocket', () => {
    let WebSocketStub: sinon.SinonStub;

    beforeEach(() => {
      CompasSettings().setCompasSetting('useWebsockets', 'on');
      WebSocketStub = stub(window, 'WebSocket');
    });

    it('rejects malicious or empty input in getSclDocument without opening a websocket', async () => {
      const service = CompasSclDataService();
      const element = document.createElement('div');
      await expectRejected(
        service.getSclDocument(element, MALICIOUS_TYPE, VALID_ID)
      );
      await expectRejected(
        service.getSclDocument(element, VALID_TYPE, MALICIOUS_ID)
      );
      await expectRejected(service.getSclDocument(element, VALID_TYPE, ''));
      expect(WebSocketStub.called).to.be.false;
      expect(fetchStub.called).to.be.false;
    });

    it('rejects malicious or empty input in getSclDocumentVersion without opening a websocket', async () => {
      const service = CompasSclDataService();
      const element = document.createElement('div');
      await expectRejected(
        service.getSclDocumentVersion(
          element,
          MALICIOUS_TYPE,
          VALID_ID,
          VALID_VERSION
        )
      );
      await expectRejected(
        service.getSclDocumentVersion(
          element,
          VALID_TYPE,
          MALICIOUS_ID,
          VALID_VERSION
        )
      );
      await expectRejected(
        service.getSclDocumentVersion(
          element,
          VALID_TYPE,
          VALID_ID,
          MALICIOUS_VERSION
        )
      );
      await expectRejected(
        service.getSclDocumentVersion(element, VALID_TYPE, '', VALID_VERSION)
      );
      expect(WebSocketStub.called).to.be.false;
      expect(fetchStub.called).to.be.false;
    });

    it('rejects a malicious type in addSclDocument without opening a websocket', async () => {
      const service = CompasSclDataService();
      const element = document.createElement('div');
      const doc = new DOMParser().parseFromString('<SCL/>', 'application/xml');
      await expectRejected(
        service.addSclDocument(element, MALICIOUS_TYPE, {
          sclName: 'test',
          comment: null,
          doc,
        })
      );
      expect(WebSocketStub.called).to.be.false;
      expect(fetchStub.called).to.be.false;
    });

    it('rejects malicious or empty input in updateSclDocument without opening a websocket', async () => {
      const service = CompasSclDataService();
      const element = document.createElement('div');
      const doc = new DOMParser().parseFromString('<SCL/>', 'application/xml');
      await expectRejected(
        service.updateSclDocument(element, MALICIOUS_TYPE, VALID_ID, {
          changeSet: 'MINOR' as any,
          comment: null,
          doc,
        })
      );
      await expectRejected(
        service.updateSclDocument(element, VALID_TYPE, MALICIOUS_ID, {
          changeSet: 'MINOR' as any,
          comment: null,
          doc,
        })
      );
      await expectRejected(
        service.updateSclDocument(element, VALID_TYPE, '', {
          changeSet: 'MINOR' as any,
          comment: null,
          doc,
        })
      );
      expect(WebSocketStub.called).to.be.false;
      expect(fetchStub.called).to.be.false;
    });
  });

  describe('sends correctly built requests for valid input', () => {
    it('builds the expected URL in listScls', async () => {
      const service = CompasSclDataService();
      await service.listScls(VALID_TYPE).catch(() => undefined);

      const calledUrl = fetchStub.firstCall.args[0] as string;
      expect(calledUrl).to.equal(
        `/compas-scl-data-service/scl/v1/${VALID_TYPE}/list`
      );
    });

    it('builds the expected URL in listSclVersions', async () => {
      const service = CompasSclDataService();
      await service
        .listSclVersions(VALID_TYPE, VALID_ID)
        .catch(() => undefined);

      const calledUrl = fetchStub.firstCall.args[0] as string;
      expect(calledUrl).to.equal(
        `/compas-scl-data-service/scl/v1/${VALID_TYPE}/${VALID_ID}/versions`
      );
    });

    it('builds the expected URL in getSclDocument', async () => {
      const service = CompasSclDataService();
      const element = document.createElement('div');
      await service
        .getSclDocument(element, VALID_TYPE, VALID_ID)
        .catch(() => undefined);

      const calledUrl = fetchStub.firstCall.args[0] as string;
      expect(calledUrl).to.equal(
        `/compas-scl-data-service/scl/v1/${VALID_TYPE}/${VALID_ID}`
      );
    });

    it('builds the expected URL in getSclDocumentVersion', async () => {
      const service = CompasSclDataService();
      const element = document.createElement('div');
      await service
        .getSclDocumentVersion(element, VALID_TYPE, VALID_ID, VALID_VERSION)
        .catch(() => undefined);

      const calledUrl = fetchStub.firstCall.args[0] as string;
      expect(calledUrl).to.equal(
        `/compas-scl-data-service/scl/v1/${VALID_TYPE}/${VALID_ID}/${VALID_VERSION}`
      );
    });

    it('builds the expected URL in addSclDocument', async () => {
      const service = CompasSclDataService();
      const element = document.createElement('div');
      const doc = new DOMParser().parseFromString('<SCL/>', 'application/xml');
      await service
        .addSclDocument(element, VALID_TYPE, {
          sclName: 'test',
          comment: null,
          doc,
        })
        .catch(() => undefined);

      const calledUrl = fetchStub.firstCall.args[0] as string;
      expect(calledUrl).to.equal(
        `/compas-scl-data-service/scl/v1/${VALID_TYPE}`
      );
    });

    it('builds the expected URL in updateSclDocument', async () => {
      const service = CompasSclDataService();
      const element = document.createElement('div');
      const doc = new DOMParser().parseFromString('<SCL/>', 'application/xml');
      await service
        .updateSclDocument(element, VALID_TYPE, VALID_ID, {
          changeSet: 'MINOR' as any,
          comment: null,
          doc,
        })
        .catch(() => undefined);

      const calledUrl = fetchStub.firstCall.args[0] as string;
      expect(calledUrl).to.equal(
        `/compas-scl-data-service/scl/v1/${VALID_TYPE}/${VALID_ID}`
      );
    });
  });
});
