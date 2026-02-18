import { _ as __decorate } from '../../../common/tslib.es6-272d455c.js';
import { L as LitElement, c as css, p as property, s as state, a as customElement } from '../../../common/lit-element-5ba57723.js';
import { g as get } from '../../../common/directive-12ec8b14.js';
import { s as svg, h as html } from '../../../common/lit-html-c4cc555c.js';
import { r as repeat } from '../../../common/repeat-037689bb.js';
import '../../../@material/mwc-list.js';
import '../../../@material/mwc-list/mwc-list-item.js';
import '../../../@material/mwc-icon.js';
import { a as identity } from '../../../common/foundation-c1538e92.js';
import '../../../common/render-a1d0e246.js';
import '../../../common/mwc-list-base-7f6434a8.js';
import '../../../common/base-element-22e47ec1.js';
import '../../../common/observer-6d1a3681.js';
import '../../../common/if-defined-2d797dbf.js';
import '../../../common/foundation-7cea7f4a.js';
import '../../../common/mwc-list-item.css-a9f8123e.js';
import '../../../common/ripple-handlers-ce7fbbd4.js';
import '../../../common/ponyfill-44e20603.js';
import '../../../common/foundation-794fc3ac.js';
import '../../../common/class-map-360a3edc.js';
import '../../../common/style-map-46da9e52.js';
import '../../../@material/mwc-select.js';
import '../../../common/mwc-line-ripple-directive-08063da0.js';
import '../../../common/directive-ecbd2789.js';
import '../../../common/mwc-menu-c3ef0e11.js';
import '../../../common/form-element-4114444b.js';
import '../../../common/foundation-02d40539.js';
import './wizard-textfield.js';
import '../../../@material/mwc-icon-button.js';
import '../../../common/aria-property-2938771c.js';
import '../../../common/mwc-icon-button.css-113fd63b.js';
import '../../../@material/mwc-switch.js';
import '../../../@material/mwc-textfield.js';
import '../../../common/mwc-textfield.css-92997ed4.js';
import '../../../common/live-a225066a.js';
import './wizard-select.js';
import './wizard-checkbox.js';
import '../../../@material/mwc-formfield.js';
import '../../../@material/mwc-checkbox.js';

const elementIcon = svg `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M9,7H15V9H11V11H15V13H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
const attributeIcon = svg `<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
</svg>`;
const contentIcon = svg `<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V10H13V9H11V15H13V14H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;

const diffTypeToIcon = new Map();
diffTypeToIcon.set('Attribute', attributeIcon);
diffTypeToIcon.set('Content', contentIcon);
diffTypeToIcon.set('Element', elementIcon);
function getDiffFilterSelector(elementToBeCompared, rootElementToBeCompared, filters) {
    const querySelector = rootElementToBeCompared === elementToBeCompared
        ? ':scope'
        : Object.keys(filters).find(selector => Array.from(rootElementToBeCompared.querySelectorAll(selector)).includes(elementToBeCompared));
    return querySelector ? filters[querySelector] : undefined;
}
function shouldFilterElement(element, filter) {
    if (!filter || !filter.full) {
        return false;
    }
    const consumer = filter.full;
    return typeof consumer === 'boolean' ? consumer : consumer(element);
}
function shouldFilterAttribute(element, attribute, filter) {
    if (!filter || !filter.attributes || !filter.attributes[attribute]) {
        return false;
    }
    const consumer = filter.attributes[attribute];
    return typeof consumer === 'boolean' ? consumer : consumer(element);
}
/**
 * Returns the description of the Element that differs.
 *
 * @param element - The Element to retrieve the identifier from.
 */
function describe(element) {
    const id = identity(element);
    return typeof id === 'string' ? id : get('unidentifiable');
}
/**
 * Check if there are any attribute values changed between the two elements.
 *
 * @param elementToBeCompared     - The element to check for differences.
 * @param elementToCompareAgainst - The element used to check against.
 */
