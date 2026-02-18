import { _ as __decorate } from '../../../../common/tslib.es6-272d455c.js';
import { c as css, p as property, s as state, f as queryAll, q as query, a as customElement, L as LitElement } from '../../../../common/lit-element-5ba57723.js';
import { g as get } from '../../../../common/directive-12ec8b14.js';
import { h as html, b as TemplateResult } from '../../../../common/lit-html-c4cc555c.js';
import { c as classMap } from '../../../../common/class-map-360a3edc.js';
import { P as PluginStateApi } from '../../../../common/plugin-state-api-fe1fb55f.js';
import { b as newActionEvent, i as isSimple, c as isCreate, d as isDelete, e as isUpdate$1, f as isMove, g as isReplace, X as XMLEditor, a as newPendingStateEvent, n as newOpenDocEvent } from '../../../../common/editor-9a47d53d.js';
import { n as newLogEvent, c as newSettingsUIEvent } from '../../../../common/settings-0b71b26d.js';
import '../../../../@material/mwc-icon.js';
import '../../../../@material/mwc-icon-button.js';
import '../../../../@material/mwc-linear-progress.js';
import { List } from '../../../../@material/mwc-list.js';
import '../../../../@material/mwc-list/mwc-list-item.js';
import '../../../../@material/mwc-tab.js';
import '../../../../@material/mwc-tab-bar.js';
import '../../../../@material/mwc-top-app-bar-fixed.js';
import '../../../../@material/mwc-drawer.js';
import '../../../../@material/mwc-button.js';
import { Dialog } from '../../../../@material/mwc-dialog.js';
import '../../../../@material/mwc-formfield.js';
import '../../../../@material/mwc-list/mwc-check-list-item.js';
import '../../../../@material/mwc-list/mwc-radio-list-item.js';
import '../../../../@material/mwc-select.js';
import '../../../../@material/mwc-switch.js';
import '../../../../@material/mwc-textfield.js';
import '../../addons/Settings.js';
import '../../addons/Waiter.js';
import { i as ifDefined } from '../../../../common/if-defined-2d797dbf.js';
import '../../../../@material/mwc-icon-button-toggle.js';
import '../../../../common/mwc-menu-c3ef0e11.js';
import { f as formatXml } from '../../../../common/foundation-02d40539.js';
import '../../../../ace-custom-element.js';
import '../wizard-checkbox.js';
import '../wizard-textfield.js';
import '../wizard-select.js';
import { c as checkValidity, w as wizardInputSelector, r as reportValidity, n as newWizardEvent, i as isWizardFactory, a as identity, g as getReference } from '../../../../common/foundation-c1538e92.js';
import { newHistoryUIEvent, HistoryUIKind, newEmptyIssuesEvent } from './History.js';
import { i as initializeNsdoc } from '../../../../common/nsdoc-7d978e3b.js';
import { n as newConfigurePluginEvent } from '../../../../common/plugin.events-9207ceba.js';
import { p as pluginTag } from '../../../../common/plugin-tag-ba350bac.js';
import '../../../../common/render-a1d0e246.js';
import '../../../../common/edit-fdcf9a3f.js';
import '../../../../common/ripple-handlers-ce7fbbd4.js';
import '../../../../common/ponyfill-44e20603.js';
import '../../../../common/base-element-22e47ec1.js';
import '../../../../common/foundation-794fc3ac.js';
import '../../../../common/foundation-7cea7f4a.js';
import '../../../../common/style-map-46da9e52.js';
import '../../../../common/aria-property-2938771c.js';
import '../../../../common/mwc-icon-button.css-113fd63b.js';
import '../../../../common/mwc-list-base-7f6434a8.js';
import '../../../../common/observer-6d1a3681.js';
import '../../../../common/mwc-list-item.css-a9f8123e.js';
import '../../../../common/inert.esm-5c96ec71.js';
import '../../../../common/events-706ce356.js';
import '../../../../common/form-element-4114444b.js';
import '../../../../@material/mwc-checkbox.js';
import '../../../../common/mwc-control-list-item.css-ee299e27.js';
import '../../../../@material/mwc-radio.js';
import '../../../../common/mwc-line-ripple-directive-08063da0.js';
import '../../../../common/directive-ecbd2789.js';
import '../../../../common/mwc-textfield.css-92997ed4.js';
import '../../../../common/live-a225066a.js';
import '../../../../common/translate-14164d79.js';
import '../../../../common/de-8e87df6b.js';
import '../../../../common/en-412d853d.js';
import '../WizardDivider.js';
import '../../../../@material/mwc-snackbar.js';
import '../../filtered-list.js';

/**
 * @deprecated Use the new edit event V2 API instead.
 */
function isComplex(edit) {
    return edit instanceof Array;
}
/**
 * @deprecated Use the new edit event V2 API instead.
 */
function isInsert(edit) {
    return edit.parent !== undefined;
}
/**
 * @deprecated Use the new edit event V2 API instead.
 */
function isNamespaced(value) {
    return value !== null && typeof value !== 'string';
}
/**
 * @deprecated Use the new edit event V2 API instead.
 */
function isUpdate(edit) {
    return edit.element !== undefined;
}
/**
 * @deprecated Use the new edit event V2 API instead.
 */
function isRemove(edit) {
    return (edit.parent === undefined && edit.node !== undefined);
}
/**
 * @deprecated Use the new edit event V2 API instead.
 */
function newEditEvent(edit, initiator = 'user') {
    return new CustomEvent('oscd-edit', {
        composed: true,
        bubbles: true,
        detail: {
            edit: edit,
            initiator: initiator,
        },
    });
}

function newEditEventV2(edit, options) {
    return new CustomEvent('oscd-edit-v2', {
        composed: true,
        bubbles: true,
        detail: { ...options, edit },
    });
}

class OscdApi {
    constructor(pluginTag) {
        this.pluginState = new PluginStateApi(pluginTag);
    }
}

function newValidateEvent(eventInitDict) {
    return new CustomEvent('validate', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
    });
}

function renderWizardInput(input) {
    if (input instanceof TemplateResult)
        return input;
    if (input.kind === 'Checkbox')
        return html `<wizard-checkbox
      ?nullable=${input.nullable}
      ?defaultChecked=${input.default}
      ?dialogInitialFocus=${input.dialogInitialFocus}
      label="${input.label}"
      helper="${ifDefined(input.helper)}"
      .maybeValue=${input.maybeValue}
    ></wizard-checkbox>`;
    if (input.kind === 'Select')
        return html `<wizard-select
      ?nullable=${input.nullable}
      ?dialogInitialFocus=${input.dialogInitialFocus}
      label="${input.label}"
      helper="${ifDefined(input.helper)}"
      defaultValue="${ifDefined(input.default)}"
      validationMessage="${ifDefined(input.valadationMessage)}"
      .maybeValue=${input.maybeValue}
      >${input.values.map(value => html `<mwc-list-item value="${value}">${value}</mwc-list-item>`)}</wizard-select
    >`;
    return html `<wizard-textfield
    ?nullable=${input.nullable}
    ?required=${input.required}
    ?disabled=${input.disabled}
    ?dialogInitialFocus=${input.dialogInitialFocus}
    label="${input.label}"
    defaultValue="${ifDefined(input.default)}"
    helper="${ifDefined(input.helper)}"
    validationMessage="${ifDefined(input.helper)}"
    unit="${ifDefined(input.unit)}"
    .multipliers=${input.multipliers ?? []}
    .multiplier=${input.multiplier ?? null}
    suffix="${ifDefined(input.suffix)}"
    .maybeValue=${input.maybeValue}
    pattern="${ifDefined(input.pattern)}"
    minLength="${ifDefined(input.minLength)}"
    maxLength="${ifDefined(input.maxLength)}"
    type="${ifDefined(input.type)}"
    min="${ifDefined(input.min)}"
    max="${ifDefined(input.max)}"
  ></wizard-textfield>`;
}
function dialogInputs(dialog) {
    return Array.from(dialog?.querySelectorAll(wizardInputSelector) ?? []);
}
function dialogValid(dialog) {
    return dialogInputs(dialog).every(checkValidity);
}
function codeAction(element) {
    return inputs => {
        const text = inputs[0].value;
        if (!text || !element.parentElement)
            return [];
        const desc = {
            parent: element.parentElement,
            reference: element.nextSibling,
            element,
        };
        const del = {
            old: desc,
            checkValidity: () => true,
        };
        const cre = {
            new: {
                ...desc,
                element: new DOMParser().parseFromString(text, 'application/xml')
                    .documentElement,
            },
            checkValidity: () => true,
        };
        return [
            {
                actions: [del, cre],
                title: get('code.log', {
                    id: identity(element),
                }),
            },
        ];
    };
}
/** A wizard style dialog consisting of several pages commiting some
 * [[`EditorAction`]] on completion and aborting on dismissal. */
