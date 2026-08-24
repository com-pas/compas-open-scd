import { expect } from '@open-wc/testing';
import sinon from 'sinon';

import {
  assertValidSclId,
  buildDocName,
  compareVersions,
  getTypeFromDocName,
  stripExtensionFromName,
  updateDocumentInOpenSCD,
} from '../../../src/compas/foundation.js';

describe('compas-foundation', () => {
  describe('getTypeFromDocName', () => {
    it('when retrieve type from name, but name has no extension a exception is thrown', () => {
      const name = 'just-some-station';
      expect(() => getTypeFromDocName(name)).to.throw('[compas.error.type]');
    });

    it('when retrieve type from name and name has a extension, the extension will be the type', () => {
      const name = 'just-some-station';
      const extension = 'scd';
      expect(getTypeFromDocName(name + '.' + extension)).to.be.equal(
        extension.toUpperCase()
      );
    });
  });

  describe('stripExtensionFromName', () => {
    it('when name is passed without extenions the same name is returned', () => {
      const name = 'just-some-station';
      expect(stripExtensionFromName(name)).to.be.equal(name);
    });

    it('when name is passed with extenions the stripped name is returned', () => {
      const name = 'just-some-station';
      const extension = 'scd';
      expect(stripExtensionFromName(name + '.' + extension)).to.be.equal(name);
    });

    it('when name is passed with length 3 the same name is returned', () => {
      const name = 'sml';
      expect(stripExtensionFromName(name)).to.be.equal(name);
    });
  });

  describe('buildDocName', () => {
    it('when there are no CoMPAS Private Elements', async () => {
      const doc = await fetch(
        '/test/testfiles/compas/compas-scl-private-missing-private.scd'
      )
        .then(response => response.text())
        .then(str => new DOMParser().parseFromString(str, 'application/xml'));

      expect(buildDocName(doc.documentElement)).to.be.equal(
        'id-value-3.0.0.scd'
      );
    });

    it('when there are CoMPAS Private Elements', async () => {
      const doc = await fetch(
        '/test/testfiles/compas/compas-scl-private-update-existing.scd'
      )
        .then(response => response.text())
        .then(str => new DOMParser().parseFromString(str, 'application/xml'));

      expect(buildDocName(doc.documentElement)).to.be.equal(
        'existing-3.0.0.cid'
      );
    });
  });

  describe('assertValidSclId', () => {
    it('accepts an empty id (no id yet, e.g. a brand new document)', () => {
      expect(() => assertValidSclId('')).to.not.throw();
    });

    it('accepts a genuine CoMPAS UUID id', () => {
      expect(() =>
        assertValidSclId('380b5e70-4753-4b59-b5b4-d51ceb26a30c')
      ).to.not.throw();
    });

    it('accepts other alphanumeric/hyphen/underscore ids used by test fixtures', () => {
      expect(() => assertValidSclId('id-value')).to.not.throw();
    });

    it('rejects an id containing a path traversal sequence', () => {
      expect(() => assertValidSclId('../../etc/passwd')).to.throw(
        'Invalid SCL id'
      );
    });

    it('rejects an id containing a raw or encoded slash', () => {
      expect(() => assertValidSclId('foo/bar')).to.throw('Invalid SCL id');
      expect(() => assertValidSclId('foo%2Fbar')).to.throw('Invalid SCL id');
    });

    it('rejects an id containing XML-significant characters', () => {
      expect(() => assertValidSclId('<sds:Id>evil</sds:Id>')).to.throw(
        'Invalid SCL id'
      );
    });

    it('rejects an id longer than 64 characters', () => {
      expect(() => assertValidSclId('a'.repeat(65))).to.throw('Invalid SCL id');
    });
  });

  describe('updateDocumentInOpenSCD', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('uses the Header/@id as docId when it matches the expected SCL id format', () => {
      const doc = new DOMParser().parseFromString(
        '<SCL xmlns="http://www.iec61850.com/2003/SCL"><Header id="380b5e70-4753-4b59-b5b4-d51ceb26a30c" version="1.0.0"/></SCL>',
        'application/xml'
      );
      const element = document.createElement('div');
      const dispatchSpy = sinon.spy(element, 'dispatchEvent');

      updateDocumentInOpenSCD(element, doc, 'test.scd');

      const openDocEvent = dispatchSpy
        .getCalls()
        .map(call => call.args[0])
        .find(event => (event as CustomEvent).type === 'open-doc') as
        | CustomEvent
        | undefined;
      expect(openDocEvent?.detail.docId).to.equal(
        '380b5e70-4753-4b59-b5b4-d51ceb26a30c'
      );
    });

    it('opens a document with no Header/@id (brand new, unsaved document) as-is', () => {
      const doc = new DOMParser().parseFromString(
        '<SCL xmlns="http://www.iec61850.com/2003/SCL"><Header version="1.0.0"/></SCL>',
        'application/xml'
      );
      const element = document.createElement('div');
      const dispatchSpy = sinon.spy(element, 'dispatchEvent');

      updateDocumentInOpenSCD(element, doc, 'test.scd');

      const openDocEvent = dispatchSpy
        .getCalls()
        .map(call => call.args[0])
        .find(event => (event as CustomEvent).type === 'open-doc') as
        | CustomEvent
        | undefined;
      expect(openDocEvent?.detail.docId).to.equal('');
    });

    it('aborts and logs an error for a malicious Header/@id instead of opening the document', () => {
      const doc = new DOMParser().parseFromString(
        '<SCL xmlns="http://www.iec61850.com/2003/SCL"><Header id="../../etc/passwd" version="1.0.0"/></SCL>',
        'application/xml'
      );
      const element = document.createElement('div');
      const dispatchSpy = sinon.spy(element, 'dispatchEvent');

      updateDocumentInOpenSCD(element, doc, 'test.scd');

      const events = dispatchSpy.getCalls().map(call => call.args[0]);

      // Neither the reset nor the open-doc event may fire: a document whose
      // id can't be trusted must not be opened as if it were new or genuine.
      expect(events.find(event => (event as CustomEvent).type === 'open-doc'))
        .to.be.undefined;
      expect(
        events.find(
          event =>
            (event as CustomEvent).type === 'log' &&
            (event as CustomEvent).detail.kind === 'reset'
        )
      ).to.be.undefined;

      const errorLog = events.find(
        event =>
          (event as CustomEvent).type === 'log' &&
          (event as CustomEvent).detail.kind === 'error'
      );
      expect(errorLog).to.not.be.undefined;
    });
  });

  describe('compareVersions', () => {
    it('when comparing non version strings, nothing is changed', () => {
      expect(compareVersions('bbb', 'aaa')).to.be.equal(0);
      expect(compareVersions('aaa', 'bbb')).to.be.equal(0);
      expect(compareVersions('a.a.a', 'b.b.b')).to.be.equal(0);
    });

    it('when comparing same versions then 0 returned', () => {
      expect(compareVersions('1.2.3', '1.2.3')).to.be.equal(0);
      expect(compareVersions('10.2.3', '10.2.3')).to.be.equal(0);
    });

    it('when comparing two versions with different major digits then the major versions are leading', () => {
      expect(compareVersions('1.3.0', '2.0.0')).to.be.equal(-1);
      expect(compareVersions('1.3.0', '10.0.0')).to.be.equal(-1);

      expect(compareVersions('2.0.0', '1.3.0')).to.be.equal(1);
      expect(compareVersions('10.0.0', '1.3.0')).to.be.equal(1);
    });

    it('when comparing two versions with different minor digits then the minor versions are leading', () => {
      expect(compareVersions('1.3.0', '1.4.0')).to.be.equal(-1);
      expect(compareVersions('1.3.0', '1.10.0')).to.be.equal(-1);

      expect(compareVersions('1.4.0', '1.3.0')).to.be.equal(1);
      expect(compareVersions('1.10.0', '1.3.0')).to.be.equal(1);
    });

    it('when comparing two versions with different patch digits then the patch versions are leading', () => {
      expect(compareVersions('1.1.3', '1.1.4')).to.be.equal(-1);
      expect(compareVersions('1.1.3', '1.1.10')).to.be.equal(-1);

      expect(compareVersions('1.1.4', '1.1.3')).to.be.equal(1);
      expect(compareVersions('1.1.10', '1.1.3')).to.be.equal(1);
    });
  });
});
