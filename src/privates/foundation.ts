import { cloneElement, getValue, WizardInput } from "../foundation.js";
import { SCL_NAMESPACE } from "../schemas.js";

export function getInputFieldValue(inputs: WizardInput[], labelName: string): string | null {
  return getValue(inputs.find(i => i.label === labelName)!);
}

export function inputFieldChanged(inputs: WizardInput[], labelName: string, oldValue: string | null): boolean {
  const value = getInputFieldValue(inputs, labelName);
  if (oldValue) {
    return value !== oldValue;
  }
  return value !== null;
}

export function getPrivate(element: Element, type: string): Element | null {
  return element.querySelector(`Private[type="${type}"]`);
}

export function getOrCreatePrivate(oldElement: Element | null, newElement: Element, type: string): Element {
  let newPrivateElement = getPrivate(newElement, type);
  if (!newPrivateElement && oldElement) {
    const foundPrivateElement = getPrivate(oldElement, type);
    if (foundPrivateElement) {
      newPrivateElement = cloneElement(foundPrivateElement, {});
      newElement.prepend(newPrivateElement);
    }
  }

  if (!newPrivateElement) {
    newPrivateElement = newElement.ownerDocument.createElementNS(SCL_NAMESPACE, "Private");
    newPrivateElement.setAttribute("type", type);
    newElement.prepend(newPrivateElement);
  }
  return newPrivateElement;
}

export function processPrivateTextElement(privateElement: Element, namespace: string, prefix: string, name: string, value: string | null): void {
  let privateTextElement = privateElement.querySelector(`${name}`);
  if (value === null) {
    if (privateTextElement) {
      privateElement.removeChild(privateTextElement);
    }
  } else {
    if (!privateTextElement) {
      addPrefixAndNamespaceToDocument(privateElement, namespace, prefix);
      privateTextElement = privateElement.ownerDocument.createElementNS(namespace, name);
      privateElement.append(privateTextElement);
    }
    privateTextElement.textContent = value;
  }
}

export function addPrefixAndNamespaceToDocument(element: Element, namespace: string, prefix: string) : void {
  const rootElement = element.ownerDocument.firstElementChild!;
  if (!rootElement.hasAttribute('xmlns:' +  prefix)) {
    rootElement.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:' +  prefix, namespace);
  }
}

export function getPrivateTextValue(element: Element | null, type: string, name: string): string | null {
  if (element) {
    const privateElement = element.querySelector(`Private[type="${type}"] > ${name}`);
    if (privateElement) {
      return privateElement.textContent;
    }
  }
  return null;
}
