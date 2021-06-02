<template>
  <div style="width: 100%;">
    <div class="input-box">
      <el-input placeholder="请输入内容" v-model="title" class="input-with-select">
      </el-input>
      <el-button type="info" round @click="handleSave">保存草稿</el-button>
      <el-button type="primary" round @click="handleRelease">发布文章</el-button>
    </div>
    
    <div id="editorSection"></div>
  </div>

</template>

<script>
import axios from "axios";
import "codemirror/lib/codemirror.css"; // Editor's Dependency Style
import "@toast-ui/editor/dist/toastui-editor.css"; // Editor's Style
import Editor from "@toast-ui/editor";
import hljs from "highlight.js";
import "../../public/highlight/monokai-sublime.css"
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor/dist/i18n/zh-cn.js';
export default {
  name: "AdminEditor",

  data() {
    return {
      article: null,
      title: "",
      content: ""
    };
  },

  mounted() {
    if (this.$route.query.id) {
      axios.get(`/server/article/${this.$route.query.id}/`).then(res => {
        // console.log(res.data)
        this.article = res.data
        this.title = this.article.title
        this.content = this.article.content
        // insertText() 方法是插入编辑器文本
        this.tuieditor.insertText(this.content)
      })
    } else {
      this.title = ""
      this.content = ""
    } 

    hljs.highlightAll();
    hljs.initHighlightingOnLoad();
    // eslint-disable-next-line
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('pre').forEach((block) => {
            hljs.highlightBlock(block);
        });
    });

    this.tuieditor = new Editor({
      el: document.querySelector("#editorSection"),
      initialEditType: "markdown",
      previewStyle: "vertical",
      language:'zh-CN',
      initialValue: this.content,
      height: "calc(100% - 58px)",
      plugins: [colorSyntax, [codeSyntaxHighlight, { hljs }]],
      hooks: {
        previewBeforeHook(p) {
          console.log("------", p);
        },
        addImageBlobHook(file, call, source) {
          console.log(file, "\n", call, "\n", source);
          var forms = new FormData();
          var configs = {
            headers: {
              "Content-Type": "text/json;charset=UTF-8",
              "Access-Control-Allow-Origin": "https://cdnir.com",
            },
          };
          forms.append("file", file);
          axios.post("/file.php", forms, configs).then((res) => {
            console.log(res.data);
            call(res.data.url);
          });
        },
      },
    });
  },
  beforeDestroy() {
    this.tuieditor = null;
    delete this.tuieditor;
  },
  methods: {
    // 保存草稿
    handleSave () {
      console.log("保存草稿---")
      // getMarkdown() 为md格式的文本
      // console.log("getMarkdown()", this.tuieditor.getMarkdown())
      var articleData=JSON.stringify({
          // content: this.tuieditor.getHtml(),
          content: this.tuieditor.getMarkdown(),
          title: this.title
      })
      var configs = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        },
      };
      // 如果article存在,则表示为修改文章信息
      if (this.article) {
        axios.put(`/server/article/${this.article.id}/`, articleData, configs).then((res) => {
          console.log(res.data);
        });
      } else {
        axios.post("/server/article/", articleData, configs).then((res) => {
          console.log(res.data);
        });
      }

    },
    // 发布文章
    handleRelease () {
      console.log("发布文章---")
      var articleData=JSON.stringify({
        // content: this.tuieditor.getHtml(),
        content: this.tuieditor.getMarkdown(),
        title: this.title,
        status: 1
      })
      var configs = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        },
      };
      // 如果article存在,则表示为修改文章信息
      if (this.article) {
        axios.put(`/server/article/${this.article.id}/`, articleData, configs).then((res) => {
          console.log(res.data);
        });
      } else {
        axios.post("/server/article/", articleData, configs).then((res) => {
          console.log(res.data);
        });
      }
    },
  },

};
</script>

<style>
  #editorSection {
    width: 100%;
    background: cornsilk;
    /* height: 100px; */
  }
  .el-input .el-input__inner {
    border-radius: 30px;
  }

  .input-box {
    display: flex;
    /* background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%); */
    padding: 8px 16px 8px 8px;
  }

</style>

<style>
.tui-editor-defaultUI .te-mode-switch {
    display: none;
}

.te-md-container .CodeMirror {
    font-size: 20px;
    height: inherit;
}

.CodeMirror-vscrollbar::-webkit-scrollbar {
	width:8px;
	height:8px;
}


*::-webkit-scrollbar {
	width:8px;
	height:8px;
}
/*滚动条里面小方块样式*/
*::-webkit-scrollbar-thumb {
	border-radius:100px;
	/* background-clip: text; */
	/* -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2); */
	
	background:rgb(158, 160, 163);
}
/*滚动条里面轨道样式*/
*::-webkit-scrollbar-track {
	/* -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2); */
	border-radius:0;
	background:rgba(255, 97, 97, 0.1);
}

</style>