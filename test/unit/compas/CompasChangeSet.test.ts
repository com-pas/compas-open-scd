import { fixture, html, expect } from '@open-wc/testing';

import "../../../src/compas/CompasChangeSet.js";
import {ChangeSet, CompasChangeSetRadiogroup} from "../../../src/compas/CompasChangeSet.js";
import {ListItemBase} from "@material/mwc-list/mwc-list-item-base";

describe('compas-changeset-radiogroup', () => {
  let element: CompasChangeSetRadiogroup;
  beforeEach(async () => {
    element = await fixture(
        html`<compas-changeset-radiogroup></compas-changeset-radiogroup>`
    );
  });

  it('has 3 item entries', () => {
    expect(element.shadowRoot!.querySelectorAll('mwc-list > mwc-radio-list-item'))
      .to.have.length(3)
  });

  it('will be invalid when no selection made', () => {
    expect(element.valid())
      .to.be.false
  });

  it('will be valid when a selection is made', () => {
    const item = <ListItemBase>element.shadowRoot!.querySelectorAll('mwc-list > mwc-radio-list-item').item(0);
    item.click();

    expect(element.valid())
      .to.be.true
  });

  it('will not have a selected value', () => {
    expect(element.getSelectedValue())
      .to.be.null
  });

  it('will have a selected value of Major', () => {
    const item = <ListItemBase>element.shadowRoot!.querySelectorAll('mwc-list > mwc-radio-list-item').item(0);
    item.click();

    expect(element.getSelectedValue())
      .to.be.equal(ChangeSet.MAJOR)
  });

  it('looks like the latest snapshot', () => {
    expect(element).shadowDom
      .to.equalSnapshot();
  });
});
