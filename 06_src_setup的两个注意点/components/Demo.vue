<template>
    <h1>一个人的信息</h1>
    <h2>姓名: {{person.name}}</h2>
    <h2>年龄:{{person.age}}</h2>
    <button @click="test">测试触发hello事件</button>
    <slot></slot>
</template>
  
  <script>
      import {reactive} from 'vue'
  export default {
    name: 'Demo',
    //此处只是测试一下setup, 暂时不考虑响应式的问题
    props: ['msg', 'school'],
    emits: ['hello'],
    setup(props, context){
        // console.log('---setup---',props)
        // console.log('---setup---',context)
        // console.log('---setup---',context.attrs) //相当于vue2中的$attrs
        // console.log('---setup---',context.emit) //触发自定义事件
        console.log('---setup---',context.slots) //
        let person = reactive({
            name: '张三',
            age: 18,
      })
      function test(){
        context.emit('hello', 666)
      }
  
      //返回一个对象, 常用
      return {
        person,
        test
      } 
    }
  
  }
  </script>
  
  
  