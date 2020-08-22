<template>
  
     <v-app>
      <router-view >
   
      </router-view>
    </v-app>
  
 
</template>

<script>


export default {
 data(){
    return{
        loaderFlag: false,
        notLoggedIn: true,
    }

  },
  components: {
   
  }
};
</script>
