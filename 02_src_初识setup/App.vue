<template>
  <h1>一个人的信息</h1>
  <h2>姓名: {{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>性别: {{sex}}</h2>
  <button @click="sayHello">说话</button>
  <button @click="sayWelcome">说欢迎</button>
  <button @click="test1">在vue2的方法中, 读取vue3的数据</button>
  <button @click="test2">在vue3的方法中, 读取vue2的数据</button>
</template>

<script>
import { h } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  //此处只是测试一下setup, 暂时不考虑响应式的问题
  setup(){
    //数据
    let name = '张三'
    let age = 18
    //方法
    function sayHello(){
      alert(`我叫${name},我${age}岁了, 你好啊!`)
    }
    function test2(){
      console.log(this.sex);
    }
    //返回一个对象, 常用
    return {
      name,
      age,
      sayHello,
      test2
    } 
    //返回一个函数(渲染函数)
    // return ()=> 
    //   h('h1','尚硅谷')
    
  },
  data(){
    return {
      sex: '男'
    }
  },
  methods: {
    sayWelcome(){
      alert('欢迎来到尚硅谷学习')
    },
    test1(){
      console.log(this.age);
    }
  }
}
</script>


