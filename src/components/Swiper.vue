<template>
    <div>
        <div class="swiper-container" v-if="picture.length>1">
            <div class="swiper-wrapper" >
                <div class="swiper-slide" v-for="(item,index) in picture" :key="index+'ccc'" >
                    <img :src="item"
                         alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination" ></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev">
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
        <div class="swiper-container img" v-else >
            <img :src="picture[0]" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Swiper",
        props:{
            picture:{
                type:Array,
                default:()=>[],
                required:true
            },
        },
        mounted() {
            this.initSwiper()

        },
        methods: {
            initSwiper() {
                var mySwiper = new Swiper('.swiper-container', {
                    direction: 'horizontal', //  水平切换选项
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

                })
            }
        },
    }
</script>

<style scoped lang="scss">

    .swiper-container {
        width: 100%;
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
        &.img{
            width: 100%;
            height: 470px;

            img {
                width: 100%;
                height: 470px;
            }
        }

    }

</style>
