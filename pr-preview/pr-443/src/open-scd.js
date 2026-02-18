var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import {
  customElement,
  html,
  LitElement,
  property,
  state
} from "../_snowpack/pkg/lit-element.js";
import {newOpenDocEvent} from "../_snowpack/pkg/@compas-oscd/core.js";
import {newPendingStateEvent} from "../_snowpack/pkg/@compas-oscd/core.js";
import "./addons/CompasSession.js";
import "./addons/CompasLayout.js";
import {newLogEvent} from "../_snowpack/pkg/@compas-oscd/core.js";
import "../_snowpack/pkg/@compas-oscd/open-scd/addons/Waiter.js";
import "../_snowpack/pkg/@compas-oscd/open-scd/addons/Settings.js";
import "../_snowpack/pkg/@compas-oscd/open-scd/dist/addons/History.js";
import {
  initializeNsdoc
} from "../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation/nsdoc.js";
import {officialPlugins as builtinPlugins} from "../public/js/plugins.js";
import {XMLEditor} from "../_snowpack/pkg/@compas-oscd/core.js";
import {
  newConfigurePluginEvent
} from "../_snowpack/pkg/@compas-oscd/open-scd/dist/plugin.events.js";
import {pluginTag} from "../_snowpack/pkg/@compas-oscd/open-scd/dist/plugin-tag.js";
import packageJson from "../package.json.proxy.js";
import {CompasSclDataService} from "./compas-services/CompasSclDataService.js";
import {createLogEvent} from "./compas-services/foundation.js";
import {languages, loader} from "./translations/loader.js";
const LNODE_LIB_DOC_ID = "fc55c46d-c109-4ccd-bf66-9f1d0e135689";
export let OpenSCD = class extends LitElement {
  constructor() {
    super();
    this.languageConfig = {loader, languages};
    this.doc = null;
    this.docName = "";
    this.docId = "";
    this.editor = new XMLEditor();
    this.nsdoc = initializeNsdoc();
    this.currentSrc = "";
    this.storedPlugins = [];
    this.editCount = -1;
    this.unsubscribers = [];
    this._lNodeLibrary = null;
    this.plugins = {menu: [], editor: []};
    this.loadedPlugins = new Set();
    this.pluginTags = new Map();
    this.compasApi = {
      lNodeLibrary: {
        loadLNodeLibrary: async () => {
          const doc = await this.loadLNodeLibrary();
          return doc;
        },
        lNodeLibrary: () => this._lNodeLibrary
      }
    };
  }
  render() {
    return html`<compas-session>
      <oscd-waiter>
        <oscd-settings
          .host=${this}
          .nsdUploadButton=${false}
          .languageConfig=${this.languageConfig}
        >
          <oscd-wizards .host=${this}>
            <oscd-history .host=${this} .editor=${this.editor}>
              <oscd-editor
                .doc=${this.doc}
                .docName=${this.docName}
                .docId=${this.docId}
                .host=${this}
                .editCount=${this.editCount}
                .editor=${this.editor}
              >
                <compas-layout
                  @add-external-plugin=${this.handleAddExternalPlugin}
                  @oscd-configure-plugin=${this.handleConfigurationPluginEvent}
                  @set-plugins=${(e) => this.setPlugins(e.detail.selectedPlugins)}
                  .host=${this}
                  .doc=${this.doc}
                  .docName=${this.docName}
                  .editCount=${this.editCount}
                  .plugins=${this.storedPlugins}
                  .editor=${this.editor}
                  .compasApi=${this.compasApi}
                >
                </compas-layout>
              </oscd-editor>
            </compas-history>
          </oscd-wizards>
        </oscd-settings>
      </oscd-waiter>
    </compas-session>`;
  }
  get src() {
    return this.currentSrc;
  }
  set src(value) {
    this.currentSrc = value;
    this.dispatchEvent(newPendingStateEvent(this.loadDoc(value)));
  }
  async loadDoc(src) {
    const response = await fetch(src);
    const text = await response.text();
    if (!text)
      return;
    const doc = new DOMParser().parseFromString(text, "application/xml");
    const docName = src;
    this.dispatchEvent(newOpenDocEvent(doc, docName));
    if (src.startsWith("blob:"))
      URL.revokeObjectURL(src);
  }
  async loadLNodeLibrary() {
    try {
      const doc = await CompasSclDataService().getSclDocument(this, "SSD", LNODE_LIB_DOC_ID);
      if (doc instanceof Document) {
        this._lNodeLibrary = doc;
        return doc;
      }
      return null;
    } catch (reason) {
      createLogEvent(this, reason);
      return null;
    }
  }
  handleAddExternalPlugin(e) {
    this.addExternalPlugin(e.detail.plugin);
    const {name, kind} = e.detail.plugin;
    const event = newConfigurePluginEvent(name, kind, e.detail.plugin);
    this.handleConfigurationPluginEvent(event);
  }
  handleConfigurationPluginEvent(e) {
    const {name, kind, config} = e.detail;
    const hasPlugin = this.hasPlugin(name, kind);
    const hasConfig = config !== null;
    const isChangeEvent = hasPlugin && hasConfig;
    const isRemoveEvent = hasPlugin && !hasConfig;
    const isAddEvent = !hasPlugin && hasConfig;
    if (isChangeEvent && config) {
      this.changePlugin(config);
    } else if (isRemoveEvent) {
      this.removePlugin(name, kind);
    } else if (isAddEvent && config) {
      this.addPlugin(config);
    } else {
      const event = newLogEvent({
        kind: "error",
        title: "Invalid plugin configuration event",
        message: JSON.stringify({name, kind, config})
      });
      this.dispatchEvent(event);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.checkAppVersion();
    this.loadPlugins();
    this.unsubscribers.push(this.editor.subscribe((e) => this.editCount++), this.editor.subscribeUndoRedo((e) => this.editCount++));
    this.addEventListener("reset-plugins", this.resetPlugins);
  }
  disconnectedCallback() {
    this.unsubscribers.forEach((u) => u());
  }
  findPluginIndex(name, kind) {
    return this.storedPlugins.findIndex((p) => p.name === name && p.kind === kind);
  }
  hasPlugin(name, kind) {
    return this.findPluginIndex(name, kind) > -1;
  }
  removePlugin(name, kind) {
    const newPlugins = this.storedPlugins.filter((p) => p.name !== name || p.kind !== kind);
    this.updateStoredPlugins(newPlugins);
  }
  addPlugin(plugin) {
    const newPlugins = [...this.storedPlugins, plugin];
    this.updateStoredPlugins(newPlugins);
  }
  changePlugin(plugin) {
    const storedPlugins = this.storedPlugins;
    const {name, kind} = plugin;
    const pluginIndex = this.findPluginIndex(name, kind);
    if (pluginIndex < 0) {
      const event = newLogEvent({
        kind: "error",
        title: "Plugin not found, stopping change process",
        message: JSON.stringify({name, kind})
      });
      this.dispatchEvent(event);
      return;
    }
    const pluginToChange = storedPlugins[pluginIndex];
    const changedPlugin = {...pluginToChange, ...plugin};
    const newPlugins = [...storedPlugins];
    newPlugins.splice(pluginIndex, 1, changedPlugin);
    this.updateStoredPlugins(newPlugins);
  }
  resetPlugins() {
    const builtInPlugins = this.getBuiltInPlugins();
    const allPlugins = [...builtInPlugins, ...this.parsedPlugins];
    const newPluginConfigs = allPlugins.map((plugin) => {
      return {
        ...plugin,
        active: plugin.activeByDefault ?? false
      };
    });
    this.storePlugins(newPluginConfigs);
  }
  get parsedPlugins() {
    const menuPlugins = this.plugins.menu.map((plugin) => {
      let newPosition = plugin.position;
      if (typeof plugin.position === "number") {
        newPosition = void 0;
      }
      return {
        ...plugin,
        position: newPosition,
        kind: "menu",
        active: plugin.active ?? false
      };
    });
    const editorPlugins = this.plugins.editor.map((plugin) => {
      const editorPlugin = {
        ...plugin,
        position: void 0,
        kind: "editor",
        active: plugin.active ?? false
      };
      return editorPlugin;
    });
    const allPlugnis = [...menuPlugins, ...editorPlugins];
    return allPlugnis;
  }
  updateStoredPlugins(newPlugins) {
    const plugins = newPlugins.map((plugin) => {
      const isInstalled = plugin.src && plugin.active;
      if (!isInstalled) {
        return plugin;
      }
      return this.addContent(plugin);
    });
    const mergedPlugins = plugins.map((plugin) => {
      const isBuiltIn = !plugin?.official;
      if (!isBuiltIn) {
        return plugin;
      }
      const builtInPlugin = [
        ...this.getBuiltInPlugins(),
        ...this.parsedPlugins
      ].find((p) => p.src === plugin.src);
      return {
        ...builtInPlugin,
        ...plugin
      };
    });
    this.storePlugins(mergedPlugins);
  }
  storePlugins(plugins) {
    this.storedPlugins = plugins;
    const pluginConfigs = JSON.stringify(plugins.map(withoutContent));
    localStorage.setItem("plugins", pluginConfigs);
  }
  getPluginConfigsFromLocalStorage() {
    const pluginsConfigStr = localStorage.getItem("plugins") ?? "[]";
    return JSON.parse(pluginsConfigStr);
  }
  get locale() {
    return navigator.language || "en-US";
  }
  get docs() {
    const docs = {};
    if (this.doc) {
      docs[this.docName] = this.doc;
    }
    return docs;
  }
  setPlugins(selectedPlugins) {
    const newPlugins = this.storedPlugins.map((storedPlugin) => {
      const isSelected = selectedPlugins.some((selectedPlugin) => {
        return selectedPlugin.name === storedPlugin.name && selectedPlugin.src === storedPlugin.src;
      });
      return {
        ...storedPlugin,
        active: isSelected
      };
    });
    this.updateStoredPlugins(newPlugins);
  }
  loadPlugins() {
    const localPluginConfigs = this.getPluginConfigsFromLocalStorage();
    const overwritesOfBultInPlugins = localPluginConfigs.filter((p) => {
      return this.getBuiltInPlugins().some((b) => b.src === p.src);
    });
    const userInstalledPlugins = localPluginConfigs.filter((p) => {
      return !this.getBuiltInPlugins().some((b) => b.src === p.src);
    });
    const mergedBuiltInPlugins = this.getBuiltInPlugins().map((builtInPlugin) => {
      const overwrite = overwritesOfBultInPlugins.find((p) => p.src === builtInPlugin.src);
      const mergedPlugin = {
        ...builtInPlugin,
        ...overwrite,
        active: overwrite?.active ?? builtInPlugin.activeByDefault
      };
      return mergedPlugin;
    });
    const mergedPlugins = [...mergedBuiltInPlugins, ...userInstalledPlugins];
    this.updateStoredPlugins(mergedPlugins);
  }
  async addExternalPlugin(plugin) {
    if (this.storedPlugins.some((p) => p.src === plugin.src))
      return;
    const newPlugins = this.storedPlugins;
    newPlugins.push(plugin);
    this.storePlugins(newPlugins);
  }
  getBuiltInPlugins() {
    return builtinPlugins;
  }
  addContent(plugin) {
    const tag = this.pluginTag(plugin.src);
    if (!this.loadedPlugins.has(tag)) {
      this.loadedPlugins.add(tag);
      import(plugin.src).then((mod) => {
        customElements.define(tag, mod.default);
      });
    }
    return {
      ...plugin,
      content: {
        tag
      }
    };
  }
  checkAppVersion() {
    const currentVersion = packageJson.version;
    const storedVersion = localStorage.getItem("appVersion");
    if (storedVersion !== currentVersion) {
      localStorage.setItem("appVersion", currentVersion);
      localStorage.removeItem("plugins");
    }
  }
  pluginTag(uri) {
    if (!this.pluginTags.has(uri)) {
      const tag = pluginTag(uri);
      this.pluginTags.set(uri, tag);
    }
    return this.pluginTags.get(uri);
  }
};
__decorate([
  property({attribute: false})
], OpenSCD.prototype, "doc", 2);
__decorate([
  property({type: String})
], OpenSCD.prototype, "docName", 2);
__decorate([
  property({type: String})
], OpenSCD.prototype, "docId", 2);
__decorate([
  property({attribute: false})
], OpenSCD.prototype, "nsdoc", 2);
__decorate([
  property({type: String})
], OpenSCD.prototype, "src", 1);
__decorate([
  state()
], OpenSCD.prototype, "storedPlugins", 2);
__decorate([
  state()
], OpenSCD.prototype, "editCount", 2);
__decorate([
  property({type: Object})
], OpenSCD.prototype, "plugins", 2);
__decorate([
  state()
], OpenSCD.prototype, "loadedPlugins", 2);
__decorate([
  state()
], OpenSCD.prototype, "pluginTags", 2);
OpenSCD = __decorate([
  customElement("open-scd")
], OpenSCD);
export function newResetPluginsEvent() {
  return new CustomEvent("reset-plugins", {bubbles: true, composed: true});
}
export function newAddExternalPluginEvent(plugin) {
  return new CustomEvent("add-external-plugin", {
    bubbles: true,
    composed: true,
    detail: {plugin}
  });
}
export function newSetPluginsEvent(selectedPlugins) {
  return new CustomEvent("set-plugins", {
    bubbles: true,
    composed: true,
    detail: {selectedPlugins}
  });
}
function withoutContent(plugin) {
  return {...plugin, content: void 0};
}
export const pluginIcons = {
  editor: "tab",
  menu: "play_circle",
  validator: "rule_folder",
  top: "play_circle",
  middle: "play_circle",
  bottom: "play_circle"
};
const menuOrder = [
  "editor",
  "top",
  "validator",
  "middle",
  "bottom"
];
function menuCompare(a, b) {
  if (a.kind === b.kind && a.position === b.position)
    return 0;
  const earlier = menuOrder.find((kind) => [a.kind, b.kind, a.position, b.position].includes(kind));
  return [a.kind, a.position].includes(earlier) ? -1 : 1;
}
function compareNeedsDoc(a, b) {
  if (a.requireDoc === b.requireDoc)
    return 0;
  return a.requireDoc ? 1 : -1;
}
