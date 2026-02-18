import { _ as __decorate } from '../../../common/tslib.es6-272d455c.js';
import { L as LitElement, p as property, s as state, q as query, a as customElement } from '../../../common/lit-element-5ba57723.js';
import { i as ifDefined } from '../../../common/if-defined-2d797dbf.js';
import '../../../@material/mwc-switch.js';
import '../../../@material/mwc-select.js';
import { h as html } from '../../../common/lit-html-c4cc555c.js';
import '../../../common/render-a1d0e246.js';
import '../../../common/ripple-handlers-ce7fbbd4.js';
import '../../../common/ponyfill-44e20603.js';
import '../../../common/base-element-22e47ec1.js';
import '../../../common/foundation-794fc3ac.js';
import '../../../common/foundation-7cea7f4a.js';
import '../../../common/class-map-360a3edc.js';
import '../../../common/style-map-46da9e52.js';
import '../../../common/aria-property-2938771c.js';
import '../../../common/form-element-4114444b.js';
import '../../../common/observer-6d1a3681.js';
import '../../../common/mwc-line-ripple-directive-08063da0.js';
import '../../../common/directive-ecbd2789.js';
import '../../../common/mwc-menu-c3ef0e11.js';
import '../../../@material/mwc-list.js';
import '../../../common/mwc-list-base-7f6434a8.js';
import '../../../@material/mwc-list/mwc-list-item.js';
import '../../../common/mwc-list-item.css-a9f8123e.js';
import '../../../@material/mwc-icon.js';

/** A potentially `nullable` `Select`.
 *
 * NB: Use `maybeValue: string | null` instead of `value` if `nullable`!*/
let WizardSelect = class WizardSelect extends LitElement {
    get null() {
        return this.nullable && this.isNull;
    }
    set null(value) {
        if (!this.nullable || value === this.isNull)
            return;
        this.isNull = value;
        if (this.null)
            this.disable();
        else
            this.enable();
    }
    /** Replacement for `value`, can only be `null` if [[`nullable`]]. */
    get maybeValue() {
        return this.null ? null : this.value;
    }
    set maybeValue(value) {
        if (value === null)
            this.null = true;
        else {
            this.null = false;
            this.value = value;
        }
    }
    enable() {
        if (this.nulled === null)
            return;
        this.value = this.nulled;
        this.nulled = null;
        this.disabled = false;
    }
    disable() {
        if (this.nulled !== null)
            return;
        this.nulled = this.value;
        this.value = this.defaultValue;
        this.disabled = true;
    }
    async firstUpdated() {
        // await super.firstUpdated();
    }
    checkValidity() {
        if (this.nullable && !this.nullSwitch?.checked)
            return true;
        return this.select.checkValidity();
    }
    constructor() {
        super();
        this.value = '';
        this.label = '';
        this.dialogInitialFocus = false;
        this.disabled = false;
        /** Whether [[`maybeValue`]] may be `null` */
        this.nullable = false;
        this.isNull = false;
        /** The default `value` displayed if [[`maybeValue`]] is `null`. */
        this.defaultValue = '';
        /** Additional values that cause validation to fail. */
        this.reservedValues = [];
        // FIXME: workaround to allow disable of the whole component - need basic refactor
        this.disabledSwitch = false;
        this.nulled = null;
        this.disabledSwitch = this.hasAttribute('disabled');
    }
    renderSwitch() {
        if (this.nullable) {
            return html `<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
                this.null = !this.nullSwitch.checked;
            }}
      ></mwc-switch>`;
        }
        return html ``;
    }
    render() {
        return html `
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">
          <mwc-select
            .value=${this.value}
            .disabled=${this.disabled}
            label=${this.label}
            helper="${ifDefined(this.helper)}"
            validationMessage="${ifDefined(this.validationMessage)}"
            @change="${(e) => this.value = e.target.value}"
            >
              <slot></slot>
          </mwc-select>
        </div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], WizardSelect.prototype, "value", void 0);
__decorate([
    property({ type: String })
], WizardSelect.prototype, "label", void 0);
__decorate([
    property({ type: String })
], WizardSelect.prototype, "helper", void 0);
__decorate([
    property({ type: String })
], WizardSelect.prototype, "validationMessage", void 0);
__decorate([
    property({ type: Boolean })
], WizardSelect.prototype, "dialogInitialFocus", void 0);
__decorate([
    property({ type: Boolean })
], WizardSelect.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], WizardSelect.prototype, "nullable", void 0);
__decorate([
    state()
], WizardSelect.prototype, "null", null);
__decorate([
    property({ type: String })
], WizardSelect.prototype, "maybeValue", null);
__decorate([
    property({ type: String })
], WizardSelect.prototype, "defaultValue", void 0);
__decorate([
    property({ type: Array })
], WizardSelect.prototype, "reservedValues", void 0);
__decorate([
    query('mwc-select')
], WizardSelect.prototype, "select", void 0);
__decorate([
    query('mwc-switch')
], WizardSelect.prototype, "nullSwitch", void 0);
WizardSelect = __decorate([
    customElement('wizard-select')
], WizardSelect);

export { WizardSelect };
