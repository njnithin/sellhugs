import Vue from 'vue'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/animations.css';
import './assets/css/general.css';
import VuePageTransition from 'vue-page-transition'
import VueRouter from 'vue-router';
import Routes from './routes';

/* Global Variable section */

Vue.prototype.$axios = axios;

/* *** */

/*Global Data Section*/

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
      get: function () {
        return globalData.$data.$loginStatus
      },
      set: function (changedStatus) {
        globalData.$data.$loginStatus = changedStatus;
      }
    },
    $baseURL: {
      get: function () {
        return globalData.$data.$baseURL
      }
    },
    $title: {
      get: function () {
        return globalData.$data.$title
      }
    }
  }
})

/* *** */

/* Vue use cases */

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VuePageTransition);
Vue.use(VueRouter);

/* *** */

/* Router Section */

const router = new VueRouter({
  base: process.env.VUE_APP_BASE,
  routes: Routes,
  mode: 'history'
});

/* *** */

/* Axios Section */

/*axios.interceptors.request.use(config => {
  console.log(`${config.method.toUpperCase()} request sent to ${config.url}`);
  console.log(config)
  return config;
},error => {
  return Promise.reject(error);
});*/
axios.interceptors.response.use(response => {
  // Do something with response data
  console.log(response)
  return response;
}, error => {
  // Do something with response error
  console.log(error.response.status)
  return Promise.reject(error);
});

/* *** */

/* Vue Instance create */

new Vue({
  vuetify,
  render: h => h(App),
  router: router,
}).$mount('#app');

/* *** */