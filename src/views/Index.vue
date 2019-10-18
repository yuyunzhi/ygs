<template>
    <div class="wrapper">
        <header>
            <Sticky :distance="distance" class="sticky">
                <div class="log">
                    <span>奕格思</span>
                    <span>战略咨询</span>
                </div>
                <div class="sider-bar">
                    <ul >
                        <li>首页</li>
                        <li>服务</li>
                        <li>公司简介</li>
                        <li>联系我们</li>
                    </ul>
                </div>
            </Sticky>
            <Swiper></Swiper>
            <div class="content">
                <div>财富和权力驱动了人类社会 </div>
                <div>获取及维持财富和权力均需要战略头脑</div>
                <div>基于计算社会科学</div>
                <div>弈格思致力于助力客户的战略决策</div>
            </div>
            <span class="more" @click="learnMorePage">了解更多</span>
        </header>

        <main>
            <div class="news">
                <Title :title="titles[0]" class="title"></Title>
                <div class="content">
                    <div class="report" @click="gotoNewsPage">产业研究：一年进展报告</div>
                    <a class="jd" target="_blank" href="xiangmujingli.pdf">招聘产业项目经理</a>
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
            <div class="service">
                <Title :title="titles[2]" class="title"></Title>
                <div class="content">

                </div>
            </div>
            <div class="introduce">
                <Title :title="titles[3]" class="title"></Title>
                <div class="content">
                    上海弈格思商务信息咨询有限公司是一家以“计算社会科学”为核心技术平台的战略咨询公司。弈格思取意于整合的（Integrated）CSS-AI的谐音。公司整合计算社会科学、计算机技术、大数据、人工智能及专家知识，构建了多个具有自主知识产权的，针对不同战略决策问题的智能战略决策计算机模拟系统和平台。基于这些计算机模拟系统和平台，公司能够将战略决策、战略行为、战略竞争结果以及战略风险模型化，基于计算机模拟仿真及预测，为客户提供科学和全面的战略分析、战略决策及战略竞争咨询，助力客户建立以“数据”为基础的科学化和模型化的决策体系。基于计算社会科学，“弈格思”将与客户并肩作战，为客户量身定制战略决策，协助客户创造可持续的价值收益。
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: "Index",
    data(){
        return{
            distance:0,
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

            ]
        }
    },
    methods:{
        learnMorePage(){
            this.$router.push("/industry")
        },
        gotoNewsPage(){
            this.$router.push("/news")
        },
        gotoJDPage(){
            this.$router.push("/jd")
        }
    },
    components:{
        Swiper:()=>import("@/components/Swiper.vue"),
        Sticky:()=>import("@/components/Sticky.vue"),
        Title:()=>import("@/components/Title.vue")

    }

}
</script>

<style scoped lang="scss">

.wrapper{
    width: 100vw;
    position: relative;
    margin-bottom:500px;
    header{
        position: relative;
        .sticky{
            position: absolute;
            top:0;
            left:0;
            z-index: 10;
            width:100%;
            height:70px;
            border:1px solid red;
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
                &:active{
                    background:#53b075;
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
                    }
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
            z-index: 11;
            border-radius:5px;
        }
        .content{
            width:100%;
            border:1px solid red;
            position: absolute;
            top:170px;
            left:50%;
            font-size:32px;
            font-weight:500;
            color:white;
            z-index: 11;
            transform: translateX(-50%);
            text-align: center;
            line-height: 40px;
        }
    }
    main{
        position: relative;
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

}
</style>
