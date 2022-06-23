<template>
  <h4>当前的x.y值是{{sum}}</h4>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>薪资:{{job.j1.salary + 'K'}}</h2>
  <button @click="name+= '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">张薪资</button>
</template>

<script>
    import {reactive,ref, toRef, toRefs, readonly, shallowReadonly} from 'vue'
export default {
  name: 'Demo',

  setup(){
    let person = reactive({
      name :'张三',
      age:18,
      job: {
        j1: {
        salary:20
      }
      }
    })
    // person = readonly(person)
    // person = shallowReadonly(person)
    let sum = ref(0)
    sum = readonly(sum)

    return {
      sum,
      ...toRefs(person)
    }
  }

}
</script>


