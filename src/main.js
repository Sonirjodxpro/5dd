// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './store'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  error:'./assets/logo.png',
  loading:'./assets/logo.png'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store:store,
})
