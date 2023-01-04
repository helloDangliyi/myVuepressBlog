#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  //跟第一个仓库建立起联系，第一个仓库只是用来展示，第二个仓库是用来平时得增删改查的
# git push -f git@github.com:helloDangliyi/helloDangliyi.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:helloDangliyi/myVuepressBlog.git master:gh-pages

cd -