function diffSclAttributes(elementToBeCompared, elementToCompareAgainst, filterToIgnore, searchElementToBeCompared) {
    const attrDiffs = [];
    // First check if there is any text inside the element and there should be no child elements.
    const newText = elementToBeCompared.textContent?.trim() ?? '';
    const oldText = elementToCompareAgainst.textContent?.trim() ?? '';
    if (elementToBeCompared.childElementCount === 0 &&
        elementToCompareAgainst.childElementCount === 0 &&
        newText !== oldText) {
        const shouldFilter = shouldFilterElement(elementToBeCompared, getDiffFilterSelector(elementToBeCompared, searchElementToBeCompared, filterToIgnore));
        if (!shouldFilter) {
            attrDiffs.push([
                'value',
                { type: 'Content', newValue: newText, oldValue: oldText },
            ]);
        }
    }
    // Next check if there are any difference between attributes.
    const attributeNames = new Set(elementToCompareAgainst
        .getAttributeNames()
        .concat(elementToBeCompared.getAttributeNames()));
    for (const name of attributeNames) {
        const shouldFilter = shouldFilterAttribute(elementToBeCompared, name, getDiffFilterSelector(elementToBeCompared, searchElementToBeCompared, filterToIgnore));
        if (!shouldFilter &&
            elementToCompareAgainst.getAttribute(name) !==
                elementToBeCompared.getAttribute(name)) {
            attrDiffs.push([
                name,
                {
                    type: 'Attribute',
                    newValue: elementToBeCompared.getAttribute(name),
                    oldValue: elementToCompareAgainst.getAttribute(name),
                },
            ]);
        }
    }
    return attrDiffs;
}
/**
 * Function to retrieve the identity to compare 2 children on the same level.
 * This means we only need to last part of the Identity string to compare the children.
 *
 * @param element - The element to retrieve the identity from.
 */
function identityForCompare(element) {
    let identityOfElement = identity(element);
    if (typeof identityOfElement === 'string') {
        identityOfElement = identityOfElement.split('>').pop() ?? '';
    }
    return identityOfElement;
}
/**
 * Custom method for comparing to check if 2 elements are the same. Because they are on the same level
 * we don't need to compare the full identity, we just compare the part of the Element itself.
 *
 * <b>Remark</b>Private elements are already filtered out, so we don't need to bother them.
 *
 * @param newValue - The new element to compare with the old element.
 * @param oldValue - The old element to which the new element is compared.
 */
function isSame(newValue, oldValue) {
    return (newValue.tagName === oldValue.tagName &&
        identityForCompare(newValue) === identityForCompare(oldValue));
}
/**
 * List of all differences between children elements that both old and new element have.
 * The list contains children both elements have and children that were added or removed
 * from the new element.
 * <b>Remark</b>: Private elements are ignored.
 *
 * @param elementToBeCompared     - The element to check for differences.
 * @param elementToCompareAgainst - The element used to check against.
 */
function diffSclChilds(elementToBeCompared, elementToCompareAgainst, filterToIgnore, searchElementToBeCompared, searchElementToCompareAgainst) {
    const childDiffs = [];
    const childrenToBeCompared = Array.from(elementToBeCompared.children);
    const childrenToCompareTo = Array.from(elementToCompareAgainst.children);
    childrenToBeCompared.forEach(newElement => {
        if (!newElement.closest('Private')) {
            const shouldFilter = shouldFilterElement(newElement, getDiffFilterSelector(newElement, searchElementToBeCompared, filterToIgnore));
            if (!shouldFilter) {
                const twinIndex = childrenToCompareTo.findIndex(ourChild => isSame(newElement, ourChild));
                const oldElement = twinIndex > -1 ? childrenToCompareTo[twinIndex] : null;
                if (oldElement) {
                    childrenToCompareTo.splice(twinIndex, 1);
                    childDiffs.push({
                        type: 'Element',
                        newValue: newElement,
                        oldValue: oldElement,
                    });
                }
                else {
                    childDiffs.push({
                        type: 'Element',
                        newValue: newElement,
                        oldValue: null,
                    });
                }
            }
        }
    });
    childrenToCompareTo.forEach(oldElement => {
        if (!oldElement.closest('Private')) {
            const shouldFilter = shouldFilterElement(oldElement, getDiffFilterSelector(oldElement, searchElementToCompareAgainst, filterToIgnore));
            if (!shouldFilter) {
                childDiffs.push({
                    type: 'Element',
                    newValue: null,
                    oldValue: oldElement,
                });
            }
        }
    });
    return childDiffs;
}
/**
 * Generate HTML (TemplateResult) containing all the differences between the two elements passed.
 * If null is returned there are no differences between the two elements.
 *
 * @param elementToBeCompared     - The element to check for differences.
 * @param elementToCompareAgainst - The element used to check against.
 */
