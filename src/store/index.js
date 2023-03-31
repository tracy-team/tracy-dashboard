import { createStore } from "vuex";

import reports from "./modules/reports";
import policeDashboard from "./modules/policeDashboard";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    reports,
    policeDashboard,
  },
});
