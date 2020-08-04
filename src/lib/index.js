// import plugTest from "./plugTest.vue";

// plugTest.install = function(Vue) {
//   Vue.component("plugTest", plugTest);

//   if (typeof window !== "undefined" && window.Vue) {
//     window.Vue.use(plugTest);
//   }
// };

// export default plugTest;
//==============================================================

import TsastComponent from "./plugTest.vue";

let Toast = {};

Toast.install = function(Vue, options) {
  var opt = {
    duration: 3000
  };

  for (var key in options) {
    opt[key] = options[key];
  }

  Vue.prototype.$toast = function(meaasge, option) {
    // if (typeof option == "object") {
    //   for (var key in option) {
    //     opt[key] = option[key];
    //   }
    // }
    let opts = Object.assign({}, opt, option || {});

    const ToastController = Vue.extend(TsastComponent);
    const vm = new ToastController();

    vm.meaasge = meaasge;
    vm.visible = true;

    let el = document.createElement("div");
    vm.$mount(el);

    document.body.appendChild(vm.$el);

    setTimeout(() => {
      vm.visible = false;
      vm.$el.parentNode.removeChild(vm.$el);
    }, opts.duration);
  };

  Vue.prototype.$toast["success"] = function(message, option) {
    Vue.prototype.$toast(message, option);
  };
};

export default Toast;
