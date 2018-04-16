<template>
  <div class="tableContent">
    <div class="operBtn">
      <el-button @click="transform">1111111</el-button>
      <el-button type="primary">22222222</el-button>
      <el-button type="text">33333333</el-button>
    </div>
    <el-table
      ref="multipleTable"
      :data="transactionTableData.data"
      border
      tooltip-effect="dark"
      element-loading-text="拼命加载中..."
      style="width: 100%"
      @selection-change="handleSelectionChange">

      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        label="ID"
        width="120" prop="id">
      </el-table-column>

       

      <el-table-column
        prop="password"
        :label="this.$i18n.t('transaction.tableContent.password')"
        width="120">
      </el-table-column>

      <el-table-column
        prop="description"
        :label="this.$i18n.t('transaction.tableContent.description')"
        show-overflow-tooltip>
      </el-table-column>

      

    </el-table>
    <div class="pager">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="transactionTableData.currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="prev, pager, next,sizes"
        :total="transactionTableData.totalCount">
      </el-pagination>
    </div>

    <div class="updateUserDialog">
       <el-dialog title="修改用户信息" :visible.sync="updateUserDialogVisable">
          <el-form :model="userDo">
            <el-form-item label="用户名" :label-width="formLabelWidth">
              <el-input v-model="userDo.username" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
              <el-input v-model="userDo.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="描述信息" :label-width="formLabelWidth">
              <el-input v-model="userDo.description" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="updateUserDialogVisable = false">取 消</el-button>
            <el-button type="primary" @click="doUpdate">确 定</el-button>
          </div>
        </el-dialog>
    </div>
  </div>
</template>


<script>
 export default {
    data() {
      return {
        tableLabels:{
          gmtCreate:this.$i18n.t('transaction.tableContent.gmtCreate')
        },
        multipleSelection: [],
        total:1,
        currentPage: 1,
        userDo:{},
        selectedData : [],
        formLabelWidth: '120px',
        updateUserDialogVisable:false,
      }
    },
    created(){
      //console.log(this.$i18n.t('transaction.tableContent.gmtCreate'));
    },
    props: ['transactionTableData'],
    methods:{
      handleUpdate(index, row){
        this.$http.get('/easyframe/user/queryById.json',{params:{
          id:row.id
        }}).then(response => {
          this.userDo = response.body.data[0];
          this.updateUserDialogVisable = true;
        })
      },
      doUpdate(){
        this.$http.get('/easyframe/user/updateById.json',{params:{
          "userDo":JSON.stringify(this.userDo)
        }}).then(response => {
          this.updateUserDialogVisable = false;
          this.$parent.doSearch(JSON.stringify({current:1,length:10}));
        })
      },
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.get('/easyframe/user/deleteById.json',{params:{
            id:row.id
          }}).then(response => {
            this.$parent.doSearch(JSON.stringify({current:1,length:10}));
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleSelectionChange(selectedData){
        this.selectedData = selectedData;
      },
      handleSizeChange(size){
        this.$parent.doSearch(JSON.stringify({current:1,length:size}));
      },
      handleCurrentChange(currentPage){
        this.$parent.doSearch(JSON.stringify({current:currentPage,length:10}));
      },
      transform(){
        let selectedIds = [];
        this.selectedData.forEach(function (item ,index ){
           selectedIds.push(item.id);
        });
        console.log("selectedIds",selectedIds);
      }
    }
  }
</script>

<style scoped>
 .operBtn{
    margin-bottom: 7px;
 }
 .pager{
    float:right;
 }
</style>