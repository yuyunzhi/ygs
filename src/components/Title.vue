<template>
    <div class="title-wrapper">
        <div class="liner"></div>
        <div class="chinese-name" v-if="title.chineseName">{{title.chineseName}}</div>
        <div class="english-name" v-if="title.englishName">{{title.englishName}}</div>
        <div class="describe" v-if="title.desc1">{{title.desc1}}</div>
        <div class="describe" v-if="title.desc2">{{title.desc2}}</div>
    </div>
</template>

<script>
    export default {
        name: "Title",
        props:{
            title:{ //中 英文 描述
                type:Object,
                default:()=>{},
            },

        }
    }
</script>

<style scoped lang="scss">
.title-wrapper{
    width:1000px;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .liner{
        margin:0 auto;
        width:60px;
        height:2px;
        border-top:2px solid #53b095;
    }
   .chinese-name{
       color:#676a6c;
       font-size:28px;
       font-weight:300;
       line-height:32px;
       margin-top:15px;
   }
    .english-name{
        color:#53b095;
        font-size:28px;
        font-weight:200;
        line-height:32px;
    }
    .describe{
        width:660px;
        color:lighten(#676a6c,25%) ;
        font-size:18px;
        line-height:28px;
        text-align: center;
        font-weight: 200;


    }
}
</style>
