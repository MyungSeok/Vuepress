#!/usr/bin/env sh

# abort on errors
# set -e

npm install && vuepress build

git checkout gh-pages

git pull origin gh-pages --rebase

cp -R .vuepress/dist/* .

git add .

git commit -a -m 'Publish Docs'

git push origin gh-pages

git checkout master