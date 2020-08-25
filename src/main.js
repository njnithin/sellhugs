import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/animations.css';
import './assets/css/general.css';
import VueRouter from 'vue-router';
import Routes from './routes';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueRouter);


const router = new VueRouter({
	base: process.env.NODE_ENV === 'production' ? '/sellhugs/' : '/',
	routes: Routes,
	mode: 'history'
})




new Vue({
  vuetify,
  render: h => h(App),
  router: router
}).$mount('#app')
