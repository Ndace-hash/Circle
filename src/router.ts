import { createRouter, createWebHistory } from "vue-router";
import Messages from "./pages/Messages.vue";
// import Feeds from "./pages/Feeds.vue";
import Profile from "./pages/Profile.vue";
import ChatRoom from "./pages/ChatRoom.vue";
import LoginScreen from "./pages/LoginScreen.vue";
import Register from "./pages/Register.vue";
import { useAuthUser } from "./store/authUser";

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
    name: "login",
    path: "/login",
    component: LoginScreen,
  },
  {
    name: "register",
    path: "/register",
    component: Register,
  },
  {
    path: "/",
    redirect: "/messages",
  },
];

const Router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPostion) {
    if (savedPostion) return savedPostion;

    return {
      top: 0,
    };
  },
});

Router.beforeEach((to, from, next) => {
  const user = useAuthUser();
  if (user.currentUser == null && to.name !== "login") next({ name: "login" });
  else next();
});

export default Router;
