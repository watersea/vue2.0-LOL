<template>
    <div class="tarbar">
      <router-link to="/main/message" tag = 'div'>资讯 </router-link>
      <router-link to="/main/text2"   tag = 'div'>好友 </router-link>
      <router-link to="/main/discover"   tag = 'div'>发现 </router-link>
      <router-link to="/main/mine"    tag = 'div'>我的 </router-link>
    </div>
</template>
<script>
    export default{
        data (){
            return {

            }
        }
    }
</script>
<style lang='less' scoped>
   .tarbar{
     display: flex;
     height:1rem;
     border-top:1px solid #ffa10d;
     -webkit-box-flex-group: 2;
     div{
       flex:1;
       text-align: center;
       line-height: 1rem;
     }
   }
</style>
