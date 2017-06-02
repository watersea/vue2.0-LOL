<template>
	<div class="tarbar">
		<router-link to='/main/index' tag = 'div'>
			<span><Icon type="ios-home-outline" size='16px'></Icon></span>
			<span>首页</span>
		</router-link>
		<router-link to='/main/order' tag = 'div'>
			<span><Icon type="clipboard" size='16px'></Icon></span>
			<span>订单</span>
		</router-link>
		<router-link to='/main/mine' tag = 'div'>
			<span><Icon type="android-person" size='16px'></Icon></span>
			<span>我的</span>
		</router-link>
	</div>
</template>

<script>
	
</script>

<style lang="less" scoped>
.wh(@w,@h){
	width: @w;
	height: @h;
}
	.tarbar{
		background: #fff;
		position: fixed;
		bottom: 0;
		display: flex;
		font-size:14px;
		.wh(100%,1rem);
		div{
			flex: 1;
			display: flex;
			flex-direction: column;
			text-align: center;
			/*line-height: 1rem;*/
			span{
				flex: 1;
			}
		}
		
	}
</style>