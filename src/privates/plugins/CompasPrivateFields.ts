import { html, TemplateResult } from "lit-element";

import {
  EditorAction,
  getValue,
  WizardInput
} from "../../foundation.js";
import { PrivateFieldsWorker, WizardKind } from "../PrivateFields.js";
import {
  getOrCreatePrivate,
  getPrivate,
  getPrivateTextValue,
  setOrCreatePrivateTextElement } from "../foundation.js";
import { EXTENSION_NAMESPACE } from "../../compas-services/foundation.js";

export default class CompasPrivateFields implements PrivateFieldsWorker {
  public renderFields(wizardKind: WizardKind, element: Element | null): TemplateResult[] {
    switch (wizardKind) {
      case 'substation-wizard':
        return [html `<wizard-textfield
                      label="compasName"
                      .maybeValue=${getPrivateTextValue(element, 'compas_substation', 'CompasName')}
                      helper="CoMPAS Name"
                      nullable
                    ></wizard-textfield>`];
      case 'voltageLevel-wizard':
        return [html `<wizard-textfield
                        label="compasName"
                        .maybeValue=${getPrivateTextValue(element, 'compas_voltageLevel', 'CompasName')}
                        helper="CoMPAS Name"
                        nullable
                      ></wizard-textfield>`];
    }
    return [];
  }

  public updateFields(wizardKind: WizardKind, inputs: WizardInput[], oldElement: Element, newElement: Element): EditorAction[] {
    if (!this.fieldsModified(wizardKind, inputs, oldElement)) {
      return [];
    }

    switch (wizardKind) {
      case 'substation-wizard': {
        const name = getValue(inputs.find(i => i.label === 'compasName')!)!;
        const oldPrivateElement = getPrivate(oldElement, 'compas_substation');
        const newPrivateElement = getOrCreatePrivate(oldElement, newElement, 'compas_substation');
        setOrCreatePrivateTextElement(newPrivateElement, EXTENSION_NAMESPACE, 'compas', 'CompasName', name);

        if (oldPrivateElement) {
          return [{old: {element: oldPrivateElement}, new: {element: newPrivateElement}}];
        }
        return [{new: {parent: newElement, element: newPrivateElement}}];
      }
      case 'voltageLevel-wizard': {
        const name = getValue(inputs.find(i => i.label === 'compasName')!)!;
        const oldPrivateElement = getPrivate(oldElement, 'compas_voltageLevel');
        const newPrivateElement = getOrCreatePrivate(oldElement, newElement, 'compas_voltageLevel');
        setOrCreatePrivateTextElement(newPrivateElement, EXTENSION_NAMESPACE, 'compas', 'CompasName', name);

        if (oldPrivateElement) {
          return [{old: {element: oldPrivateElement}, new: {element: newPrivateElement}}];
        }
        return [{new: {parent: newElement, element: newPrivateElement}}];
      }
    }
    return [];
  }

  private fieldsModified(wizardKind: WizardKind, inputs: WizardInput[], oldElement: Element | null): boolean {
    switch (wizardKind) {
      case 'substation-wizard': {
        const compasName = getValue(inputs.find(i => i.label === 'compasName')!)!;
        if (oldElement) {
          return compasName !== getPrivateTextValue(oldElement, 'compas_substation', 'CompasName');
        }
        return compasName !== null;
      }
      case 'voltageLevel-wizard': {
        const compasName = getValue(inputs.find(i => i.label === 'compasName')!)!;
        if (oldElement) {
          return compasName !== getPrivateTextValue(oldElement, 'compas_voltageLevel', 'CompasName');
        }
        return compasName !== null;
      }
    }
    return false;
  }
}
