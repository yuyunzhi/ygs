<template>
    <div class="index-wrapper" ref="index">
        <header class="header">
            <Sticky :distance="distance" class="sticky">
                <div :class="{'sticky-wrapper':true,'active':activeHeader}">
                    <div class="log" @click="gotoIndexPage">
                        <span>ICSSAI</span>
                        <span>Consulting</span>
                    </div>
                    <div class="sider-bar">
                        <ul>
                            <li @click="scrollServe('header',0)">Home</li>
                            <li @click="scrollServe('service',500)">Service</li>
                            <li @click="scrollServe('introduce',500)">Company Profile</li>
                            <li @click="scrollServe('contact',500)">Contact Us</li>
                        </ul>
                    </div>
                </div>

            </Sticky>
            <Swiper :picture="picture"></Swiper>
            <div class="content">
                <div>Wealth and power drive human society.</div>
                <div>Acquiring and maintaining wealth and power require strategic thinking.</div>
                <div>By applying computational social science (CSS),</div>
                <div>ICSSAI is committed to helping clients make strategic decisions.</div>
            </div>
            <span class="more" @click="gotoIndustryPage">To Know More</span>
        </header>

        <main>
            <div class="news">
                <Title :title="titles[0]" class="title"></Title>
                <div class="content">
                    <div class="report" @click="gotoNewsPage">Industrial research: One-year progress report</div>
                    <div class="jd" @click="viewPdf">Hiring industrial project manager</div>
                </div>
            </div>
            <div class="decision">
                <Title :title="titles[1]" class="title"></Title>
                <div class="content">
                    <div class="challenge">
                        <div class="en-title">Challenges</div>
                        <div class="ch-title">
                            <!--<img src="../assets/logo.png" alt="">-->
                        </div>
                        <ul class="list">
                            <li>For all decision makers, the two biggest challenges are the lack of information and the
                                lack of ability to process information. For a long time, these two challenges were
                                insurmountable.
                            </li>
                            <li>As a result, traditional decision-making advice relies almost entirely on expert
                                judgement. Due to a lack of computational ability and an absence of data, accompanied by
                                an insufficient accumulation of social science theory and empirical research, policy
                                makers can only rely on expert judgment in most cases. Traditional decision-making
                                consultation is a product of the pre-information-revolution era. Such a decision-making
                                model cannot effectively or accurately address the highly complex and rapidly changing
                                environment faced by modern countries and businesses.
                            </li>
                        </ul>
                    </div>
                    <div class="revolution">
                        <div class="en-title">Revolution</div>
                        <div class="ch-title">
                            <!--<img src="../assets/logo.png" alt="">-->
                        </div>
                        <ul class="list">
                            <li> CSS will revolutionize “decision science.” It provides a tool for modern countries and
                                modern businesses to respond to highly complex and rapidly changing environments.
                            </li>
                            <li>CSS is an interdisciplinary subject between social science and computer technology. It
                                combines the core and basic ideas of mathematical models and programming with
                                theoretical and empirical research of the social sciences. It uses computer technology,
                                big data, machine learning, and artificial intelligence (AI) as its core technology
                                platform. Through large-scale calculation and simulation, we are able to deduce and
                                compute the social behaviors and events that we care about.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="service" id="d3">
                <Title :title="titles[2]" class="title"></Title>
                <div class="content">
                    <div class="button">
                        <div style="font-size:30px;">Wealth</div>
                        <div>Industries and Corporations</div>
                        <div @click="gotoIndustryPage">To Know More</div>
                    </div>
                    <img src="../assets/afuhan.png" alt="">
                    <div class="button">
                        <div style="font-size:30px;">Power</div>
                        <div>Politics and Society</div>
                        <div @click="gotoSocialPage">To Know More</div>
                    </div>
                </div>
            </div>
            <div class="introduce">
                <Title :title="titles[3]" class="title"></Title>
                <div class="content">
                    ICSSAI (integrated computational social science and artificial intelligence) is a strategic consulting company with CSS as its core technology platform. The company integrates computational social science, computer technology, big data, artificial intelligence, and expert knowledge, using them to build a number of intelligent strategic decision-making computer simulation systems and platforms with independent intellectual property rights for different strategic decision-making problems. Based on these computer simulation systems and platforms, the company is able to model strategic decisions, strategic behaviors, strategic competition results, and strategic risks while providing customers with scientific and comprehensive strategic analysis, strategic decision-making, and strategic competition consulting. We help customers build a scientific and model-based decision-making system using data. Based on CSS, ICSSAI will work side by side with customers to tailor strategic decisions and help clients create sustainable profit.
                </div>
            </div>
        </main>
        <footer class="contact">
            <Footer :title="titles[4]"></Footer>
        </footer>

    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                distance: 0,
                picture: [
                    require("../assets/land/header_one_1.png"),
                    require("../assets/land/header_one_2.png"),
                    require("../assets/land/header_one_3.png")
                ],
                titles: [
                    {
                        englishName: 'Company News',
                    },
                    {
                        englishName: 'Revolution In Decision Making',
                        desc1: 'Wealth and power drive human society. Acquiring and maintaining wealth and power require strategic thinking. By applying computational social science (CSS), ICSSAI is committed to helping clients make strategic decisions.'
                    },
                    {
                        englishName: 'Our Services',
                        desc1: 'Covers social networks, corporate strategy simulation and management, competitive strategy optimization, political risk prediction, and other fields.'
                    },
                    {
                        englishName: 'Company profile',
                    },
                    {
                        englishName: 'Contact us',
                    },

                ],
                currentScrollTop: 0,
                activeHeader: false,
            }
        },
        watch: {
            currentScrollTop(n) {
                // console.log('watch',n);
                if (n > 2) {
                    this.activeHeader = true
                } else {
                    this.activeHeader = false
                }

            }
        },
        mounted() {
            // console.log('news.scrollTop',document.documentElement.scrollTop  );
            window.scroll(0, 1)
            this.tweenAni();
            window.addEventListener("scroll", this.scrollMethod)
        },
        destroyed() {
            window.removeEventListener('scroll', this.scrollMethod)
        },
        methods: {
            scrollMethod() {
                // console.log(document.documentElement.scrollTop);
                this.currentScrollTop = document.documentElement.scrollTop;
                this.updateHeight()
            },
            updateHeight() {
                this.header = document.getElementsByClassName('header')[0].offsetTop

                this.news = document.getElementsByClassName('news')[0].offsetTop
                // console.log('news',this.news);
                // this.decision = document.getElementsByClassName('decision')[0].offsetTop
                // console.log('descion ',this.decision);
                this.service = document.getElementsByClassName('service')[0].offsetTop
                //console.log('service ',this.service);
                this.introduce = document.getElementsByClassName('introduce')[0].offsetTop
                //console.log('introduce ',this.introduce)
                this.contact = document.getElementsByClassName('contact')[0].offsetTop

            },
            // TweenJs 动画监听
            tweenAni() {
                requestAnimationFrame(this.tweenAni);
                TWEEN.update(); // ================================= 关键是这句
            },
            scrollServe(block, scroll) {
                let start
                let end
                // console.log(this.service);
                let currentScrollTop = this.currentScrollTop
                console.log(currentScrollTop, this[block]);
                start = currentScrollTop
                end = this[block] + scroll
                this.scrollPage(start, end)
            },
            scrollPage(start, end) {
                console.log('start:', start);
                console.log('end:', end);
                // 稍后
                let AppScrollTopNow = {
                        y: start
                    }, // ================================= 定义一个初始位置
                    AppScrollTopEnd = {
                        y: end
                    };// ================================= 定义一个结束位置

                // 设置新的缓动动画
                new TWEEN.Tween(AppScrollTopNow) // 传入开始位置
                    .to(AppScrollTopEnd, 600) // 指定时间内完成结束位置
                    .easing(TWEEN.Easing.Quadratic.Out) // 缓动方法名
                    .onUpdate(() => {
                        // 上面的值更新时执行的设置
                        document.documentElement.scrollTop = AppScrollTopNow.y;
                        document.body.scrollTop = AppScrollTopNow.y;
                    })
                    .start();// ================================= 不要忘了合适的时候启动动画

            },

            gotoIndustryPage() {
                this.$router.push("/industry")
            },
            gotoNewsPage() {
                this.$router.push("/news")
            },
            gotoSocialPage() {
                this.$router.push("/social")
            },
            viewPdf() {
                this.$router.push("/jd")

            },
            gotoIndexPage() {
                this.$router.push("/")
            },

        },
        components: {
            Swiper: () => import("@/components/Swiper.vue"),
            Sticky: () => import("@/components/Sticky.vue"),
            Title: () => import("@/components/Title.vue"),
            Footer: () => import("@/components/Footer.vue")


        }

    }
