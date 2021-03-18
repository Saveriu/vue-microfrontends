import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router"; 
import Home from "../views/Home.vue";
import AppContainer from "@/views/AppContainer";

Vue.use(VueRouter);

function getArtifactsURIs(jobId: string): string[] {
  //load from store
  return ["/artifacts/1234","/artifacts/5678"];
}

const routes: Array<RouteConfig> = [ 
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/apps/:appId",
    name: "App",
    props: route => ({
      artifactsURIs: getArtifactsURIs("titi"),
      microAppId : route.params.appId
    }),
    component: AppContainer
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
