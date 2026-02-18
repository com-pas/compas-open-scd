import { _ as __decorate } from '../../../common/tslib.es6-272d455c.js';
import { L as LitElement, p as property, s as state, q as query, a as customElement } from '../../../common/lit-element-5ba57723.js';
import { g as get } from '../../../common/directive-12ec8b14.js';
import { h as html } from '../../../common/lit-html-c4cc555c.js';
import { i as ifDefined } from '../../../common/if-defined-2d797dbf.js';
import '../../../@material/mwc-icon-button.js';
import '../../../@material/mwc-list/mwc-list-item.js';
import '../../../common/mwc-menu-c3ef0e11.js';
import '../../../@material/mwc-switch.js';
import '../../../@material/mwc-textfield.js';
import '../../../common/render-a1d0e246.js';
import '../../../common/ripple-handlers-ce7fbbd4.js';
import '../../../common/ponyfill-44e20603.js';
import '../../../common/base-element-22e47ec1.js';
import '../../../common/foundation-794fc3ac.js';
import '../../../common/foundation-7cea7f4a.js';
import '../../../common/class-map-360a3edc.js';
import '../../../common/style-map-46da9e52.js';
import '../../../common/aria-property-2938771c.js';
import '../../../common/mwc-icon-button.css-113fd63b.js';
import '../../../common/mwc-list-item.css-a9f8123e.js';
import '../../../common/observer-6d1a3681.js';
import '../../../@material/mwc-list.js';
import '../../../common/mwc-list-base-7f6434a8.js';
import '../../../common/form-element-4114444b.js';
import '../../../common/mwc-textfield.css-92997ed4.js';
import '../../../common/mwc-line-ripple-directive-08063da0.js';
import '../../../common/directive-ecbd2789.js';
import '../../../common/live-a225066a.js';

/** A potentially `nullable` `TextField` that allows for selection of an SI
 * `multiplier` if an SI `unit` is given.
 *
 * NB: Use `maybeValue: string | null` instead of `value` if `nullable`!*/
