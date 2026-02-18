import { get } from '../../../_snowpack/pkg/lit-translate.js';
import { oscdHtml } from '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js';
import { isPublic } from '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js';
function render(name, connectivityNode, cNodeName, reservedNames) {
    return [
        oscdHtml `<wizard-textfield
      label="name"
      .maybeValue=${name}
      helper="${get('terminal.wizard.nameHelper')}"
      required
      validationMessage="${get('textfield.required')}"
      dialogInitialFocus
      .reservedValues=${reservedNames}
      readonly
    ></wizard-textfield>`,
        oscdHtml `<wizard-textfield
      label="connectivityNode"
      .maybeValue=${connectivityNode}
      helper="${get('terminal.wizard.connectivityNodeHelper')}"
      required
      validationMessage="${get('textfield.required')}"
      readonly
    ></wizard-textfield>`,
        oscdHtml `<wizard-textfield
      label="cNodeName"
      .maybeValue=${cNodeName}
      helper="${get('terminal.wizard.cNodeNameHelper')}"
      required
      validationMessage="${get('textfield.required')}"
      readonly
    ></wizard-textfield>`,
    ];
}
export function editTerminalWizard(element) {
    const reservedNames = Array.from(element.parentNode.querySelectorAll('ConnectivityNode'))
        .filter(isPublic)
        .map(cNode => cNode.getAttribute('name') ?? '')
        .filter(name => name !== element.getAttribute('name'));
    return [
        {
            title: get('terminal.wizard.title.edit'),
            element,
            content: render(element.getAttribute('name'), element.getAttribute('connectivityNode'), element.getAttribute('cNodeName'), reservedNames),
        },
    ];
}
//# sourceMappingURL=terminal.js.map