import { RouteRecordRaw } from "vue-router";
export const constantRouterMap: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: () => import("../view/Home/index.vue"),
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../view/List/index.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../view/About/index.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../view/User/index.vue"),
  },
];
