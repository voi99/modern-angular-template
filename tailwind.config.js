/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--mat-sys-primary)",
        "on-primary": "var(--mat-sys-on-primary)",
        "primary-container": "var(--mat-sys-primary-container)",
        "on-primary-container": "var(--mat-sys-on-primary-container)",
        "primary-fixed": "var(--mat-sys-primary-fixed)",
        "primary-fixed-dim": "var(--mat-sys-primary-fixed-dim)",
        "on-primary-fixed": "var(--mat-sys-on-primary-fixed)",
        "on-primary-fixed-variant": "var(--mat-sys-on-primary-fixed-variant)",

        secondary: "var(--mat-sys-secondary)",
        "on-secondary": "var(--mat-sys-on-secondary)",
        "secondary-container": "var(--mat-sys-secondary-container)",
        "on-secondary-container": "var(--mat-sys-on-secondary-container)",
        "secondary-fixed": "var(--mat-sys-secondary-fixed)",
        "secondary-fixed-dim": "var(--mat-sys-secondary-fixed-dim)",
        "on-secondary-fixed": "var(--mat-sys-on-secondary-fixed)",
        "on-secondary-fixed-variant": "var(--mat-sys-on-secondary-fixed-variant)",

        tertiary: "var(--mat-sys-tertiary)",
        "on-tertiary": "var(--mat-sys-on-tertiary)",
        "tertiary-container": "var(--mat-sys-tertiary-container)",
        "on-tertiary-container": "var(--mat-sys-on-tertiary-container)",
        "tertiary-fixed": "var(--mat-sys-tertiary-fixed)",
        "tertiary-fixed-dim": "var(--mat-sys-tertiary-fixed-dim)",
        "on-tertiary-fixed": "var(--mat-sys-on-tertiary-fixed)",
        "on-tertiary-fixed-variant": "var(--mat-sys-on-tertiary-fixed-variant)",

        error: "var(--mat-sys-error)",
        "on-error": "var(--mat-sys-on-error)",
        "error-container": "var(--mat-sys-error-container)",
        "on-error-container": "var(--mat-sys-on-error-container)",

        surface: "var(--mat-sys-surface)",
        "surface-dim": "var(--mat-sys-surface-dim)",
        "surface-bright": "var(--mat-sys-surface-bright)",
        "surface-container-lowest": "var(--mat-sys-surface-container-lowest)",
        "surface-container-low": "var(--mat-sys-surface-container-low)",
        "surface-container": "var(--mat-sys-surface-container)",
        "surface-container-high": "var(--mat-sys-surface-container-high)",
        "surface-container-highest": "var(--mat-sys-surface-container-highest)",
        "on-surface": "var(--mat-sys-on-surface)",
        "on-surface-variant": "var(--mat-sys-on-surface-variant)",

        outline: "var(--mat-sys-outline)",
        "outline-variant": "var(--mat-sys-outline-variant)",

        "inverse-surface": "var(--mat-sys-inverse-surface)",
        "inverse-on-surface": "var(--mat-sys-inverse-on-surface)",
        "inverse-primary": "var(--mat-sys-inverse-primary)",

        scrim: "var(--mat-sys-scrim)",
        shadow: "var(--mat-sys-shadow)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  darkMode: "selector",
};
