<template>
	<div class="navbar">
		<router-link to="/" tag="a" active-class="HighlightNavbar">
			首页
		</router-link>
		<router-link to="/article/list" tag="a" active-class="HighlightNavbar">
			文章
		</router-link>
		<router-link to="/admin" tag="a" active-class="HighlightNavbar">
			日志
		</router-link>
		<router-link to="/admin" tag="a" active-class="HighlightNavbar">
			后台
		</router-link>
	</div>

</template>


<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.router-link-exact-active {
  /* color: #ffd04b; */
	background: rgb(64, 158, 255);
  /* color: rgb(17, 101, 228); */
	/* active-text-color:#ffd04b; */
}

.navbar {
	height: 50px;
}

.navbar a {
	border-radius: 10px;  /* 圆角 */
	float: left;
	font-size: 22px;
	padding: 0 20px;
	line-height: 50px;
	color: #fff;
}

</style>
