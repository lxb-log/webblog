<template>
  <div class="adminsidebar">
    <div class="admin-left">
      <UserInfo></UserInfo>
      <el-menu>
        <el-menu-item index="1">
          <router-link to="/admin/articles" tag="li" active-class="Highlight">
            <i class="el-icon-menu"></i><span>文章管理</span>
          </router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/admin/category" tag="li" active-class="Highlight">
            <i class="el-icon-menu"></i><span>分类管理</span>
          </router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/admin/tags" tag="li" active-class="Highlight">
            <i class="el-icon-menu"></i><span>标签管理</span>
          </router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/admin/editor" tag="li" active-class="Highlight">
            <i class="el-icon-menu"></i><span>写文章</span>
          </router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="admin-right">
      <el-header style="text-align: center; font-size: 30px">
        <span class="header-text">后台管理系统</span>
      </el-header>
      <div class="admin-main">
        <!-- <div> -->
        <!-- 111 -->
        <router-view></router-view>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import UserInfo from "../components/UserInfo";
export default {
  components: {
    UserInfo,
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
  name: "AdminSidebar",
};
</script>

<style>
.adminsidebar {
  display: flex;
  height: 100%;
}

.admin-left {
  width: 250px;
  min-width: 240px;
  /* background: chartreuse; */
}
.admin-right {
  width: 100%;
  height: 100%;
  min-width: 1000px;
}
.el-header {
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  color: #fefefe;
  line-height: 60px;
}

.header-text {
  color: #fefefe;
  text-shadow: 0px 1px 0px #c0c0c0, 0px 2px 0px #b0b0b0, 0px 3px 0px #a0a0a0,
    0px 4px 0px #909090, 0px 5px 10px rgba(0, 0, 0, 0.6);
}
.Highlight {
  color: rgb(17, 101, 228);
}

.admin-main {
  width: 100%;
  height: calc(100% - 60px);
  background: rgb(109, 222, 236);
  /* text-align: center; */
  /* margin: 0 auto; */
  justify-content: center;
  /* align-items: center; */
  display: flex;
  overflow: auto; /*滚动条*/
}
/*-------滚动条整体样式----*/
.admin-main::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
/*滚动条里面小方块样式*/
.admin-main::-webkit-scrollbar-thumb {
  border-radius: 100px;
  /* background-clip: text; */
  /* -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2); */

  background: rgb(245, 80, 38);
}
/*滚动条里面轨道样式*/
.admin-main::-webkit-scrollbar-track {
  /* -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2); */
  border-radius: 0;
  background: rgba(255, 97, 97, 0.1);
}
</style>
