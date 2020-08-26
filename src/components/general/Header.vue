<template>
  <div>
    <v-app-bar
      color="light"
      dense
      dark
      app
    >
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Sellhugs</v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="login-logout">
        
        <v-btn :title="this.$loginStatus"  v-if="this.$loginStatus === 'login'" icon to="/login">
          <v-icon >input</v-icon>
        </v-btn>
        <div  v-else-if="this.$loginStatus === 'logout'">
          <v-btn :title="this.$loginStatus"  icon >
           <v-icon @click="userLogout">launch</v-icon>
          </v-btn>
          <v-btn title="Account"  icon >
           <v-icon >account_circle</v-icon>
          </v-btn>         
        </div>
        

      </div>


      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <!-- Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
    <!--   <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider> -->

      <v-list dense class="pt-15">

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="item.link">{{  item.title }}</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
   
  </div>
</template>
<script>
    export default {
        data(){
            return {
              drawer: false,
              items: [
                { title: 'Home', icon: 'dashboard' , link: '/home'},
                { title: 'API', icon: 'question_answer',link:'/api_check' },
              ],
          }
        },
        methods:{
          userLogout(){
            var self = this;
            this.$axios.get(self.$baseURL+'/auth/delete').then(function (response){
              console.log(response)

            }).catch(function(error){
              console.log(error);
            });
            // this.$loginStatus = 'login';

          }
        }

    }
</script>