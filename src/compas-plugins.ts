import { pluginTag } from '@compas-oscd/open-scd/dist/plugin-tag.js';

import { default as CompasVersions } from './compas-editors/CompasVersions.js';
import { default as Sitipe } from './compas-editors/Sitipe.js';
import { default as AutogenSubstation } from './compas-editors/autogen-substation.js';
import { default as CompasValidateSchema } from './validators/CompasValidateSchema.js';
import { default as CompasOpen } from './menu/CompasOpen.js';
import { default as CompasCimMapping } from './menu/CompasCimMapping.js';
import { default as CompasImportFromApi } from './menu/CompasImportFromApi.js';
import { default as CompasSave } from './menu/CompasSave.js';
import { default as CompasSaveAs } from './menu/CompasSaveAs.js';
import { default as CompasSaveAsVersion } from './menu/CompasSaveAsVersion.js';
import { default as CompasImportIEDs } from './menu/CompasImportIEDs.js';
import { default as CompasMerge } from './menu/CompasMerge.js';
import { default as CompasUpdateSubstation } from './menu/CompasUpdateSubstation.js';
import { default as CompasCompareIED } from './menu/CompasCompareIED.js';
import { default as CompasAutoAlignment } from './menu/CompasAutoAlignment.js';
import { default as ExportIEDParams } from './menu/ExportIEDParams.js';
import { default as LocamationVMU } from './menu/LocamationVMU.js';
import { default as CompasSettings } from './menu/CompasSettings.js';

export enum CompasPluginSrc {
  // editor plugins
  CompasVersions = '/compas-plugins/compas-editors/CompasVersions.js',
  Sitipe = '/compas-plugins/compas-editors/Sitipe.js',
  AutogenSubstation = '/compas-plugins/compas-editors/autogen-substation.js',
  // validator plugins
  CompasValidateSchema = '/compas-plugins/validators/CompasValidateSchema.js',
  // menu plugins
  CompasOpen = '/compas-plugins/menu/CompasOpen.js',
  CompasCimMapping = '/compas-plugins/menu/CompasCimMapping.js',
  CompasImportFromApi = '/compas-plugins/menu/CompasImportFromApi.js',
  CompasSave = '/compas-plugins/menu/CompasSave.js',
  CompasSaveAs = '/compas-plugins/menu/CompasSaveAs.js',
  CompasSaveAsVersion = '/compas-plugins/menu/CompasSaveAsVersion.js',
  CompasImportIEDs = '/compas-plugins/menu/CompasImportIEDs.js',
  CompasMerge = '/compas-plugins/menu/CompasMerge.js',
  CompasUpdateSubstation = '/compas-plugins/menu/CompasUpdateSubstation.js',
  CompasCompareIED = '/compas-plugins/menu/CompasCompareIED.js',
  CompasAutoAlignment = '/compas-plugins/menu/CompasAutoAlignment.js',
  ExportIEDParams = '/compas-plugins/menu/ExportIEDParams.js',
  LocamationVMU = '/compas-plugins/menu/LocamationVMU.js',
  CompasSettings = '/compas-plugins/menu/CompasSettings.js'
}

const plugins: { [key in CompasPluginSrc]: CustomElementConstructor } = {
  [CompasPluginSrc.CompasVersions]: CompasVersions,
  [CompasPluginSrc.Sitipe]: Sitipe,
  [CompasPluginSrc.AutogenSubstation]: AutogenSubstation,
  [CompasPluginSrc.CompasValidateSchema]: CompasValidateSchema,
  [CompasPluginSrc.CompasOpen]: CompasOpen,
  [CompasPluginSrc.CompasCimMapping]: CompasCimMapping,
  [CompasPluginSrc.CompasImportFromApi]: CompasImportFromApi,
  [CompasPluginSrc.CompasSave]: CompasSave,
  [CompasPluginSrc.CompasSaveAs]: CompasSaveAs,
  [CompasPluginSrc.CompasSaveAsVersion]: CompasSaveAsVersion,
  [CompasPluginSrc.CompasImportIEDs]: CompasImportIEDs,
  [CompasPluginSrc.CompasMerge]: CompasMerge,
  [CompasPluginSrc.CompasUpdateSubstation]: CompasUpdateSubstation,
  [CompasPluginSrc.CompasCompareIED]: CompasCompareIED,
  [CompasPluginSrc.CompasAutoAlignment]: CompasAutoAlignment,
  [CompasPluginSrc.ExportIEDParams]: ExportIEDParams,
  [CompasPluginSrc.LocamationVMU]: LocamationVMU,
  [CompasPluginSrc.CompasSettings]: CompasSettings
}

export function registerCompasPlugins() {
  for (const [src, pluginConstructor] of Object.entries(plugins)) {
    const tag = pluginTag(src);

    customElements.define(tag, pluginConstructor);
  }
}
