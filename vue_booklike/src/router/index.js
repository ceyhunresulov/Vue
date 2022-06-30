import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/views/homeComp"),
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/views/loginComp"),
  },
  {
    name: "register",
    path: "/register",
    component: () => import("@/views/registerComp"),
  },
  {
    name: "newBookmark",
    path: "/new",
    component: () => import("@/views/newBookmark"),
  },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
