import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Router from "./router";
import App from "./App.vue";

const pinia = createPinia();

createApp(App).use(Router).use(pinia).mount("#app");
