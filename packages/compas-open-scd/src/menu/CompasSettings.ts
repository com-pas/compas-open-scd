import { LitElement } from 'lit-element';
import { get } from 'lit-translate';

import {
  newWizardEvent,
  Wizard,
  WizardInputElement,
  oscdHtml,
} from '@compas-oscd/open-scd/dist/foundation.js';

import '../compas/CompasSettings.js';
import type { CompasSettingsElement } from '../compas/CompasSettings.js';

export default class CompasSettingsMenuPlugin extends LitElement {
  async run(): Promise<void> {
    this.dispatchEvent(newWizardEvent(compasSettingWizard()));
  }
}
function save() {
  return function (inputs: WizardInputElement[], wizard: Element) {
    const compasSettingsElement = <CompasSettingsElement>(
      wizard.shadowRoot!.querySelector('compas-settings')
    );
    if (compasSettingsElement.save()) {
      compasSettingsElement.close();
    }
    return [];
  };
}

export function compasSettingWizard(): Wizard {
  return [
    {
      title: get('compas.settings.title'),
      primary: {
        icon: 'save',
        label: get('save'),
        action: save(),
      },
      content: [oscdHtml`<compas-settings></compas-settings>`],
    },
  ];
}
