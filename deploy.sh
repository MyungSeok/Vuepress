#!/usr/bin/env sh

# abort on errors
# set -e

git checkout gh-pages

git pull

git checkout .

# npm install
npm install

# build
npm run docs:build

cp -R ./vuepress/dist/* .

git commit -a -m 'Publish Docs'

git push origin gh-pages

git checkout master