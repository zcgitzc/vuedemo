<template>
  <div class="settlement">
    <div id="search" v-if="!showResult">
      <el-input
          placeholder="请输入链接地址"
          icon="plus"
          v-model="linkUrl"
          :on-icon-click="handleIconClick">
        </el-input>
    </div>
    <div id="searchResult" v-if="showResult">
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">{{title}}&nbsp;&nbsp;<i :title="this.linkUrl" class="header-icon el-icon-information"></i>
            </template>
              <v-searchResult :result = "result"></v-searchResult>
          </el-collapse-item>
        </el-collapse>
    </div>
  </div>
</template>

<script>
    import SearchResult from '@/components/Settlement/SearchResult';
    export default {
        data(){
            return {
                linkUrl : "",
                showResult : false,
                title : "",
                result : {},
            }
        },
        methods: {
            handleIconClick(ev) {
                this.$http.get('/easyframe/webPageInfo/add.json',{params:{
                  "url":this.linkUrl,
                  "tagNameEq":"body"
                }}).then(response => {
                    this.showResult = !this.showResult;
                    this.title = response.body.data[0].title;
                    this.result = response.body.data[0];
                })
            },
        },
        components: {
          'v-searchResult':SearchResult
        },

    }
</script>