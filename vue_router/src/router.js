import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "homePage",
    path: "/homePage",
    component: () => import("@/views/homeSection"),
  },
  {
    name: "newUser",
    path: "/newUser",
    component: () => import("@/views/newUser"),
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
