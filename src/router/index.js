import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: () => import("../views/test/index.vue"),
      props: route => ({
        form_success: route.params.form_success,
      })
      
    },
    {
      path: "/Page-List",
      name: "Page-list",
      component: () => import("../views/Pages/index.vue"),
    },
    {
      path: "/Page-list/detail",
      name: "detail",
      component: () => import("../views/detail-movie/index"),
    },
  ],
});

export default router;
