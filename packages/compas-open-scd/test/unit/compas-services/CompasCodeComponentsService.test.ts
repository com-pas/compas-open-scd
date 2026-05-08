import { expect } from '@open-wc/testing';
import sinon, { SinonStub } from 'sinon';

import {
  loadCodeComponentsJson,
  resetCodeComponentsCache,
  getEditionComponents,
} from '../../../src/compas-services/CompasCodeComponentsService.js';
import type {
  CodeComponentsJson,
  IEC61850Edition,
} from '../../../src/compas-services/CompasCodeComponentsService.js';

const VALID_JSON: CodeComponentsJson = {
  IEC61850_code_components: {
    Edition_2: {
      '7-2': { NSD: 'IEC_61850-7-2_Ed2.nsd', NSDOC: 'IEC_61850-7-2_Ed2.nsdoc' },
      '7-3': { NSD: 'IEC_61850-7-3_Ed2.nsd', NSDOC: 'IEC_61850-7-3_Ed2.nsdoc' },
    },
    Edition_2_1: {
      '7-2': {
        NSD: 'IEC_61850-7-2_Ed2.1.nsd',
        NSDOC: 'IEC_61850-7-2_Ed2.1.nsdoc',
      },
    },
  },
};

describe('loadCodeComponentsJson', () => {
  let component: Element;
  let fetchStub: SinonStub;

  beforeEach(() => {
    component = document.createElement('div');
    fetchStub = sinon.stub(globalThis, 'fetch');
    resetCodeComponentsCache();
  });

  afterEach(() => {
    sinon.restore();
    resetCodeComponentsCache();
  });

  describe('on success', () => {
    beforeEach(() => {
      fetchStub.callsFake(() =>
        Promise.resolve(
          new Response(JSON.stringify(VALID_JSON), { status: 200 })
        )
      );
    });

    it('returns the parsed JSON', async () => {
      const result = await loadCodeComponentsJson(component);

      expect(result).to.deep.equal(VALID_JSON);
    });

    it('does not dispatch any log events', async () => {
      const logEvents: CustomEvent[] = [];
      component.addEventListener('log', e => logEvents.push(e as CustomEvent));

      await loadCodeComponentsJson(component);

      expect(logEvents).to.have.length(0);
    });

    it('fetches from the correct path', async () => {
      await loadCodeComponentsJson(component);

      expect(fetchStub).to.have.been.calledWith(
        'public/xml/IEC61850_code_components.json'
      );
    });

    it('only fetches once for concurrent calls', async () => {
      await Promise.all([
        loadCodeComponentsJson(component),
        loadCodeComponentsJson(component),
        loadCodeComponentsJson(component),
      ]);

      expect(fetchStub).to.have.been.calledOnce;
    });

    it('only fetches once for sequential calls', async () => {
      await loadCodeComponentsJson(component);
      await loadCodeComponentsJson(component);

      expect(fetchStub).to.have.been.calledOnce;
    });
  });

  describe('when fetch returns a non-ok response', () => {
    beforeEach(() => {
      fetchStub.callsFake(() =>
        Promise.resolve(new Response(null, { status: 404 }))
      );
    });

    it('returns null', async () => {
      const result = await loadCodeComponentsJson(component);

      expect(result).to.be.null;
    });

    it('dispatches an error log event', async () => {
      const logEvents: CustomEvent[] = [];
      component.addEventListener('log', e => logEvents.push(e as CustomEvent));

      await loadCodeComponentsJson(component);

      expect(logEvents).to.have.length(1);
      expect(logEvents[0].detail.kind).to.equal('error');
    });

    it('clears the cache so the next call retries', async () => {
      await loadCodeComponentsJson(component);
      fetchStub.callsFake(() =>
        Promise.resolve(
          new Response(JSON.stringify(VALID_JSON), { status: 200 })
        )
      );

      const result = await loadCodeComponentsJson(component);

      expect(result).to.deep.equal(VALID_JSON);
      expect(fetchStub).to.have.been.calledTwice;
    });
  });

  describe('when fetch throws a network error', () => {
    beforeEach(() => {
      fetchStub.callsFake(() => Promise.reject(new TypeError('Network error')));
    });

    it('returns null', async () => {
      const result = await loadCodeComponentsJson(component);

      expect(result).to.be.null;
    });

    it('dispatches an error log event', async () => {
      const logEvents: CustomEvent[] = [];
      component.addEventListener('log', e => logEvents.push(e as CustomEvent));

      await loadCodeComponentsJson(component);

      expect(logEvents).to.have.length(1);
      expect(logEvents[0].detail.kind).to.equal('error');
    });

    it('clears the cache so the next call retries', async () => {
      await loadCodeComponentsJson(component);
      fetchStub.callsFake(() =>
        Promise.resolve(
          new Response(JSON.stringify(VALID_JSON), { status: 200 })
        )
      );

      const result = await loadCodeComponentsJson(component);

      expect(result).to.deep.equal(VALID_JSON);
      expect(fetchStub).to.have.been.calledTwice;
    });
  });
});

describe('getEditionComponents', () => {
  it('returns the components for an existing edition', () => {
    const result = getEditionComponents(VALID_JSON, 'Edition_2');

    expect(result).to.deep.equal(
      VALID_JSON.IEC61850_code_components['Edition_2']
    );
  });

  it('returns null when the edition is not present', () => {
    const result = getEditionComponents(VALID_JSON, 'Edition_1');

    expect(result).to.be.null;
  });

  it('returns null when the edition entry is an empty object', () => {
    const json: CodeComponentsJson = {
      IEC61850_code_components: { Edition_2: {} },
    };

    const result = getEditionComponents(json, 'Edition_2');

    expect(result).to.be.null;
  });

  it('returns the components for each valid edition', () => {
    const editions: IEC61850Edition[] = ['Edition_2', 'Edition_2_1'];

    for (const edition of editions) {
      const result = getEditionComponents(VALID_JSON, edition);
      expect(result).to.not.be.null;
    }
  });
});
