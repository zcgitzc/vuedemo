<template>
  <div class="header">
   <el-row :gutter="20"  class="grid-content bg-purple">
      <div class="menu">
        <el-menu theme="dark" :default-active="activeIndex" class="myMenu" mode="horizontal" @select="handleSelect">
          <router-link to="/">
            <el-menu-item index="home">{{$t("header.home")}}</el-menu-item>
          </router-link>
          <router-link to="/transaction">
            <el-menu-item index="transaction">
              {{$t("header.transaction")}}
            </el-menu-item>
          </router-link>
          <router-link to="/settlement">
            <el-menu-item index="settlement">
              {{$t("header.settlement")}}
            </el-menu-item>
          </router-link>
          <el-submenu index="dataManagement">
            <template slot="title">{{$t("header.dataManagement")}}</template>
            <router-link to="/dataManagement/business">
              <el-menu-item index="dataManagement/business">
                {{$t("header.business")}}
              </el-menu-item>
            </router-link>
            <router-link to="/dataManagement/product">
              <el-menu-item index="dataManagement/product">
                {{$t("header.product")}}
              </el-menu-item>
            </router-link>
            <router-link to="/dataManagement/customValue">
              <el-menu-item index="dataManagement/customValue">
                {{$t("header.customValue")}}
              </el-menu-item>
            </router-link>
          </el-submenu>
        </el-menu>
         <div class="changeLang" @click="changeLang()">
          <el-tag type="danger">{{defaultLang}}</el-tag>
         </div>
      </div>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        defaultLang:'EN'
      }
    },
    created(){
      this.$http.jsonp('https://api.douban.com//v2/movie/top250').then((response) => {
        console.log(response);
      });
    },
    methods: {
      handleSelect (path, paths) {
        paths.forEach(function(item){
        });
      },
      changeLang(){
        if(this.$i18n.locale == 'zh'){
          this.$i18n.locale = 'en';
          this.defaultLang = "中";
        }else if(this.$i18n.locale == 'en'){
          this.$i18n.locale = 'zh';
          this.defaultLang = "EN";
        }
        this.$http.get('/easyframe/lang/changeLang.json',{params:{
          "lang":this.$i18n.locale
        }}).then(response => {
          //window.location.reload(true);
        })
      },
    },
    components :{

    }
  }
</script>
  
<style lang="less" scoped>
  .menu{
    text-align: center;
    position: relative;
  }
  .myMenu{
    padding-left:200px;
  }
  .el-menu-item{
    padding-left:80px;
  }
  .el-submenu{
    padding-left:80px;
    width:80px;
  }
  .el-menu--horizontal .el-submenu>.el-menu{
    margin-left: 40px;
  }
  .changeLang{
    position: absolute;
    right: 26px;
    top: 18px;
    cursor: pointer;
  }
</style>