import Vue from "vue";
import * as CloudUI from "cloud-ui.vusion/dist";
import "cloud-ui.vusion/dist/index.css";

import './proxy.js'
import './ide.css'
import './absolute.css'
import './cloud-ide.css'

Vue.use(CloudUI);
Vue.config.productionTip = false;

import App from "./App.vue";

new Vue({
  render: h => h(App)
}).$mount("#root");
