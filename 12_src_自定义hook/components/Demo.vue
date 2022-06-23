<template>
    <h2>当前求和为:{{sum}}</h2>
    <button @click="sum++">点我加1</button>
    <hr>
    <h2>当前点击时鼠标的坐标为: x: {{point.x}} , y: {{point.y}}</h2>
</template>
  
<script>
  import usePoint from '../hooks/usePoint'
  import {ref} from 'vue'
  export default {
    name: 'Demo',

    setup(){
      //数据
      let sum = ref(0)
      let point = usePoint()
      return {
        sum,
        point
      }
    },
  }
</script>
  
  
  