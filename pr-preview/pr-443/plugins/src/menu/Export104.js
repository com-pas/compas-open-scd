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
import {LitElement, property} from "../../../_snowpack/pkg/lit-element.js";
import {stringify} from "../../../_snowpack/pkg/csv-stringify/browser/esm/sync.js";
import {newLogEvent} from "../../../_snowpack/link/packages/core/dist/foundation/deprecated/history.js";
import {extractAllSignal104Data} from "./export104/foundation.js";
import {get} from "../../../_snowpack/pkg/lit-translate.js";
export default class Export104 extends LitElement {
  constructor() {
    super(...arguments);
    this.csvHeaders = [
      "Id",
      "Name",
      "Signal Number",
      "mIOA",
      "cIOA"
    ];
  }
  async run() {
    const {signals, errors} = extractAllSignal104Data(this.doc);
    errors.forEach((error) => this.logWarning(error));
    if (signals.length === 0) {
      this.dispatchEvent(newLogEvent({
        kind: "info",
        title: get("compas.export104.noSignalsFound")
      }));
      return;
    }
    const csvLines = this.generateCsvLines(signals);
    const csvContent = stringify(csvLines, {
      header: true,
      columns: this.csvHeaders
    });
    const csvBlob = new Blob([csvContent], {
      type: "text/csv"
    });
    this.downloadCsv(csvBlob);
  }
  logWarning(errorMessage) {
    this.dispatchEvent(newLogEvent({
      kind: "warning",
      title: get("compas.export104.invalidSignalWarning"),
      message: errorMessage
    }));
  }
  generateCsvLines(allSignal104Data) {
    const lines = [];
    for (const signal104Data of allSignal104Data) {
      const line = [
        "",
        signal104Data.name ?? "",
        signal104Data.signalNumber ?? ""
      ];
      if (signal104Data.isMonitorSignal) {
        line.push(signal104Data.ioa ?? "", "");
      } else {
        line.push(signal104Data.ioa ?? "", signal104Data.ioa ?? "");
      }
      lines.push(line);
    }
    return lines;
  }
  downloadCsv(csvBlob) {
    const a = document.createElement("a");
    a.download = this.docName + "-104-signals.csv";
    a.href = URL.createObjectURL(csvBlob);
    a.dataset.downloadurl = ["text/csv", a.download, a.href].join(":");
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  }
}
__decorate([
  property({attribute: false})
], Export104.prototype, "doc", 2);
__decorate([
  property()
], Export104.prototype, "docName", 2);
