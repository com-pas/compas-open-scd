import {LitElement} from 'lit-element';

import {newWizardEvent} from '../foundation.js';

import {privateFieldsSettingWizard} from "../privates/PrivateFieldsSettings.js";

export default class PrivateFieldsSettingsMenuPlugin extends LitElement {
  async run(): Promise<void> {
    this.dispatchEvent(newWizardEvent(privateFieldsSettingWizard()));
  }
}

