import { _ as __decorate } from '../../../common/tslib.es6-272d455c.js';
import { c as css, u as unsafeCSS, p as property, q as query, a as customElement } from '../../../common/lit-element-5ba57723.js';
import { g as get } from '../../../common/directive-12ec8b14.js';
import { h as html } from '../../../common/lit-html-c4cc555c.js';
import '../../../@material/mwc-icon-button.js';
import '../../../@material/mwc-dialog.js';
import { FilteredList } from '../filtered-list.js';
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
import '../../../common/inert.esm-5c96ec71.js';
import '../../../common/events-706ce356.js';
import '../../../common/observer-6d1a3681.js';
import '../../../@material/mwc-checkbox.js';
import '../../../common/form-element-4114444b.js';
import '../../../common/if-defined-2d797dbf.js';
import '../../../@material/mwc-formfield.js';
import '../../../@material/mwc-textfield.js';
import '../../../common/mwc-textfield.css-92997ed4.js';
import '../../../common/mwc-line-ripple-directive-08063da0.js';
import '../../../common/directive-ecbd2789.js';
import '../../../common/live-a225066a.js';
import '../../../@material/mwc-list.js';
import '../../../common/mwc-list-base-7f6434a8.js';
import '../../../@material/mwc-list/mwc-list-item.js';
import '../../../common/mwc-list-item.css-a9f8123e.js';
import '../../../@material/mwc-list/mwc-check-list-item.js';
import '../../../common/mwc-control-list-item.css-ee299e27.js';

/**
 * A mwc-list with mwc-textfield that filters the list items for given or separated terms
 */
let FilterButton = class FilterButton extends FilteredList {
    constructor() {
        super(...arguments);
        this.disabled = false;
    }
    toggleList() {
        this.filterDialog.show();
    }
    onClosing() {
        const selectedItems = [];
        if (this.selected) {
            if (this.selected instanceof Array) {
                this.selected.forEach(item => selectedItems.push(item.value));
            }
            else {
                selectedItems.push(this.selected.value);
            }
            this.dispatchEvent(newSelectedItemsChangedEvent(selectedItems));
        }
    }
    render() {
        return html `
      <mwc-icon-button
        icon="${this.icon}"
        @click="${this.toggleList}"
        ?disabled="${this.disabled}"
      >
        <slot name="icon"></slot>
      </mwc-icon-button>
      <mwc-dialog
        id="filterDialog"
        heading="${this.header ? this.header : get('filter')}"
        scrimClickAction=""
        @closing="${() => this.onClosing()}"
      >
        ${super.render()}
        <mwc-button slot="primaryAction" dialogAction="close">
          ${get('close')}
        </mwc-button>
      </mwc-dialog>
    `;
    }
};
FilterButton.styles = css `
    ${unsafeCSS(FilteredList.styles)}

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    mwc-dialog {
      --mdc-dialog-max-height: calc(100vh - 150px);
    }
  `;
__decorate([
    property()
], FilterButton.prototype, "header", void 0);
__decorate([
    property()
], FilterButton.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], FilterButton.prototype, "disabled", void 0);
__decorate([
    query('#filterDialog')
], FilterButton.prototype, "filterDialog", void 0);
FilterButton = __decorate([
    customElement('oscd-filter-button')
], FilterButton);
function newSelectedItemsChangedEvent(selectedItems, eventInitDict) {
    return new CustomEvent('selected-items-changed', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { selectedItems, ...eventInitDict?.detail },
    });
}

export { FilterButton };
