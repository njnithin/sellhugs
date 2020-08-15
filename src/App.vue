<template>
  <v-app>
      <c-learn></c-learn>
      <!-- Loader component -->
        <c-loader :loaderFlag="loaderFlag"></c-loader>
      <!-- End of Loader component -->
      <!-- Login Page -->
        <c-login></c-login>
      <!-- End of Login Page -->
  </v-app>
</template>

<script>

import LearnFile from './components/Learn';
import LoaderComponent from './components/general/SiteLoader';
import LoginForm from './components/Login';

export default {
 data(){
    return{
        loaderFlag: false
    }

  },
  components: {
    "c-learn": LearnFile,    
    "c-loader": LoaderComponent,    
    "c-login": LoginForm,

  }
};
</script>
