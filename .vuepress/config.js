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
      { text: 'Front End', 
        items: [
          { text: 'HTML', 
            items: [
              { text: 'General', 'link': '/frontend/html/general/' },
              { text: 'Performance', 'link': '/frontend/html/performance' },
              { text: 'Canvas', 'link': '/frontend/html/canvas' }
            ]
          },
          { text: 'CSS', 
            items: [
              { text: 'Tips', 'link': '/frontend/css' }
            ]
          },
          { text: 'Javascript', 
            items: [
              { text: 'General', 'link': '/frontend/javascript/general/' },
              { text: 'Reference', 'link': '/frontend/javascript/reference/' },
              { text: 'Performance', 'link': '/frontend/javascript/performance/' }
            ]
          },
          { text: 'Framework', 
            items: [
              { text: 'Node', 'link': '/frontend/framework/node/' },
              { text: 'React', 'link': '/frontend/framework/react/' },
              { text: 'Vue', 'link': '/frontend/framework/vue/' },
              { text: 'Angular', 'link': '/frontend/framework/angular' }
            ]
          },
          { text: 'Library', 
            items: [
              { text: 'jQuery', 'link': '/frontend/javascript/library/jquery' },
              { text: 'D3', 'link': '/frontend/javascript/library/d3' }
            ]
          }
        ]
      },
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
              { text: 'Security', link: '/backend/network/security/' },
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
      '/frontend/html/general/': [
        '',
        '/frontend/html/general/dtd'
      ],
      '/frontend/javascript/general/': [
        '', 
        '/frontend/javascript/general/design-pattern'
      ], 
      '/frontend/javascript/reference/': [
        {
          title: 'WEB API', 
          children: [
            '/frontend/javascript/reference/web-api/dom',
            '/frontend/javascript/reference/web-api/element',
            '/frontend/javascript/reference/web-api/window',
            '/frontend/javascript/reference/web-api/xhr',
          ]
        }, 
        {
          title: 'Built In Object', 
          children: [
            '/frontend/javascript/reference/built-in-object/array',
            '/frontend/javascript/reference/built-in-object/function',
            '/frontend/javascript/reference/built-in-object/object',
            '/frontend/javascript/reference/built-in-object/promise'
          ]
        }, 
        {
          title: 'ECMA 6', 
          children: [
            '/frontend/javascript/reference/ecma6/syntax',
            '/frontend/javascript/reference/ecma6/iterator',
            '/frontend/javascript/reference/ecma6/generator',
            '/frontend/javascript/reference/ecma6/symbol',
            '/frontend/javascript/reference/ecma6/template-literals',
          ]
        }, 
        '/frontend/javascript/reference/global-object',
        '/frontend/javascript/reference/operator-and-expression'
      ],
      '/frontend/javascript/performance/': [
        '', 
        '/frontend/javascript/performance/event-loop',
        '/frontend/javascript/performance/memory-leak',
        '/frontend/javascript/performance/scope-closure',
        '/frontend/javascript/performance/netfunnel'
      ],
      '/frontend/framework/node/': [
        '', 
        '/frontend/framework/node/express',
        '/frontend/framework/node/http-transection'
      ],
      '/frontend/framework/react/': [
        '', 
        '/frontend/framework/react/lifecycle',
        '/frontend/framework/react/redux'
      ],
      '/frontend/framework/vue/': [
        '', 
        '/frontend/framework/vue/lifecycle',
        '/frontend/framework/vue/store'
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
            '/backend/language/java/general/enum'
          ]
        },
        {
          title: 'Reference Docs',
          children: [
            '/backend/language/java/reference/class',
            '/backend/language/java/reference/interface',
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
      '/backend/network/security/': [
        '', 
        '/backend/network/security/cookie'
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