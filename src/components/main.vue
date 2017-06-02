<template>
	<div class="main">
		<router-view></router-view>
		<tarbar></tarbar>
	</div>
</template>

<script>
	import tarbar from '../views/main/tarbar'
	export default{
		components:{
			tarbar
		}
	}
</script>

<style>
</style>