<template>
  <div class="wrapper">
    <header class="header">
      <Sticky :distance="distance" class="sticky">
        <div :class="{'sticky-wrapper':true,'active':activeHeader}">
          <div class="log" @click="gotoIndexPage">
            <span>ICSSAI</span>
            <span >Consulting</span>
          </div>
          <div class="sider-bar">
            <ul class="bar">
              <li @click="scrollServe('header',0)">Home</li>
              <li @click="scrollServe('client',400)">Our Clients</li>
              <li @click="scrollServe('sector',500)">Sector Analysis</li>
              <li @click="scrollServe('services',500)">Service</li>
              <li @click="scrollServe('cases',500)">Cases</li>
              <li @click="scrollServe('report',500)">Report</li>
              <li @click="scrollServe('contact',500)">Contact Us</li>
            </ul>
          </div>
        </div>

      </Sticky>
      <Swiper :picture="picture" ></Swiper>
      <div class="content">
        <div>We are committed to quantifying the relationships among industries.</div>
        <div>Making accurate judgements on various industrial policies </div>
        <div>for different countries based on essential data.</div>
        <div>Providing insights that cannot be discovered by general industry analysis.</div>
      </div>
    </header>

    <main>
      <PPTSwiper class="ppt"></PPTSwiper>
      <div class="client">
        <Title :title="titles[0]" class="title"></Title>
        <ul class="content">
            <li>
              <h4 style="text-align: center">For Corporate Clients</h4>
              <div>ICSSAI will accurately identify the key factors affecting corporate performance. By simulating possible effects of corporate strategy in industrial competition, we can help companies understand the overall evolution of industries and define strategic positioning.</div>
            </li>
            <li>
              <h4 style="text-align: center">For Investors</h4>
              <div>ICSSAI can forecast the medium- and long-term performance of enterprises in the industrial ecological arena and translate that analysis into the value of the investment. We can simulate the prospects of industries in the entire industrial system in order for investors to allocate funds to different industries.</div>
            </li>
            <li>
              <h4 style="text-align: center">For Governmental Clients</h4>
              <div>Taking a wider view beyond an individual company or industry, ICSSAI can simulate and evaluate expected and actual effects of government industrial policies. We can construct trend simulations of industrial ecological competition and provide suggestions for governmental clients to optimize industrial layout planning.</div>
            </li>
            <li>
              <h4 style="text-align: center">For International Organizations or Agencies</h4>
              <div style="margin-top:25px;">Working internationally and domestically, ICSSAI will integrate internal and external data to quantify the impact of different aspects of internal management on performance and simulate and evaluate the expected and actual results of international institutions.</div>
            </li>
        </ul>
      </div>
      <div class="applications">
        <Title :title="titles[1]" class="title"></Title>
        <ul class="content">
          <li>
            <h4 style="text-align: center">Corporate Competition Strategy</h4>
            <div>Based on micro level (enterprise), meso level (industry), and macro level (national and international) data, we have made fundamental modifications for classic enterprise and industry analysis.</div>
          </li>
          <li>
            <h4 style="text-align: center">Industrial Evolution</h4>
            <div>We have built a simulation platform with independent intellectual property rights that can accurately measure the growth and evolution of an industry and the survival of companies in entire industries.</div>
          </li>
          <li>
            <h4 style="text-align: center">Industrial Policy</h4>
            <div>Our research team has been committed to accurately quantifying and measuring the relationships among industries, which provides a solid foundation for us, using big data[What exactly do you mean by “big data?”], to accurately judge the effects of various industrial policies in different countries, especially China.</div>
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
              <span>Data Mining</span>
            </div>
            <div>Based on machine learning, the input behind the data is clearly displayed through data mining and visualization. </div>
          </li>
          <li>
            <div class="content-title">
              <svg class="icon industry" aria-hidden="true">
                <use xlink:href="#icon-shujuku"></use>
              </svg>
              <span>Regression Modeling</span>
            </div>
            <div>Through regression models, the functional relationship between independent variables and dependent variables is quantified, which provides a more reliable conclusion.</div>
          </li>
          <li>
            <div class="content-title">
              <svg class="icon industry" aria-hidden="true">
                <use xlink:href="#icon-navicon-ywcs"></use>
              </svg>
              <span>Parameter Estimation</span>
            </div>
            <div>Based on historical data, Maximum Likelihood Estimation and Bayesian Estimation are used to predict future trends of enterprises and industries.</div>
          </li>
          <li>
            <div class="content-title">
              <svg class="icon industry" aria-hidden="true">
                <use xlink:href="#icon-jisuanjicomputer160"></use>
              </svg>
              <span>Computer Simulation</span>
            </div>
            <div>Based on comprehensive data input, enterprise development and industrial evolution can be simulated and predicted using a computer simulation platform.</div>
          </li>
        </ul>
        <div class="article">
          <img src="../assets/industry/wy1.png" alt="" class="img-size">
          <p class="bolder grey">Numerical Variable Population and Classification Distribution</p>
          <p class="grey">From this, it is possible to compare the classification variation of the variables in different categories to obtain market preference information concerning the variable.</p>
          <p class="grey margin-bottom-20">The above picture shows that dairy products with a total weight of around 4kg are the most popular on the market.</p>
          <img src="../assets/industry/wy3.png" alt="" class="img-size">
          <p class="bolder grey">Spatial Model</p>
          <p class="grey margin-bottom-20">A linear correlation model is established, and the Kalman filter is used to train the model and make a prediction on the future trend of variables.</p>
          <img src="../assets/industry/atm.gif" alt="" class="img-size">
          <p class="bolder grey">ABM[Spell this out unless you have introduced this acronym elsewhere or it is very familiar in your field/occupation.]-Based Industrial Evolution Simulation</p>
          <p class="grey margin-bottom-20">States and shapes play automatically</p>
          <p class="blue-green left margin-bottom-10 bolder">Our advanced analytics and unique simulation platform enable us to discover insights from data that are difficult for others to discover, which brings significant value to the service we offer to our customers engaged in strategic decision making.</p>
          <p class="left margin-bottom-10">We use advanced data analysis methods—such as panel data regression analysis and Bayesian estimation models—that are not used by other consulting agencies.</p>
          <p class="blue-green margin-bottom-10 left bolder">We developed and patented an ABM[Spell this out unless you have introduced this acronym elsewhere or it is very familiar in your field/occupation.]-based “Industrial Evolution Simulation Platform[Is this a formal name of a program or operating system, or is it a general description of what it is? I the latter, don’t capitalize the words.]”, which can instantly and dynamically simulate positioning, pricing, sales strategy, and overall strategic competition results, thereby providing insights that are not discovered by general industry analysis. </p>
          <p class="margin-bottom-10 left">We have integrated multiple economic databases at the micro level (enterprise), meso level (industry), and macro level (national and international) to provide a comprehensive data foundation for simulating firm performance and industry evolution.</p>

        </div>
      </div>
      <div class="services">
        <Title :title="titles[3]" class="title"></Title>
        <div class="article">
          <div class="title">
            <svg class="icon industry" aria-hidden="true">
              <use xlink:href="#icon-ai-connection"></use>
            </svg>
            <span class="blue-green">Enterprise Competitive Strategy and Simulation of Results</span>
          </div>

          <p class="left bolder grey margin-bottom-20">Based on micro level (enterprise), meso level (industry), and macro level (national and international) data, we have made fundamental modifications to classic enterprise and industrial analysis. We have developed a platform with independent intellectual property rights that enables timely and high-speed dynamic simulation of a company's positioning, pricing, and sales strategies, as well as overall strategic competition results.</p>
          <img src="../assets/industry/flower.gif" alt="" class="img-size-500">
          <div class="title">
            <svg class="icon industry" aria-hidden="true">
              <use xlink:href="#icon-loufang"></use>
            </svg>
            <span class="blue-green">Evolution of Industries and Competitive Strategy of Enterprises</span>
          </div>
            <p class="left bolder grey">We have accumulated and integrated a large database of enterprises, industry, and economy. [What aspects of those areas make up your database? What did you gather data on?]On this basis, with the accumulation of our research in global value chains, global industry chain data, and theory and policy [What type of theory and policy?]research, we have developed a simulation platform that can accurately measure the growth and evolution of industries and the survival of companies in the entire industry.</p>
          <div class="title">
            <svg class="icon industry" aria-hidden="true">
              <use xlink:href="#icon-shuben"></use>
            </svg>
            <span class="blue-green">Industry Evolution and Industrial Policy</span>
          </div>
          <p class="left bolder grey">Our research team has been committed to accurately quantifying and measuring the relationships among industries in recent years, which provides a solid foundation for us to accurately judge the effects of various industrial policies in different countries, especially in China. Particularly, we are able to determine the effect of industrial policies for industrial evolution by utilizing big data[Again, what do you mean by “big data?”]. </p>

        </div>
      </div>
      <div class="cases">
        <Title :title="titles[4]" class="title"></Title>
        <div class="article">
          <img src="../assets/industry/1534489634(1).png" alt="" class="img-size-500 margin-top-20">
          <p class="blue-green left bolder margin-bottom-20">Ethiopian Industrialization and the Construction of the Yaji Railway Economic Corridor</p>
          <p class="left bolder grey margin-bottom-20">The African Research Group of the School of International Relations and Public Affairs of Fudan University, on December 9, 2017, with group members Tang Shiping, Zheng Yu, Zhao Jianzhi, Jiang Wei, Pippa, and Liu Chen.[This seemed like a photo caption to me, so I edited it accordingly.]。</p>
          <p class="left bolder grey margin-bottom-20">The project was commissioned by Dr. Arkebe Oqubay, Special Adviser to the Prime Minister of Ethiopia, to conduct in-depth research on the coordinated development of the economy as related to the Ethiopian Industrial Park, Addis Abbas, and the Djibouti Railway.</p>
          <p class="left bolder grey margin-bottom-20">The members of the research team have studied Changzhou, Jiangsu, Wuhu, Anhui, Chengdu, Chongqing, and the Chongqing Economic Development Zone and have visited the Ethiopian Industrial Park. They have conducted in-depth communications with relevant Ethiopian leaders and government ministers. The theoretical basis, institutional environment, basic direction, and development prospects of industrial policies have been thoroughly studied. The research results of the project have been highly evaluated by the Ministry of Commerce and the Ministry of Foreign Affairs, which made them an important factor in the Chinese government’s  collaboration in the African economy and formulation of industrial policy for Ethiopia.</p>
          <img src="../assets/industry/tuoou.png" alt="" class="img-size-500 ">
          <p class="blue-green left bolder margin-bottom-20">The Future of Brexit and Its Impact</p>
          <p class="left bolder grey margin-bottom-20">In April 2018, our company was commissioned by a large Hong Kong company to complete a project consisting of predicting the future of Brexit and its impact on the UK economy. </p>
          <p class="left bolder grey margin-bottom-20">The project also explored the impact of Brexit on the international currency market and predicted future changes in the British pound exchange rate and the UK's relevant economic indicators. </p>
          <p class="left bolder grey margin-bottom-20">The project team first explored the possible impact of Brexit on the UK's domestic market and set up corresponding scenarios based on different outcomes of Brexit. Through quantitative means, the prospects of the British currency and financial markets under different scenarios were analyzed and predicted. The project effectively predicts the overall trend of the British pound after July 2019, helping customers to set up financial currency hedging strategies in advance and effectively reducing the impact of pound's depreciation on customers.</p>
        </div>
      </div>
      <div class="report">
        <Title :title="titles[5]" class="title"></Title>
        <div class="content">
          <div class="item">
            <span>弈格思-2018-机械制造行业研究报告摘要</span>
            <a href="//icssai-consulting.com/en/pdf/jxzz.pdf" download="弈格思-2018-机械制造行业研究报告摘要" target="_blank">
              <svg class="icon down" aria-hidden="true"  >
                <use xlink:href="#icon-down"></use>
              </svg>
            </a>

          </div>
          <div class="item">
            <span>弈格思-2018-房地产行业报告摘要</span>
            <a href="//icssai-consulting.com/en/pdf/fdc.pdf" download="弈格思-2018-房地产行业报告摘要" target="_blank">
              <svg class="icon down" aria-hidden="true"  >
                <use xlink:href="#icon-down"></use>
              </svg>
            </a>
          </div>
          <div class="item">
            <span>弈格思-2019-乳制品行业报告摘要</span>
            <a href="//icssai-consulting.com/en/pdf/rzp.pdf" download="弈格思-2019-乳制品行业报告摘要" target="_blank">
              <svg class="icon down" aria-hidden="true"  >
                <use xlink:href="#icon-down"></use>
              </svg>
            </a>
          </div>
          <div class="item">
            <span>弈格思-2019-汽车产业报告摘要</span>
            <a href="//icssai-consulting.com/en/pdf/qc.pdf" download="弈格思-2019-汽车产业报告摘要" target="_blank">
              <svg class="icon down" aria-hidden="true"  >
                <use xlink:href="#icon-down"></use>
              </svg>
            </a>
          </div>
          <div class="item">
            <span>弈格思-2019-食品行业研究报告摘要</span>
            <a href="//icssai-consulting.com/en/pdf/sp.pdf" download="弈格思-2019-食品行业研究报告摘要" target="_blank">
              <svg class="icon down" aria-hidden="true"  >
                <use xlink:href="#icon-down"></use>
              </svg>
            </a>
          </div>
          <div class="item">
            <span>弈格思-2019-医药行业研究报告摘要</span>
            <a href="//icssai-consulting.com/en/pdf/yy.pdf" download="弈格思-2019-医药行业研究报告摘要" target="_blank">
              <svg class="icon down" aria-hidden="true"  >
                <use xlink:href="#icon-down"></use>
              </svg>
            </a>
          </div>
          <div class="item">
            <span>弈格思-2019-汽车零配件研究报告摘要</span>
            <a href="//icssai-consulting.com/en/qclpj.pdf" download="弈格思-2019-汽车零配件研究报告摘要" target="_blank">
              <svg class="icon down" aria-hidden="true"  >
                <use xlink:href="#icon-down"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="link">
        <Title :title="titles[6]" class="title"></Title>
        <div class="content">
          <li><a href="http://www.scientistin.com/" target="_blank"><img src="../assets/industry/link/logonew.png" alt=""></a></li>
          <li><a href="http://cig.ccxe.com.cn/index.html" target="_blank"><img src="../assets/industry/link/CIlogo.png" alt=""></a></li>
          <li><a href="http://cig.ccxe.com.cn/product.html" target="_blank"><img src="../assets/industry/link/logocebm.png" alt=""></a></li>
          <li><a href="http://www.koncen.com/" target="_blank"><img src="../assets/industry/link/kangsheng.png" alt=""></a></li>
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
    name: "Industry",
    data(){
      return{
        distance:0,
        picture:[
          require('../assets/land/header_newyork.png')
                ],
        titles:[
          {
            englishName:'Our Clients'
          },
          {
            englishName:'Applications'
          },
          {
            englishName:'Sector Analysis Methods'
          },
          {
            englishName:'Our Services',
            desc1:'Cover social network development, corporate strategy simulation and management, competitive strategy optimization, political risk prediction, ',
            desc2:'and other means of enhancing business performance.'
          },
          {
            englishName:'Classic Cases',
            desc1:'Cover social networks, corporate strategy simulation ',
            desc2:'and management, competitive strategy optimization, political risk prediction and other fields.'
          },
          {
            englishName:'Research Report',
          },
          {
            englishName:'Strategic Partners',
          },
          {
            englishName:'Contact Us',
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
    methods:{
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
        this.sector = document.getElementsByClassName('sector')[0].offsetTop
        this.services = document.getElementsByClassName('services')[0].offsetTop
        this.cases = document.getElementsByClassName('cases')[0].offsetTop
        this.report = document.getElementsByClassName('report')[0].offsetTop
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
        width:100%;
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

        .title{
        }
        .article{
          font-size:14px;
          width:800px;
          margin:0 auto;
          line-height: 20px;
          text-align: center;
          .title{

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
      .cases{
        position: relative;
        padding:55px 0;
        .article {
          font-size: 14px;
          width: 800px;
          margin: 0 auto;
          line-height: 20px;
          text-align: center;
        }
        img{
          margin-bottom:20px;
        }
      }
      .report{
        background:#f4f4f4;
        position: relative;
        padding:55px 0;
        .content{
          width:500px;
          display: flex;
          flex-direction: column;
          margin:0 auto;
          margin-top:40px;
          justify-content: flex-start;
          color:#676a6c;
          position: relative;
          .item {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            position: relative;
            margin-bottom:20px;
            .down{
              cursor: pointer;
              position: absolute;
              right:0;
              top:0;
            }
          }

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