let WizardDialog = class WizardDialog extends LitElement {
    /** The `Dialog` showing the active [[`WizardPage`]]. */
    get dialog() {
        return this.dialogs[this.pageIndex];
    }
    get code() {
        return ((this.dialog?.querySelector('mwc-icon-button-toggle')?.on ?? false) &&
            localStorage.getItem('mode') === 'pro');
    }
    /** Checks the inputs of all [[`WizardPage`]]s for validity. */
    checkValidity() {
        return Array.from(this.inputs).every(checkValidity);
    }
    get firstInvalidPage() {
        return Array.from(this.dialogs).findIndex(dialog => !dialogValid(dialog));
    }
    prev() {
        if (this.pageIndex <= 0)
            return;
        this.pageIndex--;
        this.dialog?.show();
    }
    async next() {
        if (dialogValid(this.dialog)) {
            if (this.wizard.length > this.pageIndex + 1)
                this.pageIndex++;
            this.dialog?.show();
        }
        else {
            this.dialog?.show();
            await this.dialog?.updateComplete;
            dialogInputs(this.dialog).map(reportValidity);
        }
    }
    /** Commits `action` if all inputs are valid, reports validity otherwise. */
    async act(action, primary = true) {
        if (action === undefined)
            return false;
        const wizardInputs = Array.from(this.inputs);
        const wizardList = (this.dialog?.querySelector('filtered-list,mwc-list'));
        if (!this.checkValidity()) {
            this.pageIndex = this.firstInvalidPage;
            wizardInputs.map(reportValidity);
            return false;
        }
        const wizardActions = action(wizardInputs, this, wizardList);
        if (wizardActions.length > 0) {
            if (primary)
                this.wizard[this.pageIndex].primary = undefined;
            else
                this.wizard[this.pageIndex].secondary = undefined;
            this.dispatchEvent(newWizardEvent());
        }
        wizardActions.forEach(wa => isWizardFactory(wa)
            ? this.dispatchEvent(newWizardEvent(wa))
            : this.dispatchEvent(newActionEvent(wa)));
        return true;
    }
    /** Triggers menu action callback */
    async menuAct(action) {
        if (!action)
            return;
        action(this);
    }
    onClosed(ae) {
        if (!(ae.target instanceof Dialog && ae.detail?.action))
            return;
        if (ae.detail.action === 'close')
            this.dispatchEvent(newWizardEvent());
        else if (ae.detail.action === 'prev')
            this.prev();
        else if (ae.detail.action === 'next')
            this.next();
    }
    constructor() {
        super();
        /** The [[`Wizard`]] implemented by this dialog. */
        this.wizard = [];
        /** Index of the currently active [[`WizardPage`]] */
        this.pageIndex = 0;
        this.act = this.act.bind(this);
        this.renderPage = this.renderPage.bind(this);
    }
    updated(changedProperties) {
        if (changedProperties.has('wizard')) {
            this.pageIndex = 0;
            while (this.wizard.findIndex(page => page.initial) > this.pageIndex &&
                dialogValid(this.dialog)) {
                this.dialog?.close();
                this.next();
            }
            this.dialog?.show();
        }
        if (this.wizard[this.pageIndex]?.primary?.auto) {
            this.updateComplete.then(() => this.act(this.wizard[this.pageIndex].primary.action));
        }
        if (this.actionsMenu)
            this.actionsMenu.anchor = this.menuButton;
    }
    renderMenu(page) {
        const someIconsDefined = page.menuActions?.some(menuAction => menuAction.icon);
        return html ` <mwc-icon-button
        icon="more_vert"
        @click=${() => {
            if (!this.actionsMenu.open)
                this.actionsMenu.show();
            else
                this.actionsMenu.close();
        }}
      ></mwc-icon-button>
      <mwc-menu class="actions-menu" corner="BOTTOM_RIGHT" menuCorner="END">
        ${page.menuActions.map(menuAction => html `<mwc-list-item
              .graphic=${someIconsDefined ? 'icon' : null}
              @click=${() => this.menuAct(menuAction.action)}
            >
              <span>${menuAction.label}</span>
              ${menuAction.icon
            ? html `<mwc-icon slot="graphic">${menuAction.icon}</mwc-icon>`
            : html ``}
            </mwc-list-item>`)}
      </mwc-menu>`;
    }
    renderPage(page, index) {
        const isProMode = localStorage.getItem('mode') === 'pro';
        const hasPageElement = Boolean(page.element);
        const showCodeToggleButton = hasPageElement && isProMode;
        let extraWidth = 0;
        if (showCodeToggleButton && page.menuActions) {
            extraWidth = 96;
        }
        else if (showCodeToggleButton || page.menuActions) {
            extraWidth = 48;
        }
        else {
            extraWidth = 0;
        }
        return html `<mwc-dialog
      defaultAction="next"
      heading=${page.title}
      @closed=${this.onClosed}
      style="--mdc-dialog-min-width:calc(100% + ${extraWidth}px)"
    >
      ${showCodeToggleButton || page.menuActions
            ? html `<nav>
            ${showCodeToggleButton
                ? html `<mwc-icon-button-toggle
                  onicon="code"
                  officon="code_off"
                  @click=${() => this.requestUpdate()}
                ></mwc-icon-button-toggle>`
                : ''}
            ${page.menuActions ? this.renderMenu(page) : ''}
          </nav>`
            : ''}
      <div id="wizard-content">
        ${this.code && page.element
            ? html `<ace-editor
              base-path="/public/ace"
              wrap
              soft-tabs
              style="width: 80vw; height: calc(100vh - 240px);"
              theme="ace/theme/solarized_${localStorage.getItem('theme')}"
              mode="ace/mode/xml"
              value="${formatXml(new XMLSerializer().serializeToString(page.element))}"
            ></ace-editor>`
            : page.content?.map(renderWizardInput)}
      </div>
      ${index > 0
            ? html `<mwc-button
            slot="secondaryAction"
            dialogAction="prev"
            icon="navigate_before"
            label=${this.wizard?.[index - 1].title}
          ></mwc-button>`
            : html ``}
      ${page.secondary
            ? html `<mwc-button
            slot="secondaryAction"
            @click=${() => this.act(page.secondary?.action, false)}
            icon="${page.secondary.icon}"
            label="${page.secondary.label}"
          ></mwc-button>`
            : html `<mwc-button
            slot="secondaryAction"
            dialogAction="close"
            label="${get('close')}"
            style="--mdc-theme-primary: var(--mdc-theme-error)"
          ></mwc-button>`}
      ${this.code && page.element
            ? html `<mwc-button
            slot="primaryAction"
            @click=${() => this.act(codeAction(page.element))}
            icon="code"
            label="${get('save')}"
            trailingIcon
          ></mwc-button>`
            : page.primary
                ? html `<mwc-button
            slot="primaryAction"
            @click=${() => this.act(page.primary?.action)}
            icon="${page.primary.icon}"
            label="${page.primary.label}"
            trailingIcon
          ></mwc-button>`
                : index + 1 < (this.wizard?.length ?? 0)
                    ? html `<mwc-button
            slot="primaryAction"
            dialogAction="next"
            icon="navigate_next"
            label=${this.wizard?.[index + 1].title}
            trailingicon
          ></mwc-button>`
                    : html ``}
    </mwc-dialog>`;
    }
    render() {
        return html `${this.wizard.map(this.renderPage)}`;
    }
};
WizardDialog.styles = css `
    mwc-dialog {
      --mdc-dialog-max-width: 92vw;
    }

    mwc-dialog > nav {
      position: absolute;
      top: 8px;
      right: 14px;
      color: var(--base00);
    }

    mwc-dialog > nav > mwc-icon-button-toggle[on] {
      color: var(--mdc-theme-primary);
    }

    #wizard-content {
      display: flex;
      flex-direction: column;
    }

    #wizard-content > * {
      display: block;
      margin-top: 16px;
    }

    *[iconTrailing='search'] {
      --mdc-shape-small: 28px;
    }
  `;
__decorate([
    property({ type: Array })
], WizardDialog.prototype, "wizard", void 0);
__decorate([
    state()
], WizardDialog.prototype, "pageIndex", void 0);
__decorate([
    queryAll('mwc-dialog')
], WizardDialog.prototype, "dialogs", void 0);
__decorate([
    queryAll(wizardInputSelector)
], WizardDialog.prototype, "inputs", void 0);
__decorate([
    query('.actions-menu')
], WizardDialog.prototype, "actionsMenu", void 0);
__decorate([
    query('mwc-icon-button[icon="more_vert"]')
], WizardDialog.prototype, "menuButton", void 0);
WizardDialog = __decorate([
    customElement('wizard-dialog')
], WizardDialog);

/** `LitElement` mixin that adds a `workflow` property which [[`Wizard`]]s are
 * queued onto on incoming [[`WizardEvent`]]s, first come first displayed. */
let OscdWizards = class OscdWizards extends LitElement {
    constructor() {
        super(...arguments);
        /** FIFO queue of [[`Wizard`]]s to display. */
        this.workflow = [];
    }
    onWizard(we) {
        const wizard = we.detail.wizard;
        if (wizard === null)
            this.workflow.shift();
        else if (we.detail.subwizard)
            this.workflow.unshift(wizard);
        else
            this.workflow.push(wizard);
        this.requestUpdate('workflow');
        this.updateComplete.then(() => this.wizardUI.updateComplete.then(() => this.wizardUI.dialog?.updateComplete.then(() => this.wizardUI.dialog?.focus())));
    }
    connectedCallback() {
        super.connectedCallback();
        this.host.addEventListener('wizard', this.onWizard.bind(this));
        this.host.addEventListener('editor-action', () => this.wizardUI.requestUpdate());
    }
    render() {
        return html `<slot></slot>
      <wizard-dialog .wizard=${this.workflow[0]?.() ?? []}></wizard-dialog>`;
    }
};
__decorate([
    property({
        type: Object,
    })
], OscdWizards.prototype, "host", void 0);
__decorate([
    state()
], OscdWizards.prototype, "workflow", void 0);
__decorate([
    query('wizard-dialog')
], OscdWizards.prototype, "wizardUI", void 0);
OscdWizards = __decorate([
    customElement('oscd-wizards')
], OscdWizards);

