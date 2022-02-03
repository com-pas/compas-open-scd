import { officialPrivateFieldsPlugins } from "../../public/js/privateFieldsPlugins.js";
import { TemplateResult } from "lit-element";
import { EditorAction, WizardInput } from "../foundation.js";

export type WizardKind = 'substation-wizard'
  | 'voltageLevel-wizard'
  | 'bay-wizard';

export interface PrivateFieldsWorker {
  renderFields: (wizardKind: WizardKind, element: Element | null) => TemplateResult[];
  updateFields: (wizardKind: WizardKind, inputs: WizardInput[], oldElement: Element, newElement: Element) => EditorAction[];
}

export type PrivateFieldsPlugin = {
  name: string;
  src: string;
  installed: boolean;
  official?: boolean;
  worker?: PrivateFieldsWorker;
};

export class PrivateFields {
  private static LOCAL_STORAGE_KEY = 'privateFieldsPlugin';

  private static instance: PrivateFields;
  private static loadedPrivateFieldPlugins = new Map<string, PrivateFieldsWorker | undefined>();

  private constructor() {
    this.updatePrivateFiledsPlugins();
  }

  public static async getInstance(): Promise<PrivateFields> {
    if (!PrivateFields.instance) {
      PrivateFields.instance = new PrivateFields();
    }

    return PrivateFields.instance;
  }

  public renderPrivateFields(wizardKind: WizardKind, element: Element | null): TemplateResult[] {
    return this.privateFieldsWorkers
      .filter(worker => worker !== undefined)
      .map(worker => worker!.renderFields(wizardKind, element))
      .flat();
  }

  public updatePrivateFields(wizardKind: WizardKind, inputs: WizardInput[], oldElement: Element, newElement: Element): EditorAction[] {
    return this.privateFieldsWorkers
      .filter(worker => worker !== undefined)
      .map(worker => worker!.updateFields(wizardKind, inputs, oldElement, newElement))
      .flat();
  }

  get privateFieldsWorkers(): (PrivateFieldsWorker | undefined)[] {
    return this.privateFieldsPlugins
      .filter(plugin => plugin.installed)
      .map(plugin => plugin.worker);
  }

  get privateFieldsPlugins(): PrivateFieldsPlugin[] {
    return this.storedPlugins
      .map(plugin => {
        if (!plugin.official) return plugin;
        const officialPlugin = officialPrivateFieldsPlugins.find(
          needle => needle.src === plugin.src
        );
        return <PrivateFieldsPlugin>{
          ...officialPlugin,
          ...plugin,
        };
      });
  }

  public activatePrivateFieldsPlugins(indices: Set<number>): void {
    const newPlugins = this.privateFieldsPlugins
      .map((plugin, index) => {
        return { ...plugin, installed: indices.has(index), worker: undefined };
      });
    localStorage.setItem(PrivateFields.LOCAL_STORAGE_KEY, JSON.stringify(newPlugins));
  }

  public addExternalPlugin(plugin: PrivateFieldsPlugin): void {
    if (this.storedPlugins.some(p => p.src === plugin.src)) {
      return;
    }

    const newPlugins: PrivateFieldsPlugin[] = this.storedPlugins;
    newPlugins.push(plugin);
    localStorage.setItem(PrivateFields.LOCAL_STORAGE_KEY, JSON.stringify(newPlugins));
  }

  private get storedPlugins(): PrivateFieldsPlugin[] {
    return <PrivateFieldsPlugin[]>(
      JSON.parse(localStorage.getItem(PrivateFields.LOCAL_STORAGE_KEY) ?? '[]', (key, value) =>
        value.src ? PrivateFields.addContent(value) : value
      )
    );
  }

  private static addContent(plugin: PrivateFieldsPlugin): PrivateFieldsPlugin {
    return {
      ...plugin,
      worker: PrivateFields.loadedPrivateFieldPlugins.get(plugin.src)!,
    };
  }

  public resetPlugins(): void {
    localStorage.setItem(PrivateFields.LOCAL_STORAGE_KEY,
      JSON.stringify(
        officialPrivateFieldsPlugins.map(plugin => {
          return {
            src: plugin.src,
            installed: plugin.default ?? false,
            official: true,
          };
        })
      )
    );
  }

  private updatePrivateFiledsPlugins() {
    const stored: PrivateFieldsPlugin[] = this.storedPlugins;
    const officialStored = stored.filter(p => p.official);
    const newOfficial = officialPrivateFieldsPlugins
      .filter(p => !officialStored.find(o => o.src === p.src))
      .map(plugin => {
        return <PrivateFieldsPlugin>{
          src: plugin.src,
          installed: plugin.default ?? false,
          official: true as const,
        };
      });
    const oldOfficial = officialStored.filter(
      p => !officialPrivateFieldsPlugins.find(o => p.src === o.src)
    );
    const newPlugins = stored.filter(
      p => !oldOfficial.find(o => p.src === o.src)
    );
    newOfficial.map(p => newPlugins.push(p));
    localStorage.setItem(PrivateFields.LOCAL_STORAGE_KEY, JSON.stringify(newPlugins));

    PrivateFields.loadedPrivateFieldPlugins.clear();
    newPlugins.forEach(plugin => this.updateWorker(plugin))
  }

  private updateWorker(plugin: PrivateFieldsPlugin) : void {
    Promise.resolve(import(plugin.src))
      .then(module =>
        PrivateFields.loadedPrivateFieldPlugins.set(plugin.src, new module.default));
  }
}

// Initialize the PrivateFields Class.
export const privateFields = await PrivateFields.getInstance();
