---
title: 【vue】interview
date: 2017-12-30
categories:
  - frontEnd
tags:
  - interview
---

'#fuzzyQuery(list, keyWord, attribute = 'name') {
const reg = new RegExp(keyWord)
const arr = []
for (let i = 0; i < list.length; i++) {
if (reg.test(list[i][attribute])) {
arr.push(list[i])
}
}
return arr
},'
