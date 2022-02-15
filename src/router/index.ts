import { createRouter, createWebHistory } from "vue-router";
import { constantRouterMap } from "./router.config";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap,
});

// 路由开始进入
router.beforeEach((to, from, next) => {
  if (!Nprogress.isStarted()) {
    Nprogress.start();
  }
  next();
});

router.afterEach((to, from, next) => {
  Nprogress.done();
});

export default router;
