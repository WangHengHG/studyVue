<template>
  <h4>当前的x.y值是{{sum}}</h4>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>薪资:{{job.j1.salary + 'K'}}</h2>
  <h3 v-show="car">汽车: {{car.name}}</h3>
  <button @click="name+= '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">张薪资</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
</template>

<script>
    import {reactive,ref, toRef, toRefs, toRaw, markRaw} from 'vue'
export default {
  name: 'Demo',

  setup(){
    let sum = ref(0)

    let person = reactive({
      name :'张三',
      age:18,
      job: {
        j1: {
        salary:20
      }
      }
    })
    function showRawPerson(){
      const p = toRaw(person)
      p.age++
      console.log(p);

    }
    function addCar() {
      let car = {
        name: '奔驰',
        price: '40W'
      }
      person.car = car

    }


    return {
      sum,
      ...toRefs(person),
      showRawPerson,
      addCar
    }
  }

}
</script>


