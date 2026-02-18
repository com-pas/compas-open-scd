import {de as compasDe} from "./de.js";
import {en as compasEn} from "./en.js";
import {de as oscdDe} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/translations/de.js";
import {en as oscdEn} from "../../_snowpack/pkg/@compas-oscd/open-scd/dist/translations/en.js";
export const languages = {
  en: {...oscdEn, ...compasEn},
  de: {...oscdDe, ...compasDe}
};
export async function loader(lang) {
  if (Object.keys(languages).includes(lang))
    return languages[lang];
  else
    return {};
}
