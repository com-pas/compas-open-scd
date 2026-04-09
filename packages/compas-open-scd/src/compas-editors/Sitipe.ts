import { css, html, LitElement, property, TemplateResult } from 'lit-element';
import { translate } from 'lit-translate';

import './sitipe/sitipe-substation.js';
import { isPublic } from '@compas-oscd/open-scd/dist/foundation.js';

/** An editor [[`plugin`]] for Sitipe based configuration */
export default class SitipePlugin extends LitElement {
  @property({ attribute: false })
  doc!: XMLDocument;

  @property({
    type: Number,
  })
  editCount = -1;

  header(): string {
    return 'Sitipe';
  }

  private renderMissingSubstationMessage(): TemplateResult {
    return html`<h1>
      <span style="color: var(--base1)"
        >${translate('substation.missing')}</span
      >
    </h1>`;
  }

  private renderSubstations(): TemplateResult {
    return html`${this.doc?.querySelector(':root > Substation')
      ? html`<section>
          ${Array.from(this.doc.querySelectorAll('Substation') ?? [])
            .filter(el => isPublic(el))
            .map(
              substation =>
                html`<sitipe-substation
                  .doc=${this.doc}
                  .element=${substation}
                  .editCount=${this.editCount}
                ></sitipe-substation>`
            )}
        </section>`
      : this.renderMissingSubstationMessage()}`;
  }

  render(): TemplateResult {
    return html`<div class="container">${this.renderSubstations()}</div>`;
  }

  static readonly styles = css`
    :host {
      width: 100vw;
      padding: 16px;
    }

    .container {
      display: flex;
      padding: 8px 6px 16px;
      height: calc(100vh - 136px);
      box-sizing: border-box;
      width: 100%;
    }
    section {
      flex: 1;
    }
  `;
}
