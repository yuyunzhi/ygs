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
                        <li @click="gotoIndexPage">首页</li>
                    </ul>
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
            <div class="introduce">
                <Title :title="titles[0]" class="title"></Title>
                <div class="content">
                    在经过充分的准备和筹划之后，于2018年7月开始，“弈格思战略咨询”启动了对中国部分产业的系统性研究。此研究的主要目标是：通过系统性地考察中国的一些重要产业，对于这些产业的整体概况和数据特征进行研究，从而能够对我国产业发展政策的效用进行基于理论和实证的评估。 经过一年的努力，我们第一阶段的研究目标已经基本达成，研究将进入下一个阶段。
                    <br><br>
                    在第一阶段的研究中，我们发展出了一套基于高级数据可视化和统计分析技巧的研究框架，从而能够让我们发现初级统计分析所不能捕捉到的产业内部影响因素。同时，我们还对每一个产业的几家重点或典型企业进行了比较深入的个案研究。
                    <br><br>
                    通过完成第一阶段的研究任务，我们组建并训练了一支拥有高级数据处理和分析能力，并且对于特定产业有了一定了解的研究团队。在研究的过程中，我们的团队也积累了更加多样化的数据方法和可视化技巧。
                </div>
                <div class="content bolder">
                    迄今为止，我们已经完成或即将完成了对8个行业的第一阶段的研究，这8个行业是：机械、汽车整车、汽车零配件、房地产、食品+乳制品、家电、医药，以及电子。我们还将在未来的几个月完成对化工行业和农业的研究报告。
                </div>
                <div class="content bolder">
                    图一：我们的产业研究布局
                    <br><br>
                </div>
                <img src="../assets/news/jinzhanbaogao.png" alt="">
                <br><br>
                <div class="content bolder">
                    （ <span class="red">红圈</span>标注的产业为已经完成或即将完成研究的产业，<span class="blue"蓝圈</span>标注的产业为正在进行研究的产业。）
                </div>
                <div class="content">
                    对我们的研究感兴趣的读者，请从“弈格思战略咨询”的官方网页上下载我们已经完成的产业研究报告摘要。
                    <br><br>
                    从2019年8月开始，我们的产业研究将进入下一阶段。在这一个阶段，我们将通过更加高级的产业经济学的研究方法，量化我国目前上述重要产业的发展状况，并将其与世界领先国家进行对比，找出我国在生产技术、产品质量、企业规模甚至企业经营管理等方面与世界领先国家的差距；度量这些产业在全球产业链中的地位的变迁，为我国相关产业的发展，特别产业政策制定、产业升级方面提供更为精准的参考。
                </div>
                <div class="content bolder">
                    我们热诚欢迎上述产业中的企业、投资机构、以及地方政府联系我们!
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
                        chineseName:'产业研究：一年进展报告',
                        // englishName:'Contact us',
                    },
                    {
                        chineseName:'联系我们',
                        englishName:'Contact us',
                    },

                ]
            }
        },
        methods:{
            gotoIndustryPage(){
                this.$router.push("/industry")
            },
            // gotoNewsPage(){
            //     this.$router.push("/news")
            // },
            // gotoSocialPage(){
            //     this.$router.push("/social")
            // },
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
                                color::#53b095;
                            }
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
