<template> 
<el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="250px" style="background-color: rgb(238, 241, 246); height: 100%;">
    <UserInfo></UserInfo>
    <el-menu >
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
    </el-menu>
  </el-aside>
  
    <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <!-- 路由插槽 -->
      <router-view></router-view>
      
    </el-main>
  </el-container>

  
</el-container>
</template>
<style>
  .el-aside {
    color: rgb(66, 66, 66);
  }
  .el-menu {
    text-align: center;
  }
  .Highlight{
      color: rgb(17, 101, 228);
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
import UserInfo from "../components/UserInfo"
  export default {
    components: {
      UserInfo
    },
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    name: 'AdminSidebar',
  };
</script>



