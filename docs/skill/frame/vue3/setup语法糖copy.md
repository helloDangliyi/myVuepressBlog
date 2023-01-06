---
title: vue3的setup语法糖copy
date: 2023-01-06
categories:
  - frame
tags:
  - vue3
---

## 1.基本使用

```js{7,9,22,29}
<template>
    <span>
        {{ruleForm}}
    </span>
</template>

<script setup>
import { ref,reactive,onMounted } from "vue";
import QrcodeDialog from './QrcodeDialog.vue' //就可以直接使用，不需要注册

let ruleForm = reactive({
  aliasName:'',
  userName:'',
  email: '',
  mobileNumber: '',
  isAutoDraw:'',
})

const getUserInfo = ()=> {
    //若调接口返回一个对象，不是响应式的，但是需要赋值给ruleForm
    //则可以这样子使用
    Object.assign(ruleForm, data)
    console.log('ruleForm: ', ruleForm);
}
onMounted(
  () => {
    getUserInfo()
  })
</script>
```

总结：

1.

```
<script setup> 语法糖里面的代码会被编译成组件setup()函数的内容，不需要通过return暴露声明的变量、函数以及
import引入的内容，即可在<template/>使用，并且不需要些export default{}
```

2.这意味着与普通的 `<script>` 只在组件被首次引入的时候执行一次不同，`<script setup>` 中的代码会在每次组件实例被创建的时候执行。

```js
  <script>
  console.log('script');//多次实例组件,只触发一次
  export default {
      setup() {
          console.log('setupFn');//每次实例化组件都触发和script-setup标签一样
      }
  }
  </script>

```

## 2.组件通信必须要使用`defineProps`和`defineEmits`API 来代替`props`和`emits`

A.`defineProps`

父组件：

```vue
<template>
  <div>父组件</div>
  <Child :title="msg" />
</template>

<script setup>
import { ref } from "vue"; // 引入ref
import Child from "./child.vue";
const msg = ref("父的值"); //自动返回，在template直接使用
</script>
```

子组件：

- `<template/>` 中可以直接使用父组件传递的 props （可省略 props.）

- `<script-setup>` 需要通过 props.xx 获取父组件传递过来的 props，也可以通过解构使用。

  ```vue
  <template>
    <div>子组件</div>
    <div>父组件传递的值：{{ title }}</div>
  </template>

  <script setup>
  //import {defineProps} from 'vue'   不需要引入

  //语法糖必须使用defineProps替代props
  const props = defineProps({
    title: {
      type: String,
    },
  });
  //script-setup 1.需要通过props.xx获取父组件传递过来的props
  console.log(props.title); //父的值
  //2.或者通过解构可省略 props
  const { title } = toRefs(props);
  console.log(title); //父的值
  </script>
  ```

B.`defineEmits`

子组件：

```vue{3,10,14}
<template>
  <div>子组件</div>
  <button @click="toEmits">子组件向外暴露数据</button>
</template>

<script setup>
import {ref} from 'vue'
const name = ref('我是子组件')
//1、暴露内部数据
const  emits = defineEmits(['childFn']);

const  toEmits = () => {
  //2、触发父组件中暴露的childFn方法并携带数据
  emits('childFn',name)
}
</script>
```

父组件：

```vue{3,9,12,15}
<template>
  <div>父组件</div>
  <Child  @childFn='childFn' />
  <p>接收子组件传递的数据{{childData}} </p>
</template>

<script setup>
import {ref} from 'vue'
import Child from './child.vue'

const childData = ref(null)
const childFn=(e)=>{
    consloe.log('子组件触发了父组件childFn，并传递了参数e')
    childData=e.value
}
</script>
```

## 3.需要主动暴露子组件属性：defineExpose，父组件才能读取到子组件数据

```
提示：
使用 <script setup> 的组件是默认关闭的，即通过模板 ref 或者 $parent 链获
取到的组件的公开实例，不会暴露任何在 <script setup> 中声明的绑定。
```

子组件：

```vue
<script setup>
import { ref } from "vue";

const a = 1;
const b = ref(2);
//主动暴露组件属性
defineExpose({
  a,
  b,
});
</script>
```

父组件：

```vue
<template>
  <div>父组件</div>
  <Child ref="childRef" />
  <button @click="getChildData">通过ref获取子组件的属性</button>
</template>

<script setup>
import { ref } from "vue";
import Child from "./child.vue";
const childRef = ref(); //注册响应数据
const getChildData = () => {
  //子组件接收暴露出来得值
  console.log(childRef.value.a); //1
  console.log(childRef.value.b); //2  响应式数据
};
</script>
```

### 4.语法糖其他功能

```
useSlots 和 useAttrs （少用，由于大部分人是SFC模式开发，在<template/>通过<slot/>标签就可以渲染插槽）
如果需要在script-setup中使用 slots 和 attrs 需要用useSlots 和 useAttrs替代
需要引入：import { useSlots ,useAttrs } form 'vue'
在<template/>中通过 $slots和$attrs 来访问更方便（attrs用来获取父组件中非props的传递到子组件的参数/方法，attrs 用来获取父组件中非props的传递到子组件的参数/方法，attrs用来获取父组件中非props的传递到子组件的参数/方法，slots可以获取父组件中插槽传递的虚拟dom对象，在SFC模式应该用处不大，在JSX /TSX使用比较多）
```

父组件：

```vue
<template>
  <Child msg="非porps传值子组件用attrs接收">
    <!-- 匿名插槽 -->
    <span>默认插槽</span>
    <!-- 具名插槽 -->
    <template #title>
      <h1>具名插槽</h1>
    </template>
    <!-- 作用域插槽 -->
    <template #footer="{ scope }">
      <footer>作用域插槽——姓名：{{ scope.name }}，年龄{{ scope.age }}</footer>
    </template>
  </Child>
</template>

<script setup>
// 引入子组件
import Child from "./child.vue";
</script>
```

子组件：

```vue
<template>
  <!-- 匿名插槽 -->
  <slot />
  <!-- 具名插槽 -->
  <slot name="title" />
  <!-- 作用域插槽 -->
  <slot name="footer" :scope="state" />
  <!-- $attrs 用来获取父组件中非props的传递到子组件的参数 -->
  <p>{{ attrs.msg == $attrs.msg }}</p>
  <!--true  没想到有啥作用... -->
  <p>{{ slots == $slots }}</p>
</template>

<script setup>
import { useSlots, useAttrs, reactive, toRef } from "vue";
const state = reactive({
  name: "张三",
  age: "18",
});

const slots = useSlots();
console.log(slots.default()); //获取到默认插槽的虚拟dom对象
console.log(slots.title()); //获取到具名title插槽的虚拟dom对象
// console.log(slots.footer()); //报错  不知道为啥有插槽作用域的无法获取
//useAttrs() 用来获取父组件传递的过来的属性数据的（也就是非 props 的属性值）。
const attrs = useAttrs();
</script>
```

`useSlots`或许在 JSX/TSX 下更实用

```js

<script lang='jsx'>
import { defineComponent, useSlots } from "vue";
export default defineComponent({
  setup() {
    // 获取插槽数据
    const slots = useSlots();
    // 渲染组件
    return () => (
      <div>
        {slots.default?slots.default():''}
        {slots.title?slots.title():''}
      </div>
    );
  },
});
</script>
```
