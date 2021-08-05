import {css, customElement, html, LitElement, property, TemplateResult} from 'lit-element';
import {get, translate} from 'lit-translate';

import {newWizardEvent, Wizard, WizardInput} from '../foundation.js';
import {OpenSCD} from "../open-scd.js";
import {TextFieldBase} from "@material/mwc-textfield/mwc-textfield-base";

export type CompasSettingsRecord = {
  sclDataServiceUrl: string;
  cimMappingServiceUrl: string;
  keycloakAuthUrl: string;
};
export const defaults: CompasSettingsRecord = {
  sclDataServiceUrl: 'http://localhost:9090/compas-scl-data-service',
  cimMappingServiceUrl: 'http://localhost:9091/compas-cim-mapping',
  keycloakAuthUrl: 'http://localhost:8089/auth/'
};

export function CompasSettings() {
  return {
    /** Current [[`CompasSettings`]] in `localStorage`, default to [[`defaults`]]. */
    get compasSettings(): CompasSettingsRecord {
      return {
        sclDataServiceUrl: this.getCompasSetting('sclDataServiceUrl'),
        cimMappingServiceUrl: this.getCompasSetting('cimMappingServiceUrl'),
        keycloakAuthUrl: this.getCompasSetting('keycloakAuthUrl')
      };
    },

    /** Update the `value` of `setting`, storing to `localStorage`. */
    setCompasSetting<T extends keyof CompasSettingsRecord>(setting: T, value: CompasSettingsRecord[T]): void {
      localStorage.setItem(setting, <string>(<unknown>value));
    },

    getCompasSetting<T extends keyof CompasSettingsRecord>(setting: T): CompasSettingsRecord[T] {
      return (
        <CompasSettingsRecord[T] | null>localStorage.getItem(setting) ?? defaults[setting]
      );
    }
  }
}

@customElement('compas-settings')
export class CompasSettingsElement extends LitElement {
  @property()
  get compasSettings(): CompasSettingsRecord {
    return CompasSettings().compasSettings;
  }

  getSclDataServiceUrlField(): TextFieldBase {
    return <TextFieldBase>this.shadowRoot!.querySelector('mwc-textfield[id="sclDataServiceUrl"]');
  }

  getCimMappingServiceUrlField(): TextFieldBase {
    return <TextFieldBase>this.shadowRoot!.querySelector('mwc-textfield[id="cimMappingServiceUrl"]');
  }

  getKeycloakAuthUrlField(): TextFieldBase {
    return <TextFieldBase>this.shadowRoot!.querySelector('mwc-textfield[id="keycloakAuthUrl"]');
  }

  valid(): boolean {
    return this.getSclDataServiceUrlField().checkValidity()
      && this.getCimMappingServiceUrlField().checkValidity()
      && this.getKeycloakAuthUrlField().checkValidity();
  }

  save(): boolean {
    if (!this.valid()) {
      return false;
    }

    // Update settings from TextField.
    CompasSettings().setCompasSetting('sclDataServiceUrl', this.getSclDataServiceUrlField().value);
    CompasSettings().setCompasSetting('cimMappingServiceUrl', this.getCimMappingServiceUrlField().value);
    CompasSettings().setCompasSetting('keycloakAuthUrl', this.getKeycloakAuthUrlField().value);
    return true;
  }

  reset(): boolean {
    Object.keys(this.compasSettings).forEach(item =>
      localStorage.removeItem(item)
    );
    return true;
  }

  close(): void {
    // Close the Save Dialog.
    const openScd = <OpenSCD>document.querySelector('open-scd');
    openScd.dispatchEvent(newWizardEvent());
  }

  render(): TemplateResult {
    return html`
      <mwc-textfield dialogInitialFocus id="sclDataServiceUrl"
                     label="${translate('compas.settings.sclDataServiceUrl')}"
                     value="${this.compasSettings.sclDataServiceUrl}" required>
      </mwc-textfield>
      <mwc-textfield dialogInitialFocus id="cimMappingServiceUrl"
                     label="${translate('compas.settings.cimMappingServiceUrl')}"
                     value="${this.compasSettings.cimMappingServiceUrl}" required>
      </mwc-textfield>
      <mwc-textfield dialogInitialFocus id="keycloakAuthUrl"
                     label="${translate('compas.settings.keycloakAuthUrl')}"
                     value="${this.compasSettings.keycloakAuthUrl}" required>
      </mwc-textfield>

      <mwc-button style="--mdc-theme-primary: var(--mdc-theme-error)"
                  @click=${() => {
                    if (this.reset()) {
                      this.close();
                    }
                  }}>
          ${translate('reset')}
      </mwc-button>`;
  }

  static styles = css`
    :host {
      width: 20vw;
    }

    mwc-textfield {
      margin: 10px;
      width: 100%;
    }
  `
}

export function saveAction() {
  return function (inputs: WizardInput[], wizard: Element) {
    const compasSettingsElement = <CompasSettingsElement>wizard.shadowRoot!.querySelector('compas-settings')
    if (compasSettingsElement.save()) {
      compasSettingsElement.close();
    }
    return [];
  };
}

export function compasSettingWizard(): Wizard {
  return [
    {
      title: get('compas.settings.name'),
      primary: {
        icon: 'save',
        label: get('save'),
        action: saveAction(),
      },
      content: [
        html`<compas-settings></compas-settings>`,
      ],
    },
  ];
}
