<template>
  <div>
    <!-- slider section -->
    <v-carousel
      cycle
      height="calc(100vh - 80px)"
      hide-delimiter-background
      show-arrows-on-hover
      interval="5000"
      :reverse="false"
      class="pt-100"
    >
      <v-carousel-item
        v-for="(item,i) in sliderItems"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <!-- End of slider section -->
    <!-- Quote section -->
    <!-- End of Quote section -->
    <!-- Products Section -->
    <h1 class="d-block text-center container h1 2rem black--text mt-10 mb-5">New Arrivals</h1>
    <v-container class="d-flex flex-wrap justify-start mb-5">
      <v-card
        :key="item.id"
        v-for=" (item) in newArrivals"
        class="xs6 pa-2 accent-4 white--text mx-5 mb-10"
        max-width="250"
      >
        <v-img height="150" :src="item.src">
          <v-btn icon>
            <v-icon class="white--text">mdi-heart</v-icon>
          </v-btn>
        </v-img>
        <v-card-title class="black--text py-0">{{ item.product_name }}</v-card-title>

        <v-card-text>
          <div class="my-1 subtitle-1 black--text">Price: {{ item.price }}</div>
          <v-row align="center" class="mx-0">
            <v-rating :value="item.rating" color="amber" dense half-increments readonly size="14"></v-rating>

            <div class="grey--text ml-4">{{ item.rating }} ({{ item.total_rating }})</div>
          </v-row>

          <div class="my-4 subtitle-1">Seller: {{ item.seller }}</div>

          <div>{{ item.description }}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn color="primary" text>Buy</v-btn>

          <v-btn icon>
            <v-icon class="grey--text">mdi-bookmark</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <!-- End of Products Section -->
  </div>
</template>

<script>
// import { refreshToken } from "../api/api";
export default {
  created() {
    // console.log(this.baseURL, this.title);
    /*    refreshToken().then(response => {
            console.log()
            console.log(response)
          })
          .catch(error => {
            console.log("insideee error" + error);
          });*/
  },
  data() {
    return {
      /*     colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],*/
      /*      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],*/
      newArrivals: [
        {
          id: "el-01",
          product_name: "Mac Book Pro 15",
          description:
            "New 15-inch model with faster performance and a new Magic Keyboard. Learn more. Up to 32 GB memory. 2x the storage capacity. Touch Bar and Touch ID. 13-inch Retina display. Up to 10th-gen processors.",
          seller: "Appario",
          price: 180000,
          rating: 4.5,
          total_rating: 1500,
          src: "https://picsum.photos/id/0/1920/1080?grayscale",
        },
        {
          id: "el-02",
          product_name: "Mac Book Pro 14",
          description:
            "New 14-inch model with faster performance and a new Magic Keyboard. Learn more. Up to 32 GB memory. 2x the storage capacity. Touch Bar and Touch ID. 13-inch Retina display. Up to 10th-gen processors.",
          seller: "Appario",
          price: 150000,
          rating: 4.7,
          total_rating: 500,
          src: "https://picsum.photos/id/0/1920/1080?grayscale",
        },
        {
          id: "el-03",
          product_name: "Mac Book Pro 13",
          description:
            "New 13-inch model with faster performance and a new Magic Keyboard. Learn more. Up to 32 GB memory. 2x the storage capacity. Touch Bar and Touch ID. 13-inch Retina display. Up to 10th-gen processors.",
          seller: "Appario",
          price: 130000,
          rating: 4.8,
          total_rating: 100,
          src: "https://picsum.photos/id/0/1920/1080?grayscale",
        },
        {
          id: "el-04",
          product_name: "Mac Book Pro 12",
          description:
            "New 13-inch model with faster performance and a new Magic Keyboard. Learn more. Up to 32 GB memory. 2x the storage capacity. Touch Bar and Touch ID. 13-inch Retina display. Up to 10th-gen processors.",
          seller: "Appario",
          rating: 4,
          price: 100000,
          total_rating: 2000,
          src: "https://picsum.photos/id/0/1920/1080?grayscale",
        },
      ],
      sliderItems: [
        {
          src: "https://picsum.photos/id/0/1920/1080?grayscale",
        },
        {
          src: "https://picsum.photos/id/9/1920/1080?grayscale",
        },
        {
          src: "https://picsum.photos/id/6/1920/1080?grayscale",
        },
        {
          src: "https://picsum.photos/id/8/1920/1080?grayscale",
        },
        {
          src: "https://picsum.photos/id/668/1920/1080?grayscale",
        },
      ],
      baseURL: process.env.VUE_APP_URL,
      title: process.env.VUE_APP_TITLE,
    };
  },
};
</script>
