<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(n,index) in 20" :key="index+'ccc'" >
                    <img :src="require(`@/assets/ppt/${index+1}.png`)"
                         alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination" ></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev" >
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-left"></use>
                </svg>
            </div>
            <div class="swiper-button-next">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-right"></use>
                </svg>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "PPTSwiper",
        mounted() {
            this.initSwiper()
        },
        methods: {
            initSwiper() {
                var mySwiper = new Swiper('.swiper-container', {
                    direction: 'horizontal', // 垂直切换选项
                    loop: true, // 循环模式选项

                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },

                    // 如果需要前进后退按钮
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },

                    // 如果需要滚动条
                    scrollbar: {
                        el: '.swiper-scrollbar',
                    },
                })
            }
        },
    }
</script>

<style scoped lang="scss">
    .icon {
        width: 50px;
        height: 50px;
        vertical-align: -0.15em;
        overflow: hidden;
    }
    .swiper-container {
        width: 800px;
        height: 470px;

        .swiper-wrapper {
            width: 100%;
            height: 470px;

            .swiper-slide {
                width: 100%;
                height: 470px;

                img {
                    width: 100%;
                    height: 470px;
                }
            }
        }

    }
</style>
