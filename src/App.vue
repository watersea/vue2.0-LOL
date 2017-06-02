<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
 font-family: '楷体';
 color: #333;
}
.active{
	color: #ffb900;
}
</style>
