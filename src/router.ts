import { createRouter, createWebHistory } from "vue-router";
import Messages from "./pages/Messages.vue";
import Feeds from "./pages/Feeds.vue";

const routes = [
  {
    name: "messages",
    path: "/messages",
    component: Messages,
  },
  {
    name: "feeds",
    path: "/feeds",
    component: Feeds,
  },
  {
    name: "profile",
    path: "/profile",
    component: Messages,
  },
  {
    path: "/",
    redirect: "/messages",
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
