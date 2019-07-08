(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{336:function(a,s,t){"use strict";t.r(s);var n=t(1),e=Object(n.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),t("h2",{attrs:{id:"docker-ubuntu-이미지를-받아서-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-ubuntu-이미지를-받아서-설치","aria-hidden":"true"}},[a._v("#")]),a._v(" Docker Ubuntu 이미지를 받아서 설치")]),a._v(" "),t("p",[t("router-link",{attrs:{to:"/book/03.-back-end/06.-devops/docker/cli.html"}},[a._v("Docker")]),a._v(" 관련 내용과 중복될 수 있습니다.")],1),a._v(" "),t("ul",[t("li",[a._v("설치 환경\n"),t("ul",[t("li",[a._v("Ubuntu 18.0.4 LTS")])])])]),a._v(" "),t("h3",{attrs:{id:"설치-준비"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#설치-준비","aria-hidden":"true"}},[a._v("#")]),a._v(" 설치 준비")]),a._v(" "),t("h4",{attrs:{id:"ubuntu-이미지-받기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-이미지-받기","aria-hidden":"true"}},[a._v("#")]),a._v(" ubuntu 이미지 받기")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker pull ubuntu:latest\n")])])]),t("h4",{attrs:{id:"container-생성하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#container-생성하기","aria-hidden":"true"}},[a._v("#")]),a._v(" Container 생성하기")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker run -i -t -d -p 9000:9000/tcp --name square-dev ubuntu /bin/bash\n")])])]),t("h4",{attrs:{id:"apt-get-업데이트"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apt-get-업데이트","aria-hidden":"true"}},[a._v("#")]),a._v(" "),t("code",[a._v("apt-get")]),a._v(" 업데이트")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update\n")])])]),t("h4",{attrs:{id:"vim-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim-설치","aria-hidden":"true"}},[a._v("#")]),a._v(" "),t("code",[a._v("vim")]),a._v(" 설치")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v("\n")])])]),t("h3",{attrs:{id:"package-를-이용한-nginx-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-를-이용한-nginx-설치","aria-hidden":"true"}},[a._v("#")]),a._v(" Package 를 이용한 nginx 설치")]),a._v(" "),t("h4",{attrs:{id:"nginx-다운로드-및-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-다운로드-및-설치","aria-hidden":"true"}},[a._v("#")]),a._v(" "),t("code",[a._v("nginx")]),a._v(" 다운로드 및 설치")]),a._v(" "),t("p",[a._v("설치 여부를 묻는게 귀찮으니 "),t("code",[a._v("-y")]),a._v(" 옵션을 준다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nginx -y\n")])])]),t("h4",{attrs:{id:"설치-확인"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#설치-확인","aria-hidden":"true"}},[a._v("#")]),a._v(" 설치 확인")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ nginx -v\n\nnginx version: nginx/1.14.0 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("                                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# version")]),a._v("\n\n$ nginx -t\n\nnginx: the configuration "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" /etc/nginx/nginx.conf syntax is ok      "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# config file 내용 (문법) 검사")]),a._v("\nnginx: configuration "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" /etc/nginx/nginx.conf "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("test")]),a._v(" is successful    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# config file 테스트 결과")]),a._v("\n")])])]),t("h4",{attrs:{id:"nginx-상태"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-상태","aria-hidden":"true"}},[a._v("#")]),a._v(" nginx 상태")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" nginx status\n")])])]),t("h4",{attrs:{id:"nginx-중지"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-중지","aria-hidden":"true"}},[a._v("#")]),a._v(" nginx 중지")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" nginx stop\n")])])]),t("h4",{attrs:{id:"nginx-기동"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-기동","aria-hidden":"true"}},[a._v("#")]),a._v(" nginx 기동")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" nginx start\n")])])]),t("h2",{attrs:{id:"service-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-start","aria-hidden":"true"}},[a._v("#")]),a._v(" Service Start")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" nginx start\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl start nginx\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" /etc/init.d/nginx start\n")])])]),t("h2",{attrs:{id:"service-restart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-restart","aria-hidden":"true"}},[a._v("#")]),a._v(" Service Restart")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" nginx restart\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl restart nginx\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" /etc/init.d/nginx restart\n")])])]),t("h2",{attrs:{id:"service-stop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-stop","aria-hidden":"true"}},[a._v("#")]),a._v(" Service Stop")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" nginx stop\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl stop nginx\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" /etc/init.d/nginx stop\n")])])]),t("h2",{attrs:{id:"service-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-status","aria-hidden":"true"}},[a._v("#")]),a._v(" Service Status")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" nginx status\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl status nginx\n")])])]),t("h2",{attrs:{id:"service-status-reload"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-status-reload","aria-hidden":"true"}},[a._v("#")]),a._v(" Service Status Reload")]),a._v(" "),t("ul",[t("li",[a._v("설정파일을 변경한 후 적용시 사용")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" nginx reload\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl reload nginx\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" nginx -s reload\n")])])]),t("h2",{attrs:{id:"configuration-check"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-check","aria-hidden":"true"}},[a._v("#")]),a._v(" Configuration Check")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" nginx -t\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);