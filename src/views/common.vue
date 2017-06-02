<template>
	<div class="common-list">
		<ul class="r-box">
			<router-link to='/restaurant' tag='li' class='rlist' v-for='(item,index) in Clist'>
				<div class='r-pic'>
					<img :src="item.pic_url" alt="" />
				</div>
				<div class='r-detail'>
					<div class="rest-name">
						<span>{{item.name}}</span>
						<span>{{item.distance}}</span>
					</div>
					<div class="shop-mid">
						<span class="star">
							<i></i>
							<i></i>
							<i></i>
							<i></i>
							<i></i>
						</span>
						<span>月售{{item.sales}}单</span>
						<span class="time">{{item.mt_delivery_time}}</span>
					</div>
					<div class="shop-bot">
						<span class="price">起送￥{{item.min_price}}</span>
						<span>{{item.shipping_fee_tip}}</span>
					</div>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		props:['Clist']
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
	.rlist{
		background: #fff;
		padding: .1rem .05rem;
		margin-bottom: .2rem;
		overflow: hidden;
	}
	.r-box{
		background: #efefef;
	}
	.r-pic{
		float: left;
		.wh(1.5rem,1.2rem);
		img{
		 .wh(100%,100%)
		}
	}
	.r-detail{
		overflow: hidden;
		padding-left: .1rem;
		.rest-name{
			span{
				.dis;
				&:first-child{
					font-size: 15px;
					max-width: 75%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				&:nth-child(2){
					float: right;
					color: #333;
					margin-right: .2rem;
				}
			}
		}
		.shop-mid{
			margin:.05rem 0;
			.star{
				.dis;
				i{
					background: url(../assets/img/star.png) no-repeat 0 -2px;
					background-size: cover;
					float: left;
					line-height: 1.5;
					.wh(12px,12px);
					.dis;
				}
			}
		}
		.time{
			float: right;
			margin-right: .2rem;
			.dis
		}
		.shop-bot{
			.price{
				border-right: 1px solid #ccc;
				padding-right: .2rem;
				margin-right: .1rem;
				
			}
		}
	}
</style>