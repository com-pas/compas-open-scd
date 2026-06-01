import { expect } from '@open-wc/testing';
import sinon, { SinonStub } from 'sinon';

import { loadNsdocFilesForEdition } from '../../../src/compas/CompasNsdoc.js';
import type {
  EditionComponents,
  IEC61850Edition,
} from '../../../src/compas-services/CompasCodeComponentsService.js';

describe('loadNsdocFilesForEdition', () => {
  let component: Element;
  let fetchStub: SinonStub;

  const EDITION: IEC61850Edition = 'Edition_2';

  const FULL_EDITION_COMPONENTS: EditionComponents = {
    '7-2': { NSD: 'IEC_61850-7-2_Ed2.nsd', NSDOC: 'IEC_61850-7-2_Ed2.nsdoc' },
    '7-3': { NSD: 'IEC_61850-7-3_Ed2.nsd', NSDOC: 'IEC_61850-7-3_Ed2.nsdoc' },
    '7-4': { NSD: 'IEC_61850-7-4_Ed2.nsd', NSDOC: 'IEC_61850-7-4_Ed2.nsdoc' },
    '8-1': { NSD: 'IEC_61850-8-1_Ed2.nsd', NSDOC: 'IEC_61850-8-1_Ed2.nsdoc' },
  };

  beforeEach(() => {
    component = document.createElement('div');
    fetchStub = sinon.stub(globalThis, 'fetch');
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('when editionComponents is null', () => {
    it('dispatches a single error log event', async () => {
      const logEvents: CustomEvent[] = [];
      component.addEventListener('log', e => logEvents.push(e as CustomEvent));

      await loadNsdocFilesForEdition(component, EDITION, null);

      expect(logEvents).to.have.length(1);
      expect(logEvents[0].detail.kind).to.equal('error');
    });

    it('does not call fetch', async () => {
      await loadNsdocFilesForEdition(component, EDITION, null);

      expect(fetchStub).not.to.have.been.called;
    });
  });

  describe('when fetch succeeds for all parts', () => {
    beforeEach(() => {
      fetchStub.callsFake(() =>
        Promise.resolve(new Response('nsdoc content', { status: 200 }))
      );
    });

    it('dispatches a load-nsdoc event for each of the 4 parts', async () => {
      const loadEvents: CustomEvent[] = [];
      component.addEventListener('load-nsdoc', e =>
        loadEvents.push(e as CustomEvent)
      );

      await loadNsdocFilesForEdition(
        component,
        EDITION,
        FULL_EDITION_COMPONENTS
      );

      expect(loadEvents).to.have.length(4);
    });

    it('does not dispatch any log events', async () => {
      const logEvents: CustomEvent[] = [];
      component.addEventListener('log', e => logEvents.push(e as CustomEvent));

      await loadNsdocFilesForEdition(
        component,
        EDITION,
        FULL_EDITION_COMPONENTS
      );

      expect(logEvents).to.have.length(0);
    });

    it('fetches from the correct path for each part', async () => {
      await loadNsdocFilesForEdition(
        component,
        EDITION,
        FULL_EDITION_COMPONENTS
      );

      const fetchedUrls = fetchStub.args.map(([url]: [string]) => url);
      expect(fetchedUrls).to.include('/public/nsdoc/IEC_61850-7-2_Ed2.nsdoc');
      expect(fetchedUrls).to.include('/public/nsdoc/IEC_61850-7-3_Ed2.nsdoc');
      expect(fetchedUrls).to.include('/public/nsdoc/IEC_61850-7-4_Ed2.nsdoc');
      expect(fetchedUrls).to.include('/public/nsdoc/IEC_61850-8-1_Ed2.nsdoc');
    });

    it('includes the filename and content in the load-nsdoc event detail', async () => {
      fetchStub.callsFake(() =>
        Promise.resolve(new Response('my nsdoc content', { status: 200 }))
      );
      const loadEvents: CustomEvent[] = [];
      component.addEventListener('load-nsdoc', e =>
        loadEvents.push(e as CustomEvent)
      );

      await loadNsdocFilesForEdition(component, EDITION, {
        '7-2': { NSD: 'file-7-2.nsd', NSDOC: 'file-7-2.nsdoc' },
        '7-3': { NSD: 'file-7-3.nsd', NSDOC: 'file-7-3.nsdoc' },
        '7-4': { NSD: 'file-7-4.nsd', NSDOC: 'file-7-4.nsdoc' },
        '8-1': { NSD: 'file-8-1.nsd', NSDOC: 'file-8-1.nsdoc' },
      });

      const fileNames = loadEvents.map(e => e.detail.filename);
      expect(fileNames).to.include.members([
        'file-7-2.nsdoc',
        'file-7-3.nsdoc',
        'file-7-4.nsdoc',
        'file-8-1.nsdoc',
      ]);
    });
  });

  describe('when a part has no NSDOC entry', () => {
    it('dispatches a warning log event for the missing part', async () => {
      fetchStub.callsFake(() =>
        Promise.resolve(new Response('content', { status: 200 }))
      );
      const logEvents: CustomEvent[] = [];
      component.addEventListener('log', e => logEvents.push(e as CustomEvent));

      const partialComponents: EditionComponents = {
        ...FULL_EDITION_COMPONENTS,
        '7-4': { NSD: 'IEC_61850-7-4_Ed2.nsd', NSDOC: '' }, // empty NSDOC — falsy
      };

      await loadNsdocFilesForEdition(component, EDITION, partialComponents);

      const warnings = logEvents.filter(e => e.detail.kind === 'warning');
      expect(warnings).to.have.length(1);
    });

    it('still dispatches load-nsdoc events for parts that do have NSDOC entries', async () => {
      fetchStub.callsFake(() =>
        Promise.resolve(new Response('content', { status: 200 }))
      );
      const loadEvents: CustomEvent[] = [];
      component.addEventListener('load-nsdoc', e =>
        loadEvents.push(e as CustomEvent)
      );

      const partialComponents: EditionComponents = {
        '7-2': { NSD: 'a.nsd', NSDOC: 'a.nsdoc' },
        '7-3': { NSD: 'b.nsd', NSDOC: 'b.nsdoc' },
        // '7-4' and '8-1' are missing entirely
      };

      await loadNsdocFilesForEdition(component, EDITION, partialComponents);

      expect(loadEvents).to.have.length(2);
    });
  });

  describe('when fetch returns a non-ok response', () => {
    it('dispatches a warning log event', async () => {
      fetchStub.resolves(new Response(null, { status: 404 }));
      const logEvents: CustomEvent[] = [];
      component.addEventListener('log', e => logEvents.push(e as CustomEvent));

      await loadNsdocFilesForEdition(
        component,
        EDITION,
        FULL_EDITION_COMPONENTS
      );

      const warnings = logEvents.filter(e => e.detail.kind === 'warning');
      expect(warnings).to.have.length(4);
    });

    it('does not dispatch any load-nsdoc events', async () => {
      fetchStub.resolves(new Response(null, { status: 500 }));
      const loadEvents: CustomEvent[] = [];
      component.addEventListener('load-nsdoc', e =>
        loadEvents.push(e as CustomEvent)
      );

      await loadNsdocFilesForEdition(
        component,
        EDITION,
        FULL_EDITION_COMPONENTS
      );

      expect(loadEvents).to.have.length(0);
    });
  });

  describe('when fetch throws a network error', () => {
    it('dispatches a warning log event', async () => {
      fetchStub.rejects(new TypeError('Network error'));
      const logEvents: CustomEvent[] = [];
      component.addEventListener('log', e => logEvents.push(e as CustomEvent));

      await loadNsdocFilesForEdition(
        component,
        EDITION,
        FULL_EDITION_COMPONENTS
      );

      const warnings = logEvents.filter(e => e.detail.kind === 'warning');
      expect(warnings).to.have.length(4);
    });

    it('does not dispatch any load-nsdoc events', async () => {
      fetchStub.rejects(new TypeError('Network error'));
      const loadEvents: CustomEvent[] = [];
      component.addEventListener('load-nsdoc', e =>
        loadEvents.push(e as CustomEvent)
      );

      await loadNsdocFilesForEdition(
        component,
        EDITION,
        FULL_EDITION_COMPONENTS
      );

      expect(loadEvents).to.have.length(0);
    });
  });
});
