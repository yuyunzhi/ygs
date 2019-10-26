<template>
    <div class="index-wrapper" ref="index">
        <header>
            <Sticky :distance="distance" class="sticky" >
                <div :class="{'sticky-wrapper':true,'active':activeHeader}">
                    <div class="log">
                        <span>奕格思</span>
                        <span >战略咨询</span>
                    </div>
                    <div class="sider-bar">
                        <ul >
                            <li @click="gotoIndexPage">首页</li>
                            <li @click="scrollServe">服务</li>
                            <li >公司简介</li>
                            <li>联系我们</li>
                        </ul>
                    </div>
                </div>

            </Sticky>
            <Swiper :picture="picture"></Swiper>
            <div class="content">
                <div>财富和权力驱动了人类社会 </div>
                <div>获取及维持财富和权力均需要战略头脑</div>
                <div>基于计算社会科学</div>
                <div>弈格思致力于助力客户的战略决策</div>
            </div>
            <span class="more" @click="gotoIndustryPage">了解更多</span>
        </header>

        <main>
            <div class="news" id="id">
                <Title :title="titles[0]" class="title"></Title>
                <div class="content">
                    <div class="report" @click="gotoNewsPage">产业研究：一年进展报告</div>
                    <div class="jd" >招聘产业项目经理</div>
                </div>
            </div>
            <div class="decision">
                <Title :title="titles[1]" class="title"></Title>
                <div class="content">
                    <div class="challenge">
                        <div class="en-title">challenge</div>
                        <div class="ch-title">挑战
                            <img src="../assets/logo.png" alt="">
                        </div>
                        <ul class="list">
                            <li>对所有的决策者来说，两个最大的挑战是信息的缺乏以及处理信息的能力。 在相当长的时间里，这两个挑战都是无解的。</li>
                            <li>因此，传统的决策咨询几乎完全依赖专家判断。由于缺乏足够强大的计算能力、众多数据的缺失，加上社会科学理论和实证研究的积累不够，决策者在很多时候只能依赖于专家判断。 传统的决策咨询是一个前信息革命时代的产物。这样的决策模式将 很难有效应对现代国家和企业所面临的高度复杂和快速变化的环境。</li>
                        </ul>
                    </div>
                    <div class="revolution">
                        <div class="en-title">revolution</div>
                        <div class="ch-title">革命
                            <img src="../assets/logo.png" alt="">
                        </div>
                        <ul class="list">
                            <li> 计算社会科学将革命性地改变“决策科学”。计算社会科学为现代国家和现代企业提供了一个应对高度复杂和快速变化的环境的工具。</li>
                            <li>计算社会科学（ CSS ）是社会科学和计算机技术的交叉学科。 它以社会科学的理论和实证研究为数理模型和程序设计提供核心和基础思想，以计算机技术、大数据、机器学习、和人工智能（AI）为核心技术平台，通过大规模计算和模拟，对我们关心的社会行为、事件进行推演和计算的科学。</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="service" id="d3">
                <Title :title="titles[2]" class="title"></Title>
                <div class="content">
                    <div class="button">
                        <div>经济</div>
                        <div>企业、产业</div>
                        <div @click="gotoIndustryPage">获取详情</div>
                    </div>
                    <img src="../assets/afuhan.png" alt="">
                    <div class="button">
                        <div>权力</div>
                        <div>政治、社会</div>
                        <div @click="gotoSocialPage">获取详情</div>
                    </div>
                </div>
            </div>
            <div class="introduce">
                <Title :title="titles[3]" class="title"></Title>
                <div class="content">
                    上海弈格思商务信息咨询有限公司是一家以“计算社会科学”为核心技术平台的战略咨询公司。弈格思取意于整合的（Integrated）CSS-AI的谐音。公司整合计算社会科学、计算机技术、大数据、人工智能及专家知识，构建了多个具有自主知识产权的，针对不同战略决策问题的智能战略决策计算机模拟系统和平台。基于这些计算机模拟系统和平台，公司能够将战略决策、战略行为、战略竞争结果以及战略风险模型化，基于计算机模拟仿真及预测，为客户提供科学和全面的战略分析、战略决策及战略竞争咨询，助力客户建立以“数据”为基础的科学化和模型化的决策体系。基于计算社会科学，“弈格思”将与客户并肩作战，为客户量身定制战略决策，协助客户创造可持续的价值收益。
                </div>
            </div>
        </main>
        <footer>
            <Footer :title="titles[4]"></Footer>
        </footer>

    </div>
</template>

<script>
export default {
    name: "Index",
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
                    chineseName:'公司新闻',
                    englishName:'Company News'
                },
                {
                    chineseName:'计算社会科学与即将到来的决策科学革命',
                    englishName:'Revolution In Decision-Making',
                    desc1:'财富和权力驱动了人类社会。获取及维持财富和权力均需要战略头脑。' ,
                    desc2:'基于计算社会科学，弈格思致力于助力客户的战略决策。'
                },
                {
                    chineseName:'尖端服务',
                    englishName:'Our Great Services',
                    desc1:'涵盖社会网络、企业战略模拟与管理、竞争战略优化、政治风险预测等多领域。' ,
                },
                {
                    chineseName:'公司简介',
                    englishName:'Company profile',
                },
                {
                    chineseName:'联系我们',
                    englishName:'Contact us',
                },

            ],
            currentScrollTop:0,
            activeHeader:false
        }
    },
    watch:{
        currentScrollTop(n){
            console.log('watch',n);
            if (n > 2) {
                this.activeHeader = true
            } else {
                this.activeHeader = false
            }

        }
    },
    mounted(){
        // console.log('news.scrollTop',document.documentElement.scrollTop  );
        //this.tweenAni();
        // let height = document.getElementsByClassName('news')[0].getBoundingClientRect().top
        // console.log('news',height);
        // this.decision = document.getElementsByClassName('decision')[0].getBoundingClientRect().y
        // console.log('descion ',this.decision);
        // this.service = document.getElementsByClassName('service')[0].getBoundingClientRect().y
        // console.log('service ',this.service);
        // this.introduce = document.getElementsByClassName('introduce')[0].getBoundingClientRect().y
        // console.log('introduce ',this.introduce);

        console.log('ref',this.$refs.index);
        window.addEventListener("scroll",  (e)=> {
            //onsole.log(document.documentElement.scrollTop);
            this.currentScrollTop = document.documentElement.scrollTop;

            // this.news = document.getElementsByClassName('news')[0].getBoundingClientRect()
            console.log('currentScrollTop ',this.currentScrollTop );
          // console.log( '当前滚动的距离' ,this.currentScrollTop);

            // if(document.body.scrollHeight <= window.screen.height + document.body.scrollTop){
            //
            //     }
        },false)
    },
    methods:{
        // TweenJs 动画监听
        tweenAni () {
            requestAnimationFrame(this.tweenAni);
            TWEEN.update(); // ================================= 关键是这句
        },
        scrollServe(){
            let start
            let end
            // console.log(this.service);
            let currentScrollTop = this.currentScrollTop
            // console.log(currentScrollTop);
            if(this.service > this.currentScrollTop){
                start = this.currentScrollTop
                end = this.service
            }else{
                start =this.service
                end=this.currentScrollTop
            }
            this.scrollPage(start,end)

        },
        scrollPage(start,end){
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
            this.$router.push("/industry/en")
        },
        gotoNewsPage(){
            this.$router.push("/news/en")
        },
        gotoSocialPage(){
            this.$router.push("/social/en")
        },
        gotoIndexPage(){
            this.$router.push("/index/en")
        }
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

.index-wrapper{
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
            width:70%;
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
        .decision{
            position: relative;
            .title{
                margin-top:125px;
            }
            .content{

                display: flex;
                flex-direction: row;
                justify-content:space-between;
                margin:0 auto;
                margin-top:62px;
                align-items: center;
                width:1000px;

                .challenge,
                .revolution{
                    width:460px;
                    .en-title{
                        color:#53b095;
                        font-weight:500;
                        font-size:20px;
                        margin-bottom:10px
                    }
                    .ch-title{
                        color:#676a6c;
                        font-weight:200;
                        font-size:32px;
                        margin-bottom:10px;
                        position: relative;
                        img{
                            width:40px;
                            height:40px;
                            position: absolute;
                            right:0;
                            top:-5px;
                     }
                    }
                    ul{
                        color:#676a6c;
                        font-weight:600;
                        font-size:14px;
                        margin-bottom:10px;
                        line-height:20px;
                        list-style:disc;
                        padding-left:20px;
                        li{
                            margin-bottom:20px;
                            list-style:disc;
                        }
                    }
                }
            }
        }
        .service{
            position: relative;
            .title{
                margin-top:125px;
            }
            .content{
                display:flex;
                flex-direction: row;
                width:1000px;
                margin:0 auto;
                margin-top:40px;
                justify-content: space-around;
                align-items: center;
                img{
                    width:470px;
                    height:470px;
                }
                .button{
                    div:nth-child(1){
                        color:#53b095;
                        font-size:18px;
                        font-weight:200;
                        line-height: 28px;
                        text-align: center;

                    }
                    div:nth-child(2){
                        color:#676a6c  ;
                        font-size:18px;
                        font-weight:200;
                        line-height: 28px;

                    }
                    div:nth-child(3){
                        color:white;
                        background:#53b095;
                        font-size:14px;
                        font-weight:600;
                        width:100px;
                        height:42px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-top:5px;
                        border-radius: 3px;
                        cursor: pointer;
                        &:hover{
                            background-color: #179d82;
                            border-color: #179d82;
                        }


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
                font-size:15px;
                font-weight:600;
                width:1000px;
                line-height:24px;
                margin:0 auto;
                color:#676a6c;
                margin-top:20px;

            }
        }

    }
    footer{

    }

}
</style>
