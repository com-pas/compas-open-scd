import { get } from '../../../_snowpack/pkg/lit-translate.js';
import { oscdHtml } from '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js';
import { getValue, } from '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js';
import { cloneElement, createElement, getChildElementsByTagName, } from '../../../_snowpack/link/packages/xml/dist/index.js';
function createProcessAction(parent) {
    return (inputs) => {
        const processAttrs = {};
        const processKeys = ['name', 'desc', 'type'];
        processKeys.forEach(key => {
            processAttrs[key] = getValue(inputs.find(i => i.label === key));
        });
        const line = createElement(parent.ownerDocument, 'Process', processAttrs);
        return [{ new: { parent, element: line } }];
    };
}
function updateProcessAction(element) {
    return (inputs) => {
        const tapProcessAttrs = {};
        const tapProcessKeys = ['name', 'desc', 'type'];
        tapProcessKeys.forEach(key => {
            tapProcessAttrs[key] = getValue(inputs.find(i => i.label === key));
        });
        if (tapProcessKeys.some(key => tapProcessAttrs[key] !== element.getAttribute(key))) {
            const newElement = cloneElement(element, tapProcessAttrs);
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
export function contentProcessWizard(content) {
    return [
        oscdHtml `<wizard-textfield
      label="name"
      .maybeValue=${content.name}
      helper="${get('scl.name')}"
      required
      validationMessage="${get('textfield.required')}"
      .reservedValues=${content.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
        oscdHtml `<wizard-textfield
      label="desc"
      .maybeValue=${content.desc}
      nullable
      helper="${get('scl.desc')}"
    ></wizard-textfield>`,
        oscdHtml `<wizard-textfield
      label="type"
      .maybeValue=${content.type}
      nullable
      helper="${get('scl.type')}"
    ></wizard-textfield>`,
    ];
}
export function createProcessWizard(parent) {
    const name = '';
    const desc = '';
    const type = '';
    const reservedNames = getChildElementsByTagName(parent.parentElement, 'Process')
        .filter(sibling => sibling !== parent)
        .map(sibling => sibling.getAttribute('name'));
    return [
        {
            title: get('wizard.title.add', { tagName: 'Process' }),
            primary: {
                icon: 'save',
                label: get('save'),
                action: createProcessAction(parent),
            },
            content: [
                ...contentProcessWizard({
                    name,
                    desc,
                    type,
                    reservedNames,
                }),
            ],
        },
    ];
}
export function editProcessWizard(element) {
    const name = element.getAttribute('name');
    const desc = element.getAttribute('desc');
    const type = element.getAttribute('type');
    const reservedNames = getChildElementsByTagName(element.parentElement, 'Process')
        .filter(sibling => sibling !== element)
        .map(sibling => sibling.getAttribute('name'));
    return [
        {
            title: get('wizard.title.edit', { tagName: 'Process' }),
            primary: {
                icon: 'save',
                label: get('save'),
                action: updateProcessAction(element),
            },
            content: [
                ...contentProcessWizard({
                    name,
                    desc,
                    type,
                    reservedNames,
                }),
            ],
        },
    ];
}
//# sourceMappingURL=process.js.map