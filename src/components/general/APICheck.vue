<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-flex width="100%" justify="center" v-if="Object.keys(serverResponse).length === 0">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-flex>
      <v-flex v-else>
        <v-card class="pa-4 my-10">
          <div class="mt-10 mb-4 text-h4">Data</div>
          <v-card width="100%" class="pa-3 mb-1">
            <span>{{ serverResponse.data }}</span>
          </v-card>
        </v-card>
        <v-card class="pa-4 my-10">
          <div class="mt-10 mb-4 text-h4">Status</div>
          <v-card width="100%" class="pa-3 mb-1">
            <span>{{ serverResponse.status }}</span>
          </v-card>
        </v-card>
        <v-card class="pa-4 my-10">
          <div class="mb-4 text-h4">Headers</div>
          <v-card
            width="100%"
            :key="'header-'+index"
            v-for="(eachData,key,index) in serverResponse.headers"
            class="pa-3 mb-1"
          >
            <div class="primary--text mb-2">{{ key }}</div>
            <span>{{ eachData }}</span>
          </v-card>
        </v-card>
        <v-card class="pa-4 my-10">
          <div class="mt-10 mb-4 text-h4">Config</div>
          <v-card
            width="100%"
            :key="'config-'+index"
            v-for="(eachData,key,index) in serverResponse.config"
            class="pa-3 mb-1"
          >
            <div class="primary--text mb-2">{{ key }}</div>
            <span>{{ eachData }}</span>
          </v-card>
        </v-card>
      </v-flex>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      serverResponse: {},
      serverError: "",
    };
  },
  created() {
    var self = this;
    self.$axios
      .get(self.$baseURL + "/store/home")
      .then((response) => {
        self.serverError = "";
        self.serverResponse = response;
        console.log(self.serverResponse);
      })
      .catch((error) => {
        self.serverError = error;
      });
  },
};
</script>
