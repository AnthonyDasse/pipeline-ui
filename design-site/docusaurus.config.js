const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    // ...
      plugins: ['@docusaurus/theme-live-codeblock',
                '@docusaurus/plugin-ideal-image'],
  

      themeConfig: {
        liveCodeBlock: {
          /**
           * The position of the live playground, above or under the editor
           * Possible values: "top" | "bottom"
           */
          playgroundPosition: 'bottom',
        },
          hideableSidebar: true,
      },
// ...
  title: 'Pipeline UI',
  tagline: 'Integrating Algorand and React',
  url: 'https://pipeline-ui.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'headline-design', // Usually your GitHub org/user name.
  projectName: 'pipeline-ui', // Usually your repo name.
  themeConfig: {

    algolia: {
    apiKey: 'b0405f4a756319e8958c9663f6894137', indexName: 'netlify_40588036-5b95-4358-a88a-e601e5db99e1_main_all',
      // Optional: see doc section below contextualSearch: true,
      // Optional: see doc section below 
      appId: 'MVTCBKVE16',
      // Optional: Algolia search parameters searchParameters: {},
      //... other Algolia params    
    },

    announcementBar: {
      id: 'announcementBar-1', // Increment on change
      content:
        '⭐️ If you like PIPELINE-UI, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/headline-design/pipeline-ui">GitHub</a>! ⭐',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    hideableSidebar: true,
      navbar: {
        title: 'PIPELINE-UI',
        logo: {
          alt: 'PIPELINE Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started-B',
            position: 'left',
            label: 'Getting Started',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: 'showcase', label: 'Algo Bridge', position: 'left'},
          {
            href: 'https://github.com/headline-design',
            label: 'GitHub',
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
                label: 'Getting Started',
                to: '/docs/getting-started-B',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/headline_crypto',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/headline-design',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HEADLINE INC. Built with ReactJS.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl:
              'https://github.com/headline-design/pipeline-ui/blob/main/design-site',
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              'https://headline.dev/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],
  };
