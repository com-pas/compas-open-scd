import {
  customElement,
  html,
  property,
  TemplateResult,
} from 'lit-element';
import { get } from 'lit-translate';

import type { UserInfoEvent } from '../compas/foundation';

import { OscdLayout } from '@compas-oscd/open-scd/dist/addons/Layout.js';


@customElement('compas-layout')
export class CompasLayout extends OscdLayout {
  @property({ type: String }) username: string | undefined = 'God Emperor Testus';

  connectedCallback(): void {
    super.connectedCallback();

    this.onUserInfo = this.onUserInfo.bind(this);
    this.host.addEventListener('userinfo', this.onUserInfo);
  }

  private onUserInfo(event: UserInfoEvent) {
    this.username = event.detail.name;
  }

  protected renderActionItems(): TemplateResult {
    return this.componentHtml`
      ${this.username != undefined
                ? this.componentHtml`<span
                    id="userField"
                    slot="actionItems"
                    style="font-family:Roboto"
                    >${get('userinfo.loggedInAs', {
                      name: this.username,
                    })}</span
                  >`
                : ``}
        ${this.menu.map(this.renderActionItem)}
    `;
  }
}
