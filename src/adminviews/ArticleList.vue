<template>
<div >
  <el-table :data="tableData">


    <el-table-column label="创建日期" width="150">
      <!-- eslint-disable-next-line -->
      <template slot-scope="scope">
        <span>{{ scope.row.created_time.substring(0,16).replace('T', ' ') }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="title" label="文章信息" width="400">
    </el-table-column>
    <el-table-column label="文章分类" width="120">
      <template slot-scope="scope">
        <el-tag effect="plain" disable-transitions>{{scope.row.category.name}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="文章标签" width="120">
      <template slot-scope="scope">
        <!-- eslint-disable-next-line -->
        <div v-for="(item,index) in scope.row.tag">
          <el-tag :type="typeName(index)"
        disable-transitions>{{item.name}}</el-tag>
        </div>

      </template>
    </el-table-column>
    <el-table-column width="130">
      <!-- 这里忽略这个报错 -->
      <!-- eslint-disable-next-line -->
      <template slot="header" slot-scope="scope" >
        <el-select v-model="select" slot="prepend" placeholder="全部状态">
          <el-option label="已发布" value="1"></el-option>
          <el-option label="草稿箱" value="2"></el-option>
        </el-select>
      </template>

      <template slot-scope="scope">
        <span v-if="scope.row.status == 1">
          <el-tag type="success" effect="dark" disable-transitions>已发布</el-tag>
        </span>
        <span v-else><el-tag type="info" effect="dark" disable-transitions>草稿</el-tag></span>
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
import axios from "axios";

  export default {

    computed: {
      // typeName (index) {
      //   console.log(index)
      //   return index
      // }
    },

    components: {
    },
    data() {
      return {
        tableData: null,
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
      },
      // 返回一个标签主题
      typeName (index) {
        // console.log(index)
        const typeTagList = ['success', 'info', '', 'danger', 'warning']
        if (index < 4) {
          return typeTagList[index]
        } else {
          return 'danger'
        }

      }
    },
    mounted () {
      axios.get("/server/article/").then((res) => {
        // console.log(res.data.data[0].created_time.substring(5,9));
        this.tableData = res.data.data
      });
    }

  };
</script>

<style>
  .cell{
    text-align: center;
  }

</style>
