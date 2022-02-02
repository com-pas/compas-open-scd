import { cloneElement } from "../foundation.js";
import { SCL_NAMESPACE } from "../schemas.js";

export function getPrivate(element: Element, type: string): Element | null {
  return element.querySelector(`Private[type="${type}"]`);
}

export function getOrCreatePrivate(oldElement: Element | null, newElement: Element, type: string): Element {
  let newPrivateElement = getPrivate(newElement, type);
  if (!newPrivateElement && oldElement) {
    const foundPrivateElement = getPrivate(oldElement, type);
    if (foundPrivateElement) {
      newPrivateElement = cloneElement(foundPrivateElement, {});
      newElement.append(newPrivateElement);
    }
  }

  if (!newPrivateElement) {
    newPrivateElement = newElement.ownerDocument.createElementNS(SCL_NAMESPACE, "Private");
    newPrivateElement.setAttribute("type", type);
    newElement.append(newPrivateElement);
  }
  return newPrivateElement;
}

export function setOrCreatePrivateTextElement(privateElement: Element, namespace: string, prefix: string, name: string, value: string): void {
  let newPrivate = privateElement.querySelector(`${name}`);
  if (!newPrivate) {
    addPrefixAndNamespaceToDocument(privateElement, namespace, prefix);
    newPrivate = privateElement.ownerDocument.createElementNS(namespace, name);
    privateElement.append(newPrivate);
  }
  newPrivate.textContent = value;
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
