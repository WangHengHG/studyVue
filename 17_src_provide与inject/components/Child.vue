<template>
  <div class="Child">
    <h3>我是Child组件(子),{{car.name}}</h3>
    <Son></Son>
  </div>
</template>

<script>
    import Son from './Son.vue'
    import {ref, customRef, inject} from 'vue'
    export default {
        name: 'Child',
        setup(){
            let car = inject('car')
            return {car}
        },
        components: {
            Son
        }
    }
</script>
<style>
  .Child{
    background-color: skyblue;
    padding: 10px;
  }
</style>

