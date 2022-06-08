import { html, TemplateResult } from 'lit-element';
import { get, translate } from 'lit-translate';

import '@material/mwc-list/mwc-list-item';
import '@material/mwc-select';
import '@material/mwc-textarea';

import {
  cloneElement,
  EditorAction,
  getNameAttribute,
  getValue,
  patterns,
  Wizard,
  WizardActor,
  WizardInputElement,
} from '../../../foundation.js';

import '../../../wizard-textfield.js';
import '../../../wizard-select.js';

import {
  getCdcValue,
  getFullPath,
  hasScaleFields,
  hasUnitMultiplierField,
} from '../foundation/foundation.js';
import { getEnumVal } from '../foundation/private';

export function updateValue(
  daiElement: Element,
  addressElement: Element
): WizardActor {
  return (inputs: WizardInputElement[]): EditorAction[] => {
    const doiElement = daiElement.closest('DOI');

    const cdc = getCdcValue(doiElement!) ?? '';
    const ti = addressElement.getAttribute('ti') ?? '';

    const casdu = getValue(inputs.find(i => i.label === 'casdu')!)!;
    const ioa = getValue(inputs.find(i => i.label === 'ioa')!);
    const unitMultiplier = hasUnitMultiplierField(cdc, ti)
      ? getValue(inputs.find(i => i.label === 'unitMultiplier')!)
      : null;
    const scaleMultiplier = hasScaleFields(cdc, ti)
      ? getValue(inputs.find(i => i.label === 'scaleMultiplier')!)
      : null;
    const scaleOffset = hasScaleFields(cdc, ti)
      ? getValue(inputs.find(i => i.label === 'scaleOffset')!)
      : null;

    if (
      casdu === addressElement.getAttribute('casdu') &&
      ioa === addressElement.getAttribute('ioa') &&
      unitMultiplier === addressElement.getAttribute('unitMultiplier') &&
      scaleMultiplier === addressElement.getAttribute('scaleMultiplier') &&
      scaleOffset === addressElement.getAttribute('scaleOffset')
    ) {
      return [];
    }

    const newElement = cloneElement(addressElement, {
      casdu,
      ioa,
      unitMultiplier,
      scaleMultiplier,
      scaleOffset,
    });

    return [
      { old: { element: addressElement! }, new: { element: newElement } },
    ];
  };
}

export function renderDAIWizard(
  daiElement: Element,
  addressElement: Element
): TemplateResult[] {
  const doiElement = daiElement!.closest('DOI');
  const iedElement = doiElement!.closest('IED');

  const cdc = getCdcValue(doiElement!) ?? '';
  const ti = addressElement.getAttribute('ti') ?? '';

  // Add the basic fields to the list.
  const fields: TemplateResult[] = [
    html`<wizard-textfield
      label="IED"
      .maybeValue="${getNameAttribute(iedElement!)}"
      disabled
      readonly
    >
    </wizard-textfield>`,
    html`<mwc-textarea
      label="DOI"
      value="${getFullPath(doiElement!, 'IED')}"
      rows="2"
      cols="40"
      readonly
      disabled
    >
    </mwc-textarea>`,
    html`<wizard-textfield label="cdc" .maybeValue="${cdc}" disabled readonly>
    </wizard-textfield>`,
    html`<mwc-textarea
      label="DAI"
      value="${getFullPath(daiElement!, 'DOI')}"
      rows="2"
      cols="40"
      readonly
      disabled
    >
    </mwc-textarea>`,
    html`<wizard-textfield
      label="casdu"
      .maybeValue="${addressElement.getAttribute('casdu')}"
      helper="${translate('protocol104.wizard.casduHelper')}"
      required
    >
    </wizard-textfield>`,
    html`<wizard-textfield
      label="ioa"
      .maybeValue="${addressElement.getAttribute('ioa')}"
      helper="${translate('protocol104.wizard.ioaHelper')}"
      required
    >
    </wizard-textfield>`,
    html`<wizard-textfield label="ti" .maybeValue=${ti} disabled readonly>
    </wizard-textfield>`,
  ];

  if (hasUnitMultiplierField(cdc, ti)) {
    const allowedMultipliers = [
      'm',
      'k',
      'M',
      'mu',
      'y',
      'z',
      'a',
      'f',
      'p',
      'n',
      'c',
      'd',
      'da',
      'h',
      'G',
      'T',
      'P',
      'E',
      'Z',
      'Y',
    ];

    fields.push(html`<wizard-select
      label="unitMultiplier"
      .maybeValue="${addressElement.getAttribute('unitMultiplier')}"
      helper="${translate('protocol104.wizard.unitMultiplierHelper')}"
      fixedMenuPosition
      nullable
    >
      ${allowedMultipliers.map(
        multiplier =>
          html`<mwc-list-item value="${multiplier}">
            <span>${multiplier}</span>
          </mwc-list-item>`
      )}
    </wizard-select>`);
  }

  if (hasScaleFields(cdc, ti)) {
    fields.push(html`<wizard-textfield
      label="scaleMultiplier"
      .maybeValue="${addressElement.getAttribute('scaleMultiplier')}"
      helper="${translate('protocol104.wizard.scaleMultiplierHelper')}"
      pattern="${patterns.decimal}"
      nullable
    >
    </wizard-textfield>`);

    fields.push(html`<wizard-textfield
      label="scaleOffset"
      .maybeValue="${addressElement.getAttribute('scaleOffset')}"
      helper="${translate('protocol104.wizard.scaleOffsetHelper')}"
      pattern="${patterns.decimal}"
      nullable
    >
    </wizard-textfield>`);
  }

  if (addressElement.hasAttribute('expectedValue')) {
    const expectedValue = addressElement.getAttribute('expectedValue');
    if (expectedValue) {
      fields.push(html`<wizard-textfield
        label="expectedValue"
        .maybeValue="${expectedValue}"
        disabled
        readonly
      >
      </wizard-textfield>`);
      fields.push(html`<wizard-textfield
        label="enumValue"
        .maybeValue="${getEnumVal(
          daiElement.ownerDocument,
          daiElement,
          expectedValue
        )}"
        disabled
        readonly
      >
      </wizard-textfield>`);
    }
  }

  if (addressElement.hasAttribute('inverted')) {
    fields.push(html`<wizard-textfield
      label="inverted"
      .maybeValue="${addressElement.getAttribute('inverted')}"
      disabled
      readonly
    >
    </wizard-textfield>`);
  }

  if (addressElement.hasAttribute('check')) {
    fields.push(html`<wizard-textfield
      label="check"
      .maybeValue="${addressElement.getAttribute('check')}"
      disabled
      readonly
    >
    </wizard-textfield>`);
  }

  return fields;
}

export function editAddressWizard(
  daiElement: Element,
  addressElement: Element
): Wizard {
  return [
    {
      title: get('protocol104.wizard.title.addressEdit'),
      element: addressElement,
      primary: {
        icon: 'edit',
        label: get('save'),
        action: updateValue(daiElement, addressElement),
      },
      content: renderDAIWizard(daiElement, addressElement),
    },
  ];
}
