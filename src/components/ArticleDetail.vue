
<template>
	<div>
		<div class="header-box">
			<!-- <el-page-header @back="goBack" title="首页" >
			</el-page-header> -->
		</div>

		<div class="title-box">
			文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标
		</div>
		<div class="viewer-box">
			<ViewerEditor></ViewerEditor>
		</div>
	</div>
</template>



<script>
import ViewerEditor from "../components/readEditor"
export default {
  components: {
		ViewerEditor
  },
	methods: {
		goBack() {
			console.log('go back');
		}
	},
	mounted () { // 在详情的组件中利用mounted生命周期获取传过来的数据
	console.log('利用获取的id, 发送ajax请求数据', this.$route) // this.$route内包含整router对象
	// console.log('通过params获得的id数据:', this.$route.params.id)
	}
}
</script>

<style>

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
	background-color: #FFDEE9;
	background-image: linear-gradient(239deg, #FFDEE9 0%, #B5FFFC 100%);
}

.el-page-header__title {
	font-size: 23px;
	margin: auto;
	font-weight: 500;
}
</style>
