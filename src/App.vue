<template>
     
     <v-app>
      <c-header ></c-header>
      <router-view >
   
      </router-view>
    </v-app>
  
 
</template>

<script>

import header from './components/general/Header';

export default {
 data(){
    return{
        loaderFlag: false,
        notLoggedIn: true,
    }

  },
  components: {
    'c-header': header
  }
};
</script>
