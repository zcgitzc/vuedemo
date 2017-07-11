<template>
  <div>
    <div class="search">
      <el-form ref="form" label-width="100px">
        <el-row :gutter="20">
          <el-col :span="7">
              <el-form-item label="活动名称1-1">
                <el-input v-model="cond.value11"></el-input>
              </el-form-item>
          </el-col>
          <el-col :span="7">
             <el-form-item label="活动名称1-2">
                <el-input v-model="cond.value12"></el-input>
              </el-form-item>
          </el-col>
          <el-col :span="7">
             <el-form-item label="活动名称1-3">
                <el-checkbox-group v-model="cond.value13" size="small">
                  <el-checkbox label="复选框 A"></el-checkbox>
                  <el-checkbox label="复选框 B" disabled></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
          </el-col>
          <el-col :span="1">
            &nbsp;
          </el-col>
          <el-col :span="1">
            <el-button type="text" @click="toggleSearch()">
               高级查询&nbsp;&nbsp;
               <i v-if="show" class="el-icon-caret-top"></i>
               <i v-if="!show" class="el-icon-caret-bottom"></i>
            </el-button>
          </el-col>
        </el-row>


          <transition name="el-zoom-in-top">
            <div v-show="show">
              <el-row :gutter="20">
                <el-col :span="7">
                  <el-form-item label="活动名称2-1">
                    <el-select v-model="cond.value21" placeholder="请选择">
                      <el-option-group
                        v-for="group in options3"
                        :key="group.label"
                        :label="group.label">
                        <el-option
                          v-for="item in group.options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-option-group>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="活动名称2-2">
                      <el-date-picker
                        v-model="cond.value22"
                        type="daterange"
                        placeholder="选择日期范围">
                      </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="活动名称2-3">
                      <el-input v-model="cond.value23"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>

              <el-row :gutter="20">
                <el-col :span="7">
                    <el-form-item label="活动名称3-1">
                      <el-input v-model="cond.value31"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="活动名称3-2">
                      <el-input v-model="cond.value32"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="活动名称3-3">
                      <el-select v-model="cond.value33" multiple placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                </el-col>
              </el-row>
            </div>
          </transition>

          <div class="searchBtn">
            <el-button type="primary" @click="doSearch()">查询</el-button>
            <el-button>导出</el-button>
          </div>
        </el-form>
      </div>
    <div class="table">
      <v-table :transactionTableData="transactionTableData"></v-table>
    </div>
  </div>
</template>


<script>
  import TableContent from '@/components/Transaction/TableContent'

  export default {
    data() {
      return {
        show: false,
        transactionTableData : {},
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        options: [{
          value: 'Item1',
          label: '黄金糕'
        }, {
          value: 'Item2',
          label: '双皮奶'
        }, {
          value: 'Item3',
          label: '蚵仔煎'
        }, {
          value: 'Item4',
          label: '龙须面'
        }],
        cond:{
          value11:'',
          value12:'',
          value13:[],

          value21:'',
          value22:[],
          value23:'',

          value31:'',
          value32:'',
          value33:[]
        }
      }
    },
    components: {
      'v-table':TableContent
    },
    created(){
        this.doSearch();
    },
    methods: {
      toggleSearch() {
        this.show = !this.show;
      },
      doSearch(page){
        this.$http.get('/easyframe/user/queryAll.json',{params:{
          "cond":JSON.stringify(this.cond),
          "page":page ? page : JSON.stringify({current:1,length:10})
        }}).then(response => {
          this.transactionTableData = response.body
        })
      },
    }
  }
</script>

<style scoped>
  .searchBtn{
    text-align:center;
  }
</style>