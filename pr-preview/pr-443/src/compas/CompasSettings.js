var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import {
  css,
  customElement,
  html,
  LitElement,
  property
} from "../../_snowpack/pkg/lit-element.js";
import {translate} from "../../_snowpack/pkg/lit-translate.js";
import "../../_snowpack/pkg/@material/mwc-textfield.js";
import "../../_snowpack/pkg/@material/mwc-button.js";
import {newWizardEvent} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
export function CompasSettings() {
  return {
    get compasSettings() {
      return {
        sclDataServiceUrl: this.getCompasSetting("sclDataServiceUrl"),
        sclValidatorServiceUrl: this.getCompasSetting("sclValidatorServiceUrl"),
        cimMappingServiceUrl: this.getCompasSetting("cimMappingServiceUrl"),
        sclAutoAlignmentServiceUrl: this.getCompasSetting("sclAutoAlignmentServiceUrl"),
        sitipeServiceUrl: this.getCompasSetting("sitipeServiceUrl"),
        useWebsockets: this.getCompasSetting("useWebsockets")
      };
    },
    get defaultSettings() {
      return {
        sclDataServiceUrl: "/compas-scl-data-service",
        sclValidatorServiceUrl: "/compas-scl-validator",
        cimMappingServiceUrl: "/compas-cim-mapping",
        sclAutoAlignmentServiceUrl: "/compas-scl-auto-alignment",
        sitipeServiceUrl: "/compas-sitipe-service",
        useWebsockets: "on"
      };
    },
    useWebsockets() {
      return this.compasSettings.useWebsockets === "on";
    },
    setCompasSetting(setting, value) {
      localStorage.setItem(setting, value);
    },
    getCompasSetting(setting) {
      return localStorage.getItem(setting) ?? this.defaultSettings[setting];
    }
  };
}
export let CompasSettingsElement = class extends LitElement {
  get compasSettings() {
    return CompasSettings().compasSettings;
  }
  getSclDataServiceUrlField() {
    return this.shadowRoot.querySelector('mwc-textfield[id="sclDataServiceUrl"]');
  }
  getSclValidatorServiceUrlField() {
    return this.shadowRoot.querySelector('mwc-textfield[id="sclValidatorServiceUrl"]');
  }
  getCimMappingServiceUrlField() {
    return this.shadowRoot.querySelector('mwc-textfield[id="cimMappingServiceUrl"]');
  }
  getSclAutoAlignmentServiceUrlField() {
    return this.shadowRoot.querySelector('mwc-textfield[id="sclAutoAlignmentServiceUrl"]');
  }
  getSitipeServiceUrlField() {
    return this.shadowRoot.querySelector('mwc-textfield[id="sitipeServiceUrl"]');
  }
  getUseWebsockets() {
    return this.shadowRoot.querySelector('mwc-switch[id="useWebsockets"]');
  }
  valid() {
    return this.getSclDataServiceUrlField().checkValidity() && this.getSclValidatorServiceUrlField().checkValidity() && this.getCimMappingServiceUrlField().checkValidity() && this.getSclAutoAlignmentServiceUrlField().checkValidity() && this.getSitipeServiceUrlField().checkValidity();
  }
  save() {
    if (!this.valid()) {
      return false;
    }
    CompasSettings().setCompasSetting("sclDataServiceUrl", this.getSclDataServiceUrlField().value);
    CompasSettings().setCompasSetting("sclValidatorServiceUrl", this.getSclValidatorServiceUrlField().value);
    CompasSettings().setCompasSetting("cimMappingServiceUrl", this.getCimMappingServiceUrlField().value);
    CompasSettings().setCompasSetting("sclAutoAlignmentServiceUrl", this.getSclAutoAlignmentServiceUrlField().value);
    CompasSettings().setCompasSetting("sitipeServiceUrl", this.getSitipeServiceUrlField().value);
    CompasSettings().setCompasSetting("useWebsockets", this.getUseWebsockets().checked ? "on" : "off");
    return true;
  }
  reset() {
    Object.keys(this.compasSettings).forEach((item) => localStorage.removeItem(item));
    return true;
  }
  close() {
    this.dispatchEvent(newWizardEvent());
  }
  render() {
    return html` <mwc-textfield
        dialogInitialFocus
        id="sclDataServiceUrl"
        label="${translate("compas.settings.sclDataServiceUrl")}"
        value="${this.compasSettings.sclDataServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        dialogInitialFocus
        id="sclValidatorServiceUrl"
        label="${translate("compas.settings.sclValidatorServiceUrl")}"
        value="${this.compasSettings.sclValidatorServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="cimMappingServiceUrl"
        label="${translate("compas.settings.cimMappingServiceUrl")}"
        value="${this.compasSettings.cimMappingServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sclAutoAlignmentServiceUrl"
        label="${translate("compas.settings.sclAutoAlignmentServiceUrl")}"
        value="${this.compasSettings.sclAutoAlignmentServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sitipeServiceUrl"
        label="${translate("compas.settings.sitipeServiceUrl")}"
        value="${this.compasSettings.sitipeServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-formfield label="${translate("compas.settings.useWebsockets")}">
        <mwc-switch
          id="useWebsockets"
          ?checked=${this.compasSettings.useWebsockets === "on"}
        >
        </mwc-switch>
      </mwc-formfield>

      <mwc-button
        @click=${() => {
      if (this.reset()) {
        this.close();
      }
    }}
      >
        ${translate("reset")}
      </mwc-button>`;
  }
};
CompasSettingsElement.styles = css`
    :host {
      width: 20vw;
    }

    mwc-textfield,
    mwc-formfield {
      margin: 10px;
      width: 100%;
    }

    mwc-button {
      --mdc-theme-primary: var(--mdc-theme-error);
    }
  `;
__decorate([
  property()
], CompasSettingsElement.prototype, "compasSettings", 1);
CompasSettingsElement = __decorate([
  customElement("compas-settings")
], CompasSettingsElement);
