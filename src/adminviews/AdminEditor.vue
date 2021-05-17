<template>
  <div style="width: 100%;">
    <div class="input-box">
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
      </el-input>
      <el-button type="info" round>保存草稿</el-button>
      <el-button type="primary" round>发布文章</el-button>
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
  props: {
    content: String,
    value: String,
  },
  data() {
    return {
      text: "aaa",
      input3: '',
      select: ''
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

    this.tuieditor = new Editor({
      el: document.querySelector("#editorSection"),
      initialEditType: "markdown",
      previewStyle: "vertical",
      language:'zh-CN',
      initialValue: this.text,
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
              "Access-Control-Allow-Origin": "https://www.riyugo.com",
              //   'origin': 'https://www.riyugo.com'
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
    get_md_html() {
      console.log("AAAAAAAAAAAAAA", this.tuieditor.getHtml());
    },
    initialize() {
      if (this.$el) {
        this.value = this.tuieditor.getHtml();
        console.log("9798797979", this.tuieditor.getHtml());
      }
    },
  },
  watch: {
    text: {
      handler(value, oldValue) {
        console.log("新---", value);
        console.log("旧---", oldValue);
      },
      deep: true,
      immediate: true,
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
</style>
<style>
  .el-input .el-input__inner {
    border-radius: 30px;
  }

  .input-box {
    display: flex;
    /* background-color: rgb(189, 186, 186); */
    margin: 8px 16px 8px 8px;
  }

</style>