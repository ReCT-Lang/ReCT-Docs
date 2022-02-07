// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ReCT',
  tagline: 'An easy and quick programming languae',
  url: 'https://docs.rect.ml',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ReCT-Lang', // Usually your GitHub org/user name.
  projectName: 'ReCT-Docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ReCT-Lang/ReCT-Docs/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ReCT',
        logo: {
          alt: 'ReCT Logo',
          src: 'https://rect.ml/static/images/rect.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'tutorial/installation',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'doc',
            docId: 'documentation',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://rect.ml',
            label: 'ReCT Homepage',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/tutorial/installation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/cF8ddMezRP',
              },
              {
                label: 'Reddit',
                href: 'https://reddit.com/r/rect',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'ReCT Homepage',
                to: 'https://rect.ml',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ByteSpace/ReCT.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
