
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zent Cash Docs',
  tagline: 'Documentation for Zent Cash.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.zent.cash',
  baseUrl: '/',
  organizationName: 'ZentCashFoundation', 
  projectName: 'zentcash-docs', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/ZentCashFoundation/zentcash-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          editUrl:
            'https://github.com/ZentCashFoundation/zentcash-docs/tree/main/',
          
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Zent Cash Docs',
        logo: {
          alt: 'Zent Cash Docs',
          src: 'img/zentcash_logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'learnSidebar',
            position: 'left',
            label: 'Learn',
          },
          {
            type: 'docSidebar',
            sidebarId: 'useSidebar',
            position: 'left',
            label: 'Use',
          },
          {
            type: 'docSidebar',
            sidebarId: 'mineSidebar',
            position: 'left',
            label: 'Mine',
          },
          {
            type: 'docSidebar',
            sidebarId: 'buildSidebar',
            position: 'left',
            label: 'Build',
          },
          {
            type: 'docSidebar',
            sidebarId: 'exchangeSidebar',
            position: 'left',
            label: 'Exchange',
          },

        
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/ZentCashFoundation/zentcash-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Learn',
                to: '/docs/learn/about-zent-cash',
              },
              {
                label: 'Use',
                to: '/docs/use/getting-started',
              },
              {
                label: 'Mine',
                to: '/docs/mine/mining',
              },
              {
                label: 'Build',
                to: '/docs/build/building-with-zent-cash',
              },
              {
                label: 'Exchanges',
                to: '/docs/exchange/exchanges',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Website',
                href: 'https://www.zent.cash',
              },
              {
                label: 'Download',
                href: 'https://www.zent.cash/#download',
              },
              {
                label: 'Explorer',
                href: 'https://explorer.zent.cash',
              },
              {
                label: 'Blog',
                href: 'https://docs.zent.cash/blog',
              },
              {
                label: 'Github',
                href: 'https://github.com/ZentCashFoundation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/ZentCashGlobal',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/tfaUE2G',
              },
              {
                label: 'X',
                href: 'https://x.com/ZentCash',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCRF0KXM-0UbovyGLpusYjVA?sub_confirmation=1',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/Zent-Cash-Foundation-108069958362688',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'MiningPoolStats',
                href: 'https://miningpoolstats.stream/zentcash',
              },  
              {
                label: 'CoinMarketCap',
                href: 'https://coinmarketcap.com/currencies/zent-cash/',
              },
              {
                label: 'CoinPaprika',
                href: 'https://coinpaprika.com/coin/ztc-zent-cash/',
              },
              {
                label: 'BitDegree',
                href: 'https://www.bitdegree.org/cryptocurrency-prices/zent-cash-ztc-price',
              },
              {
                label: 'BitScreener',
                href: 'https://bitscreener.com/coins/zent-cash',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zent Cash`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
