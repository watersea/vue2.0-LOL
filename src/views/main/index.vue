<template>
	<div class="home">
		<div class="banner">
			<img class="back-ban" src="../../assets/img/banner.jpg" alt="" />
			<div class="search-box">
				<router-link class="location" to='/city' tag='span'>
					<Icon type="ios-location-outline" size='14px'></Icon>
					竹木厂小区东区qwqwqwqwqwqwqw
				</router-link>
				<router-link  class="search-icon" to='/search' tag='span'><Icon type="ios-search-strong" size='15px'></Icon></router-link>
			</div>
		</div>
		<!--------------分类列表------------------------->
		<ul style="overflow: hidden;padding-bottom: .3rem ;">
			<router-link 
				tag='li' 
				class="head-list" 
				to='/channel'
				v-for='(item,index) in headList'>
				<img :src="item.url" alt="" />
				<span class="head-name">{{item.name}}</span>
			</router-link>
		</ul>
		<div style="clear:both"></div>
		<!--------------详情列表------------------------------------------>
		<div class="title">
			<span>附近商家</span>
		</div>
		<c-list :Clist='Clist'></c-list>
	</div>
</template>

<script>
	import cList from '../common.vue'
	import { mapState } from 'vuex'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			cList
		},
		created:function(){
			this.$store.dispatch('GET_HEAD');
			this.$store.dispatch('GET_LIST')
		},
		computed:mapState({
			title:state=>state.title ,
			headList:state=>state.headList,
			Clist:state=>state.Clist
		})
	}
</script>

<style lang="less" scoped>
.wh(@w,@h){
	width: @w;
	height: @h;
}
.dis(@style:middle){
	display: inline-block;
	vertical-align: @style;
}
	.home{
		position: relative;
		.banner{
			position: relative;
			.wh(100%,3.4rem);
			img{
				vertical-align: top;
				.wh(100%,100%);
			}
			.search-box{
				width: 100%;
				color: #fff;
				position: absolute;
				top: .3rem;
				left: 0;
				span{
					.dis
				}
			}
			.location{
				background: rgba(0,0,0,.5);
				border-radius: 15px;
				font-size: 14px;
				padding:.05rem .2rem;
				margin-left: .4rem;
				max-width: 50%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.search-icon{
				background: rgba(0,0,0,.5);	
				border-radius: 50%;
				padding: .02rem;
				.wh(.5rem,.5rem);
				text-align: center;
				line-height:.5rem;
				margin-right: .2rem;
				float: right;
				
			}
		}
		.head-list{
			width: 25%;
			float: left;
			padding-top:.3rem;
			img{
				display: block;
				vertical-align: top;
				margin: 0 auto;
				.wh(80%,1rem)
			}
		.head-name{
			display: block;
			width: 100%;
			padding: .2rem 0 0;
			text-align: center;
			font-size: 14px;
			
		}
			
		}
	}
	.title{
		padding: .1rem 0;
		background: #efefef;
		span{
			border-left: 3px solid #FFB900;
			padding-left: .4rem;
			font-size: 14px;	
		}
		
	}
</style>