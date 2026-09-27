// @ts-check
import {darkCode, lightCode} from './src/prism-themes.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cinefin',
  tagline: 'Self-hosted home cinema automation and playout',
  favicon: 'img/favicon.png',

  url: 'https://docs.cinefin.dev',
  baseUrl: '/',
  // Keep /page/ URLs (as the old MkDocs site used) so existing links resolve.
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    mermaid: true,
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },

  i18n: {defaultLocale: 'en', locales: ['en']},

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Docs-only site: the docs are served from the root.
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/cinefin/cinefin-docs/edit/main/',
        },
        blog: false,
        theme: {customCss: ['./src/css/fonts.css', './src/css/custom.css']},
      }),
    ],
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({hashed: true, docsRouteBasePath: '/', indexBlog: false}),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Dark is the room; light is the spec's "cool paper" exposure.
      colorMode: {defaultMode: 'dark', disableSwitch: false, respectPrefersColorScheme: false},
      // The cinefin.dev bar: mark + wordmark, then the site links.
      navbar: {
        title: 'Cinefin',
        logo: {
          alt: '',
          src: 'img/cinefin-mark-light.png',
          srcDark: 'img/cinefin-mark-dark.png',
          href: 'https://cinefin.dev/',
          target: '_self',
          width: 25,
          height: 34,
        },
        items: [
          {href: 'https://cinefin.dev/#features', label: 'Features', position: 'right', target: '_self'},
          {href: 'https://cinefin.dev/#screenshots', label: 'Screenshots', position: 'right', target: '_self'},
          {href: 'https://cinefin.dev/download.html', label: 'Download', position: 'right', target: '_self'},
          {to: '/', label: 'Docs', position: 'right', activeBaseRegex: '.*'},
          {type: 'search', position: 'right'},
        ],
      },
      prism: {
        theme: lightCode,
        darkTheme: darkCode,
        additionalLanguages: ['bash', 'toml'],
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
        options: {fontFamily: 'Archivo, sans-serif'},
      },
    }),
};

export default config;
