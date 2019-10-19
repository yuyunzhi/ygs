<template>
    <div class="foot-wrapper">
        <div class="background-image"></div>
        <Title :title="title"></Title>
        <div class="content">
            <div class="name">{{footerInfo.companyName}}</div>
            <div class="road">{{footerInfo.road}}</div>
            <div class="location">{{footerInfo.location}}</div>
            <div class="email">{{footerInfo.email}}</div>
            <div class="at">{{footerInfo.at}}</div>
            <div class="net"><img src="../assets/ghs.png" alt="">
                <span class="link1" @click="openPage">{{footerInfo.net1}}</span>
                <span class="link2" @click="openICP">{{footerInfo.net2}}</span>

            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "Footer",
        props:{
            title:{
                type:Object,
                default:()=>{},
                required:true
            }
        },
        data(){
            return{
                footerInfo:{
                    companyName:'上海弈格思商务信息咨询有限公司',
                    road:'上海 杨浦区 国泰路',
                    location:'复旦科技园内',
                    email:'email : info@icssai-consulting.com',
                    at:'© 2017 上海弈格思商务信息咨询有限公司',
                    net1:'沪公网安备31011002003651号',
                    net2:'沪ICP备18005414号'
                }
            }
        },
        methods:{
            openPage(){
                window.open("http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011002003651&token=2be051c1-22dd-44ec-9f4b-d41155f2d855","_blank")
            },
            openICP(){
                window.open("http://www.miitbeian.gov.cn/","_blank")
            },
        },
        components:{
            Title:()=>import("@/components/Title.vue"),
        }
    }
</script>

<style scoped lang="scss">
.foot-wrapper{
    width:100%;
    height:570px;
    background: #f4f4f4;
    padding-top:60px;
    position: relative;
    .background-image{
        width:100%;
        height:100%;
        background: url("../assets/word_map.png") repeat;
        position: absolute;
        top:0;
        left:50%;
        transform: translateX(-50%);
        z-index: 999;
    }
    .content{
        width:1000px;
        margin:0 auto;
        text-align: center;
        .name{
            font-size:24px;
            color: #53b095;
            font-weight:200;
            margin-top:60px;
        }
        .road{
            margin-top:25px;
            font-size:16px;
            font-weight:600;
            color:#676a6c;
        }
        .location{
            margin-top:25px;
            font-size:16px;
            font-weight:600;
            color:#676a6c;
        }
        .email{
            margin-top:70px;
            font-size:16px;
            font-weight:600;
            color: #53b095;
        }
        .at{
            margin-top:60px;
            font-size:14px;
            font-weight:600;
            color:lighten(#676a6c,25%);
        }
        .net{
            margin-top:60px;
            font-size:14px;
            font-weight:400;
            color: #337ab7;
            span{
                display: inline-block;
                vertical-align: middle;
                cursor: pointer;
                margin-left:10px;
                &:hover{
                    color: #23527c;
                }
            }
        }
    }
}
</style>
