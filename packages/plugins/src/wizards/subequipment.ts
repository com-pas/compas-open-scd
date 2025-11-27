import { html, TemplateResult } from 'lit-html';
import { get } from 'lit-translate';

import {
  cloneElement,
  createElement,
  getChildElementsByTagName,
} from '@openscd/xml';

import {
  getValue,
  Wizard,
  WizardActor,
  WizardInputElement,
} from '@compas-oscd/open-scd';
import { SimpleAction } from '@openscd/core/foundation/deprecated/editor';
import '@compas-oscd/open-scd/wizard-textfield.js';
import '@compas-oscd/open-scd/wizard-select.js';

interface ContentOptions {
  name: string | null;
  desc: string | null;
  phase: string | null;
  virtual: string | null;
  reservedNames: string[];
}

export function contentSubEquipmentWizard(
  content: ContentOptions
): TemplateResult[] {
  return [
    html`<wizard-textfield-openscd
      label="name"
      .maybeValue=${content.name}
      .reservedValues=${content.reservedNames}
      helper="${get('scl.name')}"
      required
      validationMessage="${get('textfield.required')}"
      dialogInitialFocus
    ></wizard-textfield-openscd>`,
    html`<wizard-textfield-openscd
      label="desc"
      .maybeValue=${content.desc}
      nullable
      helper="${get('scl.desc')}"
    ></wizard-textfield-openscd>`,
    html`<wizard-select-openscd
      label="phase"
      fixedMenuPosition
      .maybeValue=${content.phase}
      nullable
      helper="${get('scl.phase')}"
    >
      ${['A', 'B', 'C', 'N', 'all', 'none', 'AB', 'BC', 'CA'].map(
        value =>
          html`<mwc-list-item value="${value}">
            ${value.charAt(0).toUpperCase() + value.slice(1)}
          </mwc-list-item>`
      )}
    </wizard-select-openscd> `,
    html`<wizard-checkbox-openscd
      label="virtual"
      .maybeValue=${content.virtual}
      nullable
      helper="${get('scl.virtual')}"
    ></wizard-checkbox-openscd>`,
  ];
}

function updateSubEquipmentAction(element: Element): WizardActor {
  return (inputs: WizardInputElement[]): SimpleAction[] => {
    const subfunctionAttrs: Record<string, string | null> = {};
    const subFunctionKeys = ['name', 'desc', 'phase', 'virtual'];
    subFunctionKeys.forEach(key => {
      subfunctionAttrs[key] = getValue(inputs.find(i => i.label === key)!);
    });

    if (
      subFunctionKeys.some(
        key => subfunctionAttrs[key] !== element.getAttribute(key)
      )
    ) {
      const newElement = cloneElement(element, subfunctionAttrs);
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

export function editSubEquipmentWizard(element: Element): Wizard {
  const name = element.getAttribute('name');
  const desc = element.getAttribute('desc');
  const phase = element.getAttribute('phase');
  const virtual = element.getAttribute('virtual');

  const reservedNames: string[] = getChildElementsByTagName(
    element.parentElement!,
    'SubEquipment'
  )
    .filter(sibling => sibling !== element)
    .map(sibling => sibling.getAttribute('name')!);

  return [
    {
      title: get('wizard.title.edit', { tagName: 'SubEquipment' }),
      primary: {
        icon: 'save',
        label: get('save'),
        action: updateSubEquipmentAction(element),
      },
      content: [
        ...contentSubEquipmentWizard({
          name,
          desc,
          phase,
          virtual,
          reservedNames,
        }),
      ],
    },
  ];
}

function createSubEquipmentAction(parent: Element): WizardActor {
  return (inputs: WizardInputElement[]) => {
    const subEquipmentAttrs: Record<string, string | null> = {};
    const subEquipmentKeys = ['name', 'desc', 'phase', 'virtual'];
    subEquipmentKeys.forEach(key => {
      subEquipmentAttrs[key] = getValue(inputs.find(i => i.label === key)!);
    });

    const subEquipment = createElement(
      parent.ownerDocument,
      'SubEquipment',
      subEquipmentAttrs
    );

    return [{ new: { parent, element: subEquipment } }];
  };
}

export function createSubEquipmentWizard(parent: Element): Wizard {
  const name = '';
  const desc = null;
  const phase = null;
  const virtual = null;
  const reservedNames = Array.from(parent.querySelectorAll('SubEquipment')).map(
    subEquipment => subEquipment.getAttribute('name')!
  );

  return [
    {
      title: get('wizard.title.add', { tagName: 'SubEquipment' }),
      primary: {
        icon: 'save',
        label: get('save'),
        action: createSubEquipmentAction(parent),
      },
      content: [
        ...contentSubEquipmentWizard({
          name,
          desc,
          phase,
          virtual,
          reservedNames,
        }),
      ],
    },
  ];
}
