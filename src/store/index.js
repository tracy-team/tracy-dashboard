import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import reports from "./modules/reports";
import policeDashboard from "./modules/policeDashboard";
import user from "./modules/user";

export default createStore({
  plugins: [createPersistedState()],
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    reports,
    policeDashboard,
    user,
  },
});
