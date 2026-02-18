import { get } from '../../../_snowpack/pkg/lit-translate.js';
import { oscdHtml } from '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js';
import '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/wizard-textfield.js';
import { getValue, } from '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js';
import { createElement, } from '../../../_snowpack/link/packages/xml/dist/index.js';
import { replaceNamingAttributeWithReferencesAction } from './foundation/actions.js';
export function renderBayWizard(name, desc) {
    return [
        oscdHtml `<wizard-textfield
      label="name"
      .maybeValue=${name}
      helper="${get('bay.wizard.nameHelper')}"
      required
      validationMessage="${get('textfield.required')}"
      dialogInitialFocus
    ></wizard-textfield>`,
        oscdHtml `<wizard-textfield
      label="desc"
      .maybeValue=${desc}
      nullable
      helper="${get('bay.wizard.descHelper')}"
    ></wizard-textfield>`,
    ];
}
export function createAction(parent) {
    return (inputs) => {
        const name = getValue(inputs.find(i => i.label === 'name'));
        const desc = getValue(inputs.find(i => i.label === 'desc'));
        const element = createElement(parent.ownerDocument, 'Bay', {
            name,
            desc,
        });
        const action = {
            new: {
                parent,
                element,
            },
        };
        return [action];
    };
}
export function createBayWizard(parent) {
    return [
        {
            title: get('bay.wizard.title.add'),
            element: undefined,
            primary: {
                icon: '',
                label: get('add'),
                action: createAction(parent),
            },
            content: renderBayWizard('', ''),
        },
    ];
}
export function editBayWizard(element) {
    return [
        {
            title: get('bay.wizard.title.edit'),
            element,
            primary: {
                icon: 'edit',
                label: get('save'),
                action: replaceNamingAttributeWithReferencesAction(element, 'bay.action.updateBay'),
            },
            content: renderBayWizard(element.getAttribute('name'), element.getAttribute('desc')),
        },
    ];
}
//# sourceMappingURL=bay.js.map