<template>
  <div fill-height class="verify-container">
    <transition name="fade">
      <v-alert v-if="verified === true" type="success" max-width="600" width="100%">
        {{ verificationMsg }}. Go to
        <router-link class="black--text" to="/login">Login</router-link>
      </v-alert>
      <v-alert
        v-else-if="verified === false"
        type="error"
        max-width="600"
        width="100%"
      >{{ verificationMsg }}</v-alert>
      <v-progress-circular v-else :width="3" color="primary" indeterminate></v-progress-circular>
    </transition>
  </div>
</template>
<script>
import { userVerify } from "./api/api";
export default {
  data() {
    return {
      verificationMsg: "",
      verified: null,
    };
  },
  created() {
    var self = this;
    userVerify(self.$route.params.token)
      .then((response) => {
        self.verified = true;
        self.verificationMsg = response.data.message;
      })
      .catch((error) => {
        self.verified = false;
        self.verificationMsg = error.response.data.message;
      });
  },
};
</script>
<style scoped>
.verify-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("https://picsum.photos/id/26/1920/1080?grayscale") center
    no-repeat;
  background-size: cover;
  height: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>