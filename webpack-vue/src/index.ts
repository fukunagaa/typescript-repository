import Vue from "vue";
import App from "./components/app.vue";

import "./less/common.less";

new Vue({
  el: "#app",
  render: h => h(App)
});