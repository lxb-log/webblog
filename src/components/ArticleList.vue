
<template>
	<div class="article-list-main">
		<div class="article-list">
			<ul>
				<li v-for="article in articles" class="one-article" :key="article.articleID">
					<div class="one-article-box">
						<!-- <span><a :href=" '/article/detail?id=' + article.articleID" >{{ article.title }}</a></span> -->
						<span><a @click="handleClick(article.articleID)" >{{ article.title }}</a></span>
						<p>{{ article.desc }}</p>
						<div class="info-box">{{ article.created_time }}</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>


<style>
.article-list-main {
	height: 100%;
	/* background: cornsilk; */
	overflow: auto; 
	/* padding: 0 50px 0 50px; */
	/* margin:0 auto; */
	
}


/*-------滚动条整体样式----*/

.main	.article-list-main::-webkit-scrollbar {
	width:8px;
	height:8px;
}
/*滚动条里面小方块样式*/
.main .article-list-main::-webkit-scrollbar-thumb {
	border-radius:100px;
	/* background-clip: text; */
	/* -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2); */
	
	background:rgb(158, 160, 163);
}
/*滚动条里面轨道样式*/
.main .article-list-main::-webkit-scrollbar-track {
	/* -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2); */
	border-radius:0;
	background:rgba(255, 97, 97, 0.1);
}


li {
	list-style-type:none;
}
span  a {
	/* font-size: 28px;
	line-height: 35px; */
	display: block;
	padding-left: 36px;
	word-break: break-all;
	color: #000000;
	font-size: 18px;
	line-height: 20px;
	font-weight: 500;
}

.one-article-box p {
	margin-top: 6px;
	font-size: 14px;
	line-height: 22px;
	white-space: normal;
	color: #999aaa;
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.one-article-box .info-box {
	float: none;
	margin-top: 5px;
	align-content: center !important;
}


.one-article {
	margin:0 auto;
	width: 80%;
	max-width: 800px;
}

.one-article .one-article-box {
	/* height: 100px; */
	
	border-radius: 10px;
	position: relative;
	top: 10px;
	margin: 0 0 10px 0;
	box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
	padding: 16px 24px 12px 24px;
	border-bottom: 1px solid #f0f2f5;
}

.demo-basic--circle {
	box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      articles: []
    }
  },
	mounted () {
    axios.get("/blog/article/").then(res => {
			console.log('---', res.data.data)
      this.articles = res.data.data
    })
  },
	methods: {
		handleClick (id) {
			this.$router.push(`/article/detail?id=${id}`)
		}
	}
}
</script>