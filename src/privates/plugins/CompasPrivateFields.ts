import { html, TemplateResult } from "lit-element";

import { EditorAction, WizardInput } from "../../foundation.js";
import { PrivateFieldsWorker, WizardKind } from "../PrivateFields.js";
import {
  inputFieldChanged,
  getOrCreatePrivate,
  getPrivate,
  getPrivateTextValue,
  processPrivateTextElement, getInputFieldValue
} from "../foundation.js";

const EXTENSION_NAMESPACE = 'https://www.lfenergy.org/compas/extension/v1';

export default class CompasPrivateFieldsWorker implements PrivateFieldsWorker {
  public renderFields(wizardKind: WizardKind, element: Element | null): TemplateResult[] {
    switch (wizardKind) {
      case 'substation-wizard':
        return [
          html `<wizard-textfield
                  label="compasName"
                  .maybeValue=${getPrivateTextValue(element, 'compas_substation', 'CompasName')}
                  helper="CoMPAS Name"
                  nullable
                ></wizard-textfield>`
        ];
      case 'voltageLevel-wizard':
        return [
          html `<wizard-textfield
                  label="compasName"
                  .maybeValue=${getPrivateTextValue(element, 'compas_voltageLevel', 'CompasName')}
                  helper="CoMPAS Name"
                  nullable
                ></wizard-textfield>`,
          html `<wizard-textfield
                  label="compasData"
                  .maybeValue=${getPrivateTextValue(element, 'compas_voltageLevel', 'CompasData')}
                  helper="CoMPAS Data"
                  nullable
                ></wizard-textfield>`
        ];
    }
    return [];
  }

  public updateFields(wizardKind: WizardKind, inputs: WizardInput[], oldElement: Element, newElement: Element): EditorAction[] {
    if (!this.fieldsChanged(wizardKind, inputs, oldElement)) {
      return [];
    }

    switch (wizardKind) {
      case 'substation-wizard': {
        const newPrivateElement = getOrCreatePrivate(oldElement, newElement, 'compas_substation');

        const compasName = getInputFieldValue(inputs, 'compasName');
        processPrivateTextElement(newPrivateElement, EXTENSION_NAMESPACE, 'compas', 'CompasName', compasName);

        const oldPrivateElement = getPrivate(oldElement, 'compas_substation');
        if (oldPrivateElement) {
          return [{old: {element: oldPrivateElement}, new: {element: newPrivateElement}}];
        }
        return [{new: {parent: newElement, element: newPrivateElement}}];
      }
      case 'voltageLevel-wizard': {
        const newPrivateElement = getOrCreatePrivate(oldElement, newElement, 'compas_voltageLevel');

        const compasName = getInputFieldValue(inputs, 'compasName');
        processPrivateTextElement(newPrivateElement, EXTENSION_NAMESPACE, 'compas', 'CompasName', compasName);
        const compasData = getInputFieldValue(inputs, 'compasData');
        processPrivateTextElement(newPrivateElement, EXTENSION_NAMESPACE, 'compas', 'CompasData', compasData);

        const oldPrivateElement = getPrivate(oldElement, 'compas_voltageLevel');
        if (oldPrivateElement) {
          return [{old: {element: oldPrivateElement}, new: {element: newPrivateElement}}];
        }
        return [{new: {parent: newElement, element: newPrivateElement}}];
      }
    }
    return [];
  }

  private fieldsChanged(wizardKind: WizardKind, inputs: WizardInput[], oldElement: Element | null): boolean {
    switch (wizardKind) {
      case 'substation-wizard': {
        const oldCompasName = getPrivateTextValue(oldElement, 'compas_substation', 'CompasName');
        return inputFieldChanged(inputs, 'compasName', oldCompasName);
      }
      case 'voltageLevel-wizard': {
        const oldCompasName = getPrivateTextValue(oldElement, 'compas_voltageLevel', 'CompasName');
        const oldCompasData = getPrivateTextValue(oldElement, 'compas_voltageLevel', 'CompasData');
        return inputFieldChanged(inputs, 'compasName', oldCompasName)
          || inputFieldChanged(inputs, 'compasData', oldCompasData);
      }
    }
    return false;
  }
}
