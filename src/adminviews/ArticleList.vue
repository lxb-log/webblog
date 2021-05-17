<template>
<div >
  <el-table :data="tableData">
    <el-table-column prop="date" label="创建日期" width="140">
    </el-table-column>
    <el-table-column prop="name" label="文章信息" width="400">
    </el-table-column>
    <el-table-column prop="address" label="文章分类" width="120">
    </el-table-column>
    <el-table-column prop="address" label="文章标签" width="120">
    </el-table-column>
    <el-table-column prop="type" width="130">
      <!-- 这里忽略这个报错 -->
      <!-- eslint-disable-next-line -->
      <template slot="header" slot-scope="scope" >
          <el-select v-model="select" slot="prepend" placeholder="全部状态">
            <el-option label="已发布" value="1"></el-option>
            <el-option label="草稿箱" value="2"></el-option>
          </el-select>
      </template>

    </el-table-column>
    <el-table-column
      width="150"
      align="righ`t">
      <!-- 这里忽略这个报错 -->
      <!-- eslint-disable-next-line -->
      <template slot="header" slot-scope="scope" >
        <el-input
          v-model="search"
          size="medium "
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
        search: '',
        select: ''
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
