import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);
export default new Vuetify({
  icons: {
    iconfont: 'md',
  },
  theme: {
    themes: {
      light: {
        primary: "#57b846", // #E53935
        secondary: "#227e12", // #FFCDD2
        // accent: colors.indigo.base, // #3F51B5
        accent: "#289615", // #3F51B5
      },
    },
  },

});
