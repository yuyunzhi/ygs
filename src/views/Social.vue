<template>
    <div class="wrapper">
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
                            <li @click="scrollServe('client',400)">Our Clients</li>
                            <li @click="scrollServe('applications',500)">Scenarios</li>
                            <li @click="scrollServe('services',500)">Service</li>
                            <li @click="scrollServe('cases',500)">Cases</li>
                            <li @click="scrollServe('contact',500)">Contact Us</li>
                        </ul>
                    </div>
                </div>

            </Sticky>
            <Swiper :picture="picture"></Swiper>
            <div class="content">
                <div>Wealth and power drive human society.</div>
                <div> Acquiring and maintaining wealth and power require strategic thinking.</div>
                <div>By applying computational social science (CSS),</div>
                <div>ICSSAI is committed to helping clients make strategic decisions.</div>
            </div>
        </header>

        <main>
            <div class="client">
                <Title :title="titles[0]" class="title"></Title>
                <ul class="content">
                    <li>
                        <h3>Think Tank</h3>
                    </li>
                    <li>
                        <h3>Government Agency</h3>
                    </li>
                    <li>
                        <h3>International Agency</h3>
                    </li>
                    <li>
                        <h3>Multinational Corporation</h3>
                    </li>
                </ul>
            </div>
            <div class="applications">
                <Title :title="titles[1]" class="title"></Title>
                <ul class="content">
                    <li>
                        <h3 style="text-align: center">Election Forecasting</h3>
                        <div>Based on social scientists' understanding of elections, computational social sciences can build simulation results from big data.</div>
                    </li>
                    <li>
                        <h3 style="text-align: center">High Intensity Strategy (Political) Risk</h3>
                        <div>Coup: Revolution, Political Instability </div>
                    </li>
                    <li>
                        <h3 style="text-align: center">Civil War</h3>
                        <div>non-ethnic civil war, ethnic civil war<br>
                            Ethnic groups: large-scale ethnic riots
                        </div>
                    </li>
                </ul>
            </div>
            <div class="services">
                <Title :title="titles[2]" class="title"></Title>
                <div class="content">
                    <div class="top">
                        <div class="left">
                            <div>
                                <svg class="icon industry" aria-hidden="true">
                                    <use xlink:href="#icon-laba"></use>
                                </svg>
                            </div>
                            <div class="blue-green margin-top-10 margin-bottom-10">Election Prediction Platform Based on Computer Simulation</div>
                            <div class="grey left ">
                                Elections generate a large amount of data. Based on social scientists' understanding of elections, it is possible for computational social science to build simulation results from data that includes computer simulation platforms under different electoral strategies. Our computer simulation platform is completely independent of opinion polls.
                            </div>
                        </div>
                        <img src="../assets/social/1571548568806.gif" alt="">

                        <div class="right">
                            <div>
                                <svg class="icon industry" aria-hidden="true">
                                    <use xlink:href="#icon-feiji"></use>
                                </svg>
                            </div>
                            <div class="blue-green margin-top-10 margin-bottom-10">Coup Risk Forecasting and Prevention Platform</div>
                            <div class="grey desc">
                                One of the first tasks of any regime and leader is to maintain the stability of the regime. However, the world has never really been too peaceful, and coups often occur. How to identify the danger of coups and prevent coups has therefore become important to consider. Based on social network analysis and computer simulation, we have developed a patented prediction and prevention platform.
                            </div>
                        </div>

                    </div>
                    <div class="bottom">
                        <div>
                            <svg class="icon industry" aria-hidden="true">
                                <use xlink:href="#icon-zhadan"></use>
                            </svg>
                        </div>
                        <div class="blue-green margin-top-10 margin-bottom-10">Civil War Risk and Results Forecasting Platform</div>
                        <div class="grey desc">
                            Based on numerous studies on civil war, including our own research, we have developed an independent and protected platform for civil war risk and outcome prediction. </div>
                    </div>
                </div>
            </div>
            <div class="cases">
                <Title :title="titles[3]" class="title"></Title>
                <div class="content">
                    <div class="top">
                        <div class="text">
                            <p class="blue-green margin-bottom-10">Computer Simulation of the Outcome of Post-1989 Afghan Civil War</p>
                            <p class="grey bolder left margin-bottom-10">
                                Based on our computer simulation platform and the use of publicly available data, our research team simulated the possible outcomes of the Afghan civil war after the Soviet Union withdrew from Afghanistan. By introducing macroscopic data such as geography, climate, economy, population, and military power, we also simulated eight major forces in the civil war that chose different engagement and alliance strategies. After more than 500 computer simulations, we obtained different predictions of the Afghan civil war process and outcomes.</p>
                            <p class="grey bolder left margin-bottom-10">
                                Our results show that Taliban have more than a 75-85% chance of winning the civil war. The actual result has been exactly the same as our prediction. </p>
                            <p class="grey bolder left margin-bottom-10">
                                The above cases fully demonstrate the timeliness, scientificity, and reliability of using big data and complex decision analysis methods, which will provide powerful theoretical reference and empirical support for government decision-making in the future.</p>
                        </div>
                        <img src="../assets/social/afuhan.png" alt="">
                    </div>
                    <div class="bottom">
                        <img src="../assets/social/vote.png" alt="">
                        <div class="text">
                            <p class="blue-green margin-bottom-10">Forecasting 2016 Election in Taiwan</p>
                            <p class="grey bolder left margin-bottom-10">Based on our election results simulation platform, which does not rely on opinion polls at all, we are able to systematically predict the election results in Taiwan. </p>
                            <p class="grey bolder left margin-bottom-10">
                                Ten days before the “Leader” and “Legislative” elections in Taiwan, we announced our computer simulation predictions, and the final election results show that our forecast was quite accurate.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="link">
                <Title :title="titles[4]" class="title"></Title>
                <div class="content">
                    <li><a href="http://www.scientistin.com/" target="_blank"><img
                            src="../assets/industry/link/logonew.png" alt=""></a></li>
                    <li><a href="http://cig.ccxe.com.cn/index.html" target="_blank"><img
                            src="../assets/industry/link/CIlogo.png" alt=""></a></li>
                    <li><a href="http://cig.ccxe.com.cn/product.html" target="_blank"><img
                            src="../assets/industry/link/logocebm.png" alt=""></a></li>
                    <li><a href="http://www.koncen.com/" target="_blank"><img
                            src="../assets/industry/link/kangsheng.png" alt=""></a></li>
                </div>
            </div>
        </main>
        <footer class="contact">
            <Footer :title="titles[titles.length-1]"></Footer>
        </footer>

    </div>
</template>

<script>
    export default {
        name: "Social",
        data() {
            return {
                distance: 0,
                picture: [
                    require('../assets/land/header_vote.png')
                ],
                titles: [
                    {
                        englishName: 'Our Clients'
                    },
                    {
                        englishName: 'Scenarios'
                    },
                    {
                        englishName: 'Our Services',
                        desc1: 'Forecast the outcome of elections and modify proposals based on predicted electoral strategies and high-intensity strategic (political) risk predictions.'
                    },
                    {
                        englishName: 'Classic Cases',
                    },
                    {
                        englishName: 'Strategic Partners',
                    },
                    {
                        englishName: 'Contact us',
                    }
                ],
                currentScrollTop:0,
                activeHeader:false
            }
        },
        watch:{
            currentScrollTop(n){
                // console.log('watch',n);
                if (n > 2) {
                    this.activeHeader = true
                } else {
                    this.activeHeader = false
                }

            }
        },
        mounted(){
            // console.log('news.scrollTop',document.documentElement.scrollTop  );
            window.scroll(0,1)
            this.tweenAni();

            window.addEventListener("scroll",  this.scrollMethod)
        },

        destroyed(){
            window.removeEventListener('scroll',this.scrollMethod)
        },
        methods: {
            gotoIndexPage(){
                this.$router.push('/')
            },
            scrollMethod(){
                // console.log(document.documentElement.scrollTop);
                this.currentScrollTop = document.documentElement.scrollTop;
                this.updateHeight()
            },
            updateHeight(){
                this.header = document.getElementsByClassName('header')[0].offsetTop
                this.client= document.getElementsByClassName('client')[0].offsetTop
                this.services = document.getElementsByClassName('services')[0].offsetTop
                this.cases = document.getElementsByClassName('cases')[0].offsetTop
                this.applications = document.getElementsByClassName('applications')[0].offsetTop
                this.contact = document.getElementsByClassName('contact')[0].offsetTop

            },
            // TweenJs 动画监听
            tweenAni () {
                requestAnimationFrame(this.tweenAni);
                TWEEN.update(); // ================================= 关键是这句
            },
            scrollServe(block,scroll){
                let start
                let end
                // console.log(this.service);
                let currentScrollTop = this.currentScrollTop
                console.log(currentScrollTop,this[block]);
                start = currentScrollTop
                end=this[block]+scroll
                this.scrollPage(start,end)
            },
            scrollPage(start,end){
                console.log('start:', start);
                console.log('end:', end);
                // 稍后
                let AppScrollTopNow = {
                        y: start
                    }, // ================================= 定义一个初始位置
                    AppScrollTopEnd = {
                        y: end
                    } ;// ================================= 定义一个结束位置

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
            downLoadPDF() {
            },
        },
        components: {
            Swiper: () => import("@/components/Swiper.vue"),
            Sticky: () => import("@/components/Sticky.vue"),
            Title: () => import("@/components/Title.vue"),
            Footer: () => import("@/components/Footer.vue"),
            PPTSwiper: () => import("@/components/PPTSwiper.vue")
        }

    }
</script>

<style scoped lang="scss">

    .wrapper {
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

                .sticky-wrapper{
                    width:100%;
                    height:70px;
                    .log{
                        width:96px;
                        height:70px;
                        background:#53b095;
                        border-radius:5px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        top:0;
                        left:226px;
                        cursor: pointer;
                        &:hover{
                            background-color: #179d82;
                            border-color: #179d82;
                        }

                        >span{
                            color:white;
                            font-size:14px;
                            font-weight:bolder;
                            line-height: 20px;

                        }
                    }
                    .sider-bar{
                        position:absolute;
                        top:30px;
                        right:238px;
                        ul{
                            display: flex;
                            flex-direction: row;
                            li{
                                font-size:14px;
                                font-weight:bolder;
                                color:white;
                                margin-left:20px;
                                cursor: pointer;
                                &:hover{
                                    color:#53b095;
                                }
                            }
                        }
                    }

                    &.active{
                        background:white;
                        .sider-bar{
                            li{
                                color:#676a6c;
                            }

                        }

                        z-index:999;
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
                z-index: 11;
                border-radius: 5px;
            }

            .content {
                width: 100%;

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

            .ppt {
                margin-top: 50px;
            }

            .client {

                .title {
                    margin-top: 55px;
                }

                .content {

                    width: 1000px;
                    display: flex;
                    flex-direction: row;
                    margin: 0 auto;
                    margin-top: 40px;
                    justify-content: space-between;
                    padding-bottom: 50px;

                    > li {
                        width: 230px;

                        h3 {
                            color: #676a6c;
                            text-align: center;
                        }

                        div {
                            margin-top: 40px;
                            color: #676a6c;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 20px;
                        }
                    }
                }

            }

            .applications {
                position: relative;
                padding: 55px 0;
                background: #f4f4f4;

                .content {
                    width: 1000px;
                    display: flex;
                    flex-direction: row;
                    margin: 0 auto;
                    margin-top: 40px;
                    justify-content: space-between;
                    padding-bottom: 50px;

                    > li {
                        width: 300px;

                        h3 {
                            color: #676a6c;
                            text-align: center;
                        }

                        div {
                            margin-top: 40px;
                            color: #676a6c;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 20px;
                            text-align: center;
                        }
                    }
                }
            }

            .services {
                position: relative;
                padding: 55px 0;
                font-size: 14px;
                font-weight: 600;
                line-height: 20px;

                .title {
                }

                .content {
                    width: 1000px;
                    display: flex;
                    flex-direction: column;
                    margin: 0 auto;
                    margin-top: 40px;
                    justify-content: space-between;
                    padding-bottom: 50px;

                    .top {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: flex-start;

                        .left {
                            width: 250px;

                            > div:nth-child(1) {
                                text-align: center;
                            }

                            > div:nth-child(2) {
                                text-align: center;
                            }
                        }

                        .right {
                            width: 250px;

                            > div:nth-child(1) {
                                text-align: center;
                            }

                            > div:nth-child(2) {
                                text-align: center;
                            }
                        }

                    }

                    .bottom {
                        width: 300px;
                        margin: 0 auto;
                        margin-top: 20px;

                        > div:nth-child(1) {
                            text-align: center;
                        }

                        > div:nth-child(2) {
                            text-align: center;
                        }
                    }

                    img {
                        width: 400px;
                    }

                    .industry {
                        width: 40px;
                        height: 40px;
                        fill: #53b095;
                    }
                }

            }

            .cases {
                position: relative;
                padding: 55px 0;
                background: #f4f4f4;

                .content {
                    font-size: 14px;
                    width: 1000px;

                    margin: 0 auto;
                    margin-top: 20px;
                    line-height: 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    .top {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;
                        margin-bottom: 20px;

                        .text {
                            width: 600px;

                            > p:nth-child(1) {
                                font-size: 16px;
                            }
                        }
                    }

                    .bottom {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;
                        margin-bottom: 20px;

                        .text {
                            width: 600px;

                            > p:nth-child(1) {
                                font-size: 16px;
                            }
                        }
                    }
                }

                img {
                    margin-bottom: 20px;
                    width: 350px;
                }
            }

            .link {
                position: relative;
                padding: 55px 0;

                .content {
                    width: 800px;
                    display: flex;
                    flex-direction: row;
                    margin: 0 auto;
                    margin-top: 40px;
                    justify-content: space-between;
                    position: relative;

                    img {
                        width: 110px;
                        height: 30px;
                    }

                }
            }
        }

        footer {

        }

    }
</style>
