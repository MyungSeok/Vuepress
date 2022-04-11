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
              { text: 'Angular', 'link': '/frontend/framework/angular' },
            ]
          },
          { text: 'Library', 
            items: [
              { text: 'jQuery', 'link': '/frontend/library/jquery' },
              { text: 'D3', 'link': '/frontend/library/d3' },
              { text: 'THREE', 'link': '/frontend/library/three' },
              { text: 'Graph QL', link: '/frontend/library/graphql' }
            ]
          }, 
          { text: 'Etc', 
            items: [
              { text: 'Flux', link: '/frontend/etc/flux' },
              { text: 'Graph QL', link: '/frontend/etc/graphql' }
            ]
          }
        ]
      },
      { text: 'Back End', 
        items: [
          {
            text: 'Language', 
            items: [
              { text: 'Java', link: '/backend/language/java/basic/' },
              { text: 'Kotlin', link: '/backend/language/kotlin/' },
              { text: 'PHP', link: '/backend/language/php/' },
            ]
          }, 
          {
            text: 'Server', 
            items: [
              { text: 'Linux', link: '/backend/server/linux/' },
              { text: 'NGINX', link: '/backend/server/nginx/' },
              { text: 'Tomcat', link: '/backend/server/tomcat/' }
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
              { text: 'JPA', link: '/backend/framework/jpa/' },
              { text: 'Security', link: '/backend/framework/security/' },
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
          { text: 'Effective Kotlin',  link: '/books/effective_kotlin/chapter_1' }, 
          { text: '자바스크립트 성능 최적화',  link: '/books/js_high_performance' }, 
          { text: '클린 아키텍처',  link: '/books/clean_architecture' },
          { text: '엘라스틱서치 실무 가이드', link: '/books/elastic_search_guide/chapter_1' },
          { text: '아카를 이용한 마이크로서비스 개발', link: '/books/mastering_akka/'},
          { text: 'Programming in Scala 4/e', link: '/books/programming_in_scala/'}
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
        '/general/dictionary',
        {
          title: 'Algorithm', 
          children: [
            '/general/algorithm/security',
            '/general/algorithm/sort', 
            '/general/algorithm/greedy', 
            {
              title: 'Graph', 
              children: [
                '/general/algorithm/graph/dfs',
                '/general/algorithm/graph/bfs'
              ]
            },
            '/general/algorithm/prime'
          ]
        },
        {
          title: 'Interview', 
          children: [
            '/general/interview/frontend/',
            '/general/interview/backend/',
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
            '/frontend/javascript/reference/web-api/io',
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
        'http-transection',
        'pm2'
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
          title: 'Data Structure',
          children: [
            '/backend/language/java/data-structure/array',
            {
              title: 'Java Collection Framework', 
              children: [
                '/backend/language/java/data-structure/jcf/',
                '/backend/language/java/data-structure/jcf/list',
                '/backend/language/java/data-structure/jcf/set',
                '/backend/language/java/data-structure/jcf/map',
              ]
            }
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
            '/backend/language/java/expert/ejb'
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
                '/backend/language/java/reference/clazz/string',
                '/backend/language/java/reference/clazz/hashMap',
                '/backend/language/java/reference/clazz/date'
              ]
            },
            '/backend/language/java/reference/interface',
            '/backend/language/java/reference/operation',
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
            {
              title: 'Creational',
              children: [
                '/backend/language/java/design-pattern/creational/factory-method',
                '/backend/language/java/design-pattern/creational/singleton'
              ]
            },
            {
              title: 'Structural',
              children: [
                '/backend/language/java/design-pattern/structural/adapter',
                '/backend/language/java/design-pattern/structural/decorator',
                '/backend/language/java/design-pattern/structural/proxy',
                '/backend/language/java/design-pattern/structural/facade'
              ]
            },
            {
              title: 'Behavioral',
              children: [
                '/backend/language/java/design-pattern/behavioral/template-method',
                '/backend/language/java/design-pattern/behavioral/strategy',
                '/backend/language/java/design-pattern/behavioral/visitor',
                '/backend/language/java/design-pattern/behavioral/state', 
                '/backend/language/java/design-pattern/behavioral/command'
              ]
            },
            '/backend/language/java/design-pattern/refactoring'
          ]
        },
        {
          title: 'Modern Java', 
          children: [
            '/backend/language/java/modern-java/',
            '/backend/language/java/modern-java/lambda',
            '/backend/language/java/modern-java/functional',
            '/backend/language/java/modern-java/method_reference',
            '/backend/language/java/modern-java/stream',
            '/backend/language/java/modern-java/optional'
          ]
        },
        {
          title: 'Reactive',
          children: [
            '/backend/language/java/reactive/'
          ]
        },
        {
          title: 'Tip', 
          children: [
            '/backend/language/java/tip/log4j',
            '/backend/language/java/tip/junit',
            '/backend/language/java/tip/anti',
            '/backend/language/java/tip/gson_adapter'
          ]
        },
      ],
      '/backend/language/kotlin/': [
        {
          title: 'Basic',
          children: [
            '/backend/language/kotlin/basic/nested_classes'
          ]
        }, 
        {
          title: 'Reactor3',
          children: [
            '/backend/language/kotlin/reactor3/reactive_programming_with_reactor_3'
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
      '/backend/server/tomcat/': [
        '', 
        'options'
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
            '/backend/framework/spring/fundamental/di',
            '/backend/framework/spring/fundamental/aop',
            '/backend/framework/spring/fundamental/ioc',
            '/backend/framework/spring/fundamental/bean',
            '/backend/framework/spring/fundamental/dispatcherServlet'
            
          ]
        },
        {
          title: 'Build', 
          children: [
            '/backend/framework/spring/build/gradle'
          ]  
        },
        {
          title: 'View Template',
          children: [
            '/backend/framework/spring/template/',
            '/backend/framework/spring/template/jstl'
          ]
        },
        {
          title: 'Reference',
          children: [
            '/backend/framework/spring/reference/resolvable_type',
            '/backend/framework/spring/reference/transaction',
            '/backend/framework/spring/reference/lombok',
            '/backend/framework/spring/reference/actuator'
          ]
        },
        '/backend/framework/spring/boot',
        '/backend/framework/spring/batch',
        '/backend/framework/spring/tip'
      ],
      '/backend/framework/jpa/': [
        '', 
        '/backend/framework/jpa/hibernate',
        '/backend/framework/jpa/jpql',
        '/backend/framework/jpa/querydsl'
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
        '/books/effective_java_3rd/chapter_11',
        '/books/effective_java_3rd/chapter_12'
      ], 
      '/books/effective_kotlin': [
        '/books/effective_kotlin/chapter_1',
        '/books/effective_kotlin/chapter_2',
        '/books/effective_kotlin/chapter_3'
      ],
      '/books/elastic_search_guide/': [
        '/books/elastic_search_guide/chapter_1',
        '/books/elastic_search_guide/chapter_2',
        '/books/elastic_search_guide/chapter_3'
      ],
      '/books/mastering_akka/': [
        '',
        'chapter_1'
      ],
      '/books/programming_in_scala/': [
        '',
        '1week',
        '2week',
        '3week',
        '4week',
        '5week'
      ]
    }
  }
};