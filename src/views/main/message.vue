<template>
    <div class="message">
      <!----------------首页banner图------------------>
      <mt-swipe :auto="5000" :defaultIndex="0" style="height:4rem">
        <mt-swipe-item v-for="(item,index) in lists">
          <a :href="item.article_url">
            <img :src="item.image_url_big" alt="">
          </a>
        </mt-swipe-item>
      </mt-swipe>

      <!------------------内容部分--------------------------->

          <!--------------导航栏-------------------->
       <div class="column">
         <div class="column-list">
           <mt-navbar v-model="selected">
             <mt-tab-item id="a">最新</mt-tab-item>
             <mt-tab-item id="b">专栏</mt-tab-item>
             <mt-tab-item id="c">官方</mt-tab-item>
             <mt-tab-item id="d">活动</mt-tab-item>
             <mt-tab-item id="e">攻略</mt-tab-item>
             <mt-tab-item id="f">娱乐</mt-tab-item>
             <mt-tab-item id="g">收藏</mt-tab-item>
           </mt-navbar>
         </div>
       </div>
      <mt-tab-container v-model="selected" swipeable>
        <mt-tab-container-item id="a">
          <latest></latest>
        </mt-tab-container-item>
        <mt-tab-container-item id="b">
          <colunm></colunm>
        </mt-tab-container-item>
        <mt-tab-container-item id="c">
          <official></official>
        </mt-tab-container-item>
        <mt-tab-container-item id="d">
          <active></active>
        </mt-tab-container-item>
        <mt-tab-container-item id="e">
           <glve></glve>
        </mt-tab-container-item>
        <mt-tab-container-item id="f">
          <recreation></recreation>
        </mt-tab-container-item>
        <mt-tab-container-item id="g">
          <collect></collect>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import latest from './tab/latest'
import colunm from './tab/colunm'
import official from './tab/official'
import active from './tab/active'
import glve from './tab/glve'
import recreation from './tab/recreation'
import collect from './tab/collect'
    export default{
        data (){
            return {
               selected: 'a'
            }
        },
        components:{
            latest,colunm,official,active,glve,recreation,collect
        },
        computed:mapState({
//          lists:state => state.banner, 箭头函数写法
            lists:'banner',     // 字符串传参写法
        }),
        created(){
//          this.$store.dispatch('GET_BANNER');直接dispatch触发actions里面的相应函数
            this.banner();//使用mapActions辅助函数创建组件方法触发
        },
        mounted(){

//------------------------------- 改变UI默认样式--------------------------------------------
          $('.mint-tab-item-label').css({
              'lineHeight':'.8rem',
              'fontSize':'.28rem'
          })
        },
        methods:{
            ...mapActions({
              banner:'GET_BANNER',
          })
        }

    }
</script>
<style lang='less' scoped>
  .wh(@w,@h){
    width:@w;
    height:@h;
  }
  .mint-swipe{
    .wh(100%,3.8rem);
    img{
      .wh(100%,100%)
    }
  }
  .dpl{
    display: inline-block;
    vertical-align: middle;
  }
  .active{
    color: #ffb900;
  }
  .column{
    height:.8rem;
    overflow: auto;
    background: #fff;
    &::-webkit-scrollbar {
      display: none;
    }
      .column-list{
      overflow: hidden;
      height:.8rem;
      width:9.1rem;
      li{
        width:1.3rem;
        text-align: center;
        line-height: .8rem;
        font-size:.32rem;
        float: left;
      }
      .mint-navbar{
        height:100%;
        .mint-tab-item{
          padding:0 ;
          div{
            font-size:.32rem !important;
            line-height:.8rem !important;
          }
        }
      }
    }
  }
</style>
