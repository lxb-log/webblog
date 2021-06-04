<template>
  <div id="app">
    
    <!-- 路由容器 router-view  (插槽) -->
    <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
  html, body, #app{ 
    height: 100%; 
    min-height: 800px;
    margin: 0; 
    padding: 0;
  }
  body, html {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		margin: 0;
		padding: 0;
	}

#app .tui-editor-contents {
    font-size: 20px;
}
</style>
