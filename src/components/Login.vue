<template>
  <!-- <v-container fill-height fluid class="login-container" v-if="notLoggedIn"> -->
  <v-container fill-height fluid class="login-container">
    <v-row justify="center">
      <v-card
        max-width="320"
        :class="{'shake' : loginData.shakeCard === true}"
        class="login-wrap px-6 py-4 rounded-lg"
      >
        <v-card-title justify="center" class="login-title center pa-0 my-5">
          Sellhugs
          <v-icon size="15" class="red--text">favorite</v-icon>
        </v-card-title>
        <v-form ref="loginForm">
          <v-text-field
            v-model="loginData.username"
            append-icon="account_circle"
            :rules="inputRules"
            label="Username"
            @focus="$refs.loginForm.resetValidation()"
          ></v-text-field>
          <v-text-field
            v-model="loginData.password"
            :append-icon="loginData.show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="loginData.show1 ? 'text' : 'password'"
            name="input-10-1"
            :rules="inputRules"
            label="Password"
            @click:append="loginData.show1 = !loginData.show1"
            @keypress.enter="loginToSite"
            @focus="$refs.loginForm.resetValidation()"
          ></v-text-field>
          <div class="no-account black--text text-center mt-2">
            Don't have an account?
            <a @click="registerPopup = true">Join</a>
          </div>
          <v-btn
            @click="loginToSite"
            depressed
            rounded
            center
            dark
            :loading="loginData.loginFlag"
            color="primary"
            class="login-btn my-5"
          >Login</v-btn>
        </v-form>
      </v-card>
    </v-row>
    <div class="d-flex justify-center" max-width="320">
      <v-dialog v-model="registerPopup" max-width="320">
        <v-card width="100%" class="register-wrap px-6 py-4 rounded-lg">
          <v-card-title justify="center" class="login-title regiter-title center pa-0 my-5">Register</v-card-title>
          <v-form ref="registerForm">
            <v-text-field
              v-model="registerData.username"
              append-icon="account_circle"
              :rules="inputRules"
              label="Username"
              @focus="$refs.registerForm.resetValidation()"
            ></v-text-field>
            <v-text-field
              v-model="registerData.email"
              append-icon="email"
              :rules="emailRule"
              label="Email"
              @focus="$refs.registerForm.resetValidation()"
            ></v-text-field>
            <v-text-field
              v-model="registerData.password"
              :append-icon="registerData.show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="registerData.show1 ? 'text' : 'password'"
              name="input-10-1"
              :rules="passwordRule"
              label="Password"
              @click:append="registerData.show1 = !registerData.show1"
              @focus="$refs.registerForm.resetValidation()"
            ></v-text-field>
            <v-text-field
              v-model="registerData.cpassword"
              :append-icon="registerData.show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="registerData.show2 ? 'text' : 'password'"
              name="input-10-1"
              :rules="cpasswordRule"
              label="Confirm Password"
              @click:append="registerData.show2 = !registerData.show2"
              @keypress.enter="register()"
              @focus="$refs.registerForm.resetValidation()"
            ></v-text-field>
            <v-btn
              @click="register()"
              depressed
              rounded
              center
              dark
              :loading="registerData.loginFlag"
              color="grey"
              class="login-btn my-5"
            >Register</v-btn>
          </v-form>
        </v-card>
      </v-dialog>
      <v-alert
        close-icon="mdi-window-close"
        border="left"
        elevation="2"
        colored-border
        icon="mdi-marker-check"
        class="vuetify-alert"
        v-model="alertShow"
        close-text="Close Alert"
        color="white lighten-1"
        dark
        dismissible
      >{{ alertMessage }}</v-alert>
    </div>
  </v-container>
</template>

<script>
import { userLogin, userRegister, authCheck } from "./api/api";
export default {
  props: {
    notLoggedIn: Boolean,
  },
  data() {
    return {
      inputRules: [(v) => v.length > 0 || "Please Fill"],
      passwordRule: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 6) || "Password must have 6+ characters",
        (v) => /(?=.*[A-Z])/.test(v) || "Must have one uppercase character",
        (v) => /(?=.*\d)/.test(v) || "Must have one number",
        (v) => /([!@$%])/.test(v) || "Must have one special character [!@#$%]",
      ],
      cpasswordRule: [
        (v) => !!v || "Please Fill ",
        () => {
          if (
            this.registerData.password.length > 0 &&
            this.registerData.cpassword.length > 0
          )
            return (
              this.registerData.password === this.registerData.cpassword ||
              "Password miss match"
            );
          else return true;
        },
      ],
      emailRule: [
        (v) => !!v || "Email is required",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      alertShow: false,
      alertMessage: "Alert Message",
      registerPopup: false,
      loginData: {
        username: "",
        password: "",
        show1: false,
        loginFlag: false,
        shakeCard: false,
      },
      registerData: {
        show1: false,
        show2: false,
        loginFlag: false,
        username: "",
        password: "",
        cpassword: "",
        email: "",
        role: "",
      },
    };
  },
  methods: {
    loginToSite() {
      var self = this;
      if (this.$refs.loginForm.validate()) {
        self.loginData.loginFlag = true;
        userLogin(this.loginData.username, this.loginData.password)
          .then(() => {
            self.$loginStatus = "logged in";
            self.loginData.username = "";
            self.loginData.password = "";
            self.$router.push({ path: "/" });
            authCheck().then((response) => {
              alert(response.data);
            });
          })
          .catch(() => {
            self.loginData.shakeCard = true;
            setTimeout(function () {
              self.loginData.shakeCard = false;
            }, 1000);
          })
          .finally(() => {
            self.loginData.loginFlag = false;
            self.$refs.loginForm.resetValidation();
          });
      }
    },
    register() {
      var self = this;
      if (self.$refs.registerForm.validate()) {
        self.registerData.loginFlag = true;
        console.log(
          self.registerData.username,
          self.registerData.email,
          self.registerData.password
        );
        userRegister(
          self.registerData.username,
          self.registerData.email,
          self.registerData.password
        )
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              self.alertMessage = "";
              self.alertMessage =
                "Welcome " +
                self.registerData.username +
                ". Verify your email address " +
                self.registerData.email;
              self.alertShow = true;
              self.registerData.username = "";
              self.registerData.email = "";
              self.registerData.password = "";
              self.registerData.cpassword = "";
              self.registerPopup = false;
            }
          })
          .catch((error) => {
            alert("Something went Wrong");
            console.log(error);
          })
          .finally(() => {
            self.registerData.loginFlag = false;
            self.$refs.registerForm.resetValidation();
          });
      }
    },
  },
};
</script>

<style scoped>
.login-wrap {
  width: 100%;
}
.login-title {
  justify-content: center;
}
.login-container {
  background: url("~@/assets/img/login/login_lg.jpg") center no-repeat;
  background-size: cover;
}
.login-btn {
  width: 100%;
}
.no-account {
  font-size: 16px;
}
.vuetify-alert {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  max-width: calc(100% - 60px);
}
</style>