let WizardTextField = class WizardTextField extends LitElement {
    get multiplier() {
        if (this.unit == '')
            return null;
        return (this.multipliers[this.multiplierIndex] ?? this.multipliers[0] ?? null);
    }
    set multiplier(value) {
        const index = this.multipliers.indexOf(value);
        if (index >= 0)
            this.multiplierIndex = index;
        this.suffix = (this.multiplier ?? '') + this.unit;
    }
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
    selectMultiplier(se) {
        this.multiplier = this.multipliers[se.detail.index];
    }
    enable() {
        if (this.nulled === null)
            return;
        this.value = this.nulled;
        this.nulled = null;
        this.helperPersistent = false;
        this.disabled = false;
    }
    disable() {
        if (this.nulled !== null)
            return;
        this.nulled = this.value;
        this.value = this.defaultValue;
        this.helperPersistent = true;
        this.disabled = true;
    }
    firstUpdated() {
        // await super.firstUpdated();
        if (this.multiplierMenu)
            this.multiplierMenu.anchor =
                this.multiplierButton ?? null;
    }
    checkValidity() {
        if (this.reservedValues &&
            this.reservedValues.some(array => array === this.value)) {
            this.textfield.setCustomValidity(get('textfield.unique'));
            return false;
        }
        this.textfield.setCustomValidity(''); //Reset. Otherwise super.checkValidity always falseM
        return this.textfield.checkValidity();
    }
    reportValidity() {
        return this.textfield.reportValidity();
    }
    constructor() {
        super();
        /** Whether [[`maybeValue`]] may be `null` */
        this.nullable = false;
        /** Selectable SI multipliers for a non-empty [[`unit`]]. */
        this.multipliers = [null, ''];
        this.multiplierIndex = 0;
        this.value = '';
        this.suffix = '';
        this.helperPersistent = false;
        this.disabled = false;
        this.required = false;
        this.label = '';
        this.dialogInitialFocus = false;
        /** SI Unit, must be non-empty to allow for selecting a [[`multiplier`]].
         * Overrides `suffix`. */
        this.unit = '';
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
    renderUnitSelector() {
        if (this.multipliers.length && this.unit)
            return html `<div style="position:relative;">
        <mwc-icon-button
          style="margin:5px;"
          icon="more"
          ?disabled=${this.null || this.disabledSwitch}
          @click=${() => this.multiplierMenu?.show()}
        ></mwc-icon-button>
        <mwc-menu
          @selected=${this.selectMultiplier}
          fixed
          .anchor=${this.multiplierButton ?? null}
          >${this.renderMulplierList()}</mwc-menu
        >
      </div>`;
        else
            return html ``;
    }
    renderMulplierList() {
        return html `${this.multipliers.map(multiplier => html `<mwc-list-item ?selected=${multiplier === this.multiplier}
          >${multiplier === null
            ? get('textfield.noMultiplier')
            : multiplier}</mwc-list-item
        >`)}`;
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
        <mwc-textfield style="flex: auto;"
          .value=${this.value}
          .suffix=${this.suffix}
          .helperPersistent=${this.helperPersistent}
          .disabled=${this.disabled}
          .required=${this.required}
          label=${this.label}
          helper="${ifDefined(this.helper)}"
          validationMessage="${ifDefined(this.helper)}"
          pattern="${ifDefined(this.pattern)}"
          minLength="${ifDefined(this.minLength)}"
          maxLength="${ifDefined(this.maxLength)}"
          type="${ifDefined(this.type)}"
          min="${ifDefined(this.min)}"
          max="${ifDefined(this.max)}"
          @change="${(e) => this.value = e.target.value}">
        </mwc-textfield>
        ${this.renderUnitSelector()}
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: Boolean })
], WizardTextField.prototype, "nullable", void 0);
__decorate([
    property({ type: Array })
], WizardTextField.prototype, "multipliers", void 0);
__decorate([
    property({ type: String })
], WizardTextField.prototype, "value", void 0);
__decorate([
    property({ type: String })
], WizardTextField.prototype, "suffix", void 0);
__decorate([
    property({ type: Boolean })
], WizardTextField.prototype, "helperPersistent", void 0);
__decorate([
    property({ type: Boolean })
], WizardTextField.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], WizardTextField.prototype, "required", void 0);
__decorate([
    property({ type: String })
], WizardTextField.prototype, "label", void 0);
__decorate([
    property({ type: Boolean })
], WizardTextField.prototype, "dialogInitialFocus", void 0);
__decorate([
    property({ type: String })
], WizardTextField.prototype, "helper", void 0);
__decorate([
    property({ type: String })
], WizardTextField.prototype, "validationMessage", void 0);
__decorate([
    property({ type: String })
], WizardTextField.prototype, "pattern", void 0);
__decorate([
    property({ type: Number })
], WizardTextField.prototype, "minLength", void 0);
__decorate([
    property({ type: Number })
], WizardTextField.prototype, "maxLength", void 0);
__decorate([
    property({ type: String })
], WizardTextField.prototype, "type", void 0);
__decorate([
    property({ type: Number })
], WizardTextField.prototype, "min", void 0);
__decorate([
    property({ type: Number })
], WizardTextField.prototype, "max", void 0);
__decorate([
    property({ type: String })
], WizardTextField.prototype, "multiplier", null);
__decorate([
    property({ type: String })
], WizardTextField.prototype, "unit", void 0);
__decorate([
    state()
], WizardTextField.prototype, "null", null);
__decorate([
    property({ type: String })
], WizardTextField.prototype, "maybeValue", null);
__decorate([
    property({ type: String })
], WizardTextField.prototype, "defaultValue", void 0);
__decorate([
    property({ type: Array })
], WizardTextField.prototype, "reservedValues", void 0);
__decorate([
    query('mwc-textfield')
], WizardTextField.prototype, "textfield", void 0);
__decorate([
    query('mwc-switch')
], WizardTextField.prototype, "nullSwitch", void 0);
__decorate([
    query('mwc-menu')
], WizardTextField.prototype, "multiplierMenu", void 0);
__decorate([
    query('mwc-icon-button')
], WizardTextField.prototype, "multiplierButton", void 0);
WizardTextField = __decorate([
    customElement('wizard-textfield')
], WizardTextField);

export { WizardTextField };
