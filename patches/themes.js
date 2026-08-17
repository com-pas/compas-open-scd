import { html } from 'lit-element';
/**
 * Apply the current light/dark setting and return the theme stylesheet.
 *
 * Customize only via --oscd-theme-* in customer-branding.css. This function
 * maps those overrides onto --oscd-* tokens used by OpenSCD and plugins.
 *
 * Keep this signature: other forks may override getTheme(theme).
 */
export function getTheme(theme) {
    // color-scheme on <html> drives every light-dark() value below.
    document.documentElement.style.colorScheme = theme;
    // <body> is outside the oscd-settings shadow tree, so it cannot use --oscd-*.
    // Set --oscd-theme-body-bg to override independently of --oscd-theme-base2.
    document.body.style.background =
        'var(--oscd-theme-body-bg, var(--oscd-theme-base2, light-dark(#eee8d5, #073642)))';
    return html `
    <style>
      /*
       * Token layers:
       *   --oscd-theme-*     customer overrides (customer-branding.css)
       *   --oscd-*           resolved tokens for OpenSCD and plugins
       *   --mdc-theme-*      legacy Material aliases; do not use, may be removed
       *   --md-*             Material Design 3 mappings for MD3 components
       *   --primary, --base03, ...  deprecated aliases; do not use in new code
       */
      :host, :root {
        /* Solarized palette. Dark mode inverts the base scale.
         * https://ethanschoonover.com/solarized/ */
        --oscd-base03: var(--oscd-theme-base03, light-dark(#002b36, #fdf6e3));
        --oscd-base02: var(--oscd-theme-base02, light-dark(#073642, #eee8d5));
        --oscd-base01: var(--oscd-theme-base01, light-dark(#586e75, #93a1a1));
        --oscd-base00: var(--oscd-theme-base00, light-dark(#657b83, #839496));
        --oscd-base0: var(--oscd-theme-base0, light-dark(#839496, #657b83));
        --oscd-base1: var(--oscd-theme-base1, light-dark(#93a1a1, #586e75));
        --oscd-base2: var(--oscd-theme-base2, light-dark(#eee8d5, #073642));
        --oscd-base3: var(--oscd-theme-base3, light-dark(#fdf6e3, #002b36));
        --oscd-yellow: var(--oscd-theme-yellow, #b58900);
        --oscd-orange: var(--oscd-theme-orange, #cb4b16);
        --oscd-red: var(--oscd-theme-red, #dc322f);
        --oscd-magenta: var(--oscd-theme-magenta, #d33682);
        --oscd-violet: var(--oscd-theme-violet, #6c71c4);
        --oscd-blue: var(--oscd-theme-blue, #268bd2);
        --oscd-cyan: var(--oscd-theme-cyan, #2aa198);
        --oscd-green: var(--oscd-theme-green, #859900);

        /* Semantic tokens.
         * Primary/secondary/error stay stable across light/dark unless the
         * matching --oscd-theme-* override uses light-dark(). Contrast colors
         * (--oscd-on-*) are independent so branding can keep a fixed primary
         * and still pick a readable ink (or let ink follow base2). */
        --oscd-primary: var(--oscd-theme-primary, var(--oscd-cyan));
        --oscd-secondary: var(--oscd-theme-secondary, var(--oscd-violet));
        --oscd-error: var(--oscd-theme-error, var(--oscd-red));
        --oscd-warning: var(--oscd-theme-warning, var(--oscd-yellow));
        --oscd-success: var(--oscd-theme-success, var(--oscd-green));
        --oscd-black: var(--oscd-theme-black, light-dark(#000000, #ffffff));
        --oscd-white: var(--oscd-theme-white, light-dark(#ffffff, #000000));
        --oscd-success: var(--oscd-theme-success, var(--oscd-green));
        --oscd-on-primary: var(--oscd-theme-on-primary, var(--oscd-base2));
        --oscd-on-secondary: var(--oscd-theme-on-secondary, var(--oscd-base2));
        --oscd-on-error: var(--oscd-theme-on-error, var(--oscd-base3));
        --oscd-on-warning: var(--oscd-theme-on-warning, #073642);
        --oscd-on-success: var(--oscd-theme-on-success, #073642);
        --oscd-nav-active: var(--oscd-theme-nav-active, var(--oscd-on-primary));

        --oscd-text-font: var(--oscd-theme-text-font, 'Roboto');
        --oscd-icon-font: var(--oscd-theme-icon-font, 'Material Icons');

        /* Legacy --mdc-theme-* aliases. Do not use in plugins or new code; consume
         * --oscd-* instead. These may be removed.
         * on-primary / on-secondary stay on --oscd-base2: existing plugins treat
         * them as a surface color, not as text on a primary background.
         * App bar and editor tabs must therefore set --oscd-on-* themselves
         * (see Layout.ts and menu-tabs.ts). */
        --mdc-theme-primary: var(--oscd-primary);
        --mdc-theme-secondary: var(--oscd-secondary);
        --mdc-theme-background: var(--oscd-base3);
        --mdc-theme-surface: var(--oscd-base3);
        --mdc-theme-on-primary: var(--oscd-base2);
        --mdc-theme-on-secondary: var(--oscd-base2);
        --mdc-theme-on-background: var(--oscd-base00);
        --mdc-theme-on-surface: var(--oscd-base00);
        --mdc-theme-text-primary-on-background: var(--oscd-base01);
        --mdc-theme-text-secondary-on-background: var(--oscd-base00);
        --mdc-theme-text-icon-on-background: var(--oscd-base00);
        --mdc-theme-error: var(--oscd-error);

        --mdc-button-disabled-ink-color: var(--oscd-base1);

        --mdc-drawer-heading-ink-color: var(--oscd-base00);

        --mdc-text-field-fill-color: var(--oscd-base2);
        --mdc-text-field-disabled-fill-color: var(--oscd-base3);
        --mdc-text-field-ink-color: var(--oscd-base00);
        --mdc-text-field-label-ink-color: var(--oscd-base00);

        --mdc-select-fill-color: var(--oscd-base2);
        --mdc-select-disabled-fill-color: var(--oscd-base3);
        --mdc-select-ink-color: var(--oscd-base00);

        --mdc-dialog-heading-ink-color: var(--oscd-base00);

        /* Unset --oscd-theme-icon-font keeps the historical MWC outlined default. */
        --mdc-icon-font: var(--oscd-theme-icon-font, 'Material Icons Outlined');

        /* Material Design 3 token mappings */
        --md-sys-color-primary: var(--oscd-primary);
        --md-sys-color-on-primary: var(--oscd-on-primary);
        --md-sys-color-secondary: var(--oscd-secondary);
        --md-sys-color-on-secondary: var(--oscd-on-secondary);
        --md-sys-color-secondary-container: var(--oscd-base2);
        --md-sys-color-surface: var(--oscd-base3);
        --md-sys-color-on-surface: var(--oscd-base00);
        --md-sys-color-surface-variant: var(--oscd-base3);
        --md-sys-color-on-surface-variant: var(--oscd-base00);
        --md-sys-color-surface-bright: var(--oscd-base2);
        --md-sys-color-surface-container: var(--oscd-base3);
        --md-sys-color-surface-container-high: var(--oscd-base3);
        --md-sys-color-surface-container-highest: var(--oscd-base3);
        --md-sys-color-outline-variant: var(--oscd-primary);
        --md-sys-color-scrim: #000000;
        --md-sys-color-error: var(--oscd-error);
        --md-sys-color-on-error: var(--oscd-on-error);
        /* --md-menu-item-selected-label-text-color: var(--oscd-base01); */
        --md-icon-button-disabled-icon-color: var(--oscd-base3);

        /* textfield */
        --md-filled-text-field-container-color: var(--oscd-base2);
        --md-filled-text-field-disabled-container-color: var(--oscd-base3);
        --md-filled-text-field-disabled-input-text-color: var(--oscd-base00);
        --md-filled-text-field-disabled-label-text-color: var(--oscd-base00);

        /* Deprecated aliases. Do not use in new code; they will be removed in a future release. */
        --primary: var(--oscd-primary);
        --secondary: var(--oscd-secondary);

        --base03: var(--oscd-base03);
        --base02: var(--oscd-base02);
        --base01: var(--oscd-base01);
        --base00: var(--oscd-base00);
        --base0: var(--oscd-base0);
        --base1: var(--oscd-base1);
        --base2: var(--oscd-base2);
        --base3: var(--oscd-base3);
        --yellow: var(--oscd-yellow);
        --orange: var(--oscd-orange);
        --red: var(--oscd-red);
        --magenta: var(--oscd-magenta);
        --violet: var(--oscd-violet);
        --blue: var(--oscd-blue);
        --cyan: var(--oscd-cyan);
        --green: var(--oscd-green);
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
//# sourceMappingURL=themes.js.map