function convertEditActiontoV1(action) {
    if (isSimple(action)) {
        return convertSimpleAction(action);
    }
    else {
        return action.actions.map(convertSimpleAction);
    }
}
function convertSimpleAction(action) {
    if (isCreate(action)) {
        return convertCreate(action);
    }
    else if (isDelete(action)) {
        return convertDelete(action);
    }
    else if (isUpdate$1(action)) {
        return convertUpdate(action);
    }
    else if (isMove(action)) {
        return convertMove(action);
    }
    else if (isReplace(action)) {
        return convertReplace(action);
    }
    throw new Error('Unknown action type');
}
function convertCreate(action) {
    let reference = null;
    if (action.new.reference === undefined &&
        action.new.element instanceof Element &&
        action.new.parent instanceof Element) {
        reference = getReference(action.new.parent, action.new.element.tagName);
    }
    else {
        reference = action.new.reference ?? null;
    }
    return {
        parent: action.new.parent,
        node: action.new.element,
        reference
    };
}
function convertDelete(action) {
    return {
        node: action.old.element
    };
}
function convertUpdate(action) {
    const oldAttributesToRemove = {};
    Array.from(action.element.attributes).forEach(attr => {
        oldAttributesToRemove[attr.name] = null;
    });
    const attributes = {
        ...oldAttributesToRemove,
        ...action.newAttributes
    };
    return {
        element: action.element,
        attributes
    };
}
function convertMove(action) {
    if (action.new.reference === undefined) {
        action.new.reference = getReference(action.new.parent, action.old.element.tagName);
    }
    return {
        parent: action.new.parent,
        node: action.old.element,
        reference: action.new.reference ?? null
    };
}
function convertReplace(action) {
    const oldChildren = action.old.element.children;
    // We have to clone the children, because otherwise undoing the action would remove the children from the old element, because append removes the old parent
    const copiedChildren = Array.from(oldChildren).map(e => e.cloneNode(true));
    const newNode = action.new.element.cloneNode(true);
    newNode.append(...Array.from(copiedChildren));
    const parent = action.old.element.parentElement;
    if (!parent) {
        throw new Error('Replace action called without parent in old element');
    }
    const reference = action.old.element.nextSibling;
    const remove = { node: action.old.element };
    const insert = {
        parent,
        node: newNode,
        reference
    };
    return [
        remove,
        insert
    ];
}

function convertEditV1toV2(edit) {
    if (isComplex(edit)) {
        return edit.map(convertEditV1toV2);
    }
    else if (isRemove(edit)) {
        return edit;
    }
    else if (isInsert(edit)) {
        return edit;
    }
    else if (isUpdate(edit)) {
        return convertUpdate$1(edit);
    }
    else {
        throw new Error('Unknown edit type');
    }
}
function convertUpdate$1(edit) {
    const attributes = {};
    const attributesNS = {};
    Object.entries(edit.attributes).forEach(([key, value]) => {
        if (isNamespaced(value)) {
            const ns = value.namespaceURI;
            if (!ns)
                return;
            if (!attributesNS[ns]) {
                attributesNS[ns] = {};
            }
            attributesNS[ns][key] = value.value;
        }
        else
            attributes[key] = value;
    });
    return { element: edit.element, attributes, attributesNS };
}

let OscdEditor = class OscdEditor extends LitElement {
    constructor() {
        super(...arguments);
        /** The `XMLDocument` to be edited */
        this.doc = null;
        /** The name of the current [[`doc`]] */
        this.docName = '';
        /** The UUID of the current [[`doc`]] */
        this.docId = '';
    }
    onAction(event) {
        const edit = convertEditActiontoV1(event.detail.action);
        const editV2 = convertEditV1toV2(edit);
        this.host.dispatchEvent(newEditEventV2(editV2));
    }
    handleEditEvent(event) {
        /**
         * This is a compatibility fix for plugins based on open energy tools edit events
         * because their edit event look slightly different
         * see https://github.com/OpenEnergyTools/open-scd-core/blob/main/foundation/edit-event-v1.ts for details
         */
        if (isOpenEnergyEditEvent(event)) {
            event = convertOpenEnergyEditEventToEditEvent(event);
        }
        const edit = event.detail.edit;
        const editV2 = convertEditV1toV2(edit);
        this.host.dispatchEvent(newEditEventV2(editV2));
    }
    /**
     *
     * @deprecated [Move to handleOpenDoc instead]
     */
    async onOpenDoc(event) {
        this.doc = event.detail.doc;
        this.docName = event.detail.docName;
        this.docId = event.detail.docId ?? '';
        await this.updateComplete;
        this.dispatchEvent(newValidateEvent());
        this.dispatchEvent(newLogEvent({
            kind: 'info',
            title: get('openSCD.loaded', { name: this.docName }),
        }));
    }
    handleOpenDoc({ detail: { docName, doc } }) {
        this.doc = doc;
        this.docName = docName;
    }
    connectedCallback() {
        super.connectedCallback();
        // Deprecated editor action API, use 'oscd-edit' instead.
        this.host.addEventListener('editor-action', this.onAction.bind(this));
        // Deprecated edit event API, use 'oscd-edit-v2' instead.
        this.host.addEventListener('oscd-edit', event => this.handleEditEvent(event));
        this.host.addEventListener('oscd-edit-v2', event => this.handleEditEventV2(event));
        this.host.addEventListener('open-doc', this.onOpenDoc);
        this.host.addEventListener('oscd-open', this.handleOpenDoc);
    }
    render() {
        return html `<slot></slot>`;
    }
    async handleEditEventV2(event) {
        const { edit, title, squash } = event.detail;
        this.editor.commit(edit, { title, squash });
        await this.updateComplete;
        this.dispatchEvent(newValidateEvent());
    }
};
__decorate([
    property({ attribute: false })
], OscdEditor.prototype, "doc", void 0);
__decorate([
    property({ type: String })
], OscdEditor.prototype, "docName", void 0);
__decorate([
    property({ type: String })
], OscdEditor.prototype, "docId", void 0);
__decorate([
    property({ type: Object })
], OscdEditor.prototype, "editor", void 0);
__decorate([
    property({
        type: Object,
    })
], OscdEditor.prototype, "host", void 0);
OscdEditor = __decorate([
    customElement('oscd-editor')
], OscdEditor);
function isOpenEnergyEditEvent(event) {
    const eventDetail = event.detail;
    return isComplex(eventDetail) || isInsert(eventDetail) || isUpdate(eventDetail) || isRemove(eventDetail);
}
function convertOpenEnergyEditEventToEditEvent(event) {
    const eventDetail = event.detail;
    return newEditEvent(eventDetail);
}

