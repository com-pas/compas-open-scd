import { expect } from '@open-wc/testing';
import sinon, { SinonStub } from 'sinon';

import { loadNsdFilesForEdition } from '../../../src/compas/CompasNsd.js';
import type {
  EditionComponents,
  IEC61850Edition,
} from '../../../src/compas-services/CompasCodeComponentsService.js';

describe('loadNsdFilesForEdition', () => {
  let component: Element;
  let fetchStub: SinonStub;

  const EDITION: IEC61850Edition = 'Edition_2';

  const FULL_EDITION_COMPONENTS: EditionComponents = {
    '7-2': { NSD: 'IEC_61850-7-2_Ed2.nsd', NSDOC: 'IEC_61850-7-2_Ed2.nsdoc' },
    '7-3': { NSD: 'IEC_61850-7-3_Ed2.nsd', NSDOC: 'IEC_61850-7-3_Ed2.nsdoc' },
    '7-4': { NSD: 'IEC_61850-7-4_Ed2.nsd', NSDOC: 'IEC_61850-7-4_Ed2.nsdoc' },
    '8-1': { NSD: 'IEC_61850-8-1_Ed2.nsd', NSDOC: 'IEC_61850-8-1_Ed2.nsdoc' },
  };

  const FALLBACK_URLS = [
    'public/xml/IEC_61850-7-2_2007B5.nsd',
    'public/xml/IEC_61850-7-3_2007B5.nsd',
    'public/xml/IEC_61850-7-4_2007B5.nsd',
    'public/xml/IEC_61850-8-1_2003A2.nsd',
  ];

  function collectLogEvents(el: Element): CustomEvent[] {
    const events: CustomEvent[] = [];
    el.addEventListener('log', e => events.push(e as CustomEvent));
    return events;
  }

  function xmlResponse(): Response {
    return new Response('<NSDoc/>', {
      status: 200,
      headers: { 'Content-Type': 'application/xml' },
    });
  }

  beforeEach(() => {
    component = document.createElement('div');
    fetchStub = sinon.stub(globalThis, 'fetch');
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('when editionComponents is null (fallback mode)', () => {
    beforeEach(() => {
      fetchStub.callsFake(() => Promise.resolve(xmlResponse()));
    });

    it('fetches the four fallback NSD filenames', async () => {
      await loadNsdFilesForEdition(component, EDITION, null);

      const fetchedUrls = fetchStub.args.map(([url]: [string]) => url);
      expect(fetchedUrls).to.have.members(FALLBACK_URLS);
    });

    it('does not dispatch any log events', async () => {
      const logEvents = collectLogEvents(component);

      await loadNsdFilesForEdition(component, EDITION, null);

      expect(logEvents).to.have.length(0);
    });

    it('returns all four NSD documents', async () => {
      const result = await loadNsdFilesForEdition(component, EDITION, null);

      expect(result.nsd72).to.be.instanceOf(Document);
      expect(result.nsd73).to.be.instanceOf(Document);
      expect(result.nsd74).to.be.instanceOf(Document);
      expect(result.nsd81).to.be.instanceOf(Document);
    });
  });

  describe('when editionComponents is provided for all parts', () => {
    beforeEach(() => {
      fetchStub.callsFake(() => Promise.resolve(xmlResponse()));
    });

    it('fetches the edition-specific NSD filenames', async () => {
      await loadNsdFilesForEdition(component, EDITION, FULL_EDITION_COMPONENTS);

      const fetchedUrls = fetchStub.args.map(([url]: [string]) => url);
      expect(fetchedUrls).to.include('public/xml/IEC_61850-7-2_Ed2.nsd');
      expect(fetchedUrls).to.include('public/xml/IEC_61850-7-3_Ed2.nsd');
      expect(fetchedUrls).to.include('public/xml/IEC_61850-7-4_Ed2.nsd');
      expect(fetchedUrls).to.include('public/xml/IEC_61850-8-1_Ed2.nsd');
    });

    it('does not dispatch any log events', async () => {
      const logEvents = collectLogEvents(component);

      await loadNsdFilesForEdition(component, EDITION, FULL_EDITION_COMPONENTS);

      expect(logEvents).to.have.length(0);
    });

    it('returns all four NSD documents', async () => {
      const result = await loadNsdFilesForEdition(
        component,
        EDITION,
        FULL_EDITION_COMPONENTS
      );

      expect(result.nsd72).to.be.instanceOf(Document);
      expect(result.nsd73).to.be.instanceOf(Document);
      expect(result.nsd74).to.be.instanceOf(Document);
      expect(result.nsd81).to.be.instanceOf(Document);
    });
  });

  describe('when editionComponents is provided but a part entry is missing', () => {
    it('dispatches a warning for each missing part entry', async () => {
      fetchStub.callsFake(() => Promise.resolve(xmlResponse()));
      const logEvents = collectLogEvents(component);

      const partialComponents: EditionComponents = {
        '7-2': {
          NSD: 'IEC_61850-7-2_Ed2.nsd',
          NSDOC: 'IEC_61850-7-2_Ed2.nsdoc',
        },
        '7-3': {
          NSD: 'IEC_61850-7-3_Ed2.nsd',
          NSDOC: 'IEC_61850-7-3_Ed2.nsdoc',
        },
        // '7-4' and '8-1' are missing
      };

      await loadNsdFilesForEdition(component, EDITION, partialComponents);

      const warnings = logEvents.filter(e => e.detail.kind === 'warning');
      expect(warnings).to.have.length(2);
    });

    it('still fetches the fallback filenames for the missing parts', async () => {
      fetchStub.callsFake(() => Promise.resolve(xmlResponse()));

      const partialComponents: EditionComponents = {
        '7-2': { NSD: 'IEC_61850-7-2_Ed2.nsd', NSDOC: '' },
        // rest missing
      };

      await loadNsdFilesForEdition(component, EDITION, partialComponents);

      const fetchedUrls = fetchStub.args.map(([url]: [string]) => url);
      expect(fetchedUrls).to.include('public/xml/IEC_61850-7-3_2007B5.nsd');
      expect(fetchedUrls).to.include('public/xml/IEC_61850-7-4_2007B5.nsd');
      expect(fetchedUrls).to.include('public/xml/IEC_61850-8-1_2003A2.nsd');
    });
  });

  describe('when fetch returns a non-ok response', () => {
    beforeEach(() => {
      fetchStub.callsFake(() =>
        Promise.resolve(new Response(null, { status: 404 }))
      );
    });

    it('dispatches a warning log event for each failing part', async () => {
      const logEvents = collectLogEvents(component);

      await loadNsdFilesForEdition(component, EDITION, FULL_EDITION_COMPONENTS);

      const warnings = logEvents.filter(e => e.detail.kind === 'warning');
      expect(warnings).to.have.length(4);
    });

    it('returns an empty NsdDocuments object', async () => {
      const result = await loadNsdFilesForEdition(
        component,
        EDITION,
        FULL_EDITION_COMPONENTS
      );

      expect(result).to.deep.equal({});
    });
  });

  describe('when fetch throws a network error', () => {
    beforeEach(() => {
      fetchStub.callsFake(() => Promise.reject(new TypeError('Network error')));
    });

    it('dispatches a warning log event for each failing part', async () => {
      const logEvents = collectLogEvents(component);

      await loadNsdFilesForEdition(component, EDITION, FULL_EDITION_COMPONENTS);

      const warnings = logEvents.filter(e => e.detail.kind === 'warning');
      expect(warnings).to.have.length(4);
    });

    it('returns an empty NsdDocuments object', async () => {
      const result = await loadNsdFilesForEdition(
        component,
        EDITION,
        FULL_EDITION_COMPONENTS
      );

      expect(result).to.deep.equal({});
    });
  });

  describe('when only some parts fail to fetch', () => {
    it('returns only the successfully loaded NSD documents', async () => {
      fetchStub
        .onFirstCall()
        .callsFake(() => Promise.resolve(xmlResponse()))
        .onSecondCall()
        .callsFake(() => Promise.resolve(new Response(null, { status: 500 })))
        .onThirdCall()
        .callsFake(() => Promise.resolve(xmlResponse()))
        .onCall(3)
        .callsFake(() => Promise.resolve(new Response(null, { status: 500 })));

      const result = await loadNsdFilesForEdition(
        component,
        EDITION,
        FULL_EDITION_COMPONENTS
      );

      expect(result.nsd72).to.be.instanceOf(Document);
      expect(result.nsd73).to.be.undefined;
      expect(result.nsd74).to.be.instanceOf(Document);
      expect(result.nsd81).to.be.undefined;
    });
  });
});
