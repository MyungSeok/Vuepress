module.exports = {
  title: 'Sudals\'s gram',
  description: '정리공간',
  markdown: {
    lineNumbers: false
  },
  plugins: [
    '@vuepress/back-to-top'
  ],
  themeConfig: {
    nav: [
      { text: 'About', link: '/about/'},
      { text: 'General', link: '/general/' },
      { text: 'Front End', link: '/frontend/' },
      { text: 'Back End', link: '/backend/' },
    ],
    sidebar: {
      '/about/': [
        '',
        '/about/install',
        '/about/syntax'
      ]
    }
  }
};