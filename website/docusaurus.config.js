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
    sidebarCollapsible: false,
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'React Native Peertube-iframe',
      logo: {
        alt: 'React Native Peertube-iframe Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/freeboub/react-native-peertube-iframe',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    googleAnalytics: {
      trackingID: 'UA-165995640-2',
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
