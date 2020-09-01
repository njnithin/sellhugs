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
import {
  refreshToken
} from "./components/api/api.js";
/* Global Variable section */
Vue.prototype.$axios = axios;
/* *** */
/*Global Data Section*/
let globalData = new Vue({
  data: {
    $loginStatus: null,
    $baseURL: process.env.VUE_APP_URL,
    $title: process.env.VUE_APP_BASE,
    $loaderFlag: false
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
    },
    $loaderFlag: {
      get: function () {
        return globalData.$data.$loaderFlag
      },
      set: function (changedStatus) {
        globalData.$data.$loaderFlag = changedStatus;
      }
    },
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
let isRefreshing = false;
axios.interceptors.response.use(response => {
  // Do something with response data
  /* User Validation Success */
  if (response.config.url === process.env.VUE_APP_URL + "/user/greet") {
    if (response.status === 200) {
      console.log("User Validation Success");
      console.log(response.data);
      globalData.$data.$loginStatus = 'logged in';
    }
  }
  /* End of User Validation Success*/
  return response;
}, error => {
  console.log(error)
  const {
    response: {
      status
    }
  } = error;
  // Do something with response error
  /*Silent Refresh*/
  if (status === 401 && router.history.current.path != '/login') {
    globalData.$data.$loaderFlag = true;
    if (!isRefreshing) {
      isRefreshing = true;
      refreshToken().then((refreshResponse) => {
        console.log(refreshResponse.data.message);
        if (refreshResponse.status === 200) {
          globalData.$data.$loginStatus = 'logged in';
        }
      }).catch((error) => {
        console.log(error)
        console.log(" Refresh failed !!!")
        globalData.$data.$loginStatus = 'logged out';
        console.log(globalData.$data.$loginStatus)
        // globalData.$loginStatus = 'logged out';
      }).finally(() => {
        globalData.$data.$loaderFlag = false;
        isRefreshing = false;
      });
    }
  }

  /*End of Silent Refresh*/
  return Promise.reject(error);
});
/* *** */
/* Vue Instance create */
export const vm = new Vue({
  vuetify,
  render: h => h(App),
  router: router,
}).$mount('#app');
/* *** */