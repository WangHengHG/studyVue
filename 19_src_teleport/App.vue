<template>
  <h3>我是App组件</h3>
  <Child></Child>
</template>

<script>
import Child from './components/Child.vue'
import { react } from '@babel/types'
import { ref, reactive, readonly, toRefs, customRef, provide, isRef, isReactive, isReadonly, isProxy } from 'vue'
export default {
  name: "App",
  components: {
    Child
  }
}
</script>
<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>