function renderDiff(elementToBeCompared, elementToCompareAgainst, filterToIgnore = {}) {
    return renderDiffInternal(elementToBeCompared, elementToCompareAgainst, filterToIgnore, elementToBeCompared, elementToCompareAgainst);
}
function renderDiffInternal(elementToBeCompared, elementToCompareAgainst, filterToIgnore = {}, searchElementToBeCompared, searchElementToCompareAgainst) {
    // Determine the ID from the current tag. These can be numbers or strings.
    let idTitle = identity(elementToBeCompared).toString();
    if (idTitle === 'NaN') {
        idTitle = undefined;
    }
    // Set the root elements if they are not defined yet
    searchElementToBeCompared = searchElementToBeCompared || elementToBeCompared;
    searchElementToCompareAgainst =
        searchElementToCompareAgainst || elementToCompareAgainst;
    const attrDiffs = diffSclAttributes(elementToBeCompared, elementToCompareAgainst, filterToIgnore, searchElementToBeCompared);
    // Next check which elements are added, deleted or in both elements.
    const childDiffs = diffSclChilds(elementToBeCompared, elementToCompareAgainst, filterToIgnore, searchElementToBeCompared, searchElementToCompareAgainst);
    const childAddedOrDeleted = [];
    const childToCompare = [];
    childDiffs.forEach(diff => {
        if (!diff.oldValue || !diff.newValue) {
            childAddedOrDeleted.push(diff);
        }
        else {
            childToCompare.push(diff);
        }
    });
    // These children exist in both old and new element, let's check if there are any difference in the children.
    const childToCompareTemplates = childToCompare
        .map(diff => renderDiff(diff.newValue, diff.oldValue, filterToIgnore))
        .filter(result => result !== null);
    // If there are difference generate the HTML otherwise just return null.
    if (childToCompareTemplates.length > 0 ||
        attrDiffs.length > 0 ||
        childAddedOrDeleted.length > 0) {
        return html ` ${attrDiffs.length > 0 || childAddedOrDeleted.length > 0
            ? html `<div class="container container--alt">
          <div class="list__container list__container--left">
            <mwc-list multi right nonInteractive>
              ${repeat(attrDiffs, e => e, ([name, diff]) => html `<mwc-list-item right twoLine graphic="icon">
                    ${diff.oldValue !== null
                ? html `
                          <span>
                            ${name}:
                            ${diff.oldValue === '' ? '""' : diff.oldValue}
                          </span>
                          <span slot="secondary">${idTitle}</span>
                          <mwc-icon slot="graphic">
                            ${diffTypeToIcon.get(diff.type)}
                          </mwc-icon>
                        `
                : ''}
                  </mwc-list-item>`)}
              ${repeat(childAddedOrDeleted, e => e, diff => html ` <mwc-list-item right twoLine graphic="icon">
                    ${diff.oldValue
                ? html `
                          <span>${diff.oldValue.tagName}</span>
                          <span slot="secondary">
                            ${describe(diff.oldValue)}
                          </span>
                          <mwc-icon slot="graphic">
                            ${diffTypeToIcon.get(diff.type)}
                          </mwc-icon>
                        `
                : ''}
                  </mwc-list-item>`)}
            </mwc-list>
          </div>
          <div class="list__container">
            <mwc-list multi left nonInteractive>
              ${repeat(attrDiffs, e => e, ([name, diff]) => html ` <mwc-list-item left twoLine graphic="icon">
                    ${diff.newValue !== null
                ? html `
                          <span>
                            ${name}:
                            ${diff.newValue === '' ? '""' : diff.newValue}
                          </span>
                          <span slot="secondary">${idTitle}</span>
                          <mwc-icon slot="graphic">
                            ${diffTypeToIcon.get(diff.type)}
                          </mwc-icon>
                        `
                : ''}
                  </mwc-list-item>`)}
              ${repeat(childAddedOrDeleted, e => e, diff => html ` <mwc-list-item left twoLine graphic="icon">
                    ${diff.newValue
                ? html `
                          <span>${diff.newValue.tagName}</span>
                          <span slot="secondary">
                            ${describe(diff.newValue)}
                          </span>
                          <mwc-icon slot="graphic">
                            ${diffTypeToIcon.get(diff.type)}
                          </mwc-icon>
                        `
                : ''}
                  </mwc-list-item>`)}
            </mwc-list>
          </div>
        </div>`
            : ''}
    ${childToCompareTemplates}`;
    }
    return null;
}

