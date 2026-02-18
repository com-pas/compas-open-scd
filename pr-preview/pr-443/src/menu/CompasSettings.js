import {LitElement} from "../../_snowpack/pkg/lit-element.js";
import {get} from "../../_snowpack/pkg/lit-translate.js";
import {newWizardEvent, oscdHtml} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import "../compas/CompasSettings.js";
export default class CompasSettingsMenuPlugin extends LitElement {
  async run() {
    this.dispatchEvent(newWizardEvent(compasSettingWizard()));
  }
}
export function compasSettingWizard() {
  function save() {
    return function(inputs, wizard) {
      const compasSettingsElement = wizard.shadowRoot.querySelector("compas-settings");
      if (compasSettingsElement.save()) {
        compasSettingsElement.close();
      }
      return [];
    };
  }
  return [
    {
      title: get("compas.settings.title"),
      primary: {
        icon: "save",
        label: get("save"),
        action: save()
      },
      content: [oscdHtml`<compas-settings></compas-settings>`]
    }
  ];
}
