import {
  customElement,
  html,
  property,
  TemplateResult,
} from 'lit-element';
import { get } from 'lit-translate';
import { classMap } from 'lit-html/directives/class-map.js';
import { OscdApi } from '@compas-oscd/core';

import type { UserInfoEvent } from '../compas/foundation.js';
import type { CompasApi } from '../open-scd.js';

import { OscdLayout } from '@compas-oscd/open-scd/dist/addons/Layout.js';

interface RenderAblePlugin {
  src?: string;
  kind: string;
  content?: { tag?: string };
}

function staticTagHtml(
  oldStrings: ReadonlyArray<string>,
  ...oldArgs: unknown[]
): TemplateResult {
  const args = [...oldArgs];
  const firstArg = args.shift();
  const lastArg = args.pop();

  if (firstArg !== lastArg)
    throw new Error(
      `Opening tag <${firstArg}> does not match closing tag </${lastArg}>.`
    );

  const strings = [...oldStrings] as string[] & { raw: string[] };
  const firstString = strings.shift();
  const secondString = strings.shift();

  const lastString = strings.pop();
  const penultimateString = strings.pop();

  strings.unshift(`${firstString}${firstArg}${secondString}`);
  strings.push(`${penultimateString}${lastArg}${lastString}`);

  return html(<TemplateStringsArray>strings, ...args);
}

@customElement('compas-layout')
export class CompasLayout extends OscdLayout {
  @property({ type: String }) username: string | undefined;
  @property({ attribute: false }) compasApi?: CompasApi;

  connectedCallback(): void {
    super.connectedCallback();

    this.onUserInfo = this.onUserInfo.bind(this);
    this.host.addEventListener('userinfo', this.onUserInfo);
  }

  private onUserInfo(event: UserInfoEvent) {
    this.username = event.detail.name;
  }

  protected renderPluginContent(plugin: RenderAblePlugin): TemplateResult {
    const tag = plugin.content?.tag ?? '';

    if (!tag) {
      return html``;
    }

    const osdcApi = new OscdApi(tag);
    return staticTagHtml`<${tag}
        .doc=${this.doc}
        .docName=${this.docName}
        .editCount=${this.editCount}
        .plugins=${this.host.storedPlugins}
        .docId=${this.host.docId}
        .pluginId=${plugin.src}
        .nsdoc=${this.host.nsdoc}
        .docs=${this.host.docs}
        .locale=${this.host.locale}
        .oscdApi=${osdcApi}
        .editor=${this.editor}
        .compasApi=${this.compasApi}
        class="${classMap({
          plugin: true,
          menu: plugin.kind === 'menu',
          validator: plugin.kind === 'validator',
          editor: plugin.kind === 'editor',
        })}"
      ></${tag}>`;
  }

  protected renderActionItems() {
    return this.componentHtml`
      ${
        this.username
          ? this.componentHtml`<span
                    id="userField"
                    slot="actionItems"
                    style="font-family:Roboto"
                    >${get('userinfo.loggedInAs', {
                      name: this.username,
                    })}</span
                  >`
          : ``
      }
        ${this.menu.map(this.renderActionItem)}
    `;
  }
}
