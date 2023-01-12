---
title: vue3中$attrs的变化与inheritAttrs的使用
date: 2023-01-10
categories:
  - frame
tags:
  - vue3
---

### 在vue3中的$attrs：

```
vue3中$listeners已被删除合并到$attrs中；$attrs现在包括class和style属性

vue2中$listners是单独存在的；$attrs不包括class和style属性
```

### 在vue2中的$attrs:

```
在vue2中,$attrs里面包含着上层组件传递的所有数据（除style和class）;
在一个组件声明了prop时候，attrs里面包含除去prop里面的数据剩下的数据；
结合inheritAttrs:false,可以将传递下来的数据应用于其他元素，而不是根元素。
```

### 在vue3中的使用：

- `$attrs`：在 template 中使用（单一根元素和多个根元素的情况）。

​        在单一根元素中添加 inheritAttrs: false，不会绑定在根元素上。

```js
//子组件，额外添加<script>标签；在 <script setup> 中的声明选项中去使用 inheritAttrs
<script>
export default {
    inheritAttrs: false,
}
</script>
```

多个根元素需要在指定的元素上添加v-bind='$attrs'。

- 在 `js` 代码里就可以使用 `attrs.xxx` 获取对应的属性值了。

```js
import { useAttrs } from 'vue'

const attrs = useAttrs()
```



