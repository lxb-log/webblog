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
    margin: 0; 
    padding: 0;
  }
</style>
