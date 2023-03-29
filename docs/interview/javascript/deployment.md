---
title: 乱七八糟
date: 2023-2-28
categories:
  - interview
tags:
  - javascript
---

blackbox-web-1.x：

注意修改

一、打包
1、路径：blackbox-web-1.x\packages>需要在packages 路径下打包
2、修改packages下的package.json
{
  "name": "blackbox-v3-ui",
  "version": "1.0.2", //每发布一次加1
}
pnpm build
二、发布
pnpm publish

三、发布成功后查看是否成功
http://192.168.0.221:4873/


包项目需要全部提交修改的东西。


四、在示例项目：
"dependencies": {
"blackbox-v3-ui": "1.0.2",  //修改版本，拉下最新的版本
}


部署项目：F:\server\nginx-1.21.3\conf   下的nginx.conf文件。复制serve{}:修改端口和打包项目的路径。
重启nginx就可以了：在 nginx.exe路径下重启。


单点登录测试：
1、写好页面后，浏览器地址输入：redirect_uri 的值对应管理后台的应用地址
http://192.168.0.220:5001/usercenter/oauth/authorize?response_type=code&client_id=a98b7a521b9f49c5a398b9df4e0c7a42&redirect_uri=http://192.168.2.169:30001/ztLogin
