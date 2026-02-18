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
import {property, state} from "../../_snowpack/pkg/lit-element.js";
import {getTypeFromDocName} from "./foundation.js";
import {CompasSclDataService} from "../compas-services/CompasSclDataService.js";
import {NOT_FOUND_ERROR} from "../compas-services/foundation.js";
export function CompasExistsIn(Base) {
  class CompasExistsInElement extends Base {
    firstUpdated() {
      this.checkExistInCompas();
    }
    updated(_changedProperties) {
      super.updated(_changedProperties);
      if (_changedProperties.has("docId")) {
        this.existInCompas = void 0;
        this.checkExistInCompas();
      }
    }
    callService(docType, docId) {
      return CompasSclDataService().listSclVersions(docType, docId);
    }
    checkExistInCompas() {
      if (this.docId) {
        const docType = getTypeFromDocName(this.docName);
        this.callService(docType, this.docId).then(() => this.existInCompas = true).catch((reason) => {
          if (reason.type === NOT_FOUND_ERROR) {
            this.existInCompas = false;
          }
        });
      } else {
        this.existInCompas = false;
      }
    }
  }
  __decorate([
    property()
  ], CompasExistsInElement.prototype, "docName", 2);
  __decorate([
    property()
  ], CompasExistsInElement.prototype, "docId", 2);
  __decorate([
    state()
  ], CompasExistsInElement.prototype, "existInCompas", 2);
  return CompasExistsInElement;
}
