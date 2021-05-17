<template>
<div >
  <el-table :data="tableData" stripe>
    <el-table-column prop="date" label="创建日期" width="140">
    </el-table-column>
    <el-table-column prop="name" label="标签名称" width="120">
    </el-table-column>
    <el-table-column prop="address" label="文章数量" width="120">
    </el-table-column>
    <el-table-column
      width="140"
      align="righ`t">
      <!-- 这里忽略这个报错 -->
      <!-- eslint-disable-next-line -->
      <template slot="header" slot-scope="scope" >
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i></el-button>
      </template>
    </el-table-column>`
  </el-table>

</div>
</template>

<script>
  export default {
    components: {
    },
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '33'
      };
      return {
        tableData: Array(20).fill(item),
        search: ''
      }
    },
    name: 'Category',
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  };
</script>

<style>
  .cell{
    text-align: center;
  }

</style>
