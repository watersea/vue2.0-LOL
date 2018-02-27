<template>
    <div class="colunm-box">
      <ul>
        <li>
          <div class="pic-left">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502356126&di=823bf4c8b6fe68af8f7b78785ffd4909&imgtype=jpg&er=1&src=http%3A%2F%2Fimg3.qianzhan123.com%2Fnews%2F201507%2F08%2F20150708-d069322724158252_600x5000.jpg" alt="">
          </div>
          <div class="con-right">
            <p>每日一笑</p>
            <p>
              <span>电竞虎</span>
              <span>12万人已订阅</span>
            </p>
            <p>哈哈哈哈哈哈哈哈绝大部分还得上班还不够笨鹅久拖不决俄边防军部分巴士</p>
          </div>
        </li>
        <li>
          <div class="pic-left">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502356126&di=823bf4c8b6fe68af8f7b78785ffd4909&imgtype=jpg&er=1&src=http%3A%2F%2Fimg3.qianzhan123.com%2Fnews%2F201507%2F08%2F20150708-d069322724158252_600x5000.jpg" alt="">
          </div>
          <div class="con-right">
            <p>每日一笑</p>
            <p>
              <span>电竞虎</span>
              <span>12万人已订阅</span>
            </p>
            <p>哈哈哈哈哈哈哈哈绝大部分还得上班还不够笨鹅久拖不决俄边防军部分巴士</p>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
    export default{
        data (){
            return {}
        }
    }
</script>
<style lang='less' scoped>
  .wh(@w,@h){
    width:@w;
    height:@h;
  }
  .colunm-box{
    padding:8px;
    li{
      background: #fff;
      overflow: hidden;
      padding:10px;
      margin-top:.2rem;
    }
    .pic-left{
      float: left;
      margin-right:.2rem;
      .wh(1.2rem,1.2rem);
      img{
        border-radius: 50%;
        vertical-align: middle;
        .wh(1.2rem,1.2rem);
      }
    }
    .con-right{
      overflow: hidden;
    }
  }
</style>
