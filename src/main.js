import Vue from 'vue'
import App from './App'
import router from './router'
import DrawerLayout from 'vue-drawer-layout'
import'./assets/js/rem.js'
import LyTab from 'ly-tab'
Vue.use(LyTab)
Vue.use(DrawerLayout)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
