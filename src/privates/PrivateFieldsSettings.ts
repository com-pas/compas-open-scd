import {
  customElement,
  html,
  LitElement,
  query,
  TemplateResult
} from "lit-element";

import { get, translate } from "lit-translate";
import { TextField } from "@material/mwc-textfield";
import { MultiSelectedEvent } from "@material/mwc-list/mwc-list-foundation";

import { newWizardEvent, Wizard, WizardInput } from "../foundation.js";
import { getOpenScdElement } from "../compas/foundation.js";
import { privateFields, PrivateFieldsPlugin } from "./PrivateFields.js";

@customElement('private-fields-settings')
export class PrivateFieldsSettingsElement extends LitElement {
  close(): void {
    // Close the Save Dialog.
    const openScd = getOpenScdElement();
    openScd.dispatchEvent(newWizardEvent());
  }

  renderPlugin(plugin: PrivateFieldsPlugin): TemplateResult {
    return html`
      <mwc-check-list-item
              class="${plugin.official ? 'official' : 'external'}"
              value="${plugin.src}"
              ?selected=${plugin.installed}
              left>
        ${plugin.name}
      </mwc-check-list-item>`;
  }

  render(): TemplateResult {
    return html`
      <mwc-list
        id="pluginList"
        multi
        @selected=${(e: MultiSelectedEvent) => {
          privateFields.activatePrivateFieldsPlugins(e.detail.index)
          this.requestUpdate();
        }}>
        <mwc-list-item graphic="avatar" noninteractive>
          <strong>${translate(`privateField.settings.extensions`)}</strong>
        </mwc-list-item>
        <li divider role="separator"></li>
        ${privateFields.privateFieldsPlugins.map(plugin => this.renderPlugin(plugin))}
      </mwc-list>
      <mwc-button
            raised
            trailingIcon
            icon="library_add"
            label="${translate('add')}&hellip;"
            @click=${() => {
              this.dispatchEvent(newWizardEvent(privateFieldsAddWizard()))
              this.dispatchEvent(newWizardEvent());
            }}}>
      </mwc-button>
      `;
  }
}

export function privateFieldsSettingWizard(): Wizard {
  function closePlugins() {
    return function (inputs: WizardInput[], wizard: Element) {
      const privateFieldsSettingsElement = <PrivateFieldsSettingsElement>wizard.shadowRoot!.querySelector('private-fields-settings')
      privateFieldsSettingsElement.close();
      return [];
    };
  }

  function resetPlugins() {
    return function (inputs: WizardInput[], wizard: Element) {
      privateFields.resetPlugins();

      const privateFieldsSettingsElement = <PrivateFieldsSettingsElement>wizard.shadowRoot!.querySelector('private-fields-settings')
      privateFieldsSettingsElement.requestUpdate();
      return [];
    };
  }

  return [
    {
      title: get('privateField.settings.title'),
      primary: {
        icon: 'close',
        label: get('close'),
        action: closePlugins(),
      },
      secondary: {
        icon: 'refresh',
        label: get('reset'),
        action: resetPlugins(),
        style: '--mdc-theme-primary: var(--mdc-theme-error)',
      },
      content: [
        html`<private-fields-settings></private-fields-settings>`,
      ],
    },
  ];
}

@customElement('private-fields-add')
export class PrivateFieldsAddElement extends LitElement {
  @query('#pluginNameInput')
  pluginNameInput!: TextField;
  @query('#pluginSrcInput')
  pluginSrcInput!: TextField;

  public add(): boolean {
    if (!( this.pluginSrcInput.checkValidity() &&
      this.pluginNameInput.checkValidity())) {
      return false;
    }

    privateFields.addExternalPlugin({
      src: this.pluginSrcInput.value,
      name: this.pluginNameInput.value,
      installed: true,
    });
    return true;
  }

  close(): void {
    this.dispatchEvent(newWizardEvent(privateFieldsSettingWizard()));
    this.dispatchEvent(newWizardEvent());
  }

  render(): TemplateResult {
    return html`
      <div style="display: flex; flex-direction: column; row-gap: 8px;">
        <p style="color:var(--mdc-theme-error);">
          ${translate('plugins.add.warning')}
        </p>
        <mwc-textfield
          label="${translate('plugins.add.name')}"
          helper="${translate('plugins.add.nameHelper')}"
          required
          id="pluginNameInput">
        </mwc-textfield>
        <mwc-textfield
          label="${translate('plugins.add.src')}"
          helper="${translate('plugins.add.srcHelper')}"
          placeholder="http://example.com/plugin.js"
          type="url"
          required
          id="pluginSrcInput"
        ></mwc-textfield>
      </div>
    `;
  }
}

export function privateFieldsAddWizard(): Wizard {
  function add() {
    return function (inputs: WizardInput[], wizard: Element) {
      const privateFieldsAddElement = <PrivateFieldsAddElement>wizard.shadowRoot!.querySelector('private-fields-add')
      if (privateFieldsAddElement.add()) {
        privateFieldsAddElement.close();
      }
      return [];
    };
  }

  function close() {
    return function (inputs: WizardInput[], wizard: Element) {
      const privateFieldsAddElement = <PrivateFieldsAddElement>wizard.shadowRoot!.querySelector('private-fields-add')
      privateFieldsAddElement.close();
      return [];
    };
  }

  return [
    {
      title: get('privateField.add.title'),
      primary: {
        icon: 'add',
        label: get('add'),
        action: add(),
      },
      secondary: {
        icon: 'cancel',
        label: get('cancel'),
        action: close(),
        style: '--mdc-theme-primary: var(--mdc-theme-error)',
      },
      content: [
        html`<private-fields-add></private-fields-add>`,
      ],
    },
  ];
}
