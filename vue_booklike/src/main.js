import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import appHeader from "@/components/shared/appHeader";
import "@/assets/style.css";
import { appAxios } from "@/utils/appAxios";
import store from "@/store";

const app = createApp(App);
app.component("appHeader", appHeader);
app.config.globalProperties.$appAxios = appAxios;
app.use(store);
app.use(router);
app.mount("#app");
