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
      { text: 'General', link: '/general/'},
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
              { text: 'Hibernate', link: '/backend/framework/hibernate' },
              { text: 'Etc', link: '/backend/framework/etc' }
            ]
          }, 
          {
            text: 'DevOps', 
            items: [
              { text: 'Docker', link: '/backend/devops/docker/' },
              { text: 'Kubernetes', link: '/backend/devops/kubernetes' },
              { text: 'Git', link: '/backend/devops/git' },
              { text: 'Etc', link: '/backend/devops/etc' }
            ]
          }, 
          {
            text: 'Big Data',
            items: [
              { text: 'DW', link: '/backend/bigdata/dw' },
              { text: 'Analytics', link: '/backend/bigdata/analytics' }
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
        {
          title: 'Data Structure',
          children: [
            '/general/data-structure/',
            '/general/data-structure/data-type',
            '/general/data-structure/stack',
            '/general/data-structure/tree',
            '/general/data-structure/queue'
          ]
        },
        {
          title: 'Algorithm', 
          children: [
            '/general/algorithm/security',
            '/general/algorithm/sort'
          ]
        },
        {
          title: 'Interview', 
          children: [
            '/general/interview/frontend',
            '/general/interview/backend',
          ]
        }, 
        '/general/tips'
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
      ],
      '/backend/framework/spring/': [
        '',
        {
          title: 'Fundamental',
          children: [
            '/backend/framework/spring/fundamental/aop',
            '/backend/framework/spring/fundamental/ioc',
            '/backend/framework/spring/fundamental/bean',
            '/backend/framework/spring/fundamental/dispatcherServlet'
          ]
        },
        '/backend/framework/spring/boot',
        '/backend/framework/spring/batch',
        '/backend/framework/spring/security'
      ],
      '/backend/devops/docker/': [
        '', 
        '/backend/devops/docker/cli'
      ]
    }
  }
};