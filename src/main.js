import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import store from "./store/store";

const vue = createApp(App);
vue.use(router);
vue.use(Vuex);
vue.use(store);
vue.mount("#app");
