module.exports = {
  title: '🌟 Sudal\'s gram',
  description: '정리공간',
  markdown: {
    lineNumbers: false
  },
  plugins: [
    '@vuepress/back-to-top',
    'flowchart'
  ],
  themeConfig: {
    nav: [
      { text: 'About', link: '/about/'},
      { text: 'General', link: '/general/' },
      { text: 'Front End', link: '/frontend/' },
      { text: 'Back End', 
        items: [
          {
            text: 'Language', 
            items: [
              { text: 'JAVA', link: '/backend/language/java/' },
              { text: 'PHP', link: '/backend/language/php/' },
            ]
          }, 
          {
            text: 'Server', 
            items: [
              { text: 'Linux', link: '/backend/server/linux/' },
              { text: 'NGINX', link: '/backend/server/nginx/' },
            ]
          }, 
          {
            text: 'Network', 
            items: [
              { text: 'HTTP', link: '/backend/network/http/' },
            ]
          }, 
          {
            text: 'Database', 
            items: [
              { text: 'Oracle', link: '/backend/database/oracle/' },
              { text: 'MSSQL', link: '/backend/database/mssql/' },
              { text: 'MySQL', link: '/backend/database/mysql/' },
              { text: 'Redis', link: '/backend/database/redis/' },
            ]
          }, 
          {
            text: 'Framework', 
            items: [
              { text: 'Spring', link: '/backend/framework/spring/' },
            ]
          }, 
          {
            text: 'DevOps', 
            items: [
              { text: 'Docker', link: '/backend/devops/docker/' },
              { text: 'Kubernetes', link: '/backend/devops/kubernetes/' },
              { text: 'Git', link: '/backend/devops/git/' },
            ]
          }, 
          {
            text: 'Big Data',
            items: [
              { text: 'Big Data', link: '/backend/bigdata/' },
            ]
          }, 
        ]
      },
    ],
    sidebar: {
      '/about/': [
        '',
        '/about/install',
        '/about/syntax'
      ], 
      '/general/': [
        '', 
        '/general/architecture/',
        '/general/data-structure/'
      ], 
      '/frontend/': [

      ], 
      '/backend/language/java/': [
        {
          title: 'General',
          children: [
            '/backend/language/java/general/oop',
            '/backend/language/java/general/solid'
          ]
        },
        {
          title: 'Design Pattern', 
          children: [
            '/backend/language/java/design-pattern/',
            '/backend/language/java/design-pattern/strategy'
          ]
        },
        '/backend/language/java/tip'
      ],
    }
  }
};