import Vue from 'vue'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/animations.css';
import './assets/css/general.css';
import VueRouter from 'vue-router';
import Routes from './routes';
Vue.prototype.$axios = axios;
let globalData = new Vue({
  data: {
    $loginStatus: 'login',
    $baseURL: process.env.VUE_APP_URL,
    $title: process.env.VUE_APP_BASE,
  }
});
Vue.mixin({
  computed: {
    $loginStatus: {
      get: function() {
        return globalData.$data.$loginStatus
      },
      set: function(changedStatus) {
        globalData.$data.$loginStatus = changedStatus;
      }
    },
    $baseURL: {
      get: function() {
        return globalData.$data.$baseURL
      }
    },
    $title: {
      get: function() {
        return globalData.$data.$title
      }
    }
  }
})
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
const router = new VueRouter({
  base: process.env.VUE_APP_BASE,
  routes: Routes,
  mode: 'history'
})
new Vue({
  vuetify,
  render: h => h(App),
  router: router,
}).$mount('#app')