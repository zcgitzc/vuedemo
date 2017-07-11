import Vue from 'vue'
import VueResource from 'vue-resource'

import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/theme-default/index.css'

import router from './router'
import moment from 'moment'
Vue.prototype.$moment = moment

import App from './App'
Vue.use(VueI18n)
// Vue.use(ElementUI,{i18n: key => i18n.t(key)})
Vue.use(ElementUI,{i18n: function(key){
  // console.log(key);
  // console.log(i18n.t(key));
  return i18n.t(key);
}})

Vue.use(VueResource)

Vue.config.productionTip = true

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages : {
    'zh': Object.assign(require('@/common/i18ns/zh').getI18ns(), zhLocale),   // 中文语言包
    'en': Object.assign(require('@/common/i18ns/en').getI18ns(), enLocale)    // 英文语言包
  }
});

window._ = require('lodash');
/* eslint-disable no-new */
var main = new Vue({
  el: '#app',
  router:router,
  i18n:i18n,
  template: '<App/>',
  components: {
    "App" : App,
  },
  beforeCreate(){
    // console.log("beforCreate");
  },
  created(){
    // console.log(_.isEmpty() ? 'Lodash everywhere!' : 'Uh oh..');
    console.log(this.$i18n.messages);
     Vue.http.interceptors.push((request, next) => {
     
        request.method = 'POST';
        request.timeout = 5 * 60 * 1000;
        next((response) => {
            if(response && response.body){
              let result = response.body;
              if(result.hasError && result.errorMsgs){
                let errorMsg = result.errorMsgs.join("<br/>");
                this.$message({
                    showClose: true,
                    message: errorMsg,
                    type: 'error'
                  });
              }
              if(result.hasError && !result.errorMsgs){
                  this.$message({
                    showClose: true,
                    message: i18n.t("common.unknowException"),
                    type: 'error'
                  });
              }

              if(!result.hasError){
                  this.$message({
                    showClose: true,
                    type: 'success',
                    message:i18n.t("common.operateSuccess")
                  });
              }
            }
            return response;
        });
    });

    Vue.filter("formateDate",function(value){
     // console.log(this.$moment.now(),this.$moment().format("YYYY-MM-DD"));
      return value;
    });
  },
}).$mount('#app');
