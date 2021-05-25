<template>
  <!-- <div style="width: 100%; height:100%"> -->
    <!-- <div class="input-box">
      <el-input placeholder="请输入内容" v-model="title" class="input-with-select">
      </el-input>
      <el-button type="info" round @click="handleSave">保存草稿</el-button>
      <el-button type="primary" round @click="handleRelease">发布文章</el-button>
    </div> -->
		<div class="detail">
			<div class="readArticle">
				<!-- <div> -->
					<div id="viewer"></div>
				<!-- </div> -->
				
				<div class="broadside"> display: flex;</div>
			</div>
		</div>
   
    
  <!-- </div> -->

</template>

<script>
// import axios from "axios";
import hljs from "highlight.js";
import "../../public/highlight/monokai-sublime.css"
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';

export default {
  name: "viewerEditor",
  props: {
    content: String,
    value: String,
  },
  data() {
    return {
      text: "",
      title: "1111", // null为假, 空数组[]和空对象{}都是真, null 是为了语境
    };
  },
  mounted() {
    
    hljs.highlightAll();
    hljs.initHighlightingOnLoad();
    // eslint-disable-next-line
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('pre').forEach((block) => {
            hljs.highlightBlock(block);
        });
    });
		this.viewer = new Viewer({
			el: document.querySelector('#viewer'),
			// height: "700px",
			// height: "calc(100% - 58px)",
			plugins: [[codeSyntaxHighlight, { hljs }]],
			initialValue: '\n # hello \n \n \n \n ```python \n def func(x): \n    a=111 \n \n ``` \n # 111'
		});

		// this.viewer.getHtml()

    // this.tuieditor = new Editor({
    //   el: document.querySelector("#viewer"),
    //   // initialEditType: "markdown",
    //   // previewStyle: "vertical",
    //   // language:'zh-CN',
    //   initialValue: this.text,
    //   // height: "calc(100% - 58px)",
    //   height: "700px",
    //   plugins: [[codeSyntaxHighlight, { hljs }]],

    // })
		// this.viewer = new Editor({
		// 	el: document.querySelector('#viewer'),
		// 	initialValue: "```python \n def funcaa(args) \n		"
		// })
  },

}
</script>

<style>
  #viewer {
    width: calc(100% - 250px);
    background: rgb(181, 233, 213);
    height: 100%;
		min-width: 800px;
		margin: 30px;
  }

	.readArticle {
		padding: 10px;
		width: 70%;
		display: flex;
		margin:0 auto;
		max-width: 1400px;
	}

	.detail{
		width: 100%;
	}

	.broadside{
		min-width: 250px;
		background-color:burlywood;
		/* margin:0 auto;
		border:1px solid #000; */
		/* height:100px */
	}
</style>