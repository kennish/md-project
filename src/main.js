// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/reset.css'

/** localStorage设置和获取 插件 **/
import Local from './utils/local'
Vue.use(Local)

/** axios **/
import axios from './http'
Vue.prototype.axios = axios

/** mint UI **/
import 'mint-ui/lib/style.css'
import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// rem计算
window.onload = function(){
  var iWin = document.body.clientWidth;
  document.getElementsByTagName("html")[0].style.fontSize = iWin / 16 + "px";
}
