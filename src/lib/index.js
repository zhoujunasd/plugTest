import plugTest from "./plugTest.vue";

plugTest.install = function(Vue) {
  Vue.component("plugTest", plugTest);

  if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(plugTest);
  }
};

export default plugTest;
