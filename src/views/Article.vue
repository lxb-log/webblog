
<template>
	<div class="article-main">
		<div style="background-color:#545c64;">
			<div class="article-navbar" style="">
				<Navbar></Navbar>
			</div>
		</div>

		<div class="article">
			<div class="main">
				<router-view></router-view>
			</div>
			<div class="container">
				<div>
					<UserInfo></UserInfo>
				</div>
				<div>
					<TagsCloud></TagsCloud>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import UserInfo from "../components/UserInfo"
import TagsCloud from "../components/TagsCloud"
import Navbar from "../components/Navbar"
export default {
  components: {
    UserInfo,
		TagsCloud,
		Navbar
  },
	methods: {
		goBack() {
			console.log('go back');
		}
	}
}
</script>

<style>

.article-main{
	width: 100%;
	height: 100%;
	background: dimgray;
}


.article {
	display: flex;
	margin:0 auto;
	max-width: 1400px;
	min-width: 1050px;
	width: 75%;
	height: calc(100% - 50px);
}

.article-navbar {
	margin:0 auto;
	max-width: 1400px;
	min-width: 1050px;
	width: 75%;
}

.container{

	width: 20%;
	background-color: rgb(255, 255, 255);
}

.main{
	width: 80%;
}

.viewer-box {
	margin: 5px;
}

.title-box {
	margin: 10px 0 10px 0;
	padding: 0 35px 0 35px;
	line-height: 40px;
	font-size: 32px;
	word-wrap: break-word;
	color: #222226;
	font-weight: 600;
	word-break: break-all;
}

.header-box {
	height: 40px;
	display: flex;
	padding: 0 0 0 10px;
	width: 100%;
	/* background-color: #FFDEE9; */
	background-image: linear-gradient(239deg, #FFDEE9 0%, #B5FFFC 100%);
}

.el-page-header__title {
	font-size: 23px;
	margin: auto;
	font-weight: 500;
}
</style>

<style scoped>
.main{
	background: rgb(252, 252, 252);
}
</style>

<style>

</style>
