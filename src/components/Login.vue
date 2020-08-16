<template>
  <v-container fill-height fluid class="login-container">
    <v-row   justify="center" >
          <v-card max-width="300" class="login-wrap px-6 py-4 rounded-lg">
            <v-card-title  justify="center" class="login-title center pa-0 mb-5">
              Sellhugs
              <!-- <v-icon >favorite</v-icon> -->
            </v-card-title>
            <v-form ref="loginForm" >
              <v-text-field v-model="loginData.username" append-icon="account_circle" label="Username" class="gray" ></v-text-field>
              <v-text-field v-model="loginData.password" append-icon="lock" label="Password" ></v-text-field>
              <v-btn @click="loginToSite" depressed  rounded center dark color="primary" class="login-btn">Login</v-btn>
            </v-form>
          </v-card>
    </v-row>
    
    
  </v-container>
</template>

<script>
  import axios from "axios";
  export default {
    data(){
      return {
        loginData: {
          "username":"",
          "password":""
        }
      }
    },
    methods:{
      loginToSite(){
        axios.post('https://shop-store-backend.herokuapp.com/login', {
            "username": this.username,
            "password": this.password
          }).then(function(response) {
            console.log(response.data.status);
            if (response.data.status === "Success"){
              console.log("success")
            }      
          }).catch(function(error) {
            console.log(error)
          });
      }
    }

  }
</script>

<style scoped>
.login-title {
  justify-content: center;
}
.login-container{
  background: url('~@/assets/img/login/login_lg.jpg') center no-repeat;
  background-size: cover;
}
  
</style>