let PlainCompareList = class PlainCompareList extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The title of the left list
         */
        this.leftHandTitle = '';
        /**
         * The title of the right list
         */
        this.rightHandTitle = '';
        /**
         * The subtitle of the left list (optional)
         */
        this.leftHandSubtitle = '';
        /**
         * The subtitle of the right list (optional)
         */
        this.rightHandSubtitle = '';
        this.filterMutables = true;
    }
    render() {
        return html `
      ${this.renderFilterCheckbox()}
      <div class="container container--alt">
        <div class="list__container list__container--left">
          <h3 class="mdc-dialog__title">${this.leftHandTitle}</h3>
          ${this.leftHandSubtitle && this.leftHandSubtitle.length > 0
            ? html `<h5 class="mdc-dialog__title">${this.leftHandSubtitle}</h5> `
            : ''}
        </div>
        <div class="list__container">
          <h3 class="mdc-dialog__title">${this.rightHandTitle}</h3>
          ${this.rightHandSubtitle && this.rightHandSubtitle.length > 0
            ? html `<h5 class="mdc-dialog__title">
                ${this.rightHandSubtitle}
              </h5> `
            : ''}
        </div>
      </div>
      ${this.leftHandObject && this.rightHandObject
            ? html `
            ${renderDiff(this.rightHandObject, this.leftHandObject, this.filterMutables ? this.filterToIgnore : {})}
          `
            : ''}
    `;
    }
    renderFilterCheckbox() {
        if (this.filterToIgnore) {
            return html `
        <div class="container">
          <div class="flex"></div>
          <mwc-formfield label="${get('compare.filterMutables')}">
            <mwc-checkbox
              ?checked=${this.filterMutables}
              @change=${() => (this.filterMutables = !this.filterMutables)}
            >
            </mwc-checkbox>
          </mwc-formfield>
        </div>
      `;
        }
        return html ``;
    }
};
PlainCompareList.styles = css `
    mwc-list-item {
      --mdc-list-item-graphic-margin: 0;
    }

    .mdc-dialog__title {
      padding: 0 16px;
    }

    .container {
      display: flex;
      gap: 4px;
    }

    .container--alt {
      background: var(--base2);
    }

    .list__container {
      width: 50%;
      background: var(--base3);
    }
    .list__container--left {
      text-align: right;
    }
    .flex {
      flex: 1;
    }

    mwc-list-item[right] {
      text-align: right;
      direction: rtl;
    }
  `;
__decorate([
    property({ type: String })
], PlainCompareList.prototype, "leftHandTitle", void 0);
__decorate([
    property({ type: String })
], PlainCompareList.prototype, "rightHandTitle", void 0);
__decorate([
    property({ type: Object })
], PlainCompareList.prototype, "leftHandObject", void 0);
__decorate([
    property({ type: Object })
], PlainCompareList.prototype, "rightHandObject", void 0);
__decorate([
    property({ type: Object })
], PlainCompareList.prototype, "filterToIgnore", void 0);
__decorate([
    property({ type: String })
], PlainCompareList.prototype, "leftHandSubtitle", void 0);
__decorate([
    property({ type: String })
], PlainCompareList.prototype, "rightHandSubtitle", void 0);
__decorate([
    state()
], PlainCompareList.prototype, "filterMutables", void 0);
PlainCompareList = __decorate([
    customElement('plain-compare-list')
], PlainCompareList);

export { PlainCompareList };
