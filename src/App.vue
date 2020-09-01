<template>
  <v-app>
    <c-header v-if="this.$router.history.current.path != '/login'"></c-header>
    <c-loader :loaderFlag="loaderFlag"></c-loader>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </v-app>
</template>

<script>
import { authCheck } from "./components/api/api";
import header from "./components/general/Header";
import loader from "./components/general/SiteLoader";

export default {
  created() {
    authCheck();
  },
  mounted() {
    setTimeout(() => {
      this.checkAlreadyLogin(this);
    }, 2000);
    window.onpopstate = () => {
      this.checkAlreadyLogin(this);
    };
  },
  data() {
    return {
      loaderFlag: this.$loaderFlag,
      loginStatus: this.$loginStatus,
    };
  },
  components: {
    "c-header": header,
    "c-loader": loader,
  },
  methods: {
    checkAlreadyLogin: (self) => {
      if (self.$loginStatus === "logged in" && self.$route.path == "/login") {
        self.$router.push("/");
      }
    },
  },
};
</script>
<style >
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
