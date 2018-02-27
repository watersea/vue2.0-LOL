<template>
  <div class="info-list">
    <ul class="info-warpper">
      <li class="info-li" v-for="(item,index) in infos.list">
        <a :href="item.article_url">
          <div v-if = "item.newstypeid == 'ordinary'">
            <div class="info-img">
              <img :src="item.image_url_small" alt="">
            </div>
            <div class="info-text">
              <p class="info-text-title">{{item.title}}</p>
              <p class="info-text-desc">{{item.summary}}</p>
              <p class="info-text-time">
                <span  class="pos">{{time(item.publication_date)}}</span>
                <span  class="pos" style="color:#ffd180;margin-left:.2rem">{{pv(item.pv)}}万阅</span>
                <span class="newstype-video" v-show="item.newstype == '视频'">{{item.newstype}}</span>
              </p>
            </div>
          </div>

          <!---------------图集-------------------------->
          <div v-if = "item.newstype == '图集'">
            <p class="info-text-title-pic">{{item.title}}</p>
            <p class="info-text-desc-pic">{{item.summary}}</p>
            <div class="info-pic-boxs">
              <div class="info-pic-big">
                <img :src="item.image_url_small" alt="">
              </div>
              <div class="info-pic-small">
                <img class="info-pic-first" :src="item.small_image_url" alt="">
                <div class="info-pic-num">
                  <img :src="item.count_image_url" alt="">
                  <span>{{item.count}}张</span>
                </div>
              </div>
            </div>
            <p class="info-text-time">
              <span >{{time(item.publication_date)}}</span>
              <span style="color:#ffd180;margin-left:.2rem">{{pv(item.pv)}}万阅</span>
              <span class="newstype-pic">{{item.newstype}}</span>
            </p>
          </div>

          <!----------------战报--------------------------->
          <div v-if="item.newstype == '战报'">
            <div class="info-img">
              <img :src="item.image_url_small" alt="">
            </div>
            <div class="info-text">
              <p class="info-text-title">{{item.title}}</p>
              <p class="info-text-desc-report">
                      <span>
                        <img :src="item.teama_logo" alt="">
                      </span>
                <span>{{item.teama_name}}</span>
                <span style="color:#333;margin:0 3px">{{item.march_result}}</span>
                <span>
                        <img :src="item.teamb_logo" alt="">
                      </span>
                <span>{{item.teamb_name}}</span>
              </p>
              <p class="info-text-time">
                <span class="pos">{{time(item.publication_date)}}</span>
                <span class="pos" style="color:#ffd180;margin-left:.2rem">{{pv(item.pv)}}万阅</span>
                <span class="newstype-report" style="margin-top: .06rem;">{{item.newstype}}</span>
              </p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  export default{
    data (){
      return {

      }
    },
    computed:mapState({
// lists:state => state.banner, 箭头函数写法
      infos:'zxlist'
    }),
    created(){

      this.zxlist();
    },
    mounted(){

    },
    methods:{
      ...mapActions({
        zxlist:'GET_LIST'
      }),
//计算阅读数；
      pv:function(pvs){
        var num = Math.floor(pvs / 10000);
        return num
      },
// 计算时间函数
      time:function(time){
        var nowDate = new Date();
        var getDate = (new Date(time)).getTime();
        var m = (nowDate - getDate)/1000;//转化成秒数
        var times = "";
        var sD = Math.floor(m / 24 / 60 / 60);
        var sH = parseInt(m % (3600 * 24) / 3600);
        var sF = parseInt(m % 3600 / 60);
        var  mounth = (new Date(time)).getMonth() + 1;
        var  day = (new Date(time)).getDate();
        if (m <60) {
          times = "刚刚";
        }
        else if (60 <= m && m < 3600) {
          times = sF + "分钟前";
        }
        else if (3600 <= m && m <=3600 * 24) {
          times = sH + "小时前";
        }
        else if (3600 * 24 <= m && m < 3600 * 72) {
          times = sD + "天前";
        }
        else {
                if(mounth < 9){

                    mounth = '0'+mounth
                }
                if(day < 9){

                    day = '0'+day
                }

              times = mounth+'-'+day

        }
        return times;
      },

    }

  }
</script>
<style lang='less' scoped>
  .wh(@w,@h){
    width:@w;
    height:@h;
  }
  .com-bor(@color){
    float: right;
    border:1px solid @color;
    color: @color;
    padding:2px 3px;
    display: block;
    font-size:.24rem;
    box-sizing: border-box;
    border-radius: 3px;
  }
  .dpl{
    display: inline-block;
    vertical-align: middle;
  }
  .info-list{
    .info-li{
      background:#fff;
      margin-top:.2rem;
      overflow: hidden;
      padding:.2rem;
      box-shadow: 1px 2px 1px #e0e0e0;
      a{
        display: block;
        color:#000;
        text-decoration: none;
        .wh(100%,100%);
      }
      .info-img{
        .wh(2.4rem,1.6rem);
        margin-right:.2rem;
        float: left;
        img{
          .wh(100%,100%)
        }
      }
      .info-text{
        height:1.6rem;
        overflow: hidden;
        position: relative;
        .info-text-title{
          font-size: .32rem;
          width:100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom:.06rem;
        }
        .info-text-desc{
          color:#999;
          font-size: .24rem;
          line-height:.34rem;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .info-text-time{
          position: absolute;
          bottom: 0;
          left:0;
          color:#999;
          font-size:.24rem;
          width:100%;
        }
      }

      /*---------------图集样式--------------------------------*/
      .info-text-title-pic{
        color: #666;
        font-size: .32rem;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .info-text-desc-pic{
        margin: .14rem 0;
        color: #999;
        font-size: .24rem;
        line-height: .36rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .info-pic-boxs{
        overflow: hidden;
        .info-pic-big{
          float: left;
          .wh(70%,2.4rem);
          img{
            .wh(100%,2.4rem);
          }
        }
        .info-pic-small{
          float: right;
          margin-right: -.1rem;
          display: flex;
          flex-direction: column;
          .wh(30%,2.4rem);
          .info-pic-first{
            flex:1;
            display: block;
            &:nth-of-type(1){
              margin-bottom:.1rem;
            }
          }
          .info-pic-num{
            position: relative;
            span{
              position: absolute;
              bottom: 0;
              left:0;
              color: #fff;
              text-align: center;
              line-height: 1rem;
              font-size: .28rem;
              background:rgba(0,0,0,.4);
              .wh(100%,100%)
            }
          }

        }
      }
      .info-text-time{
        color:#999;
        font-size:.24rem;
        margin-top:.16rem;
        .newstype-pic{
          .com-bor(#ffd180);
        }
      }

      /*-----------------战报样式----------------------------------*/
      .info-text-desc-report{
        span{
          font-size: .26rem;
          color: #999;
          img{
            vertical-align: middle;
          }
          .dpl
        }
        img{
          .wh(.4rem,.4rem)
        }
      }
      .newstype-report{
        .com-bor(#d3bf8d)
      }
      .newstype-video{
        .com-bor(	#3CB371)
      }
      .pos{
        position: absolute;
        bottom: 0;
        left:0;
        &:nth-child(2){
          left:1rem;
        }
      }
    }
  }
</style>
