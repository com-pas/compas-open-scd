import {
  customElement,
  html,
  property,
  TemplateResult,
  css,
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

  static styles: any = [
    OscdLayout.styles,
    css`
      #compas-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
      }
      #app-title {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-family: Roboto, sans-serif;
        font-size: 1.1rem;
        font-weight: 500;
        color: white;
        white-space: nowrap;
        pointer-events: none;
      }
      oscd-menu-tabs {
        --mdc-tab-text-label-color-default: white;
        --mdc-tab-color-default: white;
        --mdc-theme-on-primary: yellow;
      }
      :host(.hide-editor-tabs) oscd-menu-tabs {
        display: none !important;
      }
    `,
  ];

  connectedCallback(): void {
    super.connectedCallback();

    this.onUserInfo = this.onUserInfo.bind(this);
    this.host.addEventListener('userinfo', this.onUserInfo);

    /** Engineering Wizard hides/shows oscd-menu-tabs (IED, Substation, …) for its fullscreen views. */
    this.addEventListener('toggle-editor-tabs', (e: Event) => {
      const { detail } = e as CustomEvent<{ visible?: boolean }>;
      const visible = detail?.visible ?? true;
      this.classList.toggle('hide-editor-tabs', !visible);
    });
  }

  private onUserInfo(event: UserInfoEvent) {
    this.username = event.detail.name;
  }

  protected renderTitle(): TemplateResult {
    return this.componentHtml`
      <div slot="title">
        <span id="app-title">${this.docName}</span>
      </div>
    `;
  }

  protected renderHeader(): TemplateResult {
    return this.componentHtml`
      <mwc-top-app-bar-fixed>
        <mwc-icon-button
          icon="menu"
          label="Menu"
          slot="navigationIcon"
          @click=${() => ((this as any).menuUI.open = true)}
        ></mwc-icon-button>
        <div slot="title" id="title" style="display: flex; flex-direction: row; align-items: center; width: 50vw;">
          <img
            src="../../public/bearingpoint.bdegree.logo.png"
            alt="BearingPoint B°"
            style="height: 30px; width: auto;"
          />
          <img
            src="../../public/bearingpoint.logo.png"
            alt="BearingPoint"
            style="height: 25px; width: auto; margin-top: 4px; margin-left: 0.6rem;"
          />
        </div>
        ${this.renderTitle()}
        ${this.renderActionItems()}
      </mwc-top-app-bar-fixed>
    `;
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
