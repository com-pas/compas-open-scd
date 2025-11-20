import { expect, fixture, html } from '@open-wc/testing';
import '@compas-oscd/open-scd/addons/Wizards.js';
import { OscdWizards } from '@compas-oscd/open-scd/addons/Wizards';

import { editLNWizard } from '../../../src/wizards/ln.js';
import { WizardInputElement } from '@compas-oscd/open-scd/foundation.js';
import { fetchDoc, setWizardTextFieldValue } from './test-support.js';
import { WizardTextField } from '@compas-oscd/open-scd/wizard-textfield.js';

describe('ln wizards', () => {
  let doc: XMLDocument;
  let element: OscdWizards;
  let inputs: WizardInputElement[];

  const values = {
    lnType: 'LN-type',
    desc: 'LN-description',
    prefix: 'LN-prefix',
    lnClass: 'LN-class',
    inst: '1',
  };
  const readonlyFields = ['lnType', 'lnClass'];

  const ln = <Element>(
    new DOMParser().parseFromString(
      `<LN desc="${values.desc}" lnType="${values.lnType}" inst="${values.inst}" lnClass="${values.lnClass}" prefix="${values.prefix}"></LN>`,
      'application/xml'
    ).documentElement
  );

  beforeEach(async () => {
    doc = await fetchDoc('/test/testfiles/wizards/ied.scd');

    element = await fixture(
      html`<oscd-wizards .host=${document}></oscd-wizards>`
    );
    const wizard = editLNWizard(ln);

    element.workflow.push(() => wizard);
    await element.requestUpdate();
    inputs = Array.from(element.wizardUI.inputs);
  });

  Object.entries(values).forEach(([key, value]) => {
    it(`contains a wizard-textfield with a non-empty "${key}" value`, async () => {
      expect(
        (<WizardInputElement[]>inputs).find(
          textField => textField.label === key
        )?.value
      ).to.equal(value);
    });
  });

  readonlyFields.forEach(field => {
    it(`is a readonly field ${field}`, async () => {
      const input = (<WizardInputElement[]>inputs).find(
        textField => textField.label === field
      ) as WizardTextField;

      expect(input.readOnly).to.be.true;
    });
  });
});
