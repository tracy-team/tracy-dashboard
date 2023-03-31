import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import axios from "axios";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

axios.defaults.baseURL = "https://tracy-api-2sen356ova-uc.a.run.app";

createApp(App)
  .use(VueSweetalert2)
  .use(store)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: process.env.VUE_APP_GMAPS_API_KEY,
    },
  })
  .mount("#app");
