<template>
  <!-- <v-container fill-height fluid class="login-container" v-if="notLoggedIn"> -->
  <v-container fill-height fluid class="login-container"> 
    <v-row  justify="center" >
          <v-card max-width="320" :class="{'shake' : loginData.shakeCard === true}" class="login-wrap px-6 py-4 rounded-lg">
            <v-card-title   justify="center" class="login-title center pa-0 my-5">
              Sellhugs
              <v-icon size="15" class="red--text">favorite</v-icon>
            </v-card-title>
            <v-form ref="loginForm" >
              <v-text-field v-model="loginData.username" 
              append-icon="account_circle"  
              :rules= "inputRules"
              label="Username"  >
              </v-text-field>
              <v-text-field
                v-model="loginData.password"
                :append-icon="loginData.show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="loginData.show1 ? 'text' : 'password'"
                name="input-10-1"
                :rules= "inputRules"
                label="Password"
                @click:append="loginData.show1 = !loginData.show1"
                @keypress.enter="loginToSite"
              ></v-text-field>
              <v-btn @click="loginToSite" depressed  rounded center dark :loading="loginData.loginFlag" color="primary" class="login-btn my-5">Login</v-btn>
            </v-form>
          </v-card>
    </v-row>
    
    
  </v-container>
</template>

<script>
  // import axios from "axios";
  export default {
    props:{
      notLoggedIn: Boolean
    },
    created(){
      console.log("base app url : " + this.$baseURL);
    },
    data(){
      return {
        inputRules: [
          v=> v.length > 0 || "Please Fill"
        ],
        loginData: {
          "username":"",
          "password":"",
          "show1": false,
          "loginFlag": false,
          "shakeCard": false
        },
   /*     userInfo: {
          "name": "guest",
          "token": ""
        }*/
      }
    },
    methods:{
      loginToSite(){
        var self =this;
        if(this.$refs.loginForm.validate()){
          self.loginData.loginFlag =true;
          self.$axios.post( self.$baseURL +'/auth/login', {
              "username": this.loginData.username,
              "password": this.loginData.password
            }).then(function(response) {
              // self.userInfo.name = response.data.username;
              // self.userInfo.token = response.data.authenticationToken;
              var token = response.data.authenticationToken;
              const config = {
                headers:{
                  'Authorization': 'Bearer ' + token
                }
              }
              self.$loginStatus = 'logout';
              self.loginData.username = "";
              self.loginData.password ="";
              self.$axios.get( self.$baseURL +'/user/greet', config).then(function(response) {
                // console.log(response , self.notLoggedIn)
                 alert(response.data);
                // self.notLoggedIn = false;

              }).catch(function(error) {
                 console.log(error);

              });
              self.$router.push({ path: 'home' });
            }).catch(function() {
              // console.log(error)
              self.loginData.shakeCard = true;
              setTimeout(function(){
                self.loginData.shakeCard = false;
              },1000);
            }).finally(function () {
              self.loginData.loginFlag = false; 
            });  

        }
      }
    }

  }
</script>

<style scoped>
.login-wrap {
  width: 100%;
}
.login-title {
  justify-content: center;
}
.login-container{
  background: url('~@/assets/img/login/login_lg.jpg') center no-repeat;
  background-size: cover;
}
.login-btn{
  width: 100%;
}
  
</style>