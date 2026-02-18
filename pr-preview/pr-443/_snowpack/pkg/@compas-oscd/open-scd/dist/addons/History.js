import { _ as __decorate } from '../../../../common/tslib.es6-272d455c.js';
import { L as LitElement, p as property, s as state, q as query, a as customElement } from '../../../../common/lit-element-5ba57723.js';
import { g as get } from '../../../../common/directive-12ec8b14.js';
import { h as html, s as svg } from '../../../../common/lit-html-c4cc555c.js';
import '../../../../@material/mwc-button.js';
import '../../../../@material/mwc-dialog.js';
import '../../../../@material/mwc-icon.js';
import '../../../../@material/mwc-icon-button.js';
import '../../../../@material/mwc-icon-button-toggle.js';
import '../../../../@material/mwc-list.js';
import '../../../../@material/mwc-list/mwc-list-item.js';
import '../../../../@material/mwc-snackbar.js';
import '../../filtered-list.js';
import { i as isInsertV2, b as isSetAttributesV2, c as isSetTextContentV2, a as isRemoveV2, d as isComplexV2 } from '../../../../common/edit-fdcf9a3f.js';
import '../../../../common/plugin-state-api-fe1fb55f.js';
import '../../../../common/render-a1d0e246.js';
import '../../../../common/ripple-handlers-ce7fbbd4.js';
import '../../../../common/ponyfill-44e20603.js';
import '../../../../common/base-element-22e47ec1.js';
import '../../../../common/foundation-794fc3ac.js';
import '../../../../common/foundation-7cea7f4a.js';
import '../../../../common/class-map-360a3edc.js';
import '../../../../common/style-map-46da9e52.js';
import '../../../../common/inert.esm-5c96ec71.js';
import '../../../../common/events-706ce356.js';
import '../../../../common/observer-6d1a3681.js';
import '../../../../common/aria-property-2938771c.js';
import '../../../../common/mwc-icon-button.css-113fd63b.js';
import '../../../../common/if-defined-2d797dbf.js';
import '../../../../common/mwc-list-base-7f6434a8.js';
import '../../../../common/mwc-list-item.css-a9f8123e.js';
import '../../../../common/directive-ecbd2789.js';
import '../../../../@material/mwc-checkbox.js';
import '../../../../common/form-element-4114444b.js';
import '../../../../@material/mwc-formfield.js';
import '../../../../@material/mwc-textfield.js';
import '../../../../common/mwc-textfield.css-92997ed4.js';
import '../../../../common/mwc-line-ripple-directive-08063da0.js';
import '../../../../common/live-a225066a.js';
import '../../../../@material/mwc-list/mwc-check-list-item.js';
import '../../../../common/mwc-control-list-item.css-ee299e27.js';

const pathsSVG = {
    action: svg `<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
    dAIcon: svg `<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
    dOIcon: svg `<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
    enumIcon: svg `<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
    info: svg `<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
    warning: svg `<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
    error: svg `<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
    gooseIcon: svg `<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
    lNIcon: svg `<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
    logIcon: svg `<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
    reportIcon: svg `<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
    smvIcon: svg `<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
};
const iconProperties = {
    dAIcon: {
        width: 26.5,
        height: 24,
    },
    dOIcon: {
        width: 26.5,
        height: 24,
    },
    enumIcon: {
        width: 26.5,
        height: 24,
    },
    lNIcon: {
        width: 26.5,
        height: 24,
    },
};
const dataTypeTemplateIcons = {
    DAType: getIcon('dAIcon'),
    DOType: getIcon('dOIcon'),
    EnumType: getIcon('enumIcon'),
    LNodeType: getIcon('lNIcon'),
};
const iconColors = {
    info: '--cyan',
    warning: '--yellow',
    error: '--red',
    action: '--blue',
};
function getIcon(type) {
    if (type === 'reset')
        return html ``;
    const height = iconProperties[type]?.height ?? 24;
    const width = iconProperties[type]?.width ?? 24;
    return html `<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${height}"
    viewBox="0 0 ${width} ${height}"
    width="${width}"
  >
    ${pathsSVG[type]}
  </svg> `;
}
function getFilterIcon(type, state) {
    if (type === 'reset')
        return html ``;
    const height = iconProperties[type]?.height ?? 24;
    const width = iconProperties[type]?.width ?? 24;
    return html `<svg
    slot="${state ? 'onIcon' : 'offIcon'}"
    xmlns="http://www.w3.org/2000/svg"
    height="${height}"
    viewBox="0 0 ${width} ${height}"
    width="${width}"
  >
    ${pathsSVG[type]}
  </svg> `;
}

const getLogText = (edit) => {
    if (isInsertV2(edit)) {
        const name = edit.node instanceof Element ?
            edit.node.tagName :
            get('editing.node');
        return { title: get('editing.created', { name }) };
    }
    else if (isSetAttributesV2(edit) || isSetTextContentV2(edit)) {
        const name = edit.element.tagName;
        return { title: get('editing.updated', { name }) };
    }
    else if (isRemoveV2(edit)) {
        const name = edit.node instanceof Element ?
            edit.node.tagName :
            get('editing.node');
        return { title: get('editing.deleted', { name }) };
    }
    else if (isComplexV2(edit)) {
        const message = edit.map(e => getLogText(e)).map(({ title }) => title).join(', ');
        return { title: get('editing.complex'), message };
    }
    return { title: '' };
};

const icons = {
    info: 'info',
    warning: 'warning',
    error: 'report',
};
function getPluginName(src) {
    let storedPluginsString = localStorage.getItem('plugins');
    if (!storedPluginsString) {
        storedPluginsString = '[]';
    }
    const storedPlugins = JSON.parse(storedPluginsString);
    const wantedPlugin = storedPlugins.find((p) => p.src === src);
    if (!wantedPlugin) {
        return `pluginnotfound: ${src} in ${storedPluginsString}`;
    }
    const name = wantedPlugin.name;
    if (!name) {
        return `pluginhasnoname:${src}`;
    }
    return name;
}
var HistoryUIKind;
(function (HistoryUIKind) {
    HistoryUIKind["log"] = "log";
    HistoryUIKind["history"] = "history";
    HistoryUIKind["diagnostic"] = "diagnostic";
})(HistoryUIKind || (HistoryUIKind = {}));
function newHistoryUIEvent(show, kind, eventInitDict) {
    return new CustomEvent('history-dialog-ui', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: {
            show,
            kind,
            ...eventInitDict?.detail,
        },
    });
}
function newEmptyIssuesEvent(pluginSrc, eventInitDict) {
    return new CustomEvent('empty-issues', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { pluginSrc, ...eventInitDict?.detail },
    });
}
let OscdHistory = class OscdHistory extends LitElement {
    onIssue(de) {
        const issues = this.diagnoses.get(de.detail.validatorId);
        if (!issues)
            this.diagnoses.set(de.detail.validatorId, [de.detail]);
        else
            issues?.push(de.detail);
        this.latestIssue = de.detail;
        this.issueUI.close();
        this.issueUI.show();
    }
    undo() {
        this.editor.undo();
    }
    redo() {
        this.editor.redo();
    }
    onReset() {
        this.log = [];
        this.diagnoses.clear();
        this.editor.reset();
        this.updateHistory();
    }
    onInfo(detail) {
        const entry = {
            time: new Date(),
            ...detail,
        };
        this.log.push(entry);
        if (!this.logUI.open) {
            const ui = {
                error: this.errorUI,
                warning: this.warningUI,
                info: this.infoUI,
            }[detail.kind];
            ui.close();
            ui.show();
        }
        if (detail.kind == 'error') {
            this.errorUI.close(); // hack to reset timeout
            this.errorUI.show();
        }
        this.requestUpdate('log', []);
    }
    onLog(le) {
        switch (le.detail.kind) {
            case 'reset':
                this.onReset();
                break;
            case 'action':
                // No longer needed
                break;
            default:
                this.onInfo(le.detail);
                break;
        }
    }
    historyUIHandler(e) {
        const ui = {
            log: this.logUI,
            history: this.historyUI,
            diagnostic: this.diagnosticUI,
        }[e.detail.kind];
        if (e.detail.show)
            ui.show();
        else
            ui.close();
    }
    emptyIssuesHandler(e) {
        if (this.diagnoses.get(e.detail.pluginSrc))
            this.diagnoses.get(e.detail.pluginSrc).length = 0;
    }
    handleKeyPress(e) {
        const ctrlAnd = (key) => e.key === key && e.ctrlKey;
        if (ctrlAnd('y'))
            this.redo();
        if (ctrlAnd('z'))
            this.undo();
        if (ctrlAnd('l'))
            this.logUI.open ? this.logUI.close() : this.logUI.show();
        if (ctrlAnd('d'))
            this.diagnosticUI.open
                ? this.diagnosticUI.close()
                : this.diagnosticUI.show();
    }
    updateHistory() {
        const { past, future } = this.editor;
        const activeIndex = past.length - 1;
        const allEntries = [...past, ...future];
        this.history = allEntries.map((e, index) => {
            const { title, message } = getLogText(e.redo);
            return {
                isActive: index === activeIndex,
                time: e.time,
                title: e.title ?? title,
                message
            };
        });
    }
    constructor() {
        super();
        /** All [[`LogEntry`]]s received so far through [[`LogEvent`]]s. */
        this.log = [];
        this.diagnoses = new Map();
        this.history = [];
        this.unsubscribers = [];
        this.undo = this.undo.bind(this);
        this.redo = this.redo.bind(this);
        this.onLog = this.onLog.bind(this);
        this.onIssue = this.onIssue.bind(this);
        this.historyUIHandler = this.historyUIHandler.bind(this);
        this.emptyIssuesHandler = this.emptyIssuesHandler.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        document.onkeydown = this.handleKeyPress;
    }
    connectedCallback() {
        super.connectedCallback();
        this.unsubscribers.push(this.editor.subscribe(e => this.updateHistory()), this.editor.subscribeUndoRedo(e => this.updateHistory()));
        this.host.addEventListener('log', this.onLog);
        this.host.addEventListener('issue', this.onIssue);
        this.host.addEventListener('history-dialog-ui', this.historyUIHandler);
        this.host.addEventListener('empty-issues', this.emptyIssuesHandler);
    }
    disconnectedCallback() {
        this.unsubscribers.forEach(u => u());
    }
    renderLogEntry(entry, index, log) {
        return html ` <abbr title="${entry.title}">
      <mwc-list-item
        class="${entry.kind}"
        graphic="icon"
        ?twoline=${!!entry.message}
      >
        <span>
          <!-- FIXME: replace tt with mwc-chip asap -->
          <tt>${entry.time?.toLocaleString()}</tt>
          ${entry.title}</span
        >
        <span slot="secondary">${entry.message}</span>
        <mwc-icon
          slot="graphic"
          style="--mdc-theme-text-icon-on-background:var(${iconColors[entry.kind]})"
          >${icons[entry.kind]}</mwc-icon
        >
      </mwc-list-item></abbr
    >`;
    }
    renderHistoryEntry(entry) {
        return html ` <abbr title="${entry.title}">
      <mwc-list-item
        ?twoline=${!!entry.message}
        ?activated=${entry.isActive}
      >
        <span>
          <tt>${this.formatTime(entry.time)}</tt>
          ${entry.title}
        </span>
        <span slot="secondary">${entry.message}</span>
      </mwc-list-item>
    </abbr>`;
    }
    formatTime(time) {
        const date = new Date(time);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
    renderLog() {
        if (this.log.length > 0)
            return this.log.slice().reverse().map(this.renderLogEntry, this);
        else
            return html `<mwc-list-item disabled graphic="icon">
        <span>${get('log.placeholder')}</span>
        <mwc-icon slot="graphic">info</mwc-icon>
      </mwc-list-item>`;
    }
    renderHistory() {
        if (this.history.length > 0)
            return this.history.slice().reverse().map(e => this.renderHistoryEntry(e));
        else
            return html `<mwc-list-item disabled graphic="icon">
        <span>${get('history.placeholder')}</span>
        <mwc-icon slot="graphic">info</mwc-icon>
      </mwc-list-item>`;
    }
    renderIssueEntry(issue) {
        return html ` <abbr title="${issue.title + '\n' + issue.message}"
      ><mwc-list-item ?twoline=${!!issue.message}>
        <span> ${issue.title}</span>
        <span slot="secondary">${issue.message}</span>
      </mwc-list-item></abbr
    >`;
    }
    renderValidatorsIssues(issues) {
        if (issues.length === 0)
            return [html ``];
        return [
            html `
        <mwc-list-item noninteractive>
          ${getPluginName(issues[0].validatorId)}
        </mwc-list-item>
      `,
            html `<li divider padded role="separator"></li>`,
            ...issues.map(issue => this.renderIssueEntry(issue)),
        ];
    }
    renderIssues() {
        const issueItems = [];
        this.diagnoses.forEach(issues => {
            this.renderValidatorsIssues(issues).forEach(issueItem => issueItems.push(issueItem));
        });
        return issueItems.length
            ? issueItems
            : html `<mwc-list-item disabled graphic="icon">
          <span>${get('diag.placeholder')}</span>
          <mwc-icon slot="graphic">info</mwc-icon>
        </mwc-list-item>`;
    }
    renderFilterButtons() {
        return Object.keys(icons).map(kind => html `<mwc-icon-button-toggle id="${kind}filter" on
        >${getFilterIcon(kind, false)}
        ${getFilterIcon(kind, true)}</mwc-icon-button-toggle
      >`);
    }
    renderLogDialog() {
        return html ` <mwc-dialog id="log" heading="${get('log.name')}">
      ${this.renderFilterButtons()}
      <mwc-list id="content" wrapFocus>${this.renderLog()}</mwc-list>
      <mwc-button slot="primaryAction" dialogaction="close"
        >${get('close')}</mwc-button
      >
    </mwc-dialog>`;
    }
    renderHistoryUI() {
        return html ` <mwc-dialog id="history" heading="${get('history.name')}">
      <mwc-list id="content" wrapFocus>${this.renderHistory()}</mwc-list>
      <mwc-button
        icon="undo"
        label="${get('undo')}"
        ?disabled=${!this.editor.canUndo}
        @click=${this.undo}
        slot="secondaryAction"
      ></mwc-button>
      <mwc-button
        icon="redo"
        label="${get('redo')}"
        ?disabled=${!this.editor.canRedo}
        @click=${this.redo}
        slot="secondaryAction"
      ></mwc-button>
      <mwc-button slot="primaryAction" dialogaction="close"
        >${get('close')}</mwc-button
      >
    </mwc-dialog>`;
    }
    render() {
        return html `<slot></slot>
      <style>
        #log > mwc-icon-button-toggle {
          position: absolute;
          top: 8px;
          right: 14px;
        }
        #log > mwc-icon-button-toggle:nth-child(2) {
          right: 62px;
        }
        #log > mwc-icon-button-toggle:nth-child(3) {
          right: 110px;
        }
        #log > mwc-icon-button-toggle:nth-child(4) {
          right: 158px;
        }
        #content mwc-list-item.info,
        #content mwc-list-item.warning,
        #content mwc-list-item.error {
          display: none;
        }
        #infofilter[on] ~ #content mwc-list-item.info {
          display: flex;
        }
        #warningfilter[on] ~ #content mwc-list-item.warning {
          display: flex;
        }
        #errorfilter[on] ~ #content mwc-list-item.error {
          display: flex;
        }

        #infofilter[on] {
          color: var(--cyan);
        }

        #warningfilter[on] {
          color: var(--yellow);
        }

        #errorfilter[on] {
          color: var(--red);
        }

        #actionfilter[on] {
          color: var(--blue);
        }

        #log,
        #history {
          --mdc-dialog-min-width: 92vw;
        }

        #log > #filterContainer {
          position: absolute;
          top: 14px;
          right: 14px;
        }
      </style>
      ${this.renderLogDialog()} ${this.renderHistoryUI()}
      <mwc-dialog id="diagnostic" heading="${get('diag.name')}">
        <filtered-list id="content" wrapFocus>
          ${this.renderIssues()}
        </filtered-list>
        <mwc-button slot="primaryAction" dialogaction="close">
          ${get('close')}
        </mwc-button>
      </mwc-dialog>

      <mwc-snackbar
        id="info"
        timeoutMs="4000"
        labelText="${this.log
            .slice()
            .reverse()
            .find(le => le.kind === 'info')?.title ??
            get('log.snackbar.placeholder')}"
      >
        <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
      <mwc-snackbar
        id="warning"
        timeoutMs="6000"
        labelText="${this.log
            .slice()
            .reverse()
            .find(le => le.kind === 'warning')?.title ??
            get('log.snackbar.placeholder')}"
      >
        <mwc-button
          slot="action"
          icon="history"
          @click=${() => this.logUI.show()}
          >${get('log.snackbar.show')}</mwc-button
        >
        <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
      <mwc-snackbar
        id="error"
        timeoutMs="10000"
        labelText="${this.log
            .slice()
            .reverse()
            .find(le => le.kind === 'error')?.title ??
            get('log.snackbar.placeholder')}"
      >
        <mwc-button
          slot="action"
          icon="history"
          @click=${() => this.logUI.show()}
          >${get('log.snackbar.show')}</mwc-button
        >
        <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
      <mwc-snackbar
        id="issue"
        timeoutMs="10000"
        labelText="${this.latestIssue?.title ??
            get('log.snackbar.placeholder')}"
      >
        <mwc-button
          slot="action"
          icon="rule"
          @click=${() => this.diagnosticUI.show()}
          >${get('log.snackbar.show')}</mwc-button
        >
        <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>`;
    }
};
__decorate([
    property({ type: Array })
], OscdHistory.prototype, "log", void 0);
__decorate([
    property({ type: Object })
], OscdHistory.prototype, "editor", void 0);
__decorate([
    property()
], OscdHistory.prototype, "diagnoses", void 0);
__decorate([
    property({ type: Object })
], OscdHistory.prototype, "host", void 0);
__decorate([
    state()
], OscdHistory.prototype, "latestIssue", void 0);
__decorate([
    state()
], OscdHistory.prototype, "history", void 0);
__decorate([
    query('#log')
], OscdHistory.prototype, "logUI", void 0);
__decorate([
    query('#history')
], OscdHistory.prototype, "historyUI", void 0);
__decorate([
    query('#diagnostic')
], OscdHistory.prototype, "diagnosticUI", void 0);
__decorate([
    query('#error')
], OscdHistory.prototype, "errorUI", void 0);
__decorate([
    query('#warning')
], OscdHistory.prototype, "warningUI", void 0);
__decorate([
    query('#info')
], OscdHistory.prototype, "infoUI", void 0);
__decorate([
    query('#issue')
], OscdHistory.prototype, "issueUI", void 0);
OscdHistory = __decorate([
    customElement('oscd-history')
], OscdHistory);

export { HistoryUIKind, OscdHistory, newEmptyIssuesEvent, newHistoryUIEvent };
