<template>
    <div class="number">
        123123123
        <div @click="gotoPage" class="click">
            点我
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        methods:{
            gotoPage(){
                this.$router.push('/industry')
            }
        }
    }
</script>

<style scoped lang="scss">
.number{
    border:1px solid red;
    font-size:20px;
    .click{
        color:red;
    }
}
</style>
