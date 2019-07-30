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
    logo: '/img/A049.png',
    search: true,
    searchMaxSuggestions: 10,
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
              { text: 'D3', 'link': '/frontend/javascript/library/d3' },
              { text: 'THREE', 'link': '/frontend/javascript/library/three' }
            ]
          }
        ]
      },
      { text: 'Back End', 
        items: [
          {
            text: 'Language', 
            items: [
              { text: 'JAVA', link: '/backend/language/java/basic/' },
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
      { text: 'Books', 
        items: [
          { text: 'Effective Java 3rd',  link: '/books/effective_java_3rd/chapter_1' }, 
          { text: '자바스크립트 성능 최적화',  link: '/books/js_high_performance' }
        ]
      }
    ],
    sidebar: {
      '/about/': [
        '',
        'install',
        'syntax',
        'study'
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
        '/general/uml',
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
        'event-loop',
        'memory-leak',
        'scope-closure',
        'netfunnel'
      ],
      '/frontend/framework/node/': [
        '', 
        'express',
        'http-transection'
      ],
      '/frontend/framework/react/': [
        '', 
        'lifecycle',
        'redux',
        'immutable',
        'saga',
        'next',
        'tips'
      ],
      '/frontend/framework/vue/': [
        '', 
        'lifecycle',
        'store',
        'directives'
      ],
      '/backend/language/java/': [
        {
          title: 'Basic', 
          children: [
            '/backend/language/java/basic/',
            '/backend/language/java/basic/access_modifier',
            '/backend/language/java/basic/boxing_unboxing',
          ]
        },
        {
          title: 'Essential',
          children: [
            '/backend/language/java/essential/reflection',
            {
              title: 'Generics', 
              children: [
                '/backend/language/java/essential/generic/',
                '/backend/language/java/essential/generic/type',
                '/backend/language/java/essential/generic/method',
                '/backend/language/java/essential/generic/bounded_type_parameters',
                '/backend/language/java/essential/generic/pecs',
                '/backend/language/java/essential/generic/wildcards',
                '/backend/language/java/essential/generic/typetoken'
              ]
            }, 
            '/backend/language/java/essential/serialize',
            '/backend/language/java/essential/intersection',
            '/backend/language/java/essential/theadlocal'
          ]
        },
        {
          title: 'Expert', 
          children: [
            '/backend/language/java/expert/gc',
            '/backend/language/java/expert/jvm',
            '/backend/language/java/expert/jpa',
            '/backend/language/java/expert/ejb',
          ]
        },
        {
          title: 'OOP', 
          children: [
            '/backend/language/java/oop/',
            '/backend/language/java/oop/inheritance',
            '/backend/language/java/oop/encapsulation',
            '/backend/language/java/oop/polymorphism',
            '/backend/language/java/oop/solid',
          ]
        },
        {
          title: 'Reference Docs',
          children: [
            {
              title: 'Class', 
              children: [
                '/backend/language/java/reference/clazz/immutable',
                '/backend/language/java/reference/clazz/exception',
                '/backend/language/java/reference/clazz/string'
              ]
            },
            '/backend/language/java/reference/interface',
            '/backend/language/java/reference/operation',
            '/backend/language/java/reference/collection',
            '/backend/language/java/reference/enum',
            '/backend/language/java/reference/method',
            '/backend/language/java/reference/thread',
            '/backend/language/java/reference/annotation'
          ]
        },
        {
          title: 'Design Pattern', 
          children: [
            '/backend/language/java/design-pattern/',
            '/backend/language/java/design-pattern/singleton',
            '/backend/language/java/design-pattern/strategy',
            '/backend/language/java/design-pattern/factory-method',
            '/backend/language/java/design-pattern/template-method'
          ]
        },
        {
          title: 'Modern Java', 
          children: [
            '/backend/language/java/modern-java/',
            '/backend/language/java/modern-java/lamda',
            '/backend/language/java/modern-java/functional',
            '/backend/language/java/modern-java/method_reference',
            '/backend/language/java/modern-java/stream',
            '/backend/language/java/modern-java/optional'
          ]
        },
        {
          title: 'Tip', 
          children: [
            '/backend/language/java/tip/log4j',
            '/backend/language/java/tip/anti',
            '/backend/language/java/tip/gson_adapter'
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
        {
          title: 'Reference',
          children: [
            '/backend/framework/spring/reference/resolvable_type'
          ]
        },
        '/backend/framework/spring/boot',
        '/backend/framework/spring/batch',
        '/backend/framework/spring/security'
      ],
      '/backend/devops/docker/': [
        '', 
        '/backend/devops/docker/cli'
      ], 
      '/books/effective_java_3rd/': [
        '/books/effective_java_3rd/chapter_1',
        '/books/effective_java_3rd/chapter_2',
        '/books/effective_java_3rd/chapter_3',
        '/books/effective_java_3rd/chapter_4',
        '/books/effective_java_3rd/chapter_5',
        '/books/effective_java_3rd/chapter_6',
        '/books/effective_java_3rd/chapter_7',
        '/books/effective_java_3rd/chapter_8',
        '/books/effective_java_3rd/chapter_9',
        '/books/effective_java_3rd/chapter_10',
        '/books/effective_java_3rd/chapter_11'
      ]
    }
  }
};