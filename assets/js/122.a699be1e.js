(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{353:function(a,t,s){"use strict";s.r(t);var n=s(1),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"설치-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설치-installation","aria-hidden":"true"}},[a._v("#")]),a._v(" 설치 (Installation)")]),a._v(" "),s("h2",{attrs:{id:"docker-ubuntu-이미지를-받아서-설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-ubuntu-이미지를-받아서-설치","aria-hidden":"true"}},[a._v("#")]),a._v(" Docker Ubuntu 이미지를 받아서 설치")]),a._v(" "),s("p",[s("router-link",{attrs:{to:"/book/03.-back-end/06.-devops/docker/cli.html"}},[a._v("Docker")]),a._v(" 관련 내용과 중복될 수 있습니다.")],1),a._v(" "),s("ul",[s("li",[a._v("설치 환경\n"),s("ul",[s("li",[a._v("Ubuntu 18.0.4 LTS")])])])]),a._v(" "),s("h3",{attrs:{id:"설치-준비"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설치-준비","aria-hidden":"true"}},[a._v("#")]),a._v(" 설치 준비")]),a._v(" "),s("h4",{attrs:{id:"ubuntu-이미지-받기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-이미지-받기","aria-hidden":"true"}},[a._v("#")]),a._v(" ubuntu 이미지 받기")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker pull ubuntu:latest\n")])])]),s("h4",{attrs:{id:"container-생성하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#container-생성하기","aria-hidden":"true"}},[a._v("#")]),a._v(" Container 생성하기")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker run -i -t -d -p 9000:9000/tcp --name square-dev ubuntu /bin/bash\n")])])]),s("h4",{attrs:{id:"apt-get-업데이트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apt-get-업데이트","aria-hidden":"true"}},[a._v("#")]),a._v(" "),s("code",[a._v("apt-get")]),a._v(" 업데이트")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update\n")])])]),s("h4",{attrs:{id:"vim-설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vim-설치","aria-hidden":"true"}},[a._v("#")]),a._v(" "),s("code",[a._v("vim")]),a._v(" 설치")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v("\n")])])]),s("h3",{attrs:{id:"package-를-이용한-nginx-설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-를-이용한-nginx-설치","aria-hidden":"true"}},[a._v("#")]),a._v(" Package 를 이용한 nginx 설치")]),a._v(" "),s("h4",{attrs:{id:"nginx-다운로드-및-설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-다운로드-및-설치","aria-hidden":"true"}},[a._v("#")]),a._v(" "),s("code",[a._v("nginx")]),a._v(" 다운로드 및 설치")]),a._v(" "),s("p",[a._v("설치 여부를 묻는게 귀찮으니 "),s("code",[a._v("-y")]),a._v(" 옵션을 준다.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nginx -y\n")])])]),s("h4",{attrs:{id:"설치-확인"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설치-확인","aria-hidden":"true"}},[a._v("#")]),a._v(" 설치 확인")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ nginx -v\n\nnginx version: nginx/1.14.0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("                                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# version")]),a._v("\n\n$ nginx -t\n\nnginx: the configuration "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" /etc/nginx/nginx.conf syntax is ok      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# config file 내용 (문법) 검사")]),a._v("\nnginx: configuration "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" /etc/nginx/nginx.conf "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("test")]),a._v(" is successful    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# config file 테스트 결과")]),a._v("\n")])])]),s("h4",{attrs:{id:"nginx-상태"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-상태","aria-hidden":"true"}},[a._v("#")]),a._v(" nginx 상태")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" nginx status\n")])])]),s("h4",{attrs:{id:"nginx-중지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-중지","aria-hidden":"true"}},[a._v("#")]),a._v(" nginx 중지")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" nginx stop\n")])])]),s("h4",{attrs:{id:"nginx-기동"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-기동","aria-hidden":"true"}},[a._v("#")]),a._v(" nginx 기동")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" nginx start\n")])])])])},[],!1,null,null,null);t.default=e.exports}}]);