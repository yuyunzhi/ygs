<template>
    <div class="wrapper">
        <Swiper></Swiper>
    </div>
</template>

<script>
export default {
    name: "Index",
    components:{
        Swiper:()=>import("@/components/Swiper.vue")
    }

}
</script>

<style scoped lang="scss">

.wrapper{
    width: 100vw;
}
</style>
