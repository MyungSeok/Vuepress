#!/usr/bin/env sh

# abort on errors
# set -e

# npm install && vuepress build

# git checkout master

# git pull origin master --rebase

# cp -R .vuepress/dist/* .

# git add .

# git commit -a -m 'Publish Docs'

# git push origin master

# git checkout draft

vuepress build

git checkout master

git pull origin master --rebase

cp -R .vuepress/dist/* .

git add .

git commit -a -m 'Publish Docs'

git push origin master

git checkout draft