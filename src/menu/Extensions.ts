import {LitElement} from 'lit-element';

import {OpenSCD} from "../open-scd.js";

export default class ExtensionsMenuPlugin extends LitElement {
  async run(): Promise<void> {
    (<OpenSCD>document.querySelector('open-scd')!).showPluginUI();
  }
}

