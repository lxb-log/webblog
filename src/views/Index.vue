<template>
<!-- <div style="opacity: 0.44;"> -->
	<div class="container">
		<div class="banner">
			<el-carousel :interval="4000" type="card" height="200px">
				<el-carousel-item v-for="item in 6" :key="item">
					<h3 class="medium">{{ item }}</h3>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="content">
			<div class="content-left">
				<div class="panel box">
					panel
				</div>
			</div>
			<div class="content-middle">
				<div class="timestamp-middle box" style="">
					<div class="block" >
						<el-timeline>
							<el-timeline-item timestamp="2018/4/12" placement="top">
								<el-card>
									<h4>更新 Github 模板</h4>
									<p>王小虎 提交于 2018/4/12 20:46</p>
								</el-card>
							</el-timeline-item>
							<el-timeline-item timestamp="2018/4/3" placement="top">
								<el-card>
									<h4>更新 Github 模板</h4>
									<p>王小虎 提交于 2018/4/3 20:46</p>
								</el-card>
							</el-timeline-item>
							<el-timeline-item timestamp="2018/4/3" placement="top">
								<el-card>
									<h4>更新 Github 模板</h4>
									<p>王小虎 提交于 2018/4/3 20:46</p>
								</el-card>
							</el-timeline-item>
							<el-timeline-item timestamp="2018/4/2" placement="top">
								<el-card>
									<h4>更新 Github 模板</h4>
									<p>王小虎 提交于 2018/4/2 20:46</p>
								</el-card>
							</el-timeline-item>
							<el-timeline-item timestamp="2018/4/2" placement="top">
								<el-card>
									<h4>更新 Github 模板</h4>
									<p>王小虎 提交于 2018/4/2 20:46</p>
								</el-card>
							</el-timeline-item>
							<el-timeline-item timestamp="2018/4/2" placement="top">
								<el-card>
									<h4>更新 Github 模板</h4>
									<p>王小虎 提交于 2018/4/2 20:46</p>
								</el-card>
							</el-timeline-item>
						</el-timeline>
					</div>
				</div>
			</div>
			<div class="content-right">
				<div class="userinfo box">
					<UserInfo></UserInfo>
				</div>
				<div class="tag box">
					tag
				</div>
				<div class="text box">
					text
				</div>
			</div>
		</div>
	</div>
<!-- </div> -->
</template>

<script>
import UserInfo from "../components/UserInfo"

export default {
  components: {
	UserInfo
  }
}
</script>

<style>
  #background {
	position: fixed;
	top: 0;
	left: 0;
	z-index: -100;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

	div {
		border-radius: 10px;
	}

	.container {
		filter: alpha(opacity=45); 
		opacity:0.8; 
		
		z-index: 1;
		width:80%;
		min-width: 1000px;
		height:100%;
		margin:0 auto;
		text-align: center;
	}

	.banner {
		padding: 20px;
		box-sizing:border-box;
	}

	.container .content {
		height:calc(100vh - 266px);
		display: flex;
		width:100%;
		margin:0 auto;
		/* background: rgb(238, 13, 13); */
	}

	.content .content-left {
		width:25%;
		height:100%;
		background: #fd827d;
		/* padding:0px 10px 0px 0px;  上右下左 */
	}

	.content .content-middle {
		width:50%;
		height:100%;
		background: #72cde9;
		
	}

	.content .content-right {
		width:25%;
		height:100%;
		background: #a8ff8d;
	}

	.box {
		/* padding: 30px; */
		width:80%;
		margin:20px auto;
	}

	.content .content-right .userinfo {
		padding: 5px;  /*  上右下左 */
		background: #fafdfa;
		height:30%;
	}
	.content .content-right .tag {
		background: #fdacf9;
		height:30%;
	}
	.content .content-right .text {
		background: #fdacf9;
		height: 29%;
	}

	.content .content-left .panel {
		background: #e4ec95;
		height: 95%;
	}
	.content .content-middle .timestamp-middle {
		background: #89dcf5;
		height: 85%;
		padding: 30px;   /*上右下左*/
		overflow: auto;  /* 滚动条 */
	}

	/*-------滚动条整体样式----*/
	.content .content-middle .timestamp-middle::-webkit-scrollbar {
		width:8px;
		height:8px;
	}
	/*滚动条里面小方块样式*/
	.content .content-middle .timestamp-middle::-webkit-scrollbar-thumb {
		border-radius:100px;
		/* background-clip: text; */
		/* -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2); */
		
		background:rgb(144, 247, 149);
	}
	/*滚动条里面轨道样式*/
	.content .content-middle .timestamp-middle::-webkit-scrollbar-track {
		/* -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2); */
		border-radius:0;
		background:rgba(255, 97, 97, 0.1);
	}
</style>