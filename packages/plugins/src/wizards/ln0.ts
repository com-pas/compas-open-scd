import { html, TemplateResult } from 'lit-element';
import { get } from 'lit-translate';

import '@material/mwc-list/mwc-list-item';
import '@compas-oscd/open-scd/wizard-textfield.js';
import '@compas-oscd/open-scd/wizard-select.js';
import {
  getValue,
  Wizard,
  WizardActor,
  WizardInputElement,
} from '@compas-oscd/open-scd';

import { cloneElement } from '@openscd/xml';

import { SimpleAction } from '@openscd/core/foundation/deprecated/editor.js';

function getLNodeTypeOptions(element: Element): string[] {
  const doc = element.ownerDocument;
  const lNodeTypes = Array.from(
    doc.querySelectorAll('DataTypeTemplates > LNodeType[lnClass="LLN0"]')
  );
  return lNodeTypes.map(lnt => lnt.getAttribute('id')!).filter(id => id);
}

export function renderLN0Wizard(
  lnodeTypeIds: string[],
  lnType: string | null,
  desc: string | null,
  lnClass: string | null,
  inst: string | null
): TemplateResult[] {
  return [
    html`<wizard-select-openscd
      label="lnType"
      .maybeValue=${lnType}
      required
      helper="${get('ln0.wizard.lnTypeHelper')}"
      >${lnodeTypeIds.map(
        id => html`<mwc-list-item value="${id}">${id}</mwc-list-item>`
      )}</wizard-select-openscd
    >`,
    html`<wizard-textfield-openscd
      label="desc"
      .maybeValue=${desc}
      nullable
      helper="${get('ln0.wizard.descHelper')}"
    ></wizard-textfield-openscd>`,
    html`<wizard-textfield-openscd
      label="lnClass"
      readonly
      required
      .maybeValue=${lnClass}
      helper="${get('ln0.wizard.lnClassHelper')}"
    ></wizard-textfield-openscd>`,
    html`<wizard-textfield-openscd
      label="inst"
      .maybeValue=${inst}
      readonly
      helper="${get('ln0.wizard.instHelper')}"
    ></wizard-textfield-openscd>`,
  ];
}

function updateAction(element: Element): WizardActor {
  return (inputs: WizardInputElement[]): SimpleAction[] => {
    const ldAttrs: Record<string, string | null> = {};
    const ldKeys = ['lnType', 'desc', 'lnClass', 'inst'];
    ldKeys.forEach(key => {
      ldAttrs[key] = getValue(inputs.find(i => i.label === key)!);
    });

    if (ldKeys.some(key => ldAttrs[key] !== element.getAttribute(key))) {
      const newElement = cloneElement(element, ldAttrs);
      return [
        {
          old: { element },
          new: { element: newElement },
        },
      ];
    }
    return [];
  };
}

export function editLN0Wizard(element: Element): Wizard {
  const lnodeTypeIds = getLNodeTypeOptions(element);

  return [
    {
      title: get('ln0.wizard.title.edit'),
      element,
      primary: {
        icon: 'edit',
        label: get('save'),
        action: updateAction(element),
      },
      content: renderLN0Wizard(
        lnodeTypeIds,
        element.getAttribute('lnType'),
        element.getAttribute('desc'),
        element.getAttribute('lnClass'),
        element.getAttribute('inst')
      ),
    },
  ];
}
