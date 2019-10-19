<template>
  <div class="wrapper">
    <header>
      <Sticky :distance="distance" class="sticky">
        <div class="log">
          <span>奕格思</span>
          <span>战略咨询</span>
        </div>
        <div class="sider-bar">
          <ul class="bar">
            <li>首页</li>
            <li>我们的客户</li>
            <li>产业分析技术</li>
            <li>尖端服务</li>
            <li>经典案例</li>
            <li>研究报告</li>
            <li>联系我们</li>
          </ul>
        </div>
      </Sticky>
      <Swiper :picture="picture" ></Swiper>
      <div class="content">
        <div>致力于精准定量测量行业之间的关联 </div>
        <div>基于关键大数据来准确判断</div>
        <div>世界各国各类产业政策</div>
        <div>提供一般的产业分析无法发掘的洞见</div>
      </div>
    </header>

    <main>
      <PPTSwiper class="ppt"></PPTSwiper>
      <div class="client">
        <Title :title="titles[0]" class="title"></Title>
        <ul class="content">
            <li>
              <h2>企业</h2>
              <div>精确甄别影响企业绩效的关键因素;模拟企业战略在产业竞争中的预期效果,帮助企业理解产业的整体演进并明确战略定位。</div>
            </li>
            <li>
              <h2>投资人</h2>
              <div>预测企业在产业生态竞争中的中长期绩效，并转化为投资的价值；模拟产业在整个产业体系中的前景，便于投资者对不同产业配备资金。</div>
            </li>
            <li>
              <h2>各级政府</h2>
              <div>模拟并评估政府产业政策的预期和实际效果；构造产业生态竞争的趋势仿真，为政府优化产业布局规划提供建议。</div>
            </li>
            <li>
              <h2>国际机构</h2>
              <div>整合企业内外数据，量化企业内部管理不同环节对绩效的影响；模拟并评估国际机构的预期和实际效果。</div>
            </li>
        </ul>
      </div>

      <div class="applications">
        <Title :title="titles[1]" class="title"></Title>
        <ul class="content">
          <li>
            <h2>企业竞争战略</h2>
            <div>基于企业微观、行业中观以及国家/国际宏观的大数据，我们对经典的企业与产业分析进行了根本性的改造。</div>
          </li>
          <li>
            <h2>产业演进</h2>
            <div>我们拥有具有自主知识产权的，能够精准测算产业的生长、演进以及企业在整个产业内的生存态势的模拟平台。</div>
          </li>
          <li>
            <h2>产业政策</h2>
            <div>研究团队近年来致力于精准定量测量行业之间的关联，这为我们基于关键大数据来准确判断世界各国尤其是中国的各类产业政策的效果提供了坚实的基础。</div>
          </li>
        </ul>
      </div>

      <div class="sector">
        <Title :title="titles[2]" class="title"></Title>
        <ul class="content">
          <li>
            <div class="content-title">
              <svg class="icon industry" aria-hidden="true">
                <use xlink:href="#icon-shuju"></use>
              </svg>
              <span>数据挖掘</span>
            </div>
            <div>基于机器学习，对数据进行深度挖掘，通过可视化，清晰展现数据背后的信息。</div>
          </li>
          <li>
            <div class="content-title">
              <svg class="icon industry" aria-hidden="true">
                <use xlink:href="#icon-shujuku"></use>
              </svg>
              <span>回归模型</span>
            </div>
            <div>通过回归模型，量化自变量与因变量之间的函数关系，给出更为可靠的结论。</div>
          </li>
          <li>
            <div class="content-title">
              <svg class="icon industry" aria-hidden="true">
                <use xlink:href="#icon-navicon-ywcs"></use>
              </svg>
              <span>参数估计</span>
            </div>
            <div>基于历史数据，运用最大似然估计和贝叶斯估计，预测企业和产业的未来趋势。</div>
          </li>
          <li>
            <div class="content-title">
              <svg class="icon industry" aria-hidden="true">
                <use xlink:href="#icon-jisuanjicomputer160"></use>
              </svg>
              <span>计算机模拟</span>
            </div>
            <div>基于综合数据，运用计算机模拟平台，对企业发展和产业演化进行模拟和预测。</div>
          </li>
        </ul>
        <div class="article">
          <img src="../assets/industry/wy1.png" alt="" class="img-size">
          <p class="bolder grey">数值型变量总体和分类分布情况</p>
          <p class="grey">由此可以比较变量在不同类别中的分类差异从而获得市场对该变量的偏好信息,</p>
          <p class="grey margin-bottom-20">上图表明，总重量在4kg左右的乳制品最受市场欢迎。</p>
          <img src="../assets/industry/wy3.png" alt="" class="img-size">
          <p class="bolder grey">基于状态空间模型(State Space Model)</p>
          <p class="grey margin-bottom-20">建立线性相关关系模型，然后用卡尔曼滤波算法(Kalman Filter) 训练模型并给出对变量未来走势的预测。</p>
          <img src="../assets/industry/atm.gif" alt="" class="img-size">
          <p class="bolder grey">基于ABM计算机模拟的产业演化预测</p>
          <p class="grey margin-bottom-20">播放状态图形自动变化</p>
          <p class="blue-green left margin-bottom-10 bolder">我们的高级分析手段和独特模拟平台使我们能够从数据中发现他人难以发掘的洞见，让数据为客户的战略决策发挥最大价值。</p>
          <p class="left margin-bottom-10">我们运用其它咨询机构基本不使用的高级数据分析手段（如，面板数据回归分析，贝叶斯估计模型）。</p>
          <p class="blue-green margin-bottom-10 left bolder">我们开发了具有自主知识产权的、基于ABM的“产业演化模拟平台”，能够即时、动态模拟企业的定位、定价、销售策略，以及整体战略的竞争结果，提供一般产业分析所无从获知的洞察。</p>
          <p class="margin-bottom-10 left">我们整合了微观水平（企业）、中观水平（行业）及宏观水平（国家和国际）的多个经济数据库，为模拟企业绩效和产业演进提供了综合数据基础。</p>

        </div>
      </div>
      <div class="services">
        <Title :title="titles[3]" class="title"></Title>
        <div class="article">
          <div class="title">
            <svg class="icon industry" aria-hidden="true">
              <use xlink:href="#icon-ai-connection"></use>
            </svg>
            <span class="blue-green">企业的竞争战略及结果模拟</span>
          </div>

          <p class="left bolder grey margin-bottom-20">基于企业微观、行业中观以及国家/国际宏观的大数据，我们对经典的企业与产业分析进行了根本性的改造。我们已经开发出具有自主知识产权的，能够及时高速动态模拟测算企业的定位策略、定价策略、销售策略、以及整体战略的竞争结果的平台。</p>
          <img src="../assets/industry/flower.gif" alt="" class="img-size-500">
          <div class="title">
            <svg class="icon industry" aria-hidden="true">
              <use xlink:href="#icon-loufang"></use>
            </svg>
            <span class="blue-green">产业的演进与企业的竞争战略</span>
          </div>
            <p class="left bolder grey">我们已经积累整合了丰富的微观企业、中观行业以及宏观经济的大数据库，在此基础上，借助我们研究团队在全球价值链以及全球产业链数据、理论和政策研究上的积累，我们已经开发出具有自主知识产权的，能够精准测算产业的生长、演进以及企业在整个产业内的生存态势的模拟平台。</p>
          <div class="title">
            <svg class="icon industry" aria-hidden="true">
              <use xlink:href="#icon-shuben"></use>
            </svg>
            <span class="blue-green">产业的演进与产业政策</span>
          </div>
          <p class="left bolder grey">我们已经积累整合了丰富的微观企业、中观行业以及宏观经济的大数据库。同时，我们的研究团队近年来致力于精准定量测量行业之间的关联，这为我们基于关键大数据来准确判断世界各国尤其是中国的各类产业政策的效果，尤其是产业政策对产业演进的影响提供了坚实的基础。</p>

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
    name: "Industry",
    data(){
      return{
        distance:0,
        picture:[
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570982223814&di=e9b6f1bbf8e1fce5c69ed6b856cd4fb1&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130321%2F9678987_225139671149_2.jpg"
        ],
        titles:[
          {
            chineseName:'我们的客户',
            englishName:'Our Clients'
          },
          {
            chineseName:'应用场景',
            englishName:'Applications'
          },
          {
            chineseName:'产业分析技术',
            englishName:'Sector Analysis Methods'
          },
          {
            chineseName:'尖端服务',
            englishName:'Our Great Services',
            desc1:'涵盖社会网络、企业战略模拟与管理、竞争战略优化、政治风险预测等多领域'
          },
          {
            chineseName:'经典案例',
            englishName:'Classic Cases',
            desc1:'涵盖社会网络、企业战略模拟与管理、竞争战略优化、政治风险预测等多领域'
          },
          {
            chineseName:'行业研究报告',
            englishName:'Research Report',
          },
          {
            chineseName:'友情链接',
            englishName:'Strategic Partners',
          },
          {
            chineseName:'联系我们',
            englishName:'Contact us',
          }
        ]
      }
    },
    methods:{
      gotoIndustryPage(){
        this.$router.push("/industry")
      },
      gotoNewsPage(){
        this.$router.push("/news")
      },
      gotoSocialPage(){
        this.$router.push("/social")
      }
    },
    components:{
      Swiper:()=>import("@/components/Swiper.vue"),
      Sticky:()=>import("@/components/Sticky.vue"),
      Title:()=>import("@/components/Title.vue"),
      Footer:()=>import("@/components/Footer.vue"),
      PPTSwiper:()=>import("@/components/PPTSwiper.vue")
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
          .bar{
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
      .ppt{
        margin-top:50px;
      }
      .client{
        border:1px solid red;
        .title{
          margin-top:55px;
        }
        .content{

          width:1000px;
          display: flex;
          flex-direction: row;
          margin:0 auto;
          margin-top:40px;
          justify-content: space-between;
          padding-bottom:50px;
          >li{
            width:230px;
            h2{
              color:#676a6c;
              text-align: center;
            }
            div{
              margin-top:40px;
              color:#676a6c;
              font-weight:400;
              font-size:14px;
              line-height: 20px;
            }
          }
          }

      }
      .applications{
        background:#f4f4f4;
        position: relative;
        padding:55px 0;
        .content{
          width:1000px;
          display: flex;
          flex-direction: row;
          margin:0 auto;
          margin-top:40px;
          justify-content: space-between;
          padding-bottom:50px;
          >li{
            width:300px;
            h2{
              color:#676a6c;
              text-align: center;
            }
            div{
              margin-top:40px;
              color:#676a6c;
              font-weight:400;
              font-size:14px;
              line-height: 20px;
            }
          }
        }
      }
      .sector{
        border:1px solid red;
        position: relative;
        padding:55px 0;
        .title{
        }
        .content{
          width:1000px;
          display: flex;
          flex-direction: row;
          margin:0 auto;
          margin-top:40px;
          justify-content: space-between;
          padding-bottom:50px;
          >li{
            width:300px;
            .content-title{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .industry{
                fill:#53b095;
                width:40px;
                height:40px;
                margin-bottom:30px;
              }

              span{
                color:#53b095;
                font-weight:600;
              }

            }
            div{
              margin-top:40px;
              color:#676a6c;
              font-weight:400;
              font-size:14px;
              line-height: 20px;
            }
          }
        }
        .article{
          font-size:14px;
          width:800px;
          margin:0 auto;
          line-height: 20px;
          text-align: center;
          img{
            margin-bottom:20px;
          }
        }
      }
      .services{
        position: relative;
        padding:55px 0;
        background:#f4f4f4;
        border:1px solid red;
        .title{
        }
        .article{
          font-size:14px;
          width:800px;
          margin:0 auto;
          line-height: 20px;
          text-align: center;
          .title{
            border:1px solid red;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top:30px;
            margin-bottom:20px;
            .industry{
              fill:#53b095;
              width:40px;
              height:40px;
              margin-bottom:10px;
            }
          }

          img{
            margin-bottom:20px;
          }

        }

      }

    }
    footer{

    }

  }
</style>
