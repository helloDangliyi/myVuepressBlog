---
title: 部署到Github
date: 2023-04-11
categories:
  - vuepress
tags:
  - vuepress
---

## 操作

1. 根目录下新建文件`deploy.sh`,代码如下：

   ```sh
   #!/usr/bin/env sh
   
   # 确保脚本抛出遇到的错误
   set -e
   
   # 生成静态文件
   npm run build
   
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
   ```

2. 使用`Git Bash Here` 打开命令窗口，执行：

   ```javascript
   npm run deploy
   ```
   
3. `package.json`添加命令：

   ```json
   {
      ...
   "scripts": {
       ...
   
       "build": "vuepress build docs",
       "deploy": "bash deploy.sh"
     }
   }
   ```

   

## 注意

1. `deploy.sh`是集成了把打包和push打包的代码到远程仓库的操作

2. `deploy.sh`文件的代码可以直接复制到根目录，注意有些地方是需要修改的

   