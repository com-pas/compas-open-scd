import {get} from "../../_snowpack/pkg/lit-translate.js";
import {newLogEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {newOpenDocEvent} from "../../_snowpack/pkg/@compas-oscd/core.js";
import {
  COMPAS_SCL_PRIVATE_TYPE,
  getCompasSclFileType,
  getCompasSclName,
  getPrivate
} from "./private.js";
const FILE_EXTENSION_LENGTH = 3;
export function getTypeFromDocName(docName) {
  if (docName.lastIndexOf(".") == docName.length - (FILE_EXTENSION_LENGTH + 1)) {
    return docName.substring(docName.lastIndexOf(".") + 1).toUpperCase();
  }
  throw new Error(get("compas.error.type"));
}
export function stripExtensionFromName(docName) {
  let name = docName;
  if (name.length > FILE_EXTENSION_LENGTH && name.lastIndexOf(".") == name.length - (FILE_EXTENSION_LENGTH + 1)) {
    name = name.substring(0, name.lastIndexOf("."));
  }
  return name;
}
export function buildDocName(sclElement) {
  const headerElement = sclElement.querySelector(":scope > Header");
  const privateElement = getPrivate(sclElement, COMPAS_SCL_PRIVATE_TYPE);
  const version = headerElement?.getAttribute("version") ?? "";
  const name = getCompasSclName(privateElement)?.textContent ?? "";
  const type = getCompasSclFileType(privateElement)?.textContent ?? "SCD";
  let docName = name;
  if (docName === "") {
    docName = headerElement?.getAttribute("id") ?? "";
  }
  docName += "-" + version + "." + type?.toLowerCase();
  return docName;
}
export function updateDocumentInOpenSCD(element, doc, docName) {
  const headerElement = doc.querySelector(":root > Header");
  const id = headerElement?.getAttribute("id") ?? "";
  element.dispatchEvent(newLogEvent({kind: "reset"}));
  element.dispatchEvent(newOpenDocEvent(doc, docName ? docName : buildDocName(doc.documentElement), {detail: {docId: id}}));
}
export function compareVersions(leftVersion, rightVersion) {
  function comparePart(leftPart, rightPart) {
    const leftNumber = parseInt(leftPart);
    const rightNumber = parseInt(rightPart);
    if (isNaN(leftNumber) || isNaN(rightNumber)) {
      return 0;
    }
    return leftNumber < rightNumber ? -1 : leftNumber > rightNumber ? 1 : 0;
  }
  if (leftVersion.localeCompare(rightVersion) == 0) {
    return 0;
  }
  const leftParts = leftVersion.split(".");
  const rightParts = rightVersion.split(".");
  if (leftParts.length != 3 && rightParts.length != 3) {
    return 0;
  }
  let result = comparePart(leftParts[0], rightParts[0]);
  if (result === 0) {
    result = comparePart(leftParts[1], rightParts[1]);
    if (result === 0) {
      result = comparePart(leftParts[2], rightParts[2]);
    }
  }
  return result;
}
export function newUserInfoEvent(name, eventInitDict) {
  return new CustomEvent("userinfo", {
    bubbles: true,
    composed: true,
    ...eventInitDict,
    detail: {name, ...eventInitDict?.detail}
  });
}
