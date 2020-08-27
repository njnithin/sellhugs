<template>
  <div>
    <!-- slider section -->
    <v-carousel
        cycle
        height="calc(100vh - 80px)"
        hide-delimiter-background
        show-arrows-on-hover
        interval="5000"
        :reverse= "false"
        class="pt-100"
      >
       <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        
      </v-carousel-item>
      </v-carousel>
    <!-- End of slider section -->
    <!-- Quote section -->
    <!-- End of Quote section -->
  </div>
</template>

<script>
 export default{
  created(){
    console.log(this.baseURL, this.title)
  },
  data () {
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
      items:[
        {
          src: 'https://picsum.photos/id/0/1920/1080?grayscale',
        },
        {
          src: 'https://picsum.photos/id/9/1920/1080?grayscale',
        },
        {
          src: 'https://picsum.photos/id/6/1920/1080?grayscale',
        },
        {
          src: 'https://picsum.photos/id/8/1920/1080?grayscale',
        },
        {
          src: 'https://picsum.photos/id/668/1920/1080?grayscale',
        }

      ],
      baseURL: process.env.VUE_APP_URL, 
      title: process.env.VUE_APP_TITLE 
    }
  }
}

</script>

<style scoped>
  .v-carousel-item{
    max-width: 100%;
    height: auto;

  }
</style>