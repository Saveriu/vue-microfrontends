import externalComponent from '@/utils';
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router"; 
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [ 
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    props: {
      name:"titi"
    },
    component: () =>
      externalComponent("/app1/micro-app1.umd.js")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
