<template>
     
     <v-app>
      <c-header v-if="this.$router.history.current.path != '/login'" ></c-header>
      <transition>
        <keep-alive>
          <router-view >
   
          </router-view>
        </keep-alive>
     </transition>
    </v-app>
  
 
</template>

<script>

import header from './components/general/Header';

export default {
 data(){
    return{
        loaderFlag: false,
        loginStatus: this.$loginStatus
    }

  },
  components: {
    'c-header': header
  }
};
</script>
