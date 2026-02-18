import { get } from '../../../_snowpack/pkg/lit-translate.js';
import { cloneElement, createElement, getChildElementsByTagName, } from '../../../_snowpack/link/packages/xml/dist/index.js';
import { getValue, } from '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js';
import { oscdHtml } from '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js';
import '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/wizard-textfield.js';
import '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/wizard-select.js';
export function contentSubEquipmentWizard(content) {
    return [
        oscdHtml `<wizard-textfield
      label="name"
      .maybeValue=${content.name}
      .reservedValues=${content.reservedNames}
      helper="${get('scl.name')}"
      required
      validationMessage="${get('textfield.required')}"
      dialogInitialFocus
    ></wizard-textfield>`,
        oscdHtml `<wizard-textfield
      label="desc"
      .maybeValue=${content.desc}
      nullable
      helper="${get('scl.desc')}"
    ></wizard-textfield>`,
        oscdHtml `<wizard-select
      label="phase"
      fixedMenuPosition
      .maybeValue=${content.phase}
      nullable
      helper="${get('scl.phase')}"
    >
      ${['A', 'B', 'C', 'N', 'all', 'none', 'AB', 'BC', 'CA'].map(value => oscdHtml `<mwc-list-item value="${value}">
            ${value.charAt(0).toUpperCase() + value.slice(1)}
          </mwc-list-item>`)}
    </wizard-select> `,
        oscdHtml `<wizard-checkbox
      label="virtual"
      .maybeValue=${content.virtual}
      nullable
      helper="${get('scl.virtual')}"
    ></wizard-checkbox>`,
    ];
}
function updateSubEquipmentAction(element) {
    return (inputs) => {
        const subfunctionAttrs = {};
        const subFunctionKeys = ['name', 'desc', 'phase', 'virtual'];
        subFunctionKeys.forEach(key => {
            subfunctionAttrs[key] = getValue(inputs.find(i => i.label === key));
        });
        if (subFunctionKeys.some(key => subfunctionAttrs[key] !== element.getAttribute(key))) {
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
export function editSubEquipmentWizard(element) {
    const name = element.getAttribute('name');
    const desc = element.getAttribute('desc');
    const phase = element.getAttribute('phase');
    const virtual = element.getAttribute('virtual');
    const reservedNames = getChildElementsByTagName(element.parentElement, 'SubEquipment')
        .filter(sibling => sibling !== element)
        .map(sibling => sibling.getAttribute('name'));
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
function createSubEquipmentAction(parent) {
    return (inputs) => {
        const subEquipmentAttrs = {};
        const subEquipmentKeys = ['name', 'desc', 'phase', 'virtual'];
        subEquipmentKeys.forEach(key => {
            subEquipmentAttrs[key] = getValue(inputs.find(i => i.label === key));
        });
        const subEquipment = createElement(parent.ownerDocument, 'SubEquipment', subEquipmentAttrs);
        return [{ new: { parent, element: subEquipment } }];
    };
}
export function createSubEquipmentWizard(parent) {
    const name = '';
    const desc = null;
    const phase = null;
    const virtual = null;
    const reservedNames = Array.from(parent.querySelectorAll('SubEquipment')).map(subEquipment => subEquipment.getAttribute('name'));
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
//# sourceMappingURL=subequipment.js.map