function generatePluginPath(plugin) {
    return location.origin + location.pathname + plugin;
}
const officialPlugins = [
    {
        name: 'IED',
        src: generatePluginPath('plugins/src/editors/IED.js'),
        icon: 'developer_board',
        activeByDefault: true,
        kind: 'editor',
        requireDoc: true,
    },
    {
        name: 'Substation',
        src: generatePluginPath('plugins/src/editors/Substation.js'),
        icon: 'margin',
        activeByDefault: true,
        kind: 'editor',
        requireDoc: true,
    },
    {
        name: 'Single Line Diagram',
        src: generatePluginPath('plugins/src/editors/SingleLineDiagram.js'),
        icon: 'edit',
        activeByDefault: false,
        kind: 'editor',
        requireDoc: true,
    },
    {
        name: 'Subscriber Message Binding (GOOSE)',
        src: generatePluginPath('plugins/src/editors/GooseSubscriberMessageBinding.js'),
        icon: 'link',
        activeByDefault: false,
        kind: 'editor',
        requireDoc: true,
    },
    {
        name: 'Subscriber Data Binding (GOOSE)',
        src: generatePluginPath('plugins/src/editors/GooseSubscriberDataBinding.js'),
        icon: 'link',
        activeByDefault: false,
        kind: 'editor',
        requireDoc: true,
    },
    {
        name: 'Subscriber Message Binding (SMV)',
        src: generatePluginPath('plugins/src/editors/SMVSubscriberMessageBinding.js'),
        icon: 'link',
        activeByDefault: false,
        kind: 'editor',
        requireDoc: true,
    },
    {
        name: 'Subscriber Data Binding (SMV)',
        src: generatePluginPath('plugins/src/editors/SMVSubscriberDataBinding.js'),
        icon: 'link',
        activeByDefault: false,
        kind: 'editor',
        requireDoc: true,
    },
    {
        name: 'Subscriber Later Binding (SMV/GOOSE)',
        src: generatePluginPath('external-plugins/oscd-subscriber-later-binding/oscd-subscriber-later-binding.js'),
        icon: 'link',
        activeByDefault: true,
        kind: 'editor',
        requireDoc: true
    },
    {
        name: 'Communication',
        src: generatePluginPath('plugins/src/editors/Communication.js'),
        icon: 'settings_ethernet',
        activeByDefault: true,
        kind: 'editor',
        requireDoc: true,
    },
    {
        name: '104',
        src: generatePluginPath('plugins/src/editors/Protocol104.js'),
        icon: 'settings_ethernet',
        activeByDefault: false,
        kind: 'editor',
        requireDoc: true,
    },
    {
        name: 'Templates',
        src: generatePluginPath('plugins/src/editors/Templates.js'),
        icon: 'copy_all',
        activeByDefault: true,
        kind: 'editor',
        requireDoc: true,
    },
    {
        name: 'Publisher',
        src: generatePluginPath('external-plugins/oscd-publisher/oscd-publisher.js'),
        icon: 'publish',
        activeByDefault: false,
        kind: 'editor',
        requireDoc: true,
    },
    {
        name: 'Cleanup',
        src: generatePluginPath('plugins/src/editors/Cleanup.js'),
        icon: 'cleaning_services',
        activeByDefault: false,
        kind: 'editor',
        requireDoc: true,
    },
    {
        name: 'Open project',
        src: generatePluginPath('plugins/src/menu/OpenProject.js'),
        icon: 'folder_open',
        activeByDefault: true,
        kind: 'menu',
        requireDoc: false,
        position: 'top',
    },
    {
        name: 'New project',
        src: generatePluginPath('plugins/src/menu/NewProject.js'),
        icon: 'create_new_folder',
        activeByDefault: true,
        kind: 'menu',
        requireDoc: false,
        position: 'top',
    },
    {
        name: 'Plugin Store (Beta)',
        src: 'https://sprinteins.github.io/oscd-plugin-store/index.js',
        icon: 'shopping_bag',
        activeByDefault: false,
        kind: 'menu',
        requireDoc: false,
        position: 'bottom',
    },
    {
        name: 'Save project',
        src: generatePluginPath('plugins/src/menu/SaveProject.js'),
        icon: 'save',
        activeByDefault: true,
        kind: 'menu',
        requireDoc: true,
        position: 'top',
    },
    {
        name: 'Validate Schema',
        src: generatePluginPath('plugins/src/validators/ValidateSchema.js'),
        icon: 'rule_folder',
        activeByDefault: true,
        kind: 'validator',
    },
    {
        name: 'Validate Templates',
        src: generatePluginPath('plugins/src/validators/ValidateTemplates.js'),
        icon: 'rule_folder',
        activeByDefault: true,
        kind: 'validator',
    },
    {
        name: 'Import IEDs',
        src: generatePluginPath('plugins/src/menu/ImportIEDs.js'),
        icon: 'snippet_folder',
        activeByDefault: true,
        kind: 'menu',
        requireDoc: true,
        position: 'middle',
    },
    {
        name: 'Create Virtual IED',
        src: generatePluginPath('plugins/src/menu/VirtualTemplateIED.js'),
        icon: 'developer_board',
        activeByDefault: false,
        kind: 'menu',
        requireDoc: true,
        position: 'middle',
    },
    {
        name: 'Subscriber Update',
        src: generatePluginPath('plugins/src/menu/SubscriberInfo.js'),
        activeByDefault: true,
        kind: 'menu',
        requireDoc: true,
        position: 'middle',
    },
    {
        name: 'Update desc (ABB)',
        src: generatePluginPath('plugins/src/menu/UpdateDescriptionABB.js'),
        activeByDefault: false,
        kind: 'menu',
        requireDoc: true,
        position: 'middle',
    },
    {
        name: 'Update desc (SEL)',
        src: generatePluginPath('plugins/src/menu/UpdateDescriptionSEL.js'),
        activeByDefault: false,
        kind: 'menu',
        requireDoc: true,
        position: 'middle',
    },
    {
        name: 'Merge Project',
        src: generatePluginPath('plugins/src/menu/Merge.js'),
        icon: 'merge_type',
        activeByDefault: true,
        kind: 'menu',
        requireDoc: true,
        position: 'middle',
    },
    {
        name: 'Update Substation',
        src: generatePluginPath('plugins/src/menu/UpdateSubstation.js'),
        icon: 'merge_type',
        activeByDefault: true,
        kind: 'menu',
        requireDoc: true,
        position: 'middle',
    },
    {
        name: 'Compare IED',
        src: generatePluginPath('plugins/src/menu/CompareIED.js'),
        icon: 'compare_arrows',
        activeByDefault: true,
        kind: 'menu',
        requireDoc: true,
        position: 'middle',
    },
    {
        name: 'Show SCL History',
        src: generatePluginPath('plugins/src/menu/SclHistory.js'),
        icon: 'history_toggle_off',
        activeByDefault: true,
        kind: 'menu',
        requireDoc: true,
        position: 'bottom',
    },
    {
        name: 'Help',
        src: generatePluginPath('plugins/src/menu/Help.js'),
        icon: 'help',
        activeByDefault: true,
        kind: 'menu',
        requireDoc: false,
        position: 'bottom',
    },
    {
        name: 'Export Communication Section',
        src: generatePluginPath('plugins/src/menu/ExportCommunication.js'),
        icon: 'sim_card_download',
        activeByDefault: false,
        kind: 'menu',
        requireDoc: true,
        position: 'middle',
    },
];

class OpenSCD extends LitElement {
    constructor() {
        super(...arguments);
        this.doc = null;
        /** The name of the current [[`doc`]] */
        this.docName = '';
        /** The UUID of the current [[`doc`]] */
        this.docId = '';
        this.editor = new XMLEditor();
        /** Object containing all *.nsdoc files and a function extracting element's label form them*/
        this.nsdoc = initializeNsdoc();
        this.currentSrc = '';
        this.storedPlugins = [];
        this.editCount = -1;
        this.unsubscribers = [];
        /**
         * @prop {PluginSet} plugins - Set of plugins that are used by OpenSCD
         */
        this.plugins = { menu: [], editor: [] };
        this.loadedPlugins = new Set();
        // PLUGGING INTERFACES
        this.pluginTags = new Map();
    }
    render() {
        return html `<oscd-waiter>
      <oscd-settings .host=${this}>
        <oscd-wizards .host=${this}>
          <oscd-history
            .host=${this}
            .editor=${this.editor}
          >
            <oscd-editor
              .doc=${this.doc}
              .docName=${this.docName}
              .docId=${this.docId}
              .host=${this}
              .editCount=${this.editCount}
              .editor=${this.editor}
            >
              <oscd-layout
                @add-external-plugin=${this.handleAddExternalPlugin}
                @oscd-configure-plugin=${this.handleConfigurationPluginEvent}
                @set-plugins=${(e) => this.setPlugins(e.detail.selectedPlugins)}
                .host=${this}
                .doc=${this.doc}
                .docName=${this.docName}
                .editCount=${this.editCount}
                .plugins=${this.storedPlugins}
                .editor=${this.editor}
              >
              </oscd-layout>
            </oscd-editor>
          </oscd-history>
        </oscd-wizards>
      </oscd-settings>
    </oscd-waiter>`;
    }
    /** The current file's URL. `blob:` URLs are *revoked after parsing*! */
    get src() {
        return this.currentSrc;
    }
    set src(value) {
        this.currentSrc = value;
        this.dispatchEvent(newPendingStateEvent(this.loadDoc(value)));
    }
    /** Loads and parses an `XMLDocument` after [[`src`]] has changed. */
    async loadDoc(src) {
        const response = await fetch(src);
        const text = await response.text();
        if (!text)
            return;
        const doc = new DOMParser().parseFromString(text, 'application/xml');
        const docName = src;
        this.dispatchEvent(newOpenDocEvent(doc, docName));
        if (src.startsWith('blob:'))
            URL.revokeObjectURL(src);
    }
    /**
     *
     * @deprecated Use `handleConfigurationPluginEvent` instead
     */
    handleAddExternalPlugin(e) {
        this.addExternalPlugin(e.detail.plugin);
        const { name, kind } = e.detail.plugin;
        const event = newConfigurePluginEvent(name, kind, e.detail.plugin);
        this.handleConfigurationPluginEvent(event);
    }
    handleConfigurationPluginEvent(e) {
        const { name, kind, config } = e.detail;
        const hasPlugin = this.hasPlugin(name, kind);
        const hasConfig = config !== null;
        const isChangeEvent = hasPlugin && hasConfig;
        const isRemoveEvent = hasPlugin && !hasConfig;
        const isAddEvent = !hasPlugin && hasConfig;
        // the `&& config`is only because typescript
        // cannot infer that `isChangeEvent` and `isAddEvent` implies `config !== null`
        if (isChangeEvent && config) {
            this.changePlugin(config);
        }
        else if (isRemoveEvent) {
            this.removePlugin(name, kind);
        }
        else if (isAddEvent && config) {
            this.addPlugin(config);
        }
        else {
            const event = newLogEvent({
                kind: "error",
                title: "Invalid plugin configuration event",
                message: JSON.stringify({ name, kind, config }),
            });
            this.dispatchEvent(event);
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.loadPlugins();
        this.unsubscribers.push(this.editor.subscribe(e => this.editCount++), this.editor.subscribeUndoRedo(e => this.editCount++));
        // TODO: let Lit handle the event listeners, move to render()
        this.addEventListener('reset-plugins', this.resetPlugins);
    }
    disconnectedCallback() {
        this.unsubscribers.forEach(u => u());
    }
    /**
     *
     * @param name
     * @param kind
     * @returns the index of the plugin in the stored plugin list
     */
    findPluginIndex(name, kind) {
        return this.storedPlugins.findIndex(p => p.name === name && p.kind === kind);
    }
    hasPlugin(name, kind) {
        return this.findPluginIndex(name, kind) > -1;
    }
    removePlugin(name, kind) {
        const newPlugins = this.storedPlugins.filter(p => p.name !== name || p.kind !== kind);
        this.updateStoredPlugins(newPlugins);
    }
    addPlugin(plugin) {
        const newPlugins = [...this.storedPlugins, plugin];
        this.updateStoredPlugins(newPlugins);
    }
    /**
     *
     * @param plugin
     * @throws if the plugin is not found
     */
    changePlugin(plugin) {
        const storedPlugins = this.storedPlugins;
        const { name, kind } = plugin;
        const pluginIndex = this.findPluginIndex(name, kind);
        if (pluginIndex < 0) {
            const event = newLogEvent({
                kind: "error",
                title: "Plugin not found, stopping change process",
                message: JSON.stringify({ name, kind }),
            });
            this.dispatchEvent(event);
            return;
        }
        const pluginToChange = storedPlugins[pluginIndex];
        const changedPlugin = { ...pluginToChange, ...plugin };
        const newPlugins = [...storedPlugins];
        newPlugins.splice(pluginIndex, 1, changedPlugin);
        // this.storePlugins(newPlugins);
        this.updateStoredPlugins(newPlugins);
    }
    resetPlugins() {
        const builtInPlugins = this.getBuiltInPlugins();
        const allPlugins = [...builtInPlugins, ...this.parsedPlugins];
        const newPluginConfigs = allPlugins.map(plugin => {
            return {
                ...plugin,
                active: plugin.activeByDefault ?? false,
            };
        });
        this.storePlugins(newPluginConfigs);
    }
    get parsedPlugins() {
        const menuPlugins = this.plugins.menu.map((plugin) => {
            let newPosition = plugin.position;
            if (typeof plugin.position === 'number') {
                newPosition = undefined;
            }
            return {
                ...plugin,
                position: newPosition,
                kind: 'menu',
                active: plugin.active ?? false,
            };
        });
        const editorPlugins = this.plugins.editor.map((plugin) => {
            const editorPlugin = {
                ...plugin,
                position: undefined,
                kind: 'editor',
                active: plugin.active ?? false,
            };
            return editorPlugin;
        });
        const allPlugnis = [...menuPlugins, ...editorPlugins];
        return allPlugnis;
    }
    updateStoredPlugins(newPlugins) {
        //
        // Generate content of each plugin
        //
        const plugins = newPlugins.map(plugin => {
            const isInstalled = plugin.src && plugin.active;
            if (!isInstalled) {
                return plugin;
            }
            return this.addContent(plugin);
        });
        //
        // Merge built-in plugins
        //
        const mergedPlugins = plugins.map(plugin => {
            const isBuiltIn = !plugin?.official;
            if (!isBuiltIn) {
                return plugin;
            }
            const builtInPlugin = [...this.getBuiltInPlugins(), ...this.parsedPlugins]
                .find(p => p.src === plugin.src);
            return {
                ...builtInPlugin,
                ...plugin,
            };
        });
        this.storePlugins(mergedPlugins);
    }
    storePlugins(plugins) {
        this.storedPlugins = plugins;
        const pluginConfigs = JSON.stringify(plugins.map(withoutContent));
        localStorage.setItem('plugins', pluginConfigs);
    }
    getPluginConfigsFromLocalStorage() {
        const pluginsConfigStr = localStorage.getItem('plugins') ?? '[]';
        return JSON.parse(pluginsConfigStr);
    }
    get locale() {
        return navigator.language || 'en-US';
    }
    get docs() {
        const docs = {};
        if (this.doc) {
            docs[this.docName] = this.doc;
        }
        return docs;
    }
    setPlugins(selectedPlugins) {
        const newPlugins = this.storedPlugins.map((storedPlugin) => {
            const isSelected = selectedPlugins.some((selectedPlugin) => {
                return selectedPlugin.name === storedPlugin.name
                    && selectedPlugin.src === storedPlugin.src;
            });
            return {
                ...storedPlugin,
                active: isSelected
            };
        });
        this.updateStoredPlugins(newPlugins);
    }
    loadPlugins() {
        const localPluginConfigs = this.getPluginConfigsFromLocalStorage();
        const overwritesOfBultInPlugins = localPluginConfigs.filter((p) => {
            return this.getBuiltInPlugins().some(b => b.src === p.src);
        });
        const userInstalledPlugins = localPluginConfigs.filter((p) => {
            return !this.getBuiltInPlugins().some(b => b.src === p.src);
        });
        const mergedBuiltInPlugins = this.getBuiltInPlugins().map((builtInPlugin) => {
            let overwrite = overwritesOfBultInPlugins.find(p => p.src === builtInPlugin.src);
            const mergedPlugin = {
                ...builtInPlugin,
                ...overwrite,
                active: overwrite?.active ?? builtInPlugin.activeByDefault,
            };
            return mergedPlugin;
        });
        const mergedPlugins = [...mergedBuiltInPlugins, ...userInstalledPlugins];
        this.updateStoredPlugins(mergedPlugins);
    }
    async addExternalPlugin(plugin) {
        if (this.storedPlugins.some(p => p.src === plugin.src))
            return;
        const newPlugins = this.storedPlugins;
        newPlugins.push(plugin);
        this.storePlugins(newPlugins);
    }
    getBuiltInPlugins() {
        return officialPlugins;
    }
    addContent(plugin) {
        const tag = this.pluginTag(plugin.src);
        if (!this.loadedPlugins.has(tag)) {
            this.loadedPlugins.add(tag);
            import(plugin.src).then((mod) => {
                customElements.define(tag, mod.default);
            });
        }
        return {
            ...plugin,
            content: {
                tag
            },
        };
    }
    pluginTag(uri) {
        if (!this.pluginTags.has(uri)) {
            const tag = pluginTag(uri);
            this.pluginTags.set(uri, tag);
        }
        return this.pluginTags.get(uri);
    }
}
__decorate([
    property({ attribute: false })
], OpenSCD.prototype, "doc", void 0);
__decorate([
    property({ type: String })
], OpenSCD.prototype, "docName", void 0);
__decorate([
    property({ type: String })
], OpenSCD.prototype, "docId", void 0);
__decorate([
    property({ attribute: false })
], OpenSCD.prototype, "nsdoc", void 0);
__decorate([
    property({ type: String })
], OpenSCD.prototype, "src", null);
__decorate([
    state()
], OpenSCD.prototype, "storedPlugins", void 0);
__decorate([
    state()
], OpenSCD.prototype, "editCount", void 0);
__decorate([
    property({ type: Object })
], OpenSCD.prototype, "plugins", void 0);
__decorate([
    state()
], OpenSCD.prototype, "loadedPlugins", void 0);
__decorate([
    state()
], OpenSCD.prototype, "pluginTags", void 0);
function newResetPluginsEvent() {
    return new CustomEvent('reset-plugins', { bubbles: true, composed: true });
}
function newAddExternalPluginEvent(plugin) {
    return new CustomEvent('add-external-plugin', {
        bubbles: true,
        composed: true,
        detail: { plugin },
    });
}
function newSetPluginsEvent(selectedPlugins) {
    return new CustomEvent('set-plugins', {
        bubbles: true,
        composed: true,
        detail: { selectedPlugins },
    });
}
function withoutContent(plugin) {
    return { ...plugin, content: undefined };
}
const pluginIcons = {
    editor: 'tab',
    menu: 'play_circle',
    validator: 'rule_folder',
    top: 'play_circle',
    middle: 'play_circle',
    bottom: 'play_circle',
};

let OscdPluginManager = class OscdPluginManager extends LitElement {
    constructor() {
        super(...arguments);
        /** The plugins to render the layout. */
        this.plugins = [];
    }
    render() {
        return html `
        <mwc-dialog
          stacked
          id="plugin-manager-root"
          heading="${get('plugins.heading')}"
        >
          <mwc-list
            id="pluginList"
            multi
            @selected=${(e) => {
            const selectedPlugins = this.pluginList.items
                .filter((item, index) => e.detail.index.has(index))
                // @ts-expect-error: we add plugin to the list item
                .map(item => item.plugin);
            this.dispatchEvent(newSetPluginsEvent(selectedPlugins));
        }}
          >
            <mwc-list-item graphic="avatar" noninteractive>
              <strong>${get(`plugins.editor`)}</strong>
              <mwc-icon slot="graphic" class="inverted">
                ${pluginIcons['editor']}
              </mwc-icon>
            </mwc-list-item>

            <li divider role="separator"></li>

            ${this.generateEditorListItems()}

            <mwc-list-item graphic="avatar" noninteractive>
              <strong>${get(`plugins.menu`)}</strong>
              <mwc-icon slot="graphic" class="inverted">
                <strong>${pluginIcons['menu']}</strong></mwc-icon>
              </mwc-list-item>
            <li divider role="separator"></li>

            ${this.generateMenuListItems('top')}

            <li divider role="separator" inset></li>

            ${this.generateValidatorListItems()}

            <li divider role="separator" inset></li>

            ${this.generateMenuListItems('middle')}

            <li divider role="separator" inset></li>

            ${this.generateMenuListItems('bottom')}

          </mwc-list>
          <mwc-button
            slot="secondaryAction"
            icon="refresh"
            label="${get('reset')}"
            @click=${async () => {
            this.dispatchEvent(newResetPluginsEvent());
            this.requestUpdate();
        }}
            style="--mdc-theme-primary: var(--mdc-theme-error)"
          >
          </mwc-button>
          <mwc-button
            slot="secondaryAction"
            icon=""
            label="${get('close')}"
            dialogAction="close">
          </mwc-button>
          <mwc-button
            outlined
            trailingIcon
            slot="primaryAction"
            icon="library_add"
            label="${get('plugins.add.heading')}&hellip;"
            @click=${() => this.dispatchOpenCustomPluginDialogEvent()}>
          </mwc-button>
        </mwc-dialog>
      `;
    }
    show() {
        this.root.show();
    }
    generateEditorListItems() {
        return this.plugins
            .filter(p => p.kind === 'editor')
            .map(this.renderPluginListItem);
    }
    generateMenuListItems(position) {
        return this.plugins
            .filter(p => p.kind === 'menu' && p.position === position)
            .map(this.renderPluginListItem);
    }
    generateValidatorListItems() {
        return this.plugins
            .filter(p => p.kind === 'validator')
            .map(this.renderPluginListItem);
    }
    dispatchOpenCustomPluginDialogEvent() {
        const event = new CustomEvent('open-plugin-download', {
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }
    renderPluginListItem(plugin) {
        if (!plugin) {
            return html ``;
        }
        return html `
      <mwc-check-list-item
          class="${plugin.official ? 'official' : 'external'}"
          value="${plugin.src}"
          .plugin=${plugin}
          ?selected=${plugin.active}
          @request-selected=${(e) => {
            if (e.detail.source !== 'interaction') {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                return false;
            }
        }}
          hasMeta
          left
        >
          <mwc-icon slot="meta">
            ${plugin.icon || pluginIcons[plugin.kind]}
          </mwc-icon>
          ${plugin.name}
        </mwc-check-list-item>

    `;
    }
};
OscdPluginManager.styles = css `
    mwc-dialog {
      --mdc-dialog-max-width: 98vw;
    }
  `;
__decorate([
    property({ type: Array })
], OscdPluginManager.prototype, "plugins", void 0);
__decorate([
    query('#plugin-manager-root')
], OscdPluginManager.prototype, "root", void 0);
__decorate([
    query('#pluginList')
], OscdPluginManager.prototype, "pluginList", void 0);
OscdPluginManager = __decorate([
    customElement('oscd-plugin-manager')
], OscdPluginManager);

const menuPosition = ['top', 'middle', 'bottom'];

let OscdCustomPluginDialog = class OscdCustomPluginDialog extends LitElement {
    render() {
        return html `
      <mwc-dialog id="dialog" heading="${get('plugins.add.heading')}">
        <div style="display: flex; flex-direction: column; row-gap: 8px;">
          <p style="color:var(--mdc-theme-error);">
            ${get('plugins.add.warning')}
          </p>
          <mwc-textfield
            label="${get('plugins.add.name')}"
            helper="${get('plugins.add.nameHelper')}"
            required
            id="pluginNameInput"
          ></mwc-textfield>
          <mwc-list id="pluginKindList">
            <mwc-radio-list-item
              id="editor"
              value="editor"
              hasMeta
              selected
              left
            >
              ${get('plugins.editor')}
              <mwc-icon slot="meta">
                ${pluginIcons['editor']}
              </mwc-icon>
            </mwc-radio-list-item>
            <mwc-radio-list-item value="menu" hasMeta left>
              ${get('plugins.menu')}
            <mwc-icon slot="meta">
              ${pluginIcons['menu']}
            </mwc-icon>
            </mwc-radio-list-item>
            <div id="menudetails">
              <mwc-formfield
                id="enabledefault"
                label="${get('plugins.requireDoc')}"
              >
                <mwc-switch id="requireDoc" checked></mwc-switch>
              </mwc-formfield>
              <mwc-select id="positionList" value="middle" fixedpositionList>
                ${Object.values(menuPosition).map(menutype => html `<mwc-list-item value="${menutype}"
                      >${get('plugins.' + menutype)}</mwc-list-item
                    >`)}
              </mwc-select>
            </div>
            <style>
              #menudetails {
                display: none;
                padding: 20px;
                padding-left: 50px;
              }
              #pluginKindList [value="menu"][selected] ~ #menudetails {
                display: grid;
              }
              #enabledefault {
                padding-bottom: 20px;
              }
              #positionList {
                max-width: 250px;
              }
            </style>
            <mwc-radio-list-item id="validator" value="validator" hasMeta left>
              ${get('plugins.validator')}
              <mwc-icon slot="meta">
                ${pluginIcons['validator']}
              </mwc-icon>
            </mwc-radio-list-item>
          </mwc-list>
          <mwc-textfield
            label="${get('plugins.add.src')}"
            helper="${get('plugins.add.srcHelper')}"
            placeholder="http://example.com/plugin.js"
            type="url"
            required
            id="pluginSrcInput">
          </mwc-textfield>
        </div>
        <mwc-button
          slot="secondaryAction"
          dialogAction="close"
          label="${get('cancel')}">
        </mwc-button>
        <mwc-button
          id="addButton"
          slot="primaryAction"
          icon="add"
          label="${get('add')}"
          trailingIcon
          @click=${() => this.handleAddPlugin()}>
        </mwc-button>
      </mwc-dialog>
    `;
    }
    close() {
        this.dialog.close();
    }
    show() {
        this.dialog.show();
    }
    get open() {
        return this.dialog.open;
    }
    handleAddPlugin() {
        if (!(this.pluginSrcInput.checkValidity() &&
            this.pluginNameInput.checkValidity() &&
            this.pluginKindList.selected &&
            this.requireDoc &&
            this.positionList.selected))
            return;
        this.dispatchEvent(newAddExternalPluginEvent({
            src: this.pluginSrcInput.value,
            name: this.pluginNameInput.value,
            kind: this.pluginKindList.selected.value,
            requireDoc: this.requireDoc.checked,
            position: this.positionList.value,
            active: true,
            // this is an added plugin and will be remove by reset either way
            activeByDefault: false,
        }));
        this.requestUpdate();
        this.dialog.close();
    }
};
OscdCustomPluginDialog.styles = css `

    mwc-dialog {
      --mdc-dialog-max-width: 98vw;
    }

    mwc-dialog > form {
      display: flex;
      flex-direction: column;
    }

    mwc-dialog > form > * {
      display: block;
      margin-top: 16px;
    }
  `;
__decorate([
    query('#dialog')
], OscdCustomPluginDialog.prototype, "dialog", void 0);
__decorate([
    query('#pluginSrcInput')
], OscdCustomPluginDialog.prototype, "pluginSrcInput", void 0);
__decorate([
    query('#pluginNameInput')
], OscdCustomPluginDialog.prototype, "pluginNameInput", void 0);
__decorate([
    query('#pluginKindList')
], OscdCustomPluginDialog.prototype, "pluginKindList", void 0);
__decorate([
    query('#requireDoc')
], OscdCustomPluginDialog.prototype, "requireDoc", void 0);
__decorate([
    query('#positionList')
], OscdCustomPluginDialog.prototype, "positionList", void 0);
__decorate([
    query('#addButton')
], OscdCustomPluginDialog.prototype, "addButton", void 0);
OscdCustomPluginDialog = __decorate([
    customElement('oscd-custom-plugin-dialog')
], OscdCustomPluginDialog);

let OscdMenuTabs = class OscdMenuTabs extends LitElement {
    constructor() {
        super(...arguments);
        this.editors = [];
        this.activeTabIndex = 0;
    }
    get activeEditor() { return this._activeEditor; }
    set activeEditor(editor) {
        this._activeEditor = editor;
        const editorIndex = this.editors.findIndex(e => e.name === editor?.name && e.src === editor?.src);
        this.activeTabIndex = editorIndex > -1 ? editorIndex : 0;
        this.requestUpdate();
    }
    ;
    render() {
        if (this.editors.length === 0) {
            return html ``;
        }
        return html `
      <mwc-tab-bar
        @MDCTabBar:activated=${this.handleActivatedEditorTab}
        activeIndex=${this.activeTabIndex}
      >
        ${this.editors.map(EditorTab)}
      </mwc-tab-bar>
    `;
    }
    handleActivatedEditorTab(e) {
        const tabIndex = e.detail.index;
        const editor = this.editors[tabIndex];
        this.activeTabIndex = tabIndex;
        this.dispatchActivateEditor(editor);
    }
    dispatchActivateEditor(editor) {
        const newEvent = new CustomEvent(TabActivatedEventKey, {
            detail: { editor },
            composed: true,
            bubbles: true
        });
        this.dispatchEvent(newEvent);
    }
};
OscdMenuTabs.styles = css `
    mwc-tab {
      background-color: var(--primary);
      --mdc-theme-primary: var(--mdc-theme-on-primary);
    }
  `;
__decorate([
    property({ type: Array })
], OscdMenuTabs.prototype, "editors", void 0);
__decorate([
    property({ type: Object })
], OscdMenuTabs.prototype, "activeEditor", null);
__decorate([
    state()
], OscdMenuTabs.prototype, "activeTabIndex", void 0);
OscdMenuTabs = __decorate([
    customElement('oscd-menu-tabs')
], OscdMenuTabs);
function EditorTab({ name, icon }) {
    return html `
    <mwc-tab label=${name} icon=${icon || 'edit'}> </mwc-tab>
  `;
}
const TabActivatedEventKey = 'oscd-editor-tab-activated';

/**
 * This is a template literal tag function. See:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
 *
 * Passes its arguments to LitElement's `html` tag after combining the first and
 * last expressions with the first two and last two static strings.
 * Throws unless the first and last expressions are identical strings.
 *
 * We need this to get around the expression location limitations documented in
 * https://lit.dev/docs/templates/expressions/#expression-locations
 *
 * After upgrading to Lit 2 we can use their static HTML functions instead:
 * https://lit.dev/docs/api/static-html/
 */
function staticTagHtml(oldStrings, ...oldArgs) {
    const args = [...oldArgs];
    const firstArg = args.shift();
    const lastArg = args.pop();
    if (firstArg !== lastArg)
        throw new Error(`Opening tag <${firstArg}> does not match closing tag </${lastArg}>.`);
    const strings = [...oldStrings];
    const firstString = strings.shift();
    const secondString = strings.shift();
    const lastString = strings.pop();
    const penultimateString = strings.pop();
    strings.unshift(`${firstString}${firstArg}${secondString}`);
    strings.push(`${penultimateString}${lastArg}${lastString}`);
    return html(strings, ...args);
}
let OscdLayout = class OscdLayout extends LitElement {
    constructor() {
        super(...arguments);
        /** The `XMLDocument` to be edited */
        this.doc = null;
        /** The name of the current [[`doc`]] */
        this.docName = '';
        /** Index of the last [[`EditorAction`]] applied. */
        this.editCount = -1;
        /** The plugins to render the layout. */
        this.plugins = [];
        this.validated = Promise.resolve();
        this.shouldValidate = false;
        this.activeEditor = this.calcActiveEditors()[0];
    }
    render() {
        return html `
      <div
        @open-plugin-download=${() => this.pluginDownloadUI.show()}
        @oscd-activate-editor=${this.handleActivateEditorByEvent}
        @oscd-run-menu=${this.handleRunMenuByEvent}
      >
        <slot></slot>
        ${this.renderHeader()} ${this.renderAside()} ${this.renderMenuContent()}
        ${this.renderContent()} ${this.renderLanding()} ${this.renderPlugging()}
      </div>
    `;
    }
    componentHtml(strings, ...values) {
        return html(strings, ...values);
    }
    renderPlugging() {
        return html ` ${this.renderPluginUI()} ${this.renderDownloadUI()} `;
    }
    getMenuContent(src) {
        const tag = pluginTag(src);
        return this.menuContent.querySelector(tag);
    }
    /** Renders the "Add Custom Plug-in" UI*/
    renderDownloadUI() {
        return html `
      <oscd-custom-plugin-dialog id="pluginAdd"></oscd-custom-plugin-dialog>
    `;
    }
    /**
     * Renders the plug-in management UI (turning plug-ins on/off)
     */
    renderPluginUI() {
        return html `
      <oscd-plugin-manager id="pluginManager" .plugins=${this.plugins}></oscd-plugin-manager>
    `;
    }
    // Computed properties
    get validators() {
        return this.plugins.filter(plugin => plugin.active && plugin.kind === 'validator');
    }
    get menuEntries() {
        return this.plugins.filter(plugin => plugin.active && plugin.kind === 'menu');
    }
    get topMenu() {
        return this.menuEntries.filter(plugin => plugin.position === 'top');
    }
    get middleMenu() {
        return this.menuEntries.filter(plugin => plugin.position === 'middle');
    }
    get bottomMenu() {
        return this.menuEntries.filter(plugin => plugin.position === 'bottom');
    }
    get menu() {
        const topMenu = this.generateMenu(this.topMenu, 'top');
        const middleMenu = this.generateMenu(this.middleMenu, 'middle');
        const bottomMenu = this.generateMenu(this.bottomMenu, 'bottom');
        const validators = this.generateValidatorMenus(this.validators);
        if (middleMenu.length > 0)
            middleMenu.push('divider');
        if (bottomMenu.length > 0)
            bottomMenu.push('divider');
        return [
            'divider',
            ...topMenu,
            'divider',
            {
                icon: 'undo',
                name: 'undo',
                actionItem: true,
                action: () => {
                    this.editor.undo();
                },
                disabled: () => !this.editor.canUndo,
                kind: 'static',
                content: { tag: '' },
            },
            {
                icon: 'redo',
                name: 'redo',
                actionItem: true,
                action: () => {
                    this.editor.redo();
                },
                disabled: () => !this.editor.canRedo,
                kind: 'static',
                content: { tag: '' },
            },
            ...validators,
            {
                icon: 'list',
                name: 'menu.viewLog',
                actionItem: true,
                action: () => {
                    this.dispatchEvent(newHistoryUIEvent(true, HistoryUIKind.log));
                },
                kind: 'static',
                content: { tag: '' },
            },
            {
                icon: 'history',
                name: 'menu.viewHistory',
                actionItem: true,
                action: () => {
                    this.dispatchEvent(newHistoryUIEvent(true, HistoryUIKind.history));
                },
                kind: 'static',
                content: { tag: '' },
            },
            {
                icon: 'rule',
                name: 'menu.viewDiag',
                actionItem: true,
                action: () => {
                    this.dispatchEvent(newHistoryUIEvent(true, HistoryUIKind.diagnostic));
                },
                kind: 'static',
                content: { tag: '' },
            },
            'divider',
            ...middleMenu,
            {
                icon: 'settings',
                name: 'settings.title',
                action: () => {
                    this.dispatchEvent(newSettingsUIEvent(true));
                },
                kind: 'static',
                content: { tag: '' },
            },
            ...bottomMenu,
            {
                icon: 'extension',
                name: 'plugins.heading',
                action: () => this.pluginUI.show(),
                kind: 'static',
                content: { tag: '' },
            },
        ];
    }
    get editors() {
        return this.plugins.filter(plugin => plugin.active && plugin.kind === 'editor');
    }
    // Keyboard Shortcuts
    handleKeyPress(e) {
        // currently we only handley key shortcuts when users press ctrl
        if (!e.ctrlKey) {
            return;
        }
        const keyFunctionMap = {
            'm': () => this.menuUI.open = !this.menuUI.open,
            'o': () => this.menuUI.querySelector('mwc-list-item[iconid="folder_open"]')?.click(),
            'O': () => this.menuUI.querySelector('mwc-list-item[iconid="create_new_folder"]')?.click(),
            's': () => this.menuUI.querySelector('mwc-list-item[iconid="save"]')?.click(),
            'P': () => this.pluginUI.show(),
        };
        const fn = keyFunctionMap[e.key];
        if (!fn) {
            return;
        }
        e.preventDefault();
        fn();
    }
    connectedCallback() {
        super.connectedCallback();
        this.host.addEventListener('close-drawer', async () => {
            this.menuUI.open = false;
        });
        this.host.addEventListener('validate', async () => {
            this.shouldValidate = true;
            await this.validated;
            if (!this.shouldValidate) {
                return;
            }
            this.shouldValidate = false;
            this.validated = Promise.allSettled(this.menuUI
                .querySelector('mwc-list')
                .items.filter(item => item.className === 'validator')
                .map(item => {
                const src = item.dataset.src ?? '';
                const menuContentElement = this.getMenuContent(src);
                if (!menuContentElement) {
                    return;
                }
                return menuContentElement.validate();
            })).then();
            this.dispatchEvent(newPendingStateEvent(this.validated));
        });
        this.handleKeyPress = this.handleKeyPress.bind(this);
        document.onkeydown = this.handleKeyPress;
        document.addEventListener("open-plugin-download", () => {
            this.pluginDownloadUI.show();
        });
    }
    generateMenu(plugins, kind) {
        return plugins.map(plugin => {
            return {
                icon: plugin.icon || pluginIcons['menu'],
                name: plugin.name,
                src: plugin.src,
                action: ae => {
                    const menuContentElement = this.getMenuContent(plugin.src);
                    if (!menuContentElement) {
                        return;
                    }
                    this.dispatchEvent(newPendingStateEvent(menuContentElement.run()));
                },
                disabled: () => plugin.requireDoc && this.doc === null,
                content: plugin.content ?? { tag: '' },
                kind: kind,
            };
        });
    }
    generateValidatorMenus(plugins) {
        return plugins.map(plugin => {
            return {
                icon: plugin.icon || pluginIcons['validator'],
                name: plugin.name,
                src: plugin.src,
                action: ae => {
                    this.dispatchEvent(newEmptyIssuesEvent(plugin.src));
                    const menuContentElement = this.getMenuContent(plugin.src);
                    if (!menuContentElement) {
                        return;
                    }
                    this.dispatchEvent(newPendingStateEvent(menuContentElement.validate()));
                },
                disabled: () => this.doc === null,
                content: plugin.content ?? { tag: '' },
                kind: 'validator',
            };
        });
    }
    renderMenuItem(me) {
        const isDivider = me === 'divider';
        const hasActionItem = me !== 'divider' && me.actionItem;
        if (isDivider) {
            return html `<li divider padded role="separator"></li>`;
        }
        if (hasActionItem) {
            return html ``;
        }
        return html `
      <mwc-list-item
        class="${me.kind}"
        iconid="${me.icon}"
        graphic="icon"
        data-name="${me.name}"
        data-src="${me.src ?? ''}"
        .disabled=${me.disabled?.() || !me.action}
        ><mwc-icon slot="graphic">${me.icon}</mwc-icon>
        <span>${get(me.name)}</span>
        ${me.hint
            ? html `<span slot="secondary"><tt>${me.hint}</tt></span>`
            : ''}
      </mwc-list-item>
    `;
    }
    renderActionItem(me) {
        if (me === 'divider' || !me.actionItem) {
            return html ``;
        }
        return html `
    <mwc-icon-button
      slot="actionItems"
      icon="${me.icon}"
      label="${me.name}"
      ?disabled=${me.disabled?.() || !me.action}
      @click=${me.action}
    ></mwc-icon-button>`;
    }
    renderEditorTab({ name, icon }) {
        return html `<mwc-tab label=${name} icon=${icon || 'edit'}> </mwc-tab>`;
    }
    /** Renders top bar which features icon buttons for undo, redo, log, scl history and diagnostics*/
    renderHeader() {
        return html `<mwc-top-app-bar-fixed>
      <mwc-icon-button
        icon="menu"
        label="Menu"
        slot="navigationIcon"
        @click=${() => (this.menuUI.open = true)}
      ></mwc-icon-button>
      ${this.renderTitle()}
      ${this.renderActionItems()}
    </mwc-top-app-bar-fixed>`;
    }
    /**
     * Renders the title section in the top bar
     * Make sure to use slot="title" for the returned template
     */
    renderTitle() {
        return html `<div slot="title" id="title">${this.docName}</div>`;
    }
    /**
     * Renders the action items for the top bar
     * Make sure to use slot="actionItems" for each element
     */
    renderActionItems() {
        return html `${this.menu.map(this.renderActionItem)}`;
    }
    renderMenuContent() {
        return html `
      <div id="menuContent">
        ${this.menu
            .filter(p => p.content)
            .map(p => this.renderPluginContent(p))}
      </div>
    `;
    }
    /**
     * Renders a drawer toolbar featuring the scl filename, enabled menu plugins,
     * settings, help, scl history and plug-ins management
     */
    renderAside() {
        return html `
      <mwc-drawer class="mdc-theme--surface" hasheader type="modal" id="menu">
        <span slot="title">${get('menu.title')}</span>
          ${renderTitle(this.docName)}
        <mwc-list
          wrapFocus
          @action=${makeListAction(this.menu)}
        >
          ${this.menu.map(this.renderMenuItem)}
        </mwc-list>
      </mwc-drawer>
    `;
        function renderTitle(docName) {
            if (!docName)
                return html ``;
            return html `<span slot="subtitle">${docName}</span>`;
        }
        function makeListAction(menuItems) {
            return function listAction(ae) {
                //FIXME: dirty hack to be fixed in open-scd-core
                //       if clause not necessary when oscd... components in open-scd not list
                if (ae.target instanceof List)
                    (menuItems.filter(item => item !== 'divider' && !item.actionItem)[ae.detail.index])?.action?.(ae);
            };
        }
    }
    calcActiveEditors() {
        const hasActiveDoc = Boolean(this.doc);
        return this.editors
            .filter(editor => {
            // this is necessary because `requireDoc` can be undefined
            // and that is not the same as false
            const doesNotRequireDoc = editor.requireDoc === false;
            return doesNotRequireDoc || hasActiveDoc;
        });
    }
    /** Renders the enabled editor plugins and a tab bar to switch between them*/
    renderContent() {
        const activeEditors = this.calcActiveEditors()
            .map(this.renderEditorTab);
        const hasActiveEditors = activeEditors.length > 0;
        if (!hasActiveEditors) {
            return html ``;
        }
        const renderEditorContent = (doc, activeEditor) => {
            const editor = activeEditor;
            const requireDoc = editor?.requireDoc;
            if (requireDoc && !doc) {
                return html ``;
            }
            const tag = editor?.content?.tag;
            if (!tag) {
                return html ``;
            }
            return this.renderPluginContent(editor);
        };
        return html `
      <oscd-menu-tabs
        .editors=${this.calcActiveEditors()}
        .activeEditor=${this.activeEditor}
        @oscd-editor-tab-activated=${this.handleEditorTabActivated}
      >
      </oscd-menu-tabs>
      ${renderEditorContent(this.doc, this.activeEditor)}
    `;
    }
    handleEditorTabActivated(e) {
        this.activeEditor = e.detail.editor;
    }
    handleActivateEditorByEvent(e) {
        const { name, src } = e.detail;
        const editors = this.calcActiveEditors();
        const wantedEditor = editors.find(editor => editor.name === name || editor.src === src);
        if (!wantedEditor) {
            return;
        } // TODO: log error
        this.activeEditor = wantedEditor;
    }
    handleRunMenuByEvent(e) {
        // TODO: this is a workaround, fix it
        this.menuUI.open = true;
        const menuEntry = this.menuUI.querySelector(`[data-name="${e.detail.name}"]`);
        const menuContentElement = this.getMenuContent(menuEntry.dataset.src ?? '');
        if (!menuContentElement) {
            return;
        }
        menuContentElement.run();
    }
    /**
     * Renders the landing buttons (open project and new project)
     * it no document loaded we display the menu item that are in the position
     * 'top' and are not disabled
     *
     * To enable replacement of this part we have to convert it to either an addon
     * or a plugin
     */
    renderLanding() {
        if (this.doc) {
            return html ``;
        }
        return html `
      <div class="landing">
        ${renderMenuItems(this.menu, this.menuUI)}
      </div>`;
        function renderMenuItems(menuItemsAndDividers, menuUI) {
            const menuItems = menuItemsAndDividers.filter(mi => mi !== 'divider');
            return menuItems.map((mi, index) => {
                if (mi.kind !== 'top' || mi.disabled?.()) {
                    return html ``;
                }
                return html `
              <mwc-icon-button
                class="landing_icon"
                icon="${mi.icon}"
                @click="${() => clickListItem(index)}"
              >
                <div class="landing_label">${mi.name}</div>
              </mwc-icon-button>
            `;
            });
            function clickListItem(index) {
                const listItem = menuUI.querySelector('mwc-list').items[index];
                listItem.click();
            }
        }
    }
    renderPluginContent(plugin) {
        const tag = plugin.content?.tag ?? '';
        if (!tag) {
            return html ``;
        }
        const osdcApi = new OscdApi(tag);
        return staticTagHtml `<${tag}
          .doc=${this.doc}
          .docName=${this.docName}
          .editCount=${this.editCount}
          .plugins=${this.host.storedPlugins}
          .docId=${this.host.docId}
          .pluginId=${plugin.src}
          .nsdoc=${this.host.nsdoc}
          .docs=${this.host.docs}
          .locale=${this.host.locale}
          .oscdApi=${osdcApi}
          .editor=${this.editor}
          class="${classMap({
            plugin: true,
            menu: plugin.kind === 'menu',
            validator: plugin.kind === 'validator',
            editor: plugin.kind === 'editor',
        })}"
        ></${tag}>`;
    }
};
OscdLayout.styles = css `
    mwc-drawer {
      position: absolute;
      top: 0;
    }

    mwc-top-app-bar-fixed {
      --mdc-theme-text-disabled-on-light: rgba(255, 255, 255, 0.38);
    } /* hack to fix disabled icon buttons rendering black */

    mwc-tab {
      background-color: var(--primary);
      --mdc-theme-primary: var(--mdc-theme-on-primary);
    }

    input[type='file'] {
      display: none;
    }

    mwc-dialog {
      --mdc-dialog-max-width: 98vw;
    }

    mwc-dialog > form {
      display: flex;
      flex-direction: column;
    }

    mwc-dialog > form > * {
      display: block;
      margin-top: 16px;
    }

    mwc-linear-progress {
      position: fixed;
      --mdc-linear-progress-buffer-color: var(--primary);
      --mdc-theme-primary: var(--secondary);
      left: 0px;
      top: 0px;
      width: 100%;
      pointer-events: none;
      z-index: 1000;
    }

    tt {
      font-family: 'Roboto Mono', monospace;
      font-weight: 300;
    }

    #menuContent {
      height: 0px;
    }

    .landing {
      position: absolute;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }

    .landing_icon:hover {
      box-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),
        0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2);
    }

    .landing_icon {
      margin: 12px;
      border-radius: 16px;
      width: 160px;
      height: 140px;
      text-align: center;
      color: var(--mdc-theme-on-secondary);
      background: var(--secondary);
      --mdc-icon-button-size: 100px;
      --mdc-icon-size: 100px;
      --mdc-ripple-color: rgba(0, 0, 0, 0);
      box-shadow: rgb(0 0 0 / 14%) 0px 6px 10px 0px,
        rgb(0 0 0 / 12%) 0px 1px 18px 0px, rgb(0 0 0 / 20%) 0px 3px 5px -1px;
      transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .landing_label {
      width: 160px;
      height: 50px;
      margin-top: 100px;
      margin-left: -30px;
      font-family: 'Roboto', sans-serif;
    }

    .plugin.menu {
      display: flex;
    }

    .plugin.validator {
      display: flex;
    }
  `;
__decorate([
    property({ attribute: false })
], OscdLayout.prototype, "doc", void 0);
__decorate([
    property({ type: String })
], OscdLayout.prototype, "docName", void 0);
__decorate([
    property({ type: Number })
], OscdLayout.prototype, "editCount", void 0);
__decorate([
    property({ type: Object })
], OscdLayout.prototype, "editor", void 0);
__decorate([
    property({ type: Array })
], OscdLayout.prototype, "plugins", void 0);
__decorate([
    property({ type: Object })
], OscdLayout.prototype, "host", void 0);
__decorate([
    state()
], OscdLayout.prototype, "validated", void 0);
__decorate([
    state()
], OscdLayout.prototype, "shouldValidate", void 0);
__decorate([
    state()
], OscdLayout.prototype, "activeEditor", void 0);
__decorate([
    query('#menu')
], OscdLayout.prototype, "menuUI", void 0);
__decorate([
    query('#menuContent')
], OscdLayout.prototype, "menuContent", void 0);
__decorate([
    query('#pluginManager')
], OscdLayout.prototype, "pluginUI", void 0);
__decorate([
    query('#pluginList')
], OscdLayout.prototype, "pluginList", void 0);
__decorate([
    query('#pluginAdd')
], OscdLayout.prototype, "pluginDownloadUI", void 0);
OscdLayout = __decorate([
    customElement('oscd-layout')
], OscdLayout);

export { OscdLayout };
