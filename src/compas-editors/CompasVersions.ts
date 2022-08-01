import {
  css,
  html,
  LitElement,
  property,
  PropertyValues,
  TemplateResult,
} from 'lit-element';
import { get, translate } from 'lit-translate';

import '@material/mwc-fab';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-list/mwc-check-list-item';

import {
  newLogEvent,
  newOpenDocEvent,
  newWizardEvent,
  Wizard,
} from '../foundation.js';
import { MultiSelectedEvent } from '@material/mwc-list/mwc-list-foundation';

import {
  CompasSclDataService,
  SDS_NAMESPACE,
} from '../compas-services/CompasSclDataService.js';
import { createLogEvent } from '../compas-services/foundation.js';
import {
  getTypeFromDocName,
  updateDocumentInOpenSCD,
} from '../compas/foundation.js';
import { addVersionToCompasWizard } from '../compas/CompasUploadVersion.js';
import { compareWizard } from '../compas/CompasCompareDialog.js';
import { getElementByName, styles } from './foundation.js';
import { wizards } from '../wizards/wizard-library.js';

/** An editor [[`plugin`]] for selecting the `Substation` section. */
export default class CompasVersionsPlugin extends LitElement {
  @property()
  doc!: XMLDocument;
  @property({ type: String })
  docId!: string;
  @property({ type: String })
  docName!: string;

  @property()
  historyItem: Element[] | undefined;

  selectedVersionsOnCompasVersionsEditor: Set<number> = new Set();

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);

    // When the document is updated, we also will retrieve the history again, because probably it has changed.
    if (_changedProperties.has('doc')) {
      this.selectedVersionsOnCompasVersionsEditor = new Set();
      if (!this.docId) {
        this.historyItem = [];
      } else {
        this.fetchData();
      }
    }
  }

  fetchData(): void {
    this.historyItem = undefined;
    if (!this.docId) {
      this.historyItem = [];
    } else {
      const type = getTypeFromDocName(this.docName);
      CompasSclDataService()
        .listVersions(type, this.docId)
        .then(xmlResponse => {
          this.historyItem = Array.from(
            xmlResponse.querySelectorAll('HistoryItem') ?? []
          );
        })
        .catch(() => {
          this.historyItem = [];
        });
    }
  }

  private addVersionWizard(): Wizard {
    return addVersionToCompasWizard({
      docId: this.docId,
      docName: this.docName,
    });
  }

  private confirmRestoreVersionWizard(version: string): Wizard {
    function openScl(plugin: CompasVersionsPlugin) {
      return function () {
        const type = getTypeFromDocName(plugin.docName);

        CompasSclDataService()
          .getSclDocumentVersion(type, plugin.docId, version)
          .then(sclDocument => {
            updateDocumentInOpenSCD(plugin, sclDocument);

            plugin.dispatchEvent(
              newLogEvent({
                kind: 'info',
                title: get('compas.versions.restoreVersionSuccess', {
                  version: version,
                }),
              })
            );
          })
          .catch(reason => createLogEvent(plugin, reason));

        // Close the Restore Dialog.
        plugin.dispatchEvent(newWizardEvent());

        return [];
      };
    }

    return [
      {
        title: get('compas.versions.confirmRestoreTitle'),
        primary: {
          icon: '',
          label: get('compas.versions.confirmButton'),
          action: openScl(this),
        },
        content: [
          html`<span
            >${translate('compas.versions.confirmRestore', {
              version: version,
            })}</span
          >`,
        ],
      },
    ];
  }

  private confirmDeleteProjectWizard(): Wizard {
    function deleteScl(plugin: CompasVersionsPlugin) {
      return function () {
        const type = getTypeFromDocName(plugin.docName);

        CompasSclDataService()
          .deleteSclDocument(type, plugin.docId)
          .then(() => {
            plugin.fetchData();

            plugin.dispatchEvent(
              newOpenDocEvent(plugin.doc, plugin.docName, {
                detail: { docId: '' },
              })
            );
            plugin.dispatchEvent(
              newLogEvent({
                kind: 'info',
                title: get('compas.versions.deleteSuccess'),
              })
            );
          })
          .catch(reason => createLogEvent(plugin, reason));

        // Close the Restore Dialog.
        plugin.dispatchEvent(newWizardEvent());

        return [];
      };
    }

    return [
      {
        title: get('compas.versions.confirmDeleteTitle'),
        primary: {
          icon: '',
          label: get('compas.versions.confirmButton'),
          action: deleteScl(this),
        },
        content: [
          html`<span>${translate('compas.versions.confirmDelete')}</span>`,
        ],
      },
    ];
  }

  private confirmDeleteVersionWizard(version: string): Wizard {
    function deleteSclVersion(plugin: CompasVersionsPlugin) {
      return function () {
        const type = getTypeFromDocName(plugin.docName);

        CompasSclDataService()
          .deleteSclDocumentVersion(type, plugin.docId, version)
          .then(() => {
            plugin.fetchData();

            plugin.dispatchEvent(
              newLogEvent({
                kind: 'info',
                title: get('compas.versions.deleteVersionSuccess', {
                  version: version,
                }),
              })
            );
          })
          .catch(reason => createLogEvent(plugin, reason));

        // Close the Restore Dialog.
        plugin.dispatchEvent(newWizardEvent());

        return [];
      };
    }

    return [
      {
        title: get('compas.versions.confirmDeleteVersionTitle'),
        primary: {
          icon: '',
          label: get('compas.versions.confirmButton'),
          action: deleteSclVersion(this),
        },
        content: [
          html`<span
            >${translate('compas.versions.confirmDeleteVersion', {
              version: version,
            })}</span
          >`,
        ],
      },
    ];
  }

  private getSelectedVersions(): Array<string> {
    const selectedVersions: Array<string> = [];
    const listItems = this.shadowRoot!.querySelectorAll('mwc-check-list-item');
    this.selectedVersionsOnCompasVersionsEditor.forEach(index => {
      selectedVersions.push(listItems.item(index).value);
    });
    return selectedVersions;
  }

  async compareCurrentVersion(): Promise<void> {
    const selectedVersions = this.getSelectedVersions();
    if (selectedVersions.length === 1) {
      const oldVersion = selectedVersions[0];
      const oldScl = await this.getVersion(oldVersion);
      const newScl = this.doc.documentElement;

      this.dispatchEvent(
        newWizardEvent(
          compareWizard(this, oldScl, newScl, {
            title: get('compas.compare.title', {
              oldVersion: oldVersion,
              newVersion: 'current',
            }),
          })
        )
      );
    } else {
      this.dispatchEvent(
        newWizardEvent(
          this.showMessageWizard(
            get('compas.versions.selectOneVersionsTitle'),
            get('compas.versions.selectOneVersionsMessage', {
              size: selectedVersions.length,
            })
          )
        )
      );
    }
  }

  async compareVersions(): Promise<void> {
    const selectedVersions = this.getSelectedVersions();
    if (selectedVersions.length === 2) {
      const oldVersion = selectedVersions[0];
      const newVersion = selectedVersions[1];

      const oldScl = await this.getVersion(oldVersion);
      const newScl = await this.getVersion(newVersion);

      this.dispatchEvent(
        newWizardEvent(
          compareWizard(this, oldScl, newScl, {
            title: get('compas.compare.title', {
              oldVersion: oldVersion,
              newVersion: newVersion,
            }),
          })
        )
      );
    } else {
      this.dispatchEvent(
        newWizardEvent(
          this.showMessageWizard(
            get('compas.versions.selectTwoVersionsTitle'),
            get('compas.versions.selectTwoVersionsMessage', {
              size: selectedVersions.length,
            })
          )
        )
      );
    }
  }

  private showMessageWizard(title: string, message: string): Wizard {
    return [
      {
        title: title,
        content: [html`<span>${message}</span>`],
      },
    ];
  }

  private async getVersion(version: string) {
    const type = getTypeFromDocName(this.docName);
    return CompasSclDataService()
      .getSclDocumentVersion(type, this.docId, version)
      .then(sclDocument => {
        return Promise.resolve(sclDocument.documentElement);
      });
  }

  private openEditWizard(): void {
    const wizard = wizards['SCL'].edit(this.doc.documentElement);
    if (wizard) this.dispatchEvent(newWizardEvent(wizard));
  }

  private getCurrentVersion(): string {
    const header = this.doc.querySelector('Header');
    return header!.getAttribute('version') ?? 'unknown';
  }

  private getCurrentName(): string {
    const sclName = this.doc.querySelector(
      'SCL > Private[type="compas_scl"] > SclName'
    );
    return sclName!.textContent ?? 'unknown';
  }

  private renderLineInfo(item: Element): TemplateResult {
    let element = getElementByName(item, SDS_NAMESPACE, 'Name');
    if (element === null) {
      element = getElementByName(item, SDS_NAMESPACE, 'Id');
    }
    const name = element!.textContent ?? '';
    const version =
      getElementByName(item, SDS_NAMESPACE, 'Version')!.textContent ?? '';
    const who = getElementByName(item, SDS_NAMESPACE, 'Who')!.textContent ?? '';
    const when =
      getElementByName(item, SDS_NAMESPACE, 'When')!.textContent ?? '';
    const what =
      getElementByName(item, SDS_NAMESPACE, 'What')!.textContent ?? '';

    return html`<span>${name} (Version: ${version})</span>
      <span slot="secondary">
        Who: "${who ? who : '-'}", When: "${when ? when : '-'}", What:
        "${what ? what : '-'}"
      </span>`;
  }

  render(): TemplateResult {
    if (!this.historyItem) {
      return html` <compas-loading></compas-loading> `;
    }

    if (this.historyItem.length <= 0) {
      return html` <mwc-list>
        <mwc-list-item id="no-scl-versions">
          <span>${translate('compas.noSclVersions')}</span>
        </mwc-list-item>
      </mwc-list>`;
    }

    return html` <h1>
        ${translate('compas.versions.sclInfo', {
          name: this.getCurrentName(),
          version: this.getCurrentVersion(),
        })}
        <nav>
          <abbr title="${translate('compas.versions.addVersionButton')}">
            <mwc-icon-button
              icon="playlist_add"
              @click=${() => {
                this.dispatchEvent(newWizardEvent(this.addVersionWizard()));
              }}
            ></mwc-icon-button>
          </abbr>
        </nav>
        <nav>
          <abbr title="${translate('compas.versions.deleteProjectButton')}">
            <mwc-icon-button
              icon="delete_forever"
              @click=${() => {
                this.dispatchEvent(
                  newWizardEvent(this.confirmDeleteProjectWizard())
                );
              }}
            ></mwc-icon-button>
          </abbr>
        </nav>
        <nav>
          <abbr title="${translate('edit')}">
            <mwc-icon-button
              icon="edit"
              @click=${() => this.openEditWizard()}
            ></mwc-icon-button>
          </abbr>
        </nav>
      </h1>
      <div id="containerCompasVersions">
        <section tabindex="0">
          <h1>${translate('compas.versions.title')}</h1>
          <mwc-list
            multi
            @selected=${(evt: MultiSelectedEvent) => {
              this.selectedVersionsOnCompasVersionsEditor = evt.detail.index;
            }}
          >
            ${this.historyItem.map((item, index, items) => {
              const version =
                getElementByName(item, SDS_NAMESPACE, 'Version')!.textContent ??
                '';
              if (items.length - 1 === index) {
                return html`<mwc-check-list-item
                  value="${version}"
                  tabindex="0"
                  graphic="icon"
                  twoline
                  .selected=${this.selectedVersionsOnCompasVersionsEditor.has(
                    index
                  )}
                >
                  ${this.renderLineInfo(item)}
                  <span slot="graphic">
                    <mwc-icon
                      @click=${() => {
                        this.dispatchEvent(
                          newWizardEvent(
                            this.confirmRestoreVersionWizard(version)
                          )
                        );
                      }}
                      >restore</mwc-icon
                    >
                  </span>
                </mwc-check-list-item>`;
              }
              return html`<mwc-check-list-item
                value="${version}"
                tabindex="0"
                graphic="icon"
                twoline
                .selected=${this.selectedVersionsOnCompasVersionsEditor.has(
                  index
                )}
              >
                ${this.renderLineInfo(item)}
                <span slot="graphic">
                  <mwc-icon
                    @click=${() => {
                      this.dispatchEvent(
                        newWizardEvent(
                          this.confirmRestoreVersionWizard(version)
                        )
                      );
                    }}
                    >restore</mwc-icon
                  >
                  <mwc-icon
                    @click=${() => {
                      this.dispatchEvent(
                        newWizardEvent(this.confirmDeleteVersionWizard(version))
                      );
                    }}
                    >delete</mwc-icon
                  >
                </span>
              </mwc-check-list-item>`;
            })}
          </mwc-list>
        </section>
        <mwc-fab
          extended
          icon="compare"
          label="${translate('compas.versions.compareCurrentButton')}"
          @click=${this.compareCurrentVersion}
        ></mwc-fab>
        <mwc-fab
          extended
          icon="compare"
          label="${translate('compas.versions.compareButton')}"
          @click=${this.compareVersions}
        ></mwc-fab>
      </div>`;
  }

  static styles = css`
    ${styles}

    mwc-list-item#no-scl-versions > span {
      color: var(--base1);
    }

    :host {
      width: 100vw;
    }

    h1 > nav,
    h1 > abbr > mwc-icon-button {
      float: right;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    #containerCompasVersions {
      padding: 16px 12px 16px 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    @media (max-width: 387px) {
      #containerCompasVersions {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }

    mwc-check-list-item {
      padding-left: 60px;
    }

    mwc-check-list-item > span {
      width: 90px;
      text-align: left;
    }

    mwc-fab {
      float: right;
      margin: 5px 5px 5px 5px;
    }
  `;
}
