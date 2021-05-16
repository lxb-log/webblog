<template>
  <div id="editorSection"></div>
</template>

<script>
import axios from "axios";
import "codemirror/lib/codemirror.css"; // Editor's Dependency Style
import "@toast-ui/editor/dist/toastui-editor.css"; // Editor's Style
import Editor from "@toast-ui/editor";
// import 'highlight.js/styles/github.css'
// import codeSyntaxHightlight from '@toast-ui/editor-plugin-code-syntax-highlight'
// import hljs from 'highlight.js'

export default {
  name: "AdminEditor",
  props: {
    content: String,
    value: String,
  },
  data() {
    return {
      text: "aaa",
    };
  },
  mounted() {
    this.tuieditor = new Editor({
      el: document.querySelector("#editorSection"),
      initialEditType: "markdown",
      previewStyle: "vertical",
      initialValue: this.text,
      height: "calc(100% - 2px)",

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
