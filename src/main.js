import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "./filters/date.filter";
import messagePlugin from "@/utils/message.plugin"
import "materialize-css/dist/js/materialize.min";
import "./registerServiceWorker";

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

Vue.config.productionTip = false;

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter("date", dateFilter)

firebase.initializeApp ({
  apiKey: "AIzaSyCizdwcFBTwC5BhCAygRJZvV1g1s_YfpU4",
  authDomain: "vue-crm-e03ad.firebaseapp.com",
  databaseURL: "https://vue-crm-e03ad.firebaseio.com",
  projectId: "vue-crm-e03ad",
  storageBucket: "vue-crm-e03ad.appspot.com",
  messagingSenderId: "769101253803",
  appId: "1:769101253803:web:4ceb9ce8f8aa0f14cb7bee"
})

let app 

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})
