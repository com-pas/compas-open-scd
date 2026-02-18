const substationPath = [":root", "Substation", "VoltageLevel", "Bay"];
export const selectors = Object.fromEntries(substationPath.map((e, i, a) => [e, a.slice(0, i + 1).join(" > ")]));
export const SIEMENS_SITIPE_IED_REF = "Siemens-SITIPE-IEDRef";
export const SIEMENS_SITIPE_BAY_TEMPLATE = "Siemens-SITIPE-BayTemplate";
export const SIEMENS_SITIPE_IED_TEMPLATE_REF = "Siemens-SITIPE-IEDTemplateRef";