</script>

<style scoped lang="scss">

    .index-wrapper {
        width: 100vw;
        position: relative;

        header {
            position: relative;

            .sticky {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 10;
                width: 100%;
                height: 70px;

                .sticky-wrapper {
                    width: 100%;
                    height: 70px;

                    .log {
                        width: 96px;
                        height: 70px;
                        background: #53b095;
                        border-radius: 5px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        top: 0;
                        left: 226px;
                        cursor: pointer;

                        &:hover {
                            background-color: #179d82;
                            border-color: #179d82;
                        }

                        > span {
                            color: white;
                            font-size: 14px;
                            font-weight: bolder;
                            line-height: 20px;

                        }
                    }

                    .sider-bar {
                        position: absolute;
                        top: 30px;
                        right: 238px;

                        ul {
                            display: flex;
                            flex-direction: row;

                            li {
                                font-size: 14px;
                                font-weight: bolder;
                                color: white;
                                margin-left: 20px;
                                cursor: pointer;

                                &:hover {
                                    color: #53b095;
                                }
                            }
                        }
                    }

                    &.active {
                        background: white;

                        .sider-bar {
                            li {
                                color: #676a6c;
                            }

                        }

                        z-index: 999;
                    }

                }


            }

            .more {
                background: #53b095;
                padding: 12px 18px;
                color: white;
                font-weight: bolder;
                font-size: 14px;
                position: absolute;
                top: 345px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 1;
                border-radius: 5px;
                cursor: pointer;
            }

            .content {
                width: 70%;
                position: absolute;
                top: 170px;
                left: 50%;
                font-size: 32px;
                font-weight: 500;
                color: white;
                z-index: 1;
                transform: translateX(-50%);
                text-align: center;
                line-height: 40px;
            }
        }

        main {
            position: relative;
            padding-bottom: 72px;

            .news {
                .title {
                    margin-top: 125px;
                }

                .content {
                    margin-top: 55px;
                    color: #337ab7;
                    font-size: 16px;
                    line-height: 30px;
                    width: 100%;
                    text-align: center;
                    font-weight: 200;
                    cursor: pointer;

                    .report:hover {
                        color: #23527c;
                    }

                    .jd {
                        -webkit-user-select: none;
                        -moz-user-focus: none;
                        -moz-user-select: none;
                        color: #337ab7;
                        font-size: 16px;
                        line-height: 30px;
                        width: 100%;
                        cursor: pointer;

                        &:hover {
                            color: #23527c;
                        }
                    }
                }
            }

            .decision {
                position: relative;

                .title {
                    margin-top: 125px;
                }

                .content {

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin: 0 auto;
                    margin-top: 62px;
                    /*align-items: center;*/
                    width: 1000px;

                    .challenge,
                    .revolution {
                        width: 460px;

                        .en-title {
                            color: #53b095;
                            font-weight: 500;
                            font-size: 20px;
                            margin-bottom: 10px
                        }

                        .ch-title {
                            color: #676a6c;
                            font-weight: 200;
                            font-size: 32px;
                            margin-bottom: 10px;
                            position: relative;

                            img {
                                width: 40px;
                                height: 40px;
                                position: absolute;
                                right: 0;
                                top: -40px;
                            }
                        }

                        ul {
                            color: #676a6c;
                            font-weight: 600;
                            font-size: 14px;
                            margin-bottom: 10px;
                            line-height: 20px;
                            list-style: disc;
                            padding-left: 20px;

                            li {
                                margin-bottom: 20px;
                                list-style: disc;
                            }
                        }
                    }
                }
            }

            .service {
                position: relative;

                .title {
                    margin-top: 125px;
                }

                .content {
                    display: flex;
                    flex-direction: row;
                    width: 1000px;
                    margin: 0 auto;
                    margin-top: 40px;
                    justify-content: space-around;
                    align-items: center;

                    img {
                        width: 470px;
                        height: 470px;
                    }

                    .button {
                        div:nth-child(1) {
                            color: #53b095;
                            font-size: 18px;
                            font-weight: 200;
                            line-height: 28px;
                            text-align: center;

                        }

                        div:nth-child(2) {
                            color: #676a6c;
                            font-size: 18px;
                            font-weight: 200;
                            line-height: 28px;

                        }

                        div:nth-child(3) {
                            color: white;
                            background: #53b095;
                            font-size: 14px;
                            font-weight: 600;
                            width: 120px;
                            height: 42px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin: 0 auto;
                            margin-top: 5px;
                            border-radius: 3px;
                            cursor: pointer;

                            &:hover {
                                background-color: #179d82;
                                border-color: #179d82;
                            }


                        }
                    }
                }
            }

            .introduce {
                position: relative;

                .title {
                    margin-top: 125px;
                }

                .content {
                    font-size: 15px;
                    font-weight: 600;
                    width: 1000px;
                    line-height: 24px;
                    margin: 0 auto;
                    color: #676a6c;
                    margin-top: 20px;

                }
            }

        }

        footer {

        }

    }
</style>
