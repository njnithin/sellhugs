import loginComponent from './components/Login.vue';
import homeComponent from './components/pages/Home.vue';
import learnComponent from './components/Learn.vue';
import APIComponent from './components/general/APICheck.vue';
export default [

  { path: '/', component: homeComponent },
  { path: '/home', component: homeComponent },
  { path: '/login', component: loginComponent },
  { path: '/learn', component: learnComponent },
  { path: '/api_check', component: APIComponent }

]