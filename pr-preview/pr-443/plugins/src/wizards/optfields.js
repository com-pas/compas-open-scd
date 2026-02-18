import {get} from "../../../_snowpack/pkg/lit-translate.js";
import "../../../_snowpack/pkg/@material/mwc-list/mwc-list-item.js";
import {oscdHtml} from "../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import "../../../_snowpack/pkg/@compas-oscd/open-scd/dist/wizard-checkbox.js";
import "../../../_snowpack/pkg/@compas-oscd/open-scd/dist/wizard-select.js";
import {
  getValue
} from "../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js";
import {
  cloneElement
} from "../../../_snowpack/link/packages/xml/dist/index.js";
export function contentOptFieldsWizard(option) {
  return Object.entries(option).map(([key, value]) => oscdHtml`<wizard-checkbox
        label="${key}"
        .maybeValue=${value}
        nullable
        helper="${get(`scl.${key}`)}"
      ></wizard-checkbox>`);
}
function updateOptFieldsAction(element) {
  return (inputs) => {
    const seqNum = getValue(inputs.find((i) => i.label === "seqNum"));
    const timeStamp = getValue(inputs.find((i) => i.label === "timeStamp"));
    const dataSet = getValue(inputs.find((i) => i.label === "dataSet"));
    const reasonCode = getValue(inputs.find((i) => i.label === "reasonCode"));
    const dataRef = getValue(inputs.find((i) => i.label === "dataRef"));
    const entryID = getValue(inputs.find((i) => i.label === "entryID"));
    const configRef = getValue(inputs.find((i) => i.label === "configRef"));
    const bufOvfl = getValue(inputs.find((i) => i.label === "bufOvfl"));
    if (seqNum === element.getAttribute("seqNum") && timeStamp === element.getAttribute("timeStamp") && dataSet === element.getAttribute("dataSet") && reasonCode === element.getAttribute("reasonCode") && dataRef === element.getAttribute("dataRef") && entryID === element.getAttribute("entryID") && configRef === element.getAttribute("configRef") && bufOvfl === element.getAttribute("bufOvfl"))
      return [];
    const newElement = cloneElement(element, {
      seqNum,
      timeStamp,
      dataSet,
      reasonCode,
      dataRef,
      entryID,
      configRef,
      bufOvfl
    });
    return [{old: {element}, new: {element: newElement}}];
  };
}
export function editOptFieldsWizard(element) {
  const [
    seqNum,
    timeStamp,
    dataSet,
    reasonCode,
    dataRef,
    entryID,
    configRef,
    bufOvfl
  ] = [
    "seqNum",
    "timeStamp",
    "dataSet",
    "reasonCode",
    "dataRef",
    "entryID",
    "configRef",
    "bufOvfl"
  ].map((optField) => element.getAttribute(optField));
  return [
    {
      title: get("wizard.title.edit", {tagName: element.tagName}),
      primary: {
        icon: "save",
        label: get("save"),
        action: updateOptFieldsAction(element)
      },
      content: contentOptFieldsWizard({
        seqNum,
        timeStamp,
        dataSet,
        reasonCode,
        dataRef,
        entryID,
        configRef,
        bufOvfl
      })
    }
  ];
}
