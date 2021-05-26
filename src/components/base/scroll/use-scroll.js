import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import { onMounted, onUnmounted, ref } from 'vue'

BScroll.use(ObserveDOM)
export default function useScroll (wrapperRef, options) {
    const scroll = ref(null)

    onMounted(() => {
        scroll.value = new BScroll(wrapperRef.value, {
            observeDOM: true,
            ...options
        })

        console.log(scroll.value)
    })

    onUnmounted(() => {
        scroll.value.destory()
    })

    return scroll
}
