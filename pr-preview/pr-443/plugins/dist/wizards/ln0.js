import { get } from '../../../_snowpack/pkg/lit-translate.js';
import '../../../_snowpack/pkg/@material/mwc-list/mwc-list-item.js';
import { oscdHtml } from '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js';
import '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/wizard-textfield.js';
import '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/wizard-select.js';
import { getValue, } from '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js';
import { cloneElement } from '../../../_snowpack/link/packages/xml/dist/index.js';
function getLNodeTypeOptions(element) {
    const doc = element.ownerDocument;
    const lNodeTypes = Array.from(doc.querySelectorAll('DataTypeTemplates > LNodeType[lnClass="LLN0"]'));
    return lNodeTypes.map(lnt => lnt.getAttribute('id')).filter(id => id);
}
export function renderLN0Wizard(lnodeTypeIds, lnType, desc, lnClass, inst) {
    return [
        oscdHtml `<wizard-select
      label="lnType"
      .maybeValue=${lnType}
      required
      helper="${get('ln0.wizard.lnTypeHelper')}"
      >${lnodeTypeIds.map(id => oscdHtml `<mwc-list-item value="${id}">${id}</mwc-list-item>`)}</wizard-select
    >`,
        oscdHtml `<wizard-textfield
      label="desc"
      .maybeValue=${desc}
      nullable
      helper="${get('ln0.wizard.descHelper')}"
    ></wizard-textfield>`,
        oscdHtml `<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${lnClass}
      helper="${get('ln0.wizard.lnClassHelper')}"
    ></wizard-textfield>`,
        oscdHtml `<wizard-textfield
      label="inst"
      .maybeValue=${inst}
      readonly
      helper="${get('ln0.wizard.instHelper')}"
    ></wizard-textfield>`,
    ];
}
function updateAction(element) {
    return (inputs) => {
        const ldAttrs = {};
        const ldKeys = ['lnType', 'desc', 'lnClass', 'inst'];
        ldKeys.forEach(key => {
            ldAttrs[key] = getValue(inputs.find(i => i.label === key));
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
export function editLN0Wizard(element) {
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
            content: renderLN0Wizard(lnodeTypeIds, element.getAttribute('lnType'), element.getAttribute('desc'), element.getAttribute('lnClass'), element.getAttribute('inst')),
        },
    ];
}
//# sourceMappingURL=ln0.js.map