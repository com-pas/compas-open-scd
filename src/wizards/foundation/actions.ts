import {
  cloneElement,
  EditorAction,
  getValue,
  Update,
  WizardActor,
  WizardInput,
} from '../../foundation.js';
import { privateFields, WizardKind } from "../../privates/PrivateFields.js";

export function updateNamingAction(element: Element): WizardActor {
  return (inputs: WizardInput[]): EditorAction[] => {
    return updateNamingWizardEditorAction(inputs, element);
  };
}

export function updateNamingAndPrivatesAction(wizardKind: WizardKind, element: Element): WizardActor {
  return (inputs: WizardInput[]): EditorAction[] => {
    const namingActions = updateNamingWizardEditorAction(inputs, element);
    const privateActions = privateFields.updatePrivateFields(
      wizardKind,
      inputs,
      element,
      (<Update>namingActions[0])?.new.element ?? element)

    const actions: EditorAction[] = [];
    actions.push(...namingActions);
    actions.push(...privateActions);
    return actions;
  };
}

function updateNamingWizardEditorAction(inputs: WizardInput[], element: Element): EditorAction[] {
  const name = getValue(inputs.find(i => i.label === 'name')!)!;
  const desc = getValue(inputs.find(i => i.label === 'desc')!);

  if ( name === element.getAttribute('name') &&
       desc === element.getAttribute('desc')) {
    return [];
  }

  const newElement = cloneElement(element, { name, desc });
  return [{ old: { element }, new: { element: newElement } }];
}
