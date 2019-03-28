module.exports = {
  title: 'VuePress 시작!',
  description: 'Hello World',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'About', 
        items: [
          { text: 'About Me', link: '/about/me' },
          { text: 'About Blog', link: '/about/blog' }
        ]
      }
    ]
  }
};