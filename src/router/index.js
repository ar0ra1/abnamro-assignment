import { createRouter, createWebHistory } from "vue-router";
import AllShows from "../views/AllShows.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "All Shows",
      component: AllShows,
    },
    {
      path: "/show/:id",
      name: "show",
      component: () => import("../views/SingleShow.vue"),
    },
  ],
});

export default router;
