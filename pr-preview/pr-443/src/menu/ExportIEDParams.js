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
import {LitElement, property} from "../../_snowpack/pkg/lit-element.js";
import {stringify} from "../../_snowpack/pkg/csv-stringify/browser/esm/sync.js";
import {compareNames} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {stripExtensionFromName} from "../compas/foundation.js";
import {get} from "../../_snowpack/pkg/lit-translate.js";
export default class ExportIEDParamsPlugin extends LitElement {
  get ieds() {
    return Array.from(this.doc.querySelectorAll(`IED`));
  }
  getSelector(selector, iedName) {
    return selector.replace(/{{\s*iedName\s*}}/, iedName);
  }
  getDataTypeChildElement(dataTypeTemplate, name) {
    if (dataTypeTemplate.tagName === "LNodeType") {
      return dataTypeTemplate.querySelector(`:scope > DO[name="${name}"]`);
    } else if (dataTypeTemplate.tagName === "DOType") {
      return dataTypeTemplate.querySelector(`:scope > SDO[name="${name}"], :scope > DA[name="${name}"]`);
    } else {
      return dataTypeTemplate.querySelector(`:scope > BDA[name="${name}"]`);
    }
  }
  getValue(element, attributeName) {
    if (attributeName) {
      return element.getAttribute(attributeName) ?? "";
    }
    return element.textContent ?? "";
  }
  getDataTypeTemplateElement(leafElement) {
    if (leafElement) {
      if (["DO", "SDO"].includes(leafElement.tagName)) {
        const type = leafElement.getAttribute("type") ?? "";
        return this.doc.querySelector(`DOType[id="${type}"]`);
      } else {
        const bType = leafElement.getAttribute("bType") ?? "";
        if (bType === "Struct") {
          const type = leafElement.getAttribute("type") ?? "";
          return this.doc.querySelector(`DAType[id="${type}"]`);
        }
      }
    }
    return null;
  }
  getDataAttributeTemplateValue(lnElement, dataAttributePath) {
    if (["LN", "LN0"].includes(lnElement.tagName) && dataAttributePath.length >= 2) {
      const type = lnElement.getAttribute("lnType");
      let dataTypeTemplate = this.doc.querySelector(`LNodeType[id="${type}"]`);
      let leafElement = null;
      dataAttributePath.forEach((name) => {
        if (dataTypeTemplate) {
          leafElement = this.getDataTypeChildElement(dataTypeTemplate, name);
          dataTypeTemplate = this.getDataTypeTemplateElement(leafElement);
        }
      });
      if (leafElement) {
        const valElement = leafElement.querySelector("Val");
        return valElement?.textContent?.trim() ?? null;
      }
    }
    return null;
  }
  getDataAttributeInstanceValue(lnElement, dataAttributePath) {
    if (["LN", "LN0"].includes(lnElement.tagName) && dataAttributePath.length >= 2) {
      const daiSelector = dataAttributePath.map((path, index) => {
        if (index === 0) {
          return `DOI[name="${path}"]`;
        } else if (index === dataAttributePath.length - 1) {
          return `DAI[name="${path}"]`;
        }
        return `SDI[name="${path}"]`;
      }).join(" > ");
      const daiValueElement = lnElement.querySelector(daiSelector + " Val");
      return daiValueElement?.textContent?.trim() ?? null;
    }
    return null;
  }
  getDataAttributeValue(lnElement, dataAttributePath) {
    let value = this.getDataAttributeInstanceValue(lnElement, dataAttributePath);
    if (!value) {
      value = this.getDataAttributeTemplateValue(lnElement, dataAttributePath);
    }
    return value ?? "";
  }
  getElements(iedElement, selector, useOwnerDocument) {
    let elements = [iedElement];
    if (selector) {
      const iedName = iedElement.getAttribute("name") ?? "";
      const substitutedSelector = this.getSelector(selector, iedName);
      if (useOwnerDocument) {
        elements = Array.from(iedElement.ownerDocument.querySelectorAll(substitutedSelector));
      } else {
        elements = Array.from(iedElement.querySelectorAll(substitutedSelector));
      }
    }
    return elements;
  }
  cvsLine(configuration, iedElement) {
    return configuration.columns.map((column) => {
      const elements = this.getElements(iedElement, column.selector, column.useOwnerDocument ?? false);
      return elements.map((element) => {
        if (column.dataAttributePath) {
          return this.getDataAttributeValue(element, column.dataAttributePath);
        }
        return this.getValue(element, column.attributeName);
      }).filter((value) => value).join(" / ");
    });
  }
  cvsLines(configuration) {
    const ieds = this.ieds;
    if (ieds.length > 0) {
      return ieds.sort(compareNames).map((iedElement) => this.cvsLine(configuration, iedElement));
    }
    return [[get("compas.exportIEDParams.noIEDs")]];
  }
  columnHeaders(configuration) {
    return configuration.columns.map((column) => column.header);
  }
  async getConfiguration() {
    return await import("../../public/conf/export-ied-params.json.proxy.js").then((module) => module.default);
  }
  async run() {
    const configuration = await this.getConfiguration();
    const content = stringify(this.cvsLines(configuration), {
      header: true,
      columns: this.columnHeaders(configuration)
    });
    const blob = new Blob([content], {
      type: "text/csv"
    });
    const a = document.createElement("a");
    a.download = stripExtensionFromName(this.docName) + "-ied-params.csv";
    a.href = URL.createObjectURL(blob);
    a.dataset.downloadurl = ["text/csv", a.download, a.href].join(":");
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function() {
      URL.revokeObjectURL(a.href);
    }, 5e3);
  }
}
__decorate([
  property()
], ExportIEDParamsPlugin.prototype, "doc", 2);
__decorate([
  property()
], ExportIEDParamsPlugin.prototype, "docName", 2);
