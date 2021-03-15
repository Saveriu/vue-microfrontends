import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Page1 from "../views/Page1.vue";


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/page1",
    name: "Page1",
    component: Page1
  },
  {
    path: "/page2",
    name: "Page2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Page2.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
