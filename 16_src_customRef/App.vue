<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
import {ref, customRef} from 'vue'
export default {
  name: 'App',
  setup(){
    function myRef(value, delay){
      return customRef((track, trigger)=>{
        let timer
        return {
          get(){
            console.log(`有人从myRef这个容器中读取数据了, 我把${value}给他了`);
            track() //通知Vue追踪value 的变化(提前和get商量一下, 让它认为value是有用的)
            return value
          },
          set(newValue){
            console.log(`有人把myRef这个容器中的数据改为了${newValue}`);
            clearTimeout(timer)
            timer = setTimeout(()=>{
              value = newValue
              trigger()
            }, delay) //通知vue重新解析模板
          }
        }
      })
    }
    // let keyWord = ref('hello')//使用vue提供的内置的ref
    let keyWord = myRef('hello', 500)//使用程序员自定义的ref
    return {keyWord}
  }

}
</script>


