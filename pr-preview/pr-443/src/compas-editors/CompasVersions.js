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
  html,
  LitElement,
  property,
  query,
  state
} from "../../_snowpack/pkg/lit-element.js";
import {get, translate} from "../../_snowpack/pkg/lit-translate.js";
import "../../_snowpack/pkg/@material/mwc-dialog.js";
import "../../_snowpack/pkg/@material/mwc-fab.js";
import "../../_snowpack/pkg/@material/mwc-icon.js";
import "../../_snowpack/pkg/@material/mwc-icon-button.js";
import "../../_snowpack/pkg/@material/mwc-list.js";
import "../../_snowpack/pkg/@material/mwc-list/mwc-list-item.js";
import "../../_snowpack/pkg/@material/mwc-list/mwc-check-list-item.js";
import "../../_snowpack/pkg/@compas-oscd/open-scd/dist/plain-compare-list.js";
import {newLogEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {newOpenDocEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {newWizardEvent} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {
  CompasSclDataService,
  SDS_NAMESPACE
} from "../compas-services/CompasSclDataService.js";
import {createLogEvent} from "../compas-services/foundation.js";
import {
  compareVersions,
  getTypeFromDocName,
  updateDocumentInOpenSCD
} from "../compas/foundation.js";
import {addVersionToCompasWizard} from "../compas/CompasUploadVersion.js";
import {getElementByName, styles} from "./foundation.js";
import {editCompasSCLWizard} from "../compas-wizards/scl.js";
export default class CompasVersionsPlugin extends LitElement {
  constructor() {
    super(...arguments);
    this.selectedVersionsOnCompasVersionsEditor = new Set();
  }
  updated(_changedProperties) {
    super.updated(_changedProperties);
    if (_changedProperties.has("doc")) {
      this.selectedVersionsOnCompasVersionsEditor = new Set();
      if (!this.docId) {
        this.historyItem = [];
      } else {
        this.fetchData();
      }
    }
  }
  fetchData() {
    this.historyItem = void 0;
    if (!this.docId) {
      this.historyItem = [];
    } else {
      const type = getTypeFromDocName(this.docName);
      CompasSclDataService().listSclVersions(type, this.docId).then((xmlResponse) => {
        this.historyItem = Array.from(xmlResponse.querySelectorAll("HistoryItem") ?? []);
      }).catch(() => {
        this.historyItem = [];
      });
    }
  }
  addVersionWizard() {
    return addVersionToCompasWizard({
      docId: this.docId,
      docName: this.docName
    });
  }
  confirmRestoreVersionWizard(version) {
    function openScl(plugin) {
      function updateDocument(sclDocument) {
        updateDocumentInOpenSCD(plugin, sclDocument);
        plugin.dispatchEvent(newLogEvent({
          kind: "info",
          title: get("compas.versions.restoreVersionSuccess", {
            version
          })
        }));
      }
      return function() {
        const type = getTypeFromDocName(plugin.docName);
        CompasSclDataService().getSclDocumentVersion(plugin, type, plugin.docId, version).then(updateDocument).catch((reason) => createLogEvent(plugin, reason));
        plugin.dispatchEvent(newWizardEvent());
        return [];
      };
    }
    return [
      {
        title: get("compas.versions.confirmRestoreTitle"),
        primary: {
          icon: "",
          label: get("compas.versions.confirmButton"),
          action: openScl(this)
        },
        content: [
          html`<span
            >${translate("compas.versions.confirmRestore", {
            version
          })}</span
          >`
        ]
      }
    ];
  }
  confirmDeleteProjectWizard() {
    function deleteScl(plugin) {
      return function() {
        const type = getTypeFromDocName(plugin.docName);
        CompasSclDataService().deleteSclDocument(type, plugin.docId).then(() => {
          plugin.fetchData();
          plugin.dispatchEvent(newOpenDocEvent(plugin.doc, plugin.docName, {
            detail: {docId: ""}
          }));
          plugin.dispatchEvent(newLogEvent({
            kind: "info",
            title: get("compas.versions.deleteSuccess")
          }));
        }).catch((reason) => createLogEvent(plugin, reason));
        plugin.dispatchEvent(newWizardEvent());
        return [];
      };
    }
    return [
      {
        title: get("compas.versions.confirmDeleteTitle"),
        primary: {
          icon: "",
          label: get("compas.versions.confirmButton"),
          action: deleteScl(this)
        },
        content: [
          html`<span>${translate("compas.versions.confirmDelete")}</span>`
        ]
      }
    ];
  }
  confirmDeleteVersionWizard(version) {
    function deleteSclVersion(plugin) {
      return function() {
        const type = getTypeFromDocName(plugin.docName);
        CompasSclDataService().deleteSclDocumentVersion(type, plugin.docId, version).then(() => {
          plugin.fetchData();
          plugin.dispatchEvent(newLogEvent({
            kind: "info",
            title: get("compas.versions.deleteVersionSuccess", {
              version
            })
          }));
        }).catch((reason) => createLogEvent(plugin, reason));
        plugin.dispatchEvent(newWizardEvent());
        return [];
      };
    }
    return [
      {
        title: get("compas.versions.confirmDeleteVersionTitle"),
        primary: {
          icon: "",
          label: get("compas.versions.confirmButton"),
          action: deleteSclVersion(this)
        },
        content: [
          html`<span
            >${translate("compas.versions.confirmDeleteVersion", {
            version
          })}</span
          >`
        ]
      }
    ];
  }
  getSelectedVersions() {
    const selectedVersions = [];
    const listItems = this.shadowRoot.querySelectorAll("mwc-check-list-item");
    this.selectedVersionsOnCompasVersionsEditor.forEach((index) => {
      selectedVersions.push(listItems.item(index).value);
    });
    return selectedVersions;
  }
  async compareCurrentVersion() {
    const selectedVersions = this.getSelectedVersions();
    if (selectedVersions.length === 1) {
      this.compareLeftTitle = selectedVersions[0];
      this.compareLeftElement = await this.getVersion(this.compareLeftTitle) ?? void 0;
      this.compareRightTitle = "Latest";
      this.compareRightElement = this.doc.documentElement;
      this.compareDialogTitle = get("compas.compare.titleCurrent", {
        oldVersion: this.compareLeftTitle
      });
      this.compareDialog.open = true;
    } else {
      this.dispatchEvent(newWizardEvent(this.showMessageWizard(get("compas.versions.selectOneVersionsTitle"), get("compas.versions.selectOneVersionsMessage", {
        size: selectedVersions.length
      }))));
    }
  }
  async compareVersions() {
    const selectedVersions = this.getSelectedVersions();
    if (selectedVersions.length === 2) {
      const sortedVersions = selectedVersions.slice().sort(compareVersions);
      this.compareLeftTitle = sortedVersions[0];
      this.compareLeftElement = await this.getVersion(this.compareLeftTitle) ?? void 0;
      this.compareRightTitle = sortedVersions[1];
      this.compareRightElement = await this.getVersion(this.compareRightTitle) ?? void 0;
      this.compareDialogTitle = get("compas.compare.title", {
        oldVersion: this.compareLeftTitle,
        newVersion: this.compareRightTitle
      });
      this.compareDialog.open = true;
    } else {
      this.dispatchEvent(newWizardEvent(this.showMessageWizard(get("compas.versions.selectTwoVersionsTitle"), get("compas.versions.selectTwoVersionsMessage", {
        size: selectedVersions.length
      }))));
    }
  }
  onClosedCompareDialog() {
    this.compareDialogTitle = void 0;
    this.compareLeftElement = void 0;
    this.compareRightElement = void 0;
  }
  renderCompareDialog() {
    return html`<mwc-dialog
      id="compareDialog"
      heading="${this.compareDialogTitle}"
      @closed=${this.onClosedCompareDialog}
    >
      ${this.compareLeftElement && this.compareRightElement ? html`<plain-compare-list
            .leftHandObject=${this.compareLeftElement}
            .rightHandObject=${this.compareRightElement}
            .leftHandTitle=${this.compareLeftTitle ?? ""}
            .rightHandTitle=${this.compareRightTitle ?? ""}
          ></plain-compare-list>` : html``}
      <mwc-button
        slot="secondaryAction"
        dialogAction="close"
        label="${translate("close")}"
        style="--mdc-theme-primary: var(--mdc-theme-error)"
      ></mwc-button>
    </mwc-dialog>`;
  }
  showMessageWizard(title, message) {
    return [
      {
        title,
        content: [html`<span>${message}</span>`]
      }
    ];
  }
  async getVersion(version) {
    const type = getTypeFromDocName(this.docName);
    return CompasSclDataService().getSclDocumentVersion(this, type, this.docId, version).then((sclDocument) => {
      return Promise.resolve(sclDocument.documentElement);
    }).catch((reason) => {
      createLogEvent(this, reason);
    });
  }
  openEditWizard() {
    const wizard = editCompasSCLWizard(this.doc.documentElement);
    if (wizard)
      this.dispatchEvent(newWizardEvent(wizard));
  }
  getCurrentVersion() {
    const header = this.doc.querySelector("Header");
    return header?.getAttribute("version") ?? "unknown";
  }
  getCurrentName() {
    const sclName = this.doc.querySelector('SCL > Private[type="compas_scl"] > SclName');
    return sclName?.textContent ?? "unknown";
  }
  renderLineInfo(item) {
    let element = getElementByName(item, SDS_NAMESPACE, "Name");
    if (element === null) {
      element = getElementByName(item, SDS_NAMESPACE, "Id");
    }
    const name = element.textContent ?? "";
    const version = getElementByName(item, SDS_NAMESPACE, "Version").textContent ?? "";
    const who = getElementByName(item, SDS_NAMESPACE, "Who").textContent ?? "";
    const when = getElementByName(item, SDS_NAMESPACE, "When").textContent ?? "";
    const what = getElementByName(item, SDS_NAMESPACE, "What").textContent ?? "";
    return html`<span>${name} (Version: ${version})</span>
      <span slot="secondary">
        Who: "${who ? who : "-"}", When: "${when ? when : "-"}", What:
        "${what ? what : "-"}"
      </span>`;
  }
  render() {
    if (!this.historyItem) {
      return html` <compas-loading></compas-loading> `;
    }
    if (this.historyItem.length <= 0) {
      return html` <mwc-list>
        <mwc-list-item id="no-scl-versions">
          <span>${translate("compas.noSclVersions")}</span>
        </mwc-list-item>
      </mwc-list>`;
    }
    return html` <h1>
        ${translate("compas.versions.sclInfo", {
      name: this.getCurrentName(),
      version: this.getCurrentVersion()
    })}
        <nav>
          <abbr title="${translate("compas.versions.addVersionButton")}">
            <mwc-icon-button
              icon="playlist_add"
              @click=${() => {
      this.dispatchEvent(newWizardEvent(this.addVersionWizard()));
    }}
            ></mwc-icon-button>
          </abbr>
        </nav>
        <nav>
          <abbr title="${translate("compas.versions.deleteProjectButton")}">
            <mwc-icon-button
              icon="delete_forever"
              @click=${() => {
      this.dispatchEvent(newWizardEvent(this.confirmDeleteProjectWizard()));
    }}
            ></mwc-icon-button>
          </abbr>
        </nav>
        <nav>
          <abbr title="${translate("edit")}">
            <mwc-icon-button
              icon="edit"
              @click=${() => this.openEditWizard()}
            ></mwc-icon-button>
          </abbr>
        </nav>
      </h1>
      <div id="containerCompasVersions">
        <section tabindex="0">
          <h1>${translate("compas.versions.title")}</h1>
          <mwc-list
            multi
            @selected=${(evt) => {
      this.selectedVersionsOnCompasVersionsEditor = evt.detail.index;
    }}
          >
            ${this.historyItem.map((item, index, items) => {
      const version = getElementByName(item, SDS_NAMESPACE, "Version").textContent ?? "";
      if (items.length - 1 === index) {
        return html`<mwc-check-list-item
                  value="${version}"
                  tabindex="0"
                  graphic="icon"
                  twoline
                  .selected=${this.selectedVersionsOnCompasVersionsEditor.has(index)}
                >
                  ${this.renderLineInfo(item)}
                  <span slot="graphic">
                    <mwc-icon
                      @click=${() => {
          this.dispatchEvent(newWizardEvent(this.confirmRestoreVersionWizard(version)));
        }}
                      >restore</mwc-icon
                    >
                  </span>
                </mwc-check-list-item>`;
      }
      return html`<mwc-check-list-item
                value="${version}"
                tabindex="0"
                graphic="icon"
                twoline
                .selected=${this.selectedVersionsOnCompasVersionsEditor.has(index)}
              >
                ${this.renderLineInfo(item)}
                <span slot="graphic">
                  <mwc-icon
                    @click=${() => {
        this.dispatchEvent(newWizardEvent(this.confirmRestoreVersionWizard(version)));
      }}
                    >restore</mwc-icon
                  >
                  <mwc-icon
                    @click=${() => {
        this.dispatchEvent(newWizardEvent(this.confirmDeleteVersionWizard(version)));
      }}
                    >delete</mwc-icon
                  >
                </span>
              </mwc-check-list-item>`;
    })}
          </mwc-list>
        </section>
        <mwc-fab
          extended
          icon="compare"
          label="${translate("compas.versions.compareCurrentButton")}"
          @click=${this.compareCurrentVersion}
        ></mwc-fab>
        <mwc-fab
          extended
          icon="compare"
          label="${translate("compas.versions.compareButton")}"
          @click=${this.compareVersions}
        ></mwc-fab>
      </div>
      ${this.renderCompareDialog()}`;
  }
}
CompasVersionsPlugin.styles = css`
    ${styles}

    mwc-dialog {
      --mdc-dialog-min-width: 64vw;
    }

    mwc-list-item#no-scl-versions > span {
      color: var(--base1);
    }

    :host {
      width: 100vw;
    }

    h1 > nav,
    h1 > abbr > mwc-icon-button {
      float: right;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    #containerCompasVersions {
      padding: 16px 12px 16px 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    @media (max-width: 387px) {
      #containerCompasVersions {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }

    mwc-check-list-item {
      padding-left: 60px;
    }

    mwc-check-list-item > span {
      width: 90px;
      text-align: left;
    }

    mwc-fab {
      float: right;
      margin: 5px 5px 5px 5px;
    }
  `;
__decorate([
  property()
], CompasVersionsPlugin.prototype, "doc", 2);
__decorate([
  property({type: String})
], CompasVersionsPlugin.prototype, "docId", 2);
__decorate([
  property({type: String})
], CompasVersionsPlugin.prototype, "docName", 2);
__decorate([
  property()
], CompasVersionsPlugin.prototype, "historyItem", 2);
__decorate([
  state()
], CompasVersionsPlugin.prototype, "compareDialogTitle", 2);
__decorate([
  state()
], CompasVersionsPlugin.prototype, "compareLeftElement", 2);
__decorate([
  state()
], CompasVersionsPlugin.prototype, "compareLeftTitle", 2);
__decorate([
  state()
], CompasVersionsPlugin.prototype, "compareRightElement", 2);
__decorate([
  state()
], CompasVersionsPlugin.prototype, "compareRightTitle", 2);
__decorate([
  query("mwc-dialog#compareDialog")
], CompasVersionsPlugin.prototype, "compareDialog", 2);
