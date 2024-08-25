module.exports = {
  title: 'React Native Peertube iframe',
  tagline:
    'A simple, light weight wrapper around the peertube iframe javascript API for react native',
  url: 'https://freeboub.github.io',
  baseUrl: '/react-native-peertube-iframe/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'freeboub',
  projectName: 'react-native-peertube-iframe',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'React Native Peertube-iframe',
      logo: {
        alt: 'React Native Peertube-iframe Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/freeboub/react-native-peertube-iframe',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
