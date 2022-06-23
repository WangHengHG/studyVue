import {reactive, onMounted, onBeforeUnmount} from 'vue'
export default function() {
    //实现鼠标打点相关的数据
    let point = reactive({
        x: 0,
        y: 0
    })
    //实现鼠标打点相关的方法
    function savePoint(e) {
        point.x = e.offsetX
        point.y = e.offsetY
        console.log(e.offsetX);
    }
    //实现鼠标打点相关的钩子

    onMounted(() => {
        var xx = window.addEventListener('click', savePoint)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })
    return point
}
