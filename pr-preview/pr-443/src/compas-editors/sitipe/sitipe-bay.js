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
  customElement,
  html,
  LitElement,
  property,
  query,
  state
} from "../../../_snowpack/pkg/lit-element.js";
import "../../../_snowpack/pkg/@material/mwc-menu.js";
import "../../../_snowpack/pkg/@material/mwc-list.js";
import "../../../_snowpack/pkg/@material/mwc-icon.js";
import "../../../_snowpack/pkg/@material/mwc-icon-button.js";
import {isPublic} from "../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {newActionEvent} from "../../../_snowpack/pkg/@compas-oscd/core.js";
import {createElement} from "../../../_snowpack/pkg/@compas-oscd/xml.js";
import {newLogEvent} from "../../../_snowpack/pkg/@compas-oscd/core.js";
import "../../../_snowpack/pkg/@compas-oscd/open-scd/dist/action-pane.js";
import "../../../_snowpack/pkg/@compas-oscd/open-scd/dist/action-icon.js";
import {
  SIEMENS_SITIPE_IED_REF,
  SIEMENS_SITIPE_BAY_TEMPLATE,
  SIEMENS_SITIPE_IED_TEMPLATE_REF
} from "./foundation.js";
import {
  getBayTypicalComponents,
  getImportedBTComponentData,
  getImportedBtComponents
} from "./sitipe-service.js";
import {defaultNamingStrategy} from "./sitipe-substation.js";
import {get} from "../../../_snowpack/pkg/lit-translate.js";
import {updateReferences} from "../../../plugins/src/wizards/foundation/references.js";
function updateNamespaces(destElement, sourceElement) {
  Array.prototype.slice.call(sourceElement.attributes).filter((attr) => attr.name.startsWith("xmlns:")).filter((attr) => !destElement.hasAttribute(attr.name)).forEach((attr) => {
    destElement.setAttributeNS("http://www.w3.org/2000/xmlns/", attr.name, attr.value);
  });
}
function getSubNetwork(elements, element) {
  const existElement = elements.find((item) => item.getAttribute("name") === element.getAttribute("name"));
  return existElement ? existElement : element.cloneNode(false);
}
function addCommunicationElements(ied, doc) {
  const actions = [];
  const oldCommunicationElement = doc.querySelector(":root > Communication");
  const communication = oldCommunicationElement ? oldCommunicationElement : createElement(doc, "Communication", {});
  if (!oldCommunicationElement)
    actions.push({
      new: {
        parent: doc.querySelector(":root"),
        element: communication
      }
    });
  const connectedAPs = Array.from(ied.ownerDocument.querySelectorAll(`:root > Communication > SubNetwork > ConnectedAP[iedName="${ied.getAttribute("name")}"]`));
  const createdSubNetworks = [];
  connectedAPs.forEach((connectedAP) => {
    const newSubNetwork = connectedAP.parentElement;
    const oldSubNetworkMatch = communication.querySelector(`:root > Communication > SubNetwork[name="${newSubNetwork.getAttribute("name")}"]`);
    const subNetwork = oldSubNetworkMatch ? oldSubNetworkMatch : getSubNetwork(createdSubNetworks, newSubNetwork);
    const element = connectedAP.cloneNode(true);
    if (!oldSubNetworkMatch && !createdSubNetworks.includes(subNetwork)) {
      actions.push({
        new: {
          parent: communication,
          element: subNetwork
        }
      });
      createdSubNetworks.push(subNetwork);
    }
    actions.push({
      new: {
        parent: subNetwork,
        element
      }
    });
  });
  return actions;
}
function hasConnectionToIed(type, ied) {
  const data = type.parentElement;
  const id = type.getAttribute("id");
  if (!data || !id)
    return false;
  if (type.tagName === "EnumType")
    return Array.from(data.querySelectorAll(`DOType > DA[type="${id}"],DAType > BDA[type="${id}"]`)).some((typeChild) => hasConnectionToIed(typeChild.parentElement, ied));
  if (type.tagName === "DAType")
    return Array.from(data.querySelectorAll(`DOType > DA[type="${id}"],DAType > BDA[type="${id}"]`)).some((typeChild) => hasConnectionToIed(typeChild.parentElement, ied));
  if (type.tagName === "DOType")
    return Array.from(data.querySelectorAll(`LNodeType > DO[type="${id}"], DOType > SDO[type="${id}"]`)).some((typeChild) => hasConnectionToIed(typeChild.parentElement, ied));
  return Array.from(ied.getElementsByTagName("LN0")).concat(Array.from(ied.getElementsByTagName("LN"))).some((anyln) => anyln.getAttribute("lnType") === id);
}
function addEnumType(ied, enumType, parent) {
  if (!hasConnectionToIed(enumType, ied))
    return;
  const existEnumType = parent.querySelector(`EnumType[id="${enumType.getAttribute("id")}"]`);
  if (existEnumType && enumType.isEqualNode(existEnumType))
    return;
  if (existEnumType) {
    const data = enumType.parentElement;
    const idOld = enumType.getAttribute("id");
    const idNew = ied.getAttribute("name") + idOld;
    enumType.setAttribute("id", idNew);
    data.querySelectorAll(`DOType > DA[type="${idOld}"],DAType > BDA[type="${idOld}"]`).forEach((type) => type.setAttribute("type", idNew));
  }
  return {
    new: {
      parent,
      element: enumType
    }
  };
}
function addDAType(ied, daType, parent) {
  if (!hasConnectionToIed(daType, ied))
    return;
  const existDAType = parent.querySelector(`DAType[id="${daType.getAttribute("id")}"]`);
  if (existDAType && daType.isEqualNode(existDAType))
    return;
  if (existDAType) {
    const data = daType.parentElement;
    const idOld = daType.getAttribute("id");
    const idNew = ied.getAttribute("name") + idOld;
    daType.setAttribute("id", idNew);
    data.querySelectorAll(`DOType > DA[type="${idOld}"],DAType > BDA[type="${idOld}"]`).forEach((type) => type.setAttribute("type", idNew));
  }
  return {
    new: {
      parent,
      element: daType
    }
  };
}
function addDOType(ied, doType, parent) {
  if (!hasConnectionToIed(doType, ied))
    return;
  const existDOType = parent.querySelector(`DOType[id="${doType.getAttribute("id")}"]`);
  if (existDOType && doType.isEqualNode(existDOType))
    return;
  if (existDOType) {
    const data = doType.parentElement;
    const idOld = doType.getAttribute("id");
    const idNew = ied.getAttribute("name") + idOld;
    doType.setAttribute("id", idNew);
    data.querySelectorAll(`LNodeType > DO[type="${idOld}"], DOType > SDO[type="${idOld}"]`).forEach((type) => type.setAttribute("type", idNew));
  }
  return {
    new: {
      parent,
      element: doType
    }
  };
}
function addLNodeType(ied, lNodeType, parent) {
  if (!hasConnectionToIed(lNodeType, ied))
    return;
  const existLNodeType = parent.querySelector(`LNodeType[id="${lNodeType.getAttribute("id")}"]`);
  if (existLNodeType && lNodeType.isEqualNode(existLNodeType))
    return;
  if (existLNodeType) {
    const idOld = lNodeType.getAttribute("id");
    const idNew = ied.getAttribute("name").concat(idOld);
    lNodeType.setAttribute("id", idNew);
    Array.from(ied.querySelectorAll(`LN0[lnType="${idOld}"],LN[lnType="${idOld}"]`)).filter(isPublic).forEach((ln) => ln.setAttribute("lnType", idNew));
  }
  return {
    new: {
      parent,
      element: lNodeType
    }
  };
}
function addDataTypeTemplates(ied, doc) {
  const actions = [];
  const dataTypeTemplates = doc.querySelector(":root > DataTypeTemplates") ? doc.querySelector(":root > DataTypeTemplates") : createElement(doc, "DataTypeTemplates", {});
  if (!dataTypeTemplates.parentElement) {
    actions.push({
      new: {
        parent: doc.querySelector("SCL"),
        element: dataTypeTemplates
      }
    });
  }
  ied.ownerDocument.querySelectorAll(":root > DataTypeTemplates > LNodeType").forEach((lNodeType) => actions.push(addLNodeType(ied, lNodeType, dataTypeTemplates)));
  ied.ownerDocument.querySelectorAll(":root > DataTypeTemplates > DOType").forEach((doType) => actions.push(addDOType(ied, doType, dataTypeTemplates)));
  ied.ownerDocument.querySelectorAll(":root > DataTypeTemplates > DAType").forEach((daType) => actions.push(addDAType(ied, daType, dataTypeTemplates)));
  ied.ownerDocument.querySelectorAll(":root > DataTypeTemplates > EnumType").forEach((enumType) => actions.push(addEnumType(ied, enumType, dataTypeTemplates)));
  return actions.filter((item) => item !== void 0);
}
function isIedNameUnique(ied, doc) {
  const existingIedNames = Array.from(doc.querySelectorAll(":root > IED")).map((ied2) => ied2.getAttribute("name"));
  const importedIedName = ied.getAttribute("name");
  if (existingIedNames.includes(importedIedName))
    return false;
  return true;
}
export let SitipeBay = class extends LitElement {
  constructor() {
    super(...arguments);
    this.bayTypicals = [];
    this.editCount = -1;
    this.namingStrategy = defaultNamingStrategy;
  }
  bayHeader() {
    const name = this.bay.getAttribute("name") ?? "";
    const desc = this.bay.getAttribute("desc");
    return `${name} ${desc ? `(${desc})` : ""}`;
  }
  updated() {
    if (this.menu && this.iconButton) {
      this.menu.anchor = this.iconButton;
    }
  }
  get bayTypicalTemplate() {
    return this.bay.querySelector(`Private[type="${SIEMENS_SITIPE_BAY_TEMPLATE}"]`)?.textContent ?? "";
  }
  renderIEDs() {
    return html`
      <div>
        ${Array.from(this.bay.querySelectorAll(`Private[type="${SIEMENS_SITIPE_IED_REF}"]` ?? [])).map((iedTemplate) => html`<action-icon
              .label=${iedTemplate.textContent ? `${iedTemplate.textContent} (${this.bayTypicalTemplate})` : ""}
              icon="developer_board"
            ></action-icon>`)}
      </div>
    `;
  }
  renderMenu() {
    return html`<mwc-menu
      class="actions-menu"
      corner="BOTTOM_RIGHT"
      menuCorner="END"
    >
      ${this.bayTypicals.map((bayTypical) => {
      return html`<mwc-list-item
          @click=${() => this.handleSelected(bayTypical)}
          .disabled=${this.isDisabled(bayTypical)}
          >${bayTypical.name}</mwc-list-item
        >`;
    })}
    </mwc-menu>`;
  }
  render() {
    return html`<action-pane label="${this.bayHeader()}">
      <abbr slot="action" title="Add" style="position:relative;">
        <mwc-icon-button
          icon="playlist_add"
          @click="${() => {
      this.menu.open = true;
    }}"
        ></mwc-icon-button>
        ${this.renderMenu()}
      </abbr>
      ${this.renderIEDs()}</action-pane
    >`;
  }
  isDisabled(bayTypical) {
    return bayTypical.name === this.bayTypicalTemplate;
  }
  handleSelected(bayTypical) {
    const complexAction = {
      actions: [],
      title: "Sitipe"
    };
    const bayTypicalElement = createElement(this.doc, "Private", {
      type: SIEMENS_SITIPE_BAY_TEMPLATE
    });
    bayTypicalElement.textContent = bayTypical.name;
    complexAction.actions.push({
      new: {
        parent: this.bay,
        element: bayTypicalElement
      }
    });
    getBayTypicalComponents(bayTypical.accessId).then((btComponents) => {
      btComponents.forEach((btComponent, index) => {
        const iedRefElement = createElement(this.doc, "Private", {
          type: SIEMENS_SITIPE_IED_REF
        });
        const iedName = this.namingStrategy(this.bay, index + 1);
        iedRefElement.textContent = iedName;
        complexAction.actions.push({
          new: {
            parent: this.bay,
            element: iedRefElement
          }
        });
        getImportedBtComponents(btComponent.accessId).then((res) => {
          res.forEach((importedBTComponent) => {
            getImportedBTComponentData(importedBTComponent.id).then((data) => {
              const doc = new DOMParser().parseFromString(data.data, "application/xml");
              if (this.isValidDoc(doc)) {
                this.prepareImport(doc, iedName, btComponent);
              }
            });
          });
        });
      });
      this.dispatchEvent(newActionEvent(complexAction));
    });
  }
  isValidDoc(doc) {
    if (!doc) {
      this.dispatchEvent(newLogEvent({
        kind: "error",
        title: get("import.log.loaderror")
      }));
      return false;
    }
    if (doc.querySelector("parsererror")) {
      this.dispatchEvent(newLogEvent({
        kind: "error",
        title: get("import.log.parsererror")
      }));
      return false;
    }
    return true;
  }
  getIeds(doc) {
    return Array.from(doc.querySelectorAll(":root > IED"));
  }
  prepareImport(doc, iedName, btComponent) {
    const ieds = this.getIeds(doc);
    if (!ieds.length) {
      this.dispatchEvent(newLogEvent({
        kind: "error",
        title: get("import.log.missingied")
      }));
      return;
    }
    if (ieds.length > 1) {
      return;
    }
    const ied = ieds[0];
    const oldIEDName = ied.getAttribute("name") || "";
    this.importIED(ied);
    ied.setAttribute("name", iedName);
    if (iedName || oldIEDName) {
      const privateIEDRef = createElement(this.doc, "Private", {
        type: SIEMENS_SITIPE_IED_TEMPLATE_REF
      });
      privateIEDRef.textContent = btComponent.name || oldIEDName;
      const actions = [];
      actions.push({
        new: {
          parent: ied,
          element: privateIEDRef
        }
      });
      actions.push(...updateReferences(ied, oldIEDName, iedName));
      this.dispatchEvent(newActionEvent({
        title: get("editing.import", {name: ied.getAttribute("name")}),
        actions
      }));
    }
    return;
  }
  importIED(ied) {
    if (!isIedNameUnique(ied, this.doc)) {
      this.dispatchEvent(newLogEvent({
        kind: "error",
        title: get("import.log.nouniqueied", {
          name: ied.getAttribute("name")
        })
      }));
      return;
    }
    updateNamespaces(this.doc.documentElement, ied.ownerDocument.documentElement);
    const dataTypeTemplateActions = addDataTypeTemplates(ied, this.doc);
    const communicationActions = addCommunicationElements(ied, this.doc);
    const actions = communicationActions.concat(dataTypeTemplateActions);
    actions.push({
      new: {
        parent: this.doc.querySelector(":root"),
        element: ied
      }
    });
    this.dispatchEvent(newActionEvent({
      title: get("editing.import", {name: ied.getAttribute("name")}),
      actions
    }));
  }
};
__decorate([
  property({attribute: false})
], SitipeBay.prototype, "doc", 2);
__decorate([
  property({attribute: false})
], SitipeBay.prototype, "bay", 2);
__decorate([
  property()
], SitipeBay.prototype, "bayTypicals", 2);
__decorate([
  property({
    type: Number
  })
], SitipeBay.prototype, "editCount", 2);
__decorate([
  property()
], SitipeBay.prototype, "namingStrategy", 2);
__decorate([
  state()
], SitipeBay.prototype, "bayHeader", 1);
__decorate([
  query("mwc-menu")
], SitipeBay.prototype, "menu", 2);
__decorate([
  query('mwc-icon-button[icon="playlist_add"]')
], SitipeBay.prototype, "iconButton", 2);
SitipeBay = __decorate([
  customElement("sitipe-bay")
], SitipeBay);
