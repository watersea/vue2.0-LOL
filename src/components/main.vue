<template>
    <div class="main">
      <div class="content">
        <router-view></router-view>
      </div>
        <tab-bar></tab-bar>
    </div>
</template>
<script>
  import tabBar from '../views/main/tarbar';
  export default{
      data (){
          return{

          }
      },
      components:{
          tabBar
      },
      methods:{


      }
  }

</script>
<style lang='less' scoped>
  .main{
    height:100%;
    display: flex;
    flex-direction: column;
    background: #f4f5f6;
  }
  .content{
    flex:1;
    overflow: auto;
  }
</style>
