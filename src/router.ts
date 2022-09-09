import { createRouter, createWebHistory } from "vue-router";
import Messages from "./pages/Messages.vue";
// import Feeds from "./pages/Feeds.vue";
import Profile from "./pages/Profile.vue";
import ChatRoom from "./pages/ChatRoom.vue";

const routes = [
  {
    name: "messages",
    path: "/messages",
    component: Messages,
  },
  // {
  //   name: "feeds",
  //   path: "/feeds",
  //   component: Feeds,
  // },
  {
    name: "profile",
    path: "/profile",
    component: Profile,
  },
  {
    name: "chat",
    path: "/chat",
    component: ChatRoom,
  },
  {
    path: "/",
    redirect: "/messages",
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPostion) {
    if (savedPostion) return savedPostion;

    return {
      top: 0,
    };
  },
});
