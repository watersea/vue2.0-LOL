<template>
    <div class="show">
        <div class="team-box">
            <p class="title">发现</p>
          <div class="team-list">
              <ul style="overflow: hidden">
                <li v-for="(item,index) in teams">
                  <img :src="item.iconUrl" alt="">
                  <span>{{item.name}}</span>
                </li>
              </ul>
          </div>
          <p class="club">
            <span>粉丝俱乐部</span>
            <span>></span>
          </p>
        </div>
      <ul class="top-box">
        <!--<li class="top-clunm" v-for="(item,index) in clunm" >-->
          <!--<img :src="item.image_url_big" alt="">-->
          <!--<span>-->
            <!--{{item.title}}-->
          <!--</span>-->
        <!--</li>-->
        <li>

        </li>
      </ul>
    </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  export default{
        data (){
            return {
//                top:[]
            }
        },
        computed:mapState({
          teams:'team',
          clunm:'clunm'
        }),
        filters:{

        },
        created (){
          this.team();
          this.clunms();
//          console.log(is_top)
//          console.log(this.store.getters.top);
//          console.log(this.$store.dispatch('GET_CLUNM'))
        },
        mounted(){

        },
        methods:{
          ...mapActions({
            team:'GET_TEAM',
            clunms:"GET_CLUNM"
          })
        }
    }
</script>
<style lang='less' scoped>
  .wh(@w,@h){
    width:@w;
    height:@h;
  }

  .team-box{
    .wh(100%,auto);
    text-align: center;
    background: rgba(5,44,53,.5);
    padding:.3rem 0;
    .team-list{
      overflow: auto;
      ul{
        overflow: hidden;
        width:15.6rem;
      }
      li{
        padding:.2rem 0 .1rem;
        float: left;
        .wh(1.2rem,auto);
        box-sizing: border-box;
        img{
          display: block;
          margin:0 auto;
          border-radius: 50%;
          .wh(1rem,1rem)
        }
        span{
          display: block;
          width:100%;
          padding:.14rem 0;
          text-align: center;
          font-size:15px;
          color: #fff;
        }
      }
    }
    .title{
      text-align: center;
      padding:.2rem 0;
      color: #d3bf8d;
    }
    .club{
      width: 120px;
      border: 1px solid #d3bf8d;
      margin: 0 auto;
      font-size: 14px;
      padding:.14rem 0;
      color: #d3bf8d;
      background:#02171d;
      span{
        display: inline-block;
        vertical-align: middle;
        color: #d3bf8d;
      }
    }
  }
  .top-box{
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    padding:.3rem 0 0;
  }
  .top-clunm{
    flex:1;
    img{
      display: block;
      margin:0 auto;
      .wh(1rem,1rem)
    }
    span{
      display: inline-block;
      vertical-align: middle;
      padding:.3rem 0;
      text-align: center;
      width:100%;
      font-size:14px;
    }
  }
</style>
