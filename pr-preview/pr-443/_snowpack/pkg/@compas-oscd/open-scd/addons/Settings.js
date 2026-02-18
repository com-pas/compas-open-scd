import { _ as __decorate } from '../../../common/tslib.es6-272d455c.js';
import { L as LitElement, c as css, p as property, q as query, a as customElement } from '../../../common/lit-element-5ba57723.js';
import { u as use, g as get, r as registerTranslateConfig } from '../../../common/directive-12ec8b14.js';
import { t as translate } from '../../../common/translate-14164d79.js';
import { h as html } from '../../../common/lit-html-c4cc555c.js';
import '../../../@material/mwc-button.js';
import '../../../@material/mwc-dialog.js';
import '../../../@material/mwc-formfield.js';
import '../../../@material/mwc-list/mwc-list-item.js';
import '../../../@material/mwc-select.js';
import '../../../@material/mwc-switch.js';
import '../../../common/plugin-state-api-fe1fb55f.js';
import { a as newLoadNsdocEvent, n as newLogEvent } from '../../../common/settings-0b71b26d.js';
import { d as de } from '../../../common/de-8e87df6b.js';
import { e as en } from '../../../common/en-412d853d.js';
import '../dist/WizardDivider.js';
import { i as initializeNsdoc, a as iec6185072, b as iec6185073, c as iec6185074, d as iec6185081 } from '../../../common/nsdoc-7d978e3b.js';
import '../../../common/render-a1d0e246.js';
import '../../../@material/mwc-icon.js';
import '../../../common/ripple-handlers-ce7fbbd4.js';
import '../../../common/ponyfill-44e20603.js';
import '../../../common/base-element-22e47ec1.js';
import '../../../common/foundation-794fc3ac.js';
import '../../../common/foundation-7cea7f4a.js';
import '../../../common/class-map-360a3edc.js';
import '../../../common/style-map-46da9e52.js';
import '../../../common/inert.esm-5c96ec71.js';
import '../../../common/events-706ce356.js';
import '../../../common/observer-6d1a3681.js';
import '../../../common/form-element-4114444b.js';
import '../../../common/mwc-list-item.css-a9f8123e.js';
import '../../../common/mwc-line-ripple-directive-08063da0.js';
import '../../../common/directive-ecbd2789.js';
import '../../../common/mwc-menu-c3ef0e11.js';
import '../../../@material/mwc-list.js';
import '../../../common/mwc-list-base-7f6434a8.js';
import '../../../common/if-defined-2d797dbf.js';
import '../../../common/aria-property-2938771c.js';

