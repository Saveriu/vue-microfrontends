// Import vue component
import component from "./EmbeddedApp.vue";

console.log("Coucou");

// Declare install function executed by Vue.use()
export function install(Vue) {
  console.debug("Installation APP2");
  if (install.installed) return;
  install.installed = true;
  Vue.component("app2", component);
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  console.debug("Vue trouvé!");
  GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default component;
