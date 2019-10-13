<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570982223814&di=e9b6f1bbf8e1fce5c69ed6b856cd4fb1&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130321%2F9678987_225139671149_2.jpg"
                         alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570982223814&di=00702d8d6d520502312948a4b39a646b&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg"
                         alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570982223814&di=5e57473e3840dfdc7a71fc4b18549629&imgtype=0&src=http%3A%2F%2Fpic25.nipic.com%2F20121112%2F9252150_150552938000_2.jpg"
                         alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

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
    </div>
</template>

<script>
    export default {
        name: "Swiper",
        mounted() {
            this.initSwiper()
        },
        methods: {
            gotoPage() {
                this.$router.push('/industry')
            },
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

    }
</style>
