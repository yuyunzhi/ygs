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
            <li>Home</li>
            <li>我们的客户</li>
            <li>应用场景</li>
            <li>尖端服务</li>
            <li>经典案例</li>
            <li>联系我们</li>
          </ul>
        </div>
      </Sticky>
      <Swiper :picture="picture" ></Swiper>
      <div class="content">
        <div>财富和权力驱动了人类社会</div>
        <div>获取及维持财富和权力均需要战略头脑</div>
        <div>基于计算社会科学</div>
        <div>弈格思致力于助力客户的战略决策</div>
      </div>
    </header>

    <main>
      <div class="client">
        <Title :title="titles[0]" class="title"></Title>
        <ul class="content">
          <li>
            <h2>智库</h2>
          </li>
          <li>
            <h2>政府机构</h2>
          </li>
          <li>
            <h2>国际机构</h2>
          </li>
          <li>
            <h2>跨国企业</h2>
          </li>
        </ul>
      </div>
      <div class="applications">
        <Title :title="titles[1]" class="title"></Title>
        <ul class="content">
          <li>
            <h2>预测选举</h2>
            <div>基于社会科学家对选举的理解，计算社会科学可以基于这些大数据构建模拟选举结果。</div>
          </li>
          <li>
            <h2>高烈度战略（政治）风险</h2>
            <div>政变: 革命、领导人被刺杀</div>
          </li>
          <li>
            <h2>内战</h2>
            <div>内战：非族群性的内战、族群性的内战 <br>
              族群：大规模的族群骚乱</div>
          </li>
        </ul>
      </div>
      <div class="services">
        <Title :title="titles[2]" class="title"></Title>
        <div class="content">
            <div class="top">
              <div class="left">
                <div >
                  <svg class="icon industry" aria-hidden="true">
                    <use xlink:href="#icon-laba"></use>
                  </svg>
                </div>
                <div class="blue-green margin-top-10 margin-bottom-10">基于计算机仿真模拟的选举预测平台</div>
                <div class="grey left ">选举必定产生大量的数据，基于社会科学家对选举的理解，计算社会科学就有可能基于这些大数据构建模拟选举结果，包括不同选举策略下的计算机模拟平台。而我们的计算机模拟平台完全不依赖民意调查。</div>
              </div>
              <img src="../assets/social/1571548568806.gif" alt="">

              <div class="right">
                <div>
                  <svg class="icon industry" aria-hidden="true">
                    <use xlink:href="#icon-feiji"></use>
                  </svg>
                </div>
                <div class="blue-green margin-top-10 margin-bottom-10">政变风险预测及防范平台</div>
                <div class="grey desc">任何一个政权和领导人的首要任务之一是维持政权的稳定。但是，世界从未真正太平过，政变时常发生。如何甄别政变的危险并且防范政变因此成为一个重要的考量。基于社会网络分析和计算机模拟，我们已经开发完成具有自主知识产权的预测及防范平台。</div>
              </div>

            </div>
            <div class="bottom">
              <div>
                <svg class="icon industry" aria-hidden="true">
                  <use xlink:href="#icon-zhadan"></use>
                </svg>
              </div>
              <div class="blue-green margin-top-10 margin-bottom-10">内战风险及结果预测平台</div>
              <div class="grey desc">任何一个政权和领导人的首要任务之一是维持政权的稳定。但是，世界从未真正太平过，政变时常发生。如何甄别政变的危险并且防范政变因此成为一个重要的考量。基于社会网络分析和计算机模拟，我们已经开发完成具有自主知识产权的预测及防范平台。</div>
            </div>
        </div>
      </div>
      <div class="cases">
        <Title :title="titles[3]" class="title"></Title>
        <div class="content">
          <div class="top">
            <div class="text">
              <p class="blue-green margin-bottom-10">阿富汗内战结局的计算机模拟</p>
              <p class="grey bolder left margin-bottom-10">基于我们的计算机模拟平台、利用公开可获得数据，课题组模拟了前苏联从阿富汗撤军后，阿富汗内战有可能出现的结果。我们通过引入地理、气候、经济、人口、军力等宏观数据，同时模拟内战中的8支主要力量选择不同的交战和结盟战略，通过300-500次以上的计算机模拟，得出了具有不同可能性的阿富汗内战过程与结局。</p>
              <p class="grey bolder left margin-bottom-10">我们的结果表明，塔利班有75-85%以上的机会将会赢得内战。实际的最终结果与我们的预测完全一致。</p>
              <p class="grey bolder left margin-bottom-10">上述案例充分表明了利用大数据和复杂决策分析方法的及时性、科学性和可靠性，这将为政府决策提供有力的理论借鉴和实证支撑。</p>
            </div>
            <img src="../assets/social/afuhan.png" alt="">
          </div>
          <div class="bottom">
            <img src="../assets/social/vote.png" alt="">
            <div class="text">
                <p class="blue-green">台湾地区2016年选局预测</p>
                <p class="grey bolder left margin-bottom-10">基于我们的选举结果模拟平台，完全不依赖民意调查，我们系统性地预测了台湾地区的选举结果。</p>
                <p class="grey bolder left margin-bottom-10">在我国台湾地区的“领导人”和“立法院”选举之前10天，我们公布了我们的计算机模拟预测结果。而最终的选举结果表明，我们的预测是相当成功的。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="link">
        <Title :title="titles[4]" class="title"></Title>
        <div class="content">
          <li><a href="http://www.scientistin.com/" target="_blank"><img src="../assets/industry/link/logonew.png" alt=""></a></li>
          <li><a href="http://cig.ccxe.com.cn/index.html" target="_blank"><img src="../assets/industry/link/CIlogo.png" alt=""></a></li>
          <li><a href="http://cig.ccxe.com.cn/product.html" target="_blank"><img src="../assets/industry/link/logocebm.png" alt=""></a></li>
          <li><a href="http://www.koncen.com/" target="_blank"><img src="../assets/industry/link/kangsheng.png" alt=""></a></li>
        </div>
      </div>
    </main>
    <footer>
      <Footer :title="titles[titles.length-1]"></Footer>
    </footer>

  </div>
