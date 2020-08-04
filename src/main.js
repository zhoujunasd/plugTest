import Vue from "vue";
import App from "./App.vue";

// import plugTest from "./lib/index.js";
// Vue.use(plugTest);

import Toast from "./lib/index.js";
Vue.use(Toast);

new Vue({
  el: "#app",
  render: h => h(App)
});
