module.exports = {
  title: '🌟 Sudal\'s gram',
  description: '정리공간',
  base: '/',
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
              { text: 'Security', link: '/backend/network/security' },
              { text: 'Etc', link: '/backend/network/etc' }
            ]
          }, 
          {
            text: 'Database', 
            items: [
              { text: 'Oracle', link: '/backend/database/oracle/' },
              { text: 'MSSQL', link: '/backend/database/mssql/' },
              { text: 'MySQL', link: '/backend/database/mysql/' },
              { text: 'Redis', link: '/backend/database/redis/' },
              { text: 'Etc', link: '/backend/database/etc' }
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
            '/backend/language/java/general/jpa',
            '/backend/language/java/general/ejb',
            '/backend/language/java/general/jvm',
            '/backend/language/java/general/gc',
            '/backend/language/java/general/oop',
            '/backend/language/java/general/solid',
          ]
        },
        {
          title: 'Reference Docs',
          children: [
            '/backend/language/java/reference/class',
            '/backend/language/java/reference/collection',
            '/backend/language/java/reference/functional',
            '/backend/language/java/reference/method',
            '/backend/language/java/reference/thread',
          ]
        },
        {
          title: 'Design Pattern', 
          children: [
            '/backend/language/java/design-pattern/',
            '/backend/language/java/design-pattern/strategy',
            '/backend/language/java/design-pattern/factory-method',
            '/backend/language/java/design-pattern/template-method'
          ]
        },
        {
          title: 'Tip', 
          children: [
            '/backend/language/java/tip/log4j',
            '/backend/language/java/tip/anti',
          ]
        },
      ],
      '/backend/server/linux/': [
        '', 
        '/backend/server/linux/shell-script'
      ],
      '/backend/server/nginx/': [
        '', 
        '/backend/server/nginx/install'
      ], 
      '/backend/network/http/': [
        '',
        '/backend/network/http/http2.0',
        '/backend/network/http/rest',
        '/backend/network/http/servlet'
      ]
    }
  }
};