</template>

<script>
  export default {
    name: "Social",
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
            englishName:'Scenarios'
          },
          {
            chineseName:'尖端服务',
            englishName:'Our Great Services',
            desc1:'预测选举的结果并基于预测的选举策略调整建议,以及高烈度战略（政治）风险预测'
          },
          {
            chineseName:'经典案例',
            englishName:'Classic Cases',
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
      },
      downLoadPDF(){
      },
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
        position: relative;
        padding:55px 0;
        background:#f4f4f4;
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
              text-align: center;
            }
          }
        }
      }
      .services{
        position: relative;
        padding:55px 0;
        font-size:14px;
        font-weight:600;
        line-height: 20px;
        .title{
        }
        .content{
          width:1000px;
          display: flex;
          flex-direction: column;
          margin:0 auto;
          margin-top:40px;
          justify-content: space-between;
          padding-bottom:50px;
          .top{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            .left{
              width:250px;
              >div:nth-child(1){
                text-align: center;
              }
              >div:nth-child(2){
                text-align: center;
              }
            }
            .right{
              width:250px;
              >div:nth-child(1){
                text-align: center;
              }
              >div:nth-child(2){
                text-align: center;
              }
            }

          }
          .bottom{
            width:300px;
            margin:0 auto;
            margin-top:20px;
            >div:nth-child(1){
              text-align: center;
            }
            >div:nth-child(2){
              text-align: center;
            }
          }
          img{
            width:400px;
          }
          .industry{
            width:40px;
            height:40px;
            fill:#53b095;
          }
        }

      }
      .cases{
        position: relative;
        padding:55px 0;
        background:#f4f4f4;
        .content {
          font-size: 14px;
          width: 1000px;

          margin: 0 auto;
          margin-top:20px;
          line-height: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .top{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width:100%;
            margin-bottom:20px;
            .text{
              width:600px;
              >p:nth-child(1){
                font-size:16px;
              }
            }
          }
          .bottom{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width:100%;
            margin-bottom:20px;
            .text{
              width:600px;
              >p:nth-child(1){
                font-size:16px;
              }
            }
          }
        }
        img{
          margin-bottom:20px;
          width:350px;
        }
      }
      .link{
        position: relative;
        padding:55px 0;
        .content{
          width:800px;
          display: flex;
          flex-direction: row;
          margin:0 auto;
          margin-top:40px;
          justify-content: space-between;
          position: relative;
          img{
            width:110px;
            height:30px;
          }

        }
      }
    }
    footer{

    }

  }
</style>
