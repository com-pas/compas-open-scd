import {
  getDescriptionAttribute,
  getInstanceAttribute,
  getNameAttribute,
  getValue
} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {cloneElement} from "../../_snowpack/pkg/@compas-oscd/xml.js";
export const LOCAMATION_MANUFACTURER = "Locamation B.V.";
export const LOCAMATION_PRIVATE = "LCMTN_VMU_SENSOR";
export const LOCAMATION_NS = "https://www.locamation.com/61850/VMU/SCL";
export const LOCAMATION_PREFIX = "lcmtn_ext";
export function lnHeader(ln, nsDoc) {
  const prefix = ln.getAttribute("prefix");
  const inst = getInstanceAttribute(ln);
  const data = nsDoc.getDataDescription(ln);
  return `${prefix != null ? `${prefix} - ` : ``}${data.label}${inst ? ` - ${inst}` : ``}`;
}
export function lDeviceHeader(lDevice) {
  const nameOrInst = getNameAttribute(lDevice) ?? getInstanceAttribute(lDevice);
  const desc = getDescriptionAttribute(lDevice);
  return `${nameOrInst}${desc ? ` - ${desc}` : ``}`;
}
export function iedHeader(ied) {
  const name = getNameAttribute(ied);
  const desc = getDescriptionAttribute(ied);
  return `${name}${desc ? " (" + desc + ")" : ""}`;
}
export function getInputFieldValue(inputs, id) {
  return getValue(inputs.find((i) => i.id === id));
}
export function inputFieldChanged(inputs, id, oldValue) {
  const value = getInputFieldValue(inputs, id);
  if (oldValue) {
    return value !== oldValue;
  }
  return value !== null;
}
export function addPrefixAndNamespaceToDocument(element) {
  const rootElement = element.ownerDocument.firstElementChild;
  if (!rootElement.hasAttribute("xmlns:" + LOCAMATION_PREFIX)) {
    rootElement.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + LOCAMATION_PREFIX, LOCAMATION_NS);
  }
}
export function getPrivate(element) {
  return element.querySelector(`Private[type="${LOCAMATION_PRIVATE}"]`);
}
export function createEditorAction(locamationPrivate, fieldType, value) {
  if (locamationPrivate) {
    let privateField = Array.from(locamationPrivate.querySelectorAll(`P[type="${fieldType}"]`)).filter((element) => element.namespaceURI === LOCAMATION_NS).pop();
    if (!privateField) {
      addPrefixAndNamespaceToDocument(locamationPrivate);
      privateField = locamationPrivate.ownerDocument.createElementNS(LOCAMATION_NS, "P");
      privateField.setAttribute("type", fieldType);
      privateField.textContent = value;
      return [{new: {parent: locamationPrivate, element: privateField}}];
    }
    if (privateField.textContent !== value) {
      const newPrivateField = cloneElement(privateField, {});
      newPrivateField.textContent = value;
      return [
        {old: {element: privateField}, new: {element: newPrivateField}}
      ];
    }
  }
  return [];
}
export function hasPrivateElement(locamationPrivate, type) {
  if (locamationPrivate) {
    return Array.from(locamationPrivate.querySelectorAll(`P[type="${type}"]`)).filter((element) => element.namespaceURI === LOCAMATION_NS).pop() !== void 0;
  }
  return false;
}
export function getPrivateTextValue(locamationPrivate, type) {
  if (locamationPrivate) {
    const privateElement = Array.from(locamationPrivate.querySelectorAll(`P[type="${type}"]`)).filter((element) => element.namespaceURI === LOCAMATION_NS).pop();
    if (privateElement) {
      return privateElement.textContent;
    }
  }
  return null;
}
