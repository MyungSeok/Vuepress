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
    sidebar: {
      '/about/': [
        '/about/install',
        '/about/me',
        '/about/syntax'
      ]
    },
    nav: [
      { text: 'About', link: '/about/',
        items: [
          {
            text: 'Group 1', 
            items: [
              { text: 'Installation', link: '/about/install'}
            ]
          },
          {
            text: 'Group 2', 
            items: [
              { text: 'About Me', link: '/about/me' },
              { text: 'Syntax', link: '/about/syntax' }
            ]
          }
        ]
      },
      { text: 'General', link: '/general/' },
      { text: 'Front End', link: '/frontend/' },
      { text: 'Back End', link: '/backend/' },
    ]
  }
};