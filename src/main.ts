import { createApp } from "vue";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Router from "./router";
import App from "./App.vue";

createApp(App).use(Router).mount("#app");
