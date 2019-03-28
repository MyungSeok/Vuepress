module.exports = {
  title: 'Sudals\'s Note',
  description: '정리공간',
  markdown: {
    lineNumbers: false
  },
  plugins: [
    '@vuepress/back-to-top'
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'About', 
        items: [
          { text: 'Installation', link: '/about/install'},
          { text: 'About Me', link: '/about/me' },
          { text: 'Syntax', link: '/about/syntax' }
        ]
      }
    ]
  }
};