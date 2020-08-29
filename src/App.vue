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
import header from "./components/general/Header";
import loader from "./components/general/SiteLoader";

export default {
  created() {
    var self = this;
    self.loaderFlag = true;
    self.$axios
      .get(self.$baseURL + "/store/home")
      .then(function (response) {
        if (response.status === 200) {
          self.$loginStatus = "logged in";
        }
      })
      .catch(() => {
        self.$axios
          .post(self.$baseURL + "/auth/refresh")
          .then(function (response) {
            if (response.status === 200) {
              self.$loginStatus = "logged in";
            }
          })
          .catch(() => {
            self.$router.push({ path: "login" });
          });
      })
      .finally(() => {
        self.loaderFlag = false;
      });
  },
  mounted() {
    window.onpopstate = () => {
      if (this.$loginStatus === "logged in" && this.$route.path == "/login") {
        this.$router.push("/");
      }
    };
  },
  data() {
    return {
      loaderFlag: false,
      loginStatus: this.$loginStatus,
    };
  },
  components: {
    "c-header": header,
    "c-loader": loader,
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
