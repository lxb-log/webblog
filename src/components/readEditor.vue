<template>
  <div id="viewer"></div>
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
			plugins: [[codeSyntaxHighlight, { hljs }]],
			initialValue: '\n # hello \n \n \n \n ```python \n def func(x): \n    a=111 \n \n ``` \n # 111'
		})
  },

}
</script>

<style>

#viewer {
  background: rgb(181, 233, 213);
  min-width: 800px;
  padding: 30px;
}


#viewer .tui-editor-contents pre {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  margin: 5px;
  /* padding: 5px; */
  background: #23241f;
  color: #ffffff;
  border-radius: 10px;
  font-size: 20px;
  /* font-family: "JetBrains Mono", Consolas; */
}

</style>