function getTheme(theme) {
    document.body.style.cssText = bodyStyles[theme];
    return html `
    ${themes[theme]}
    <style>
      * {
        --primary: var(--cyan);
        --secondary: var(--violet);
        --mdc-theme-primary: var(--primary);
        --mdc-theme-secondary: var(--secondary);
        --mdc-theme-background: var(--base3);
        --mdc-theme-surface: var(--base3);
        --mdc-theme-on-primary: var(--base2);
        --mdc-theme-on-secondary: var(--base2);
        --mdc-theme-on-background: var(--base00);
        --mdc-theme-on-surface: var(--base00);
        --mdc-theme-text-primary-on-background: var(--base01);
        --mdc-theme-text-secondary-on-background: var(--base00);
        --mdc-theme-text-icon-on-background: var(--base00);
        --mdc-theme-error: var(--red);

        --mdc-button-disabled-ink-color: var(--base1);

        --mdc-drawer-heading-ink-color: var(--base00);

        --mdc-text-field-fill-color: var(--base2);
        --mdc-text-field-disabled-fill-color: var(--base3);
        --mdc-text-field-ink-color: var(--base00);
        --mdc-text-field-label-ink-color: var(--base00);

        --mdc-select-fill-color: var(--base2);
        --mdc-select-disabled-fill-color: var(--base3);
        --mdc-select-ink-color: var(--base00);

        --mdc-dialog-heading-ink-color: var(--base00);

        --mdc-icon-font: 'Material Icons Outlined';

        --oscd-primary: var(--oscd-theme-primary, var(--cyan));
        --oscd-secondary: var(--oscd-theme-secondary, var(--violet));
        --oscd-error: var(--oscd-theme-error, var(--red));

        --oscd-base03: var(--oscd-theme-base03, var(--base03));
        --oscd-base02: var(--oscd-theme-base02, var(--base02));
        --oscd-base01: var(--oscd-theme-base01, var(--base01));
        --oscd-base00: var(--oscd-theme-base00, var(--base00));
        --oscd-base0: var(--oscd-theme-base0, var(--base0));
        --oscd-base1: var(--oscd-theme-base1, var(--base1));
        --oscd-base2: var(--oscd-theme-base2, var(--base2));
        --oscd-base3: var(--oscd-theme-base3, var(--base3));

        --oscd-text-font: var(--oscd-theme-text-font, 'Roboto');
        --oscd-icon-font: var(--oscd-theme-icon-font, 'Material Icons');
      }

      .mdc-drawer span.mdc-drawer__title {
        color: var(--mdc-theme-text-primary-on-background) !important;
      }

      abbr {
        text-decoration: none;
        border-bottom: none;
      }

      mwc-textfield[iconTrailing='search'] {
        --mdc-shape-small: 28px;
      }
    </style>
  `;
}
const bodyStyles = {
    dark: 'background: #073642',
    light: 'background: #eee8d5',
};
const themes = {
    light: html `
    <style>
      * {
        --base03: #002b36;
        --base02: #073642;
        --base01: #586e75;
        --base00: #657b83;
        --base0: #839496;
        --base1: #93a1a1;
        --base2: #eee8d5;
        --base3: #fdf6e3;
        --yellow: #b58900;
        --orange: #cb4b16;
        --red: #dc322f;
        --magenta: #d33682;
        --violet: #6c71c4;
        --blue: #268bd2;
        --cyan: #2aa198;
        --green: #859900;
      }
    </style>
  `,
    dark: html `
    <style>
      * {
        --base03: #fdf6e3;
        --base02: #eee8d5;
        --base01: #93a1a1;
        --base00: #839496;
        --base0: #657b83;
        --base1: #586e75;
        --base2: #073642;
        --base3: #002b36;
        --yellow: #b58900;
        --orange: #cb4b16;
        --red: #dc322f;
        --magenta: #d33682;
        --violet: #6c71c4;
        --blue: #268bd2;
        --cyan: #2aa198;
        --green: #859900;
      }
    </style>
  `,
};

const languages = { en, de };
async function loader(lang) {
    if (Object.keys(languages).includes(lang))
        return languages[lang];
    else
        return {};
}

const defaults = {
    language: 'en',
    theme: 'light',
    mode: 'safe',
    showieds: 'off',
    'IEC 61850-7-2': undefined,
    'IEC 61850-7-3': undefined,
    'IEC 61850-7-4': undefined,
    'IEC 61850-8-1': undefined,
};
let OscdSettings = class OscdSettings extends LitElement {
    constructor() {
        super(...arguments);
        /** Object containing all *.nsdoc files and a function extracting element's label form them*/
        this.nsdoc = initializeNsdoc();
        this.nsdUploadButton = true;
        this.languageConfig = { languages, loader };
    }
    /** Current [[`Settings`]] in `localStorage`, default to [[`defaults`]]. */
    get settings() {
        return {
            language: this.getSetting('language'),
            theme: this.getSetting('theme'),
            mode: this.getSetting('mode'),
            showieds: this.getSetting('showieds'),
            'IEC 61850-7-2': this.getSetting('IEC 61850-7-2'),
            'IEC 61850-7-3': this.getSetting('IEC 61850-7-3'),
            'IEC 61850-7-4': this.getSetting('IEC 61850-7-4'),
            'IEC 61850-8-1': this.getSetting('IEC 61850-8-1'),
        };
    }
    /**
     * Get the versions of the current OpenSCD NSD files.
     * @returns Current version, revision and release for all current OpenSCD NSD files.
     */
    async nsdVersions() {
        const [nsd72, nsd73, nsd74, nsd81] = await Promise.all([
            iec6185072,
            iec6185073,
            iec6185074,
            iec6185081,
        ]);
        const [nsd72Ns, nsd73Ns, nsd74Ns, nsd81Ns] = [
            nsd72.querySelector('NS'),
            nsd73.querySelector('NS'),
            nsd74.querySelector('NS'),
            nsd81.querySelector('ServiceNS'),
        ];
        return {
            'IEC 61850-7-2': {
                version: nsd72Ns?.getAttribute('version') ?? undefined,
                revision: nsd72Ns?.getAttribute('revision') ?? undefined,
                release: nsd72Ns?.getAttribute('release') ?? undefined,
            },
            'IEC 61850-7-3': {
                version: nsd73Ns?.getAttribute('version') ?? undefined,
                revision: nsd73Ns?.getAttribute('revision') ?? undefined,
                release: nsd73Ns?.getAttribute('release') ?? undefined,
            },
            'IEC 61850-7-4': {
                version: nsd74Ns?.getAttribute('version') ?? undefined,
                revision: nsd74Ns?.getAttribute('revision') ?? undefined,
                release: nsd74Ns?.getAttribute('release') ?? undefined,
            },
            'IEC 61850-8-1': {
                version: nsd81Ns?.getAttribute('version') ?? undefined,
                revision: nsd81Ns?.getAttribute('revision') ?? undefined,
                release: nsd81Ns?.getAttribute('release') ?? undefined,
            },
        };
    }
    getSetting(setting) {
        return (localStorage.getItem(setting) ?? defaults[setting]);
    }
    /** Update the `value` of `setting`, storing to `localStorage`. */
    setSetting(setting, value) {
        localStorage.setItem(setting, value);
        this.shadowRoot
            ?.querySelector('wizard-dialog')
            ?.requestUpdate();
        this.requestUpdate();
    }
    /** Remove the `setting` in `localStorage`. */
    removeSetting(setting) {
        localStorage.removeItem(setting);
        this.shadowRoot
            ?.querySelector('wizard-dialog')
            ?.requestUpdate();
        this.requestUpdate();
        this.nsdoc = initializeNsdoc(); // update nsdoc
    }
    onClosing(ae) {
        if (ae.detail?.action === 'reset') {
            Object.keys(this.settings).forEach(item => localStorage.removeItem(item));
            this.requestUpdate('settings');
        }
        else if (ae.detail?.action === 'save') {
            this.setSetting('language', this.languageUI.value);
            this.setSetting('theme', this.darkThemeUI.checked ? 'dark' : 'light');
            this.setSetting('mode', this.modeUI.checked ? 'pro' : 'safe');
            this.setSetting('showieds', this.showiedsUI.checked ? 'on' : 'off');
            this.requestUpdate('settings');
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('settings'))
            use(this.settings.language);
    }
    renderFileSelect() {
        return html `
      <input
        id="nsdoc-file"
        accept=".nsdoc"
        type="file"
        hidden
        required
        multiple
        @change="${(evt) => this.uploadNsdocFile(evt)}}"
      />
      <mwc-button
        label="${translate('settings.selectFileButton')}"
        id="selectFileButton"
        @click=${() => {
            const input = (this.shadowRoot.querySelector('#nsdoc-file'));
            input?.click();
        }}
      >
      </mwc-button>
    `;
    }
    async uploadNsdocFile(evt) {
        const files = Array.from(evt.target?.files ?? []);
        if (files.length == 0)
            return;
        for (const file of files) {
            const text = await file.text();
            this.dispatchEvent(newLoadNsdocEvent(text, file.name));
        }
        this.nsdocFileUI.value = '';
        this.requestUpdate();
    }
    async onLoadNsdoc(event) {
        const nsdocElement = this.parseToXmlObject(event.detail.nsdoc).querySelector('NSDoc');
        const id = nsdocElement?.getAttribute('id');
        if (!id) {
            this.dispatchEvent(newLogEvent({
                kind: 'error',
                title: get('settings.invalidFileNoIdFound', {
                    filename: event.detail.filename,
                }),
            }));
            return;
        }
        const nsdVersions = await this.nsdVersions();
        const nsdVersion = nsdVersions[id];
        const nsdocVersion = {
            version: nsdocElement.getAttribute('version') ?? '',
            revision: nsdocElement.getAttribute('revision') ?? '',
            release: nsdocElement.getAttribute('release') ?? '',
        };
        if (!this.isEqual(nsdVersion, nsdocVersion)) {
            this.dispatchEvent(newLogEvent({
                kind: 'warning',
                title: get('settings.invalidNsdocVersion', {
                    id: id,
                    filename: event.detail.filename,
                    nsdVersion: `${nsdVersion.version}${nsdVersion.revision}${nsdVersion.release}`,
                    nsdocVersion: `${nsdocVersion.version}${nsdocVersion.revision}${nsdocVersion.release}`,
                }),
            }));
        }
        this.setSetting(id, event.detail.nsdoc);
        this.nsdoc = initializeNsdoc(); // update nsdoc
    }
    /**
     * Check the equality of two NsdVersions.
     * @param versionA - First version to compare.
     * @param versionB - Second version to compare.
     * @returns Are they equal or not.
     */
    isEqual(versionA, versionB) {
        return (versionA.version == versionB.version &&
            versionA.revision == versionB.revision &&
            versionA.release == versionB.release);
    }
    /**
     * Render one .nsdoc item in the Settings wizard
     * @param key - The key of the nsdoc file in the settings.
     * @returns a .nsdoc item for the Settings wizard
     */
    renderNsdocItem(key) {
        const nsdSetting = this.settings[key];
        let nsdVersion;
        let nsdRevision;
        let nsdRelease;
        if (nsdSetting) {
            const nsdoc = this.parseToXmlObject(nsdSetting).querySelector('NSDoc');
            nsdVersion = nsdoc?.getAttribute('version');
            nsdRevision = nsdoc?.getAttribute('revision');
            nsdRelease = nsdoc?.getAttribute('release');
        }
        return html `<mwc-list-item
      id=${key}
      graphic="avatar"
      hasMeta
      twoline
      .disabled=${!nsdSetting}
    >
      <span>${key}</span>
      ${nsdSetting
            ? html `<span slot="secondary"
            >${nsdVersion}${nsdRevision}${nsdRelease}</span
          >`
            : html ``}
      ${nsdSetting
            ? html `<mwc-icon slot="graphic" style="color:green;">done</mwc-icon>`
            : html `<mwc-icon slot="graphic" style="color:red;">close</mwc-icon>`}
      ${nsdSetting
            ? html `<mwc-icon
            id="deleteNsdocItem"
            slot="meta"
            @click=${() => {
                this.removeSetting(key);
            }}
            >delete</mwc-icon
          >`
            : html ``}
    </mwc-list-item>`;
    }
    parseToXmlObject(text) {
        return new DOMParser().parseFromString(text, 'application/xml');
    }
    connectedCallback() {
        super.connectedCallback();
        registerTranslateConfig({ loader: this.languageConfig.loader, empty: key => key });
        use(this.settings.language);
        if (this.host) {
            this.host.addEventListener('oscd-settings', (evt) => {
                evt.detail.show ? this.settingsUI.show() : this.settingsUI.close();
            });
            this.host.addEventListener('load-nsdoc', (evt) => this.onLoadNsdoc(evt));
        }
    }
    render() {
        return html `<mwc-dialog
        id="settings"
        heading="${translate('settings.title')}"
        @closing=${this.onClosing}
      >
        <form>
          <mwc-select
            fixedMenuPosition
            id="language"
            icon="language"
            label="${translate('settings.language')}"
          >
            ${Object.keys(this.languageConfig.languages).map(lang => html `<mwc-list-item
                  graphic="icon"
                  value="${lang}"
                  ?selected=${lang === this.settings.language}
                  >${translate(`settings.languages.${lang}`)}</mwc-list-item
                >`)}
          </mwc-select>
          <mwc-formfield label="${translate('settings.dark')}">
            <mwc-switch
              id="dark"
              ?checked=${this.settings.theme === 'dark'}
            ></mwc-switch>
          </mwc-formfield>
          <mwc-formfield label="${translate('settings.mode')}">
            <mwc-switch
              id="mode"
              ?checked=${this.settings.mode === 'pro'}
            ></mwc-switch>
          </mwc-formfield>
          <mwc-formfield label="${translate('settings.showieds')}">
            <mwc-switch
              id="showieds"
              ?checked=${this.settings.showieds === 'on'}
            ></mwc-switch>
          </mwc-formfield>
        </form>
        <wizard-divider></wizard-divider>
        ${this.nsdUploadButton
            ? html `<section id="shownsdbutton">
              <h3>${translate('settings.loadNsdTranslations')}</h3>
              ${this.renderFileSelect()}
            </section>`
            : html ``}
        <mwc-list id="nsdocList">
          ${this.renderNsdocItem('IEC 61850-7-2')}
          ${this.renderNsdocItem('IEC 61850-7-3')}
          ${this.renderNsdocItem('IEC 61850-7-4')}
          ${this.renderNsdocItem('IEC 61850-8-1')}
        </mwc-list>
        <mwc-button slot="secondaryAction" dialogAction="close">
          ${get('cancel')}
        </mwc-button>
        <mwc-button
          style="--mdc-theme-primary: var(--mdc-theme-error)"
          slot="secondaryAction"
          dialogAction="reset"
        >
          ${get('reset')}
        </mwc-button>
        <mwc-button
          icon="save"
          trailingIcon
          slot="primaryAction"
          dialogAction="save"
        >
          ${get('save')}
        </mwc-button>
      </mwc-dialog>
      <slot></slot>
      ${getTheme(this.settings.theme)}`;
    }
};
OscdSettings.styles = css `
    mwc-top-app-bar-fixed {
      --mdc-theme-text-disabled-on-light: rgba(255, 255, 255, 0.38);
    } /* hack to fix disabled icon buttons rendering black */

    mwc-tab {
      background-color: var(--primary);
      --mdc-theme-primary: var(--mdc-theme-on-primary);
    }

    input[type='file'] {
      display: none;
    }

    mwc-dialog {
      --mdc-dialog-max-width: 98vw;
    }

    mwc-dialog > form {
      display: flex;
      flex-direction: column;
    }

    mwc-dialog > form > * {
      display: block;
      margin-top: 16px;
    }

    mwc-linear-progress {
      position: fixed;
      --mdc-linear-progress-buffer-color: var(--primary);
      --mdc-theme-primary: var(--secondary);
      left: 0px;
      top: 0px;
      width: 100%;
      pointer-events: none;
      z-index: 1000;
    }

    tt {
      font-family: 'Roboto Mono', monospace;
      font-weight: 300;
    }

    .landing {
      position: absolute;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }

    .landing_icon:hover {
      box-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),
        0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2);
    }

    .landing_icon {
      margin: 12px;
      border-radius: 16px;
      width: 160px;
      height: 140px;
      text-align: center;
      color: var(--mdc-theme-on-secondary);
      background: var(--secondary);
      --mdc-icon-button-size: 100px;
      --mdc-icon-size: 100px;
      --mdc-ripple-color: rgba(0, 0, 0, 0);
      box-shadow: rgb(0 0 0 / 14%) 0px 6px 10px 0px,
        rgb(0 0 0 / 12%) 0px 1px 18px 0px, rgb(0 0 0 / 20%) 0px 3px 5px -1px;
      transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .landing_label {
      width: 160px;
      height: 50px;
      margin-top: 100px;
      margin-left: -30px;
      font-family: 'Roboto', sans-serif;
    }

    .plugin.menu {
      display: flex;
    }

    .plugin.validator {
      display: flex;
    }
  `;
__decorate([
    property()
], OscdSettings.prototype, "settings", null);
__decorate([
    property({ attribute: false })
], OscdSettings.prototype, "nsdoc", void 0);
__decorate([
    property({
        type: Object,
    })
], OscdSettings.prototype, "host", void 0);
__decorate([
    property({ type: Boolean })
], OscdSettings.prototype, "nsdUploadButton", void 0);
__decorate([
    property({ type: Object })
], OscdSettings.prototype, "languageConfig", void 0);
__decorate([
    query('#settings')
], OscdSettings.prototype, "settingsUI", void 0);
__decorate([
    query('#language')
], OscdSettings.prototype, "languageUI", void 0);
__decorate([
    query('#dark')
], OscdSettings.prototype, "darkThemeUI", void 0);
__decorate([
    query('#mode')
], OscdSettings.prototype, "modeUI", void 0);
__decorate([
    query('#showieds')
], OscdSettings.prototype, "showiedsUI", void 0);
__decorate([
    query('#nsdoc-file')
], OscdSettings.prototype, "nsdocFileUI", void 0);
OscdSettings = __decorate([
    customElement('oscd-settings')
], OscdSettings);

export { OscdSettings, defaults };
