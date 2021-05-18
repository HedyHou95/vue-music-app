<template>
    <div class='recommend'>this is recommend page</div>
</template>
<script>
import { getRecommend } from '@/service/recommend'
export default {
    name: 'recommend',
    async created () {
        const result = await getRecommend()
        console.log(result)
    }
}
</script>
