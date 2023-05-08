---
title: vue3
date: 2023-4-14
categories:
  - interview
tags:
  - vue3
---

## 生命周期

**options API**

```javascript
// beforeDestroy 改名
beforeUnmount() {
console.log('beforeUnmount')
},
// destroyed 改名
unmounted() {
console.log('unmounted')
}
```

**comptions API**

```javascript
onBeforeMount(() => {
            console.log('onBeforeMount')
        })
        onMounted(() => {
            console.log('onMounted')
        })
        onBeforeUpdate(() => {
            console.log('onBeforeUpdate')
        })
        onUpdated(() => {
            console.log('onUpdated')
        })
        onBeforeUnmount(() => {
            console.log('onBeforeUnmount')
        })
        onUnmounted(() => {
            console.log('onUnmounted')
        })
```

## toRef和toRefs

```javascript
// toRef 如果用于普通对象（非响应式对象），产出的结果不具备响应式
    const state = {
    age: 20,
    name: '双越'
    }
    const ageRef = toRef(state, 'age')
```

```javascript
const state = reactive({
    age: 20,
    name: '双越'
    })

const stateAsRefs = toRefs(state) // 将响应式对象，变成普通对象
const { age: ageRef, name: nameRef } = stateAsRefs // 每个属性，都是 ref 对象
```

## v-model参数的用法

vue3替代了`.async`:

```vue
//父组件
<user-info
v-model:name="name"
v-model:age="age"
></user-info>

//子组件
emits('update:title',title)
```

vue2

```vue
//父组件
<user-info
:name.sync="name"
:age.sync="age"
></user-info>

//子组件
this.$emit('update:title',title)
```

## watch和watchEffect的区别

- 俩者都可监听data属性变化

- watch需要明确监听哪个属性(手动传入)

  ```javascript
  //如果是监听ref属性的，第一个参数就不用函数回调的方式
  watch(()=>state.name,()=>{},{
  //初始化之前就监听，可选
  immediate:true
  })
  ```

- watchEffect会根据其中的属性，自动监听其变化

  ```javascript
  watchEffect(()=>{
  	//初始化时，一定会执行一次(手机要监听的数据)
  	console.log(state.name)
      console.log(state.age)
  })
  ```

## setup中如何获取组件实例

  ```javascript
  import { getCurrentInstance } from 'vue'
  ```

## vue3为什么比vue2快

 https://vue-next-template-explorer.netlify.app/

vue-next-template-explorer 右边是编译后的代码  

## vue3 与 vue2 的区别

1. 性能比 vue2 快了 1.2-2 倍
2. 使用 proxy 替代 Object.defineproperty，结局 vue2 中新增删除属性监听不到的问题，同时 proxy 支持对数组的监听，不需要像 vue2 对数组的方法拦截重写
3. diff 算法优化：增加静态标记(patchflag),虚拟节点对比时，只会对这些标记了的节点对比
4. 静态提升，vue3 对于不参与跟新的元素，会做静态提升，只会创建一次，渲染时直接复用即可，不需要像 vue2 中每次更新都会重新创建并渲染
5. 事件侦听器缓存：默认情况下 onClick 会被视为动态绑定，所以每次都会追踪它的变化，但是因为是同一个函数，所以不用追踪变化，直接缓存起来复用即可
6. 更好的 treeSharking
7. 组合式 api，hooks 更好的逻辑复用
8. 更好的 ts 支持 

## Vite是什么

- 是一个前端打包工具，Vue作者发起的项目
- 借助Vue的影响力，发展较快，和webpack竞争
- 优势：开发环境下无需打包，启动快

## Vite为何启动快？

- 开发环境使用ES6 Module，无需打包--非常快
- 生产环境使用rollup，并不会快很多

## Vue3和JSX

- 基本使用
- 使用.jsx格式文件和defineComponent
- 引用自定组件，传递属性




