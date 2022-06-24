<template>
    <div class="Son">
        <h3>我是Son组件</h3>
        <Dialog></Dialog>
    </div>
</template>

<script>
import Dialog from './Dialog'
import { ref, customRef, inject } from 'vue'
export default {
    name: "Son",
    component: {
        Dialog
    },
    components: { Dialog }
}
</script>
<style>
.Son {
    background-color: orange;
    padding: 10px;
}
</style>

