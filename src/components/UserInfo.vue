<template>
  <div class="demo-basic--circle">
    <!-- <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div> -->
    <el-avatar :size="50" :src="circleUrl"></el-avatar>
      <div class="sub-title">circle</div>
      <el-divider content-position="center">相信我, 你并不孤独!</el-divider>
      <div class="iconfont-ul">
        <ul>
          <li>
            <a href="https://gitee.com/lanxiaobai/" title="Gitee">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gitee-fill-round"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/lxb-log/webblog" title="GitHub">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon-test"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://blog.csdn.net/lxb_wyf" title="CSDN">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-csdn"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
import "../../public/css/iconfont/iconfont"
  export default {
    name: 'UserInfo',
    data () {
      return {
        circleUrl: "https://portrait.gitee.com/uploads/avatars/user/2571/7714877_lanxiaobai_1611728739.png!avatar60",
        sizeList: ["large", "medium", "small"]
      }
    }
  }
</script>

<style>
.demo-basic--circle {
  padding: 5px;  /*  上右下左 */
  background: #fafdfa;
  height:160px;
  text-align: center;
  margin:10px auto;
  /* width: 200px; */
}
.iconfont-ul {
  padding: 10px 5px 10px 5px;
}

.iconfont-ul li {
  padding: 5px;
  display:inline;
}

.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>