import { expect, fixture, html } from '@open-wc/testing';

import '@openscd/open-scd/test/mock-open-scd.js';
import { OscdWizards } from '@compas-oscd/open-scd';

import { editTerminalWizard } from '../../../src/wizards/terminal.js';

describe('Wizards for SCL element Terminal', () => {
  let doc: XMLDocument;
  let element: OscdWizards;

  beforeEach(async () => {
    element = await fixture(
      html`<oscd-wizards .host=${document}></oscd-wizards>`
    );
    doc = await fetch('/test/testfiles/valid2007B4withSubstationXY.scd')
      .then(response => response.text())
      .then(str => new DOMParser().parseFromString(str, 'application/xml'));

    const wizard = editTerminalWizard(doc.querySelector('Terminal')!);
    element.workflow.push(() => wizard);
    await element.requestUpdate();
  });
  it('looks like the latest snapshot', async () => {
    await expect(element.wizardUI.dialog).dom.to.equalSnapshot();
  });
});
