import { get } from '../../../_snowpack/pkg/lit-translate.js';
import { oscdHtml } from '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js';
import { getValue, } from '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js';
import { cloneElement, createElement, getChildElementsByTagName } from '../../../_snowpack/link/packages/xml/dist/index.js';
export function contentFunctionWizard(content) {
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
      helper="${get('scl.type')}"
      nullable
    ></wizard-textfield>`,
    ];
}
function updateFunctionAction(element) {
    return (inputs) => {
        const functionAttrs = {};
        const functionKeys = ['name', 'desc', 'type'];
        functionKeys.forEach(key => {
            functionAttrs[key] = getValue(inputs.find(i => i.label === key));
        });
        if (functionKeys.some(key => functionAttrs[key] !== element.getAttribute(key))) {
            const newElement = cloneElement(element, functionAttrs);
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
export function editFunctionWizard(element) {
    const name = element.getAttribute('name');
    const desc = element.getAttribute('desc');
    const type = element.getAttribute('type');
    const reservedNames = getChildElementsByTagName(element.parentElement, 'Function')
        .filter(sibling => sibling !== element)
        .map(sibling => sibling.getAttribute('name'));
    return [
        {
            title: get('wizard.title.edit', { tagName: 'Function' }),
            primary: {
                icon: 'save',
                label: get('save'),
                action: updateFunctionAction(element),
            },
            content: [
                ...contentFunctionWizard({
                    name,
                    desc,
                    type,
                    reservedNames,
                }),
            ],
        },
    ];
}
function createFunctionAction(parent) {
    return (inputs) => {
        const functionAttrs = {};
        const functionKeys = ['name', 'desc', 'type'];
        functionKeys.forEach(key => {
            functionAttrs[key] = getValue(inputs.find(i => i.label === key));
        });
        const fUnction = createElement(parent.ownerDocument, 'Function', functionAttrs);
        return [{ new: { parent, element: fUnction } }];
    };
}
export function createFunctionWizard(parent) {
    const name = '';
    const desc = null;
    const type = null;
    const reservedNames = Array.from(parent.querySelectorAll('Function')).map(fUnction => fUnction.getAttribute('name'));
    return [
        {
            title: get('wizard.title.add', { tagName: 'Function' }),
            primary: {
                icon: 'save',
                label: get('save'),
                action: createFunctionAction(parent),
            },
            content: [
                ...contentFunctionWizard({
                    name,
                    desc,
                    type,
                    reservedNames,
                }),
            ],
        },
    ];
}
//# sourceMappingURL=function.js.map