
<template> 
<div style="height: 100%;">
    <AdminSidebar>
        <router-view></router-view>
    </AdminSidebar>

    
</div>
</template>

<script>
  export default {
    name: 'AdminHome',
    data () {
      return {
      }
    },
    methods: {
        
    }
  }
</script>

<style>
  /* .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: rgb(66, 66, 66);
  }
  .el-menu {
    text-align: center;
  } */
</style>

<script>
import AdminSidebar from "./AdminSidebar"
  export default {
    components: {
      AdminSidebar
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
    }
  };
</script>



