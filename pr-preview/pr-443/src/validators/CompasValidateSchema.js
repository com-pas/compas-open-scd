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
import {newIssueEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {
  CompasSclValidatorService,
  SVS_NAMESPACE
} from "../compas-services/CompasValidatorService.js";
import {createLogEvent} from "../compas-services/foundation.js";
import {getTypeFromDocName} from "../compas/foundation.js";
export default class CompasValidateSchema extends LitElement {
  constructor() {
    super(...arguments);
    this.compasValidationSchemaRunning = false;
  }
  async validate(manual) {
    if (!manual || this.compasValidationSchemaRunning) {
      return;
    }
    this.compasValidationSchemaRunning = true;
    const docType = getTypeFromDocName(this.docName);
    await CompasSclValidatorService().validateSCL(this, docType, this.doc).then((doc) => this.processValidationResponse(doc)).catch((reason) => createLogEvent(this, reason));
    this.compasValidationSchemaRunning = false;
  }
  processValidationResponse(response) {
    const validationErrors = Array.from(response.querySelectorAll("ValidationErrors") ?? []);
    if (validationErrors.length > 0) {
      validationErrors.forEach((validationError) => {
        this.dispatchEvent(newIssueEvent({
          validatorId: this.pluginId,
          title: this.createTitle(validationError),
          message: this.createMessage(validationError),
          element: this.getElement(validationError)
        }));
      });
    }
  }
  createTitle(validationError) {
    const message = validationError.getElementsByTagNameNS(SVS_NAMESPACE, "Message").item(0)?.textContent;
    return message ? message : "No validation message";
  }
  createMessage(validationError) {
    const ruleName = validationError.getElementsByTagNameNS(SVS_NAMESPACE, "RuleName").item(0)?.textContent;
    const lineNumber = validationError.getElementsByTagNameNS(SVS_NAMESPACE, "LineNumber").item(0)?.textContent;
    const columnNumber = validationError.getElementsByTagNameNS(SVS_NAMESPACE, "ColumnNumber").item(0)?.textContent;
    const xpath = validationError.getElementsByTagNameNS(SVS_NAMESPACE, "XPath").item(0)?.textContent;
    const messageParts = [];
    if (ruleName)
      messageParts.push(`Rule: ${ruleName}`);
    if (lineNumber)
      messageParts.push(`Line: ${lineNumber}`);
    if (columnNumber)
      messageParts.push(`Column: ${columnNumber}`);
    if (xpath)
      messageParts.push(`XPath: ${xpath}`);
    if (messageParts.length == 0) {
      return void 0;
    }
    return messageParts.join(", ");
  }
  getElement(validationError) {
    const xpath = validationError.getElementsByTagNameNS(SVS_NAMESPACE, "XPath").item(0)?.textContent;
    if (xpath) {
      const fixedXPath = this.rewriteXPathForDefaultNamespace(xpath);
      const nsResolver = this.doc.createNSResolver(this.doc.documentElement);
      const result = this.doc.evaluate(fixedXPath, this.doc, this.createResolver(nsResolver), XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      if (result.singleNodeValue) {
        return result.singleNodeValue;
      }
    }
    return void 0;
  }
  rewriteXPathForDefaultNamespace(xpath) {
    return "/" + xpath.split("/").filter((part) => !!part).map((part) => {
      if (part && part.indexOf(":") < 0) {
        return "scl:" + part;
      }
      return part;
    }).join("/");
  }
  createResolver(nsResolver) {
    return {
      lookupNamespaceURI(prefix) {
        if (prefix === "scl") {
          return "http://www.iec.ch/61850/2003/SCL";
        }
        if (typeof nsResolver === "function") {
          return nsResolver(prefix);
        }
        if (typeof nsResolver.lookupNamespaceURI === "function") {
          return nsResolver.lookupNamespaceURI(prefix);
        }
        return null;
      }
    };
  }
}
__decorate([
  property({attribute: false})
], CompasValidateSchema.prototype, "doc", 2);
__decorate([
  property({type: String})
], CompasValidateSchema.prototype, "docName", 2);
__decorate([
  property()
], CompasValidateSchema.prototype, "pluginId", 2);
