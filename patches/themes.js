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
       *   --oscd-theme-branding  optional brand id for plugin style queries
       *   --oscd-*           resolved tokens for OpenSCD and plugins
       *   --mdc-theme-*      legacy Material aliases; do not use, may be removed
       *   --md-*             Material Design 3 mappings for MD3 components
       *   --primary, --base03, ...  deprecated aliases; do not use in new code
       */
      :host, :root {

        /* Gray-Values should be fixed values */
        --oscd-gray-10: var(--oscd-theme-gray-10, #fdf6e3); /* lightest */
        --oscd-gray-20: var(--oscd-theme-gray-20, #eee8d5);
        --oscd-gray-30: var(--oscd-theme-gray-30, #93a1a1);
        --oscd-gray-40: var(--oscd-theme-gray-40, #839496);
        --oscd-gray-50: var(--oscd-theme-gray-50, color-mix(in oklab, #839496 50%, #657b83));  /* #74888c */
        --oscd-gray-60: var(--oscd-theme-gray-60, #657b83);
        --oscd-gray-70: var(--oscd-theme-gray-70, #586e75);
        --oscd-gray-80: var(--oscd-theme-gray-80, #073642);
        --oscd-gray-90: var(--oscd-theme-gray-90, #002b36); /* darkest */
        
        /* darkest black and lightes white. Fixed values. */
        --oscd-white: var(--oscd-theme-white, #ffffff);
        --oscd-black: var(--oscd-theme-black, color-mix(in oklab, var(--oscd-gray-90) 50%, #000)); /* little darker then darkest gray */
        /* paper = lightest ground, ink = darkest mark. Values swap in dark mode. */
        --oscd-paper: var(--oscd-theme-paper, light-dark(var(--oscd-white), var(--oscd-black)));
        --oscd-ink: var(--oscd-theme-ink, light-dark(var(--oscd-black), var(--oscd-white)));
        
        /* Solarized palette. Dark mode inverts the base scale.
         * https://ethanschoonover.com/solarized/ */
        --oscd-base03: var(--oscd-theme-base03, light-dark(var(--oscd-gray-90), var(--oscd-gray-10)));
        --oscd-base02: var(--oscd-theme-base02, light-dark(var(--oscd-gray-80), var(--oscd-gray-20)));
        --oscd-base01: var(--oscd-theme-base01, light-dark(var(--oscd-gray-70), var(--oscd-gray-30)));
        --oscd-base00: var(--oscd-theme-base00, light-dark(var(--oscd-gray-60), var(--oscd-gray-40)));
        --oscd-base0: var(--oscd-theme-base0, light-dark(var(--oscd-gray-40), var(--oscd-gray-60)));
        --oscd-base1: var(--oscd-theme-base1, light-dark(var(--oscd-gray-30), var(--oscd-gray-70)));
        --oscd-base2: var(--oscd-theme-base2, light-dark(var(--oscd-gray-20), var(--oscd-gray-80)));
        --oscd-base3: var(--oscd-theme-base3, light-dark(var(--oscd-gray-10), var(--oscd-gray-90)));
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
        --oscd-on-primary: var(--oscd-theme-on-primary, var(--oscd-gray-20));
        --oscd-primary-adaptive: var(--oscd-theme-primary-adaptive, var(--oscd-primary));
        --oscd-on-primary-adaptive: var(--oscd-theme-on-primary-adaptive, var(--oscd-on-primary));
        --oscd-secondary: var(--oscd-theme-secondary, var(--oscd-violet));
        --oscd-on-secondary: var(--oscd-theme-on-secondary, var(--oscd-gray-20));
        --oscd-secondary-adaptive: var(--oscd-theme-secondary-adaptive, var(--oscd-secondary));
        --oscd-on-secondary-adaptive: var(--oscd-theme-on-secondary-adaptive, var(--oscd-on-secondary));
        --oscd-nav-active: var(--oscd-theme-nav-active, var(--oscd-on-primary));

        --oscd-error: var(--oscd-theme-error, #ff3d47);
        --oscd-on-error: var(--oscd-theme-on-error, var(--oscd-gray-90));
        --oscd-warning: var(--oscd-theme-warning, #ffcc17);
        --oscd-on-warning: var(--oscd-theme-on-warning, var(--oscd-gray-90));
        --oscd-success: var(--oscd-theme-success, #239c5b);
        --oscd-on-success: var(--oscd-theme-on-success, var(--oscd-gray-90));

        --oscd-text-font: var(--oscd-theme-text-font, 'Roboto');
        --oscd-icon-font: var(--oscd-theme-icon-font, 'Material Icons');


        /* Legacy --mdc-theme-* and --md-sys-* aliases. Do not use in plugins or new code; consume
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
        --md-sys-color-on-primary: var(--oscd-base3);
        --md-sys-color-secondary: var(--oscd-secondary);
        --md-sys-color-on-secondary: var(--oscd-base3);
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
        --md-sys-color-on-error: var(--oscd-base3);
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