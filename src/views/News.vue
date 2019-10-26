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
            <div class="introduce">
                <Title :title="titles[0]" class="title"></Title>
                <div class="content">
                    After careful preparation and planning, starting in July 2018, “ICSSAI Strategic Consulting” initiated a systematic study of several industries in China. The main objective of this research is to systematically examine key industries in China and to study the overall situation and data features of these industries so as to be able to make theoretical and empirical evaluations of the effectiveness of China's industrial development policies. After a year of hard work, our research goals of the first phase have been achieved, and our research is progressing through the second stage.
                    <br><br>
                    In the first phase of our study, we developed a research framework based on advanced data visualization and statistical analysis techniques that allowed us to identify factors within the industry that were not captured by primary statistical analysis. At the same time, we have conducted in-depth case studies on several key or typical companies in each industry.
                    <br><br>
                    While completing the first phase of the research mission, we organized and trained a research team capable of advanced data processing and analysis capabilities with an in-depth understanding of specific industries. During the process of the research, our team has also accumulated more diverse data methods and visualization techniques.
                </div>
                <div class="content bolder">
                    So far, we have completed or are about to complete the first phase of research in eight industries: machinery, automotive vehicles, auto parts, real estate, food and dairy products, home appliances, medicine, and electronics. We will also complete research reports on the chemical industry and agriculture in the coming months.
                </div>
                <div class="content bolder">
                    Our industrial research layout
                    <br><br>
                </div>
                <img src="../assets/news/jinzhanbaogao.png" alt="">
                <br><br>
                <div class="content bolder">
                    (The industries <span class="red">marked by the red circle </span>are the industries in which we have completed or are about to complete research, and the industries<span class="blue"> marked by the blue circles </span>are the industries under study.)
                </div>
                <div class="content">
                    For readers interested in our research, please download the summary of our completed industry research report from our website.
                    <br><br>
                    As of August 2019, our industrial research has entered the next stage. At this stage, we will quantify the state of development for China's current important industries through more advanced industrial economics research methods and compare it with the world's leading countries to find out the extent of the gap in production technology, product quality, and enterprise scale between China and other countries. Measuring the changes in the status of these industries in the global industrial chain provides a more accurate reference for the development of China's related industries, special industrial policy formulation and industrial upgrading.
                </div>
                <div class="content bolder">
                    We sincerely welcome companies, investment institutions and local governments in these industries to contact us!
                </div>
            </div>
        </main>
        <footer>
            <Footer :title="titles[1]"></Footer>
        </footer>

    </div>
</template>

<script>
    export default {
        name: "News",
        data(){
            return{
                distance:0,
                picture:[
                    require("../assets/land/header_one_1.png"),
                    require("../assets/land/header_one_2.png"),
                    require("../assets/land/header_one_3.png")
                ],
                titles:[
                    {
                        englishName:'Industrial Research: Progress Update',
                    },
                    {
                        englishName:'Contact Us',
                    },

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

            },
            $route: {
                handler(newName, oldName) {
                    console.log('$route has changed',newName,oldName);
                },
                deep: true
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
        methods:{
            scrollMethod(){
                // console.log(document.documentElement.scrollTop);
                this.currentScrollTop = document.documentElement.scrollTop;
                this.updateHeight()
            },
            updateHeight(){
                this.header = document.getElementsByClassName('header')[0].offsetTop

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
            gotoIndustryPage(){
                this.$router.push("/industry")
            },
            gotoIndexPage(){
                this.$router.push("/")
            },
        },
        components:{
            Swiper:()=>import("@/components/Swiper.vue"),
            Sticky:()=>import("@/components/Sticky.vue"),
            Title:()=>import("@/components/Title.vue"),
            Footer:()=>import("@/components/Footer.vue")


        }

    }
</script>

<style scoped lang="scss">

    .wrapper{
        width: 100vw;
        position: relative;
        header{
            position: relative;
            .sticky{
                position: absolute;
                top:0;
                left:0;
                z-index: 10;
                width:100%;
                height:70px;
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
            .more{
                background:#53b095;
                padding:12px 18px;
                color:white;
                font-weight:bolder;
                font-size:14px;
                position: absolute;
                top:345px;
                left:50%;
                transform: translateX(-50%);
                z-index: 1;
                border-radius:5px;
                cursor: pointer;
            }
            .content{
                width:80%;
                position: absolute;
                top:170px;
                left:50%;
                font-size:32px;
                font-weight:500;
                color:white;
                z-index: 1;
                transform: translateX(-50%);
                text-align: center;
                line-height: 40px;
            }
        }
        main{
            position: relative;
            padding-bottom:72px;
            .news{
                .title{
                    margin-top:125px;
                }
                .content{
                    margin-top:55px;
                    color:#337ab7;
                    font-size:16px;
                    line-height:30px;
                    width:100%;
                    text-align: center;
                    font-weight: 200;
                    cursor: pointer;
                    .report:hover{
                        color:#23527c;
                    }
                    .jd{
                        -webkit-user-select: none;
                        -moz-user-focus: none;
                        -moz-user-select: none;
                        color:#337ab7;
                        font-size:16px;
                        line-height:30px;
                        width:100%;
                        cursor: pointer;
                        &:hover{
                            color:#23527c;
                        }
                    }
                }
            }
            .introduce{
                position: relative;
                .title{
                    margin-top:125px;
                }
                .content{
                    font-size:18px;
                    font-weight:200;
                    width:1000px;
                    line-height:28px;
                    margin:0 auto;
                    color:#676a6c;
                    margin-top:20px;

                }
                img{
                    position: relative;
                    width:800px;
                    left:50%;
                    transform: translateX(-50%);
                }
            }

        }
        footer{

        }

    }
</style>
