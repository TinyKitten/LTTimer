const meta = {
  title: 'LTTimer',
  description: 'Lightning Talk time keeper',
  themeColor: '#212121',
  url: 'https://lttimer.tinykitten.me/',
  twitter: '@tinykitten8',
};

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: meta.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: meta.description },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: meta.themeColor },
      // Add to home screen
      // for Safari on iOS
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'LTTimer' },
      // for Windows
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
      { name: 'msapplication-TileColor', content: '#000000' },
    ],
    noscript: [
      {
        innerHTML:
          '当サイトを閲覧するためには、JavaScriptを有効にしていただく必要があります。',
        body: true,
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png',
      },
      // Safari icon
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png',
      },
    ],
  },
  modules: ['@nuxtjs/pwa'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: meta.themeColor },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config) {
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
      config.module.rules.push({
        test: /\.mp3$/i,
        loader: 'url-loader',
      });
    },
  },
  meta: {
    name: meta.title,
    author: meta.title,
    description: meta.description,
    theme_color: meta.themeColor,
    lang: 'ja',
    twitterCard: 'summary',
    twitterSite: meta.twitter,
    twitterCreator: meta.twitter,
    ogHost: meta.url,
  },
  manifest: {
    name: meta.title,
    short_name: meta.title,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    description: meta.description,
    lang: 'ja',
  },
  plugins: [{ src: '~plugins/ga.js', ssr: false }],
};
