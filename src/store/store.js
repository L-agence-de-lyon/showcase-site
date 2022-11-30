import { createStore } from "vuex";

const SiteStore = {
  namespaced: true,
  state() {
    return {
      open: false,
    };
  },
  mutations: {
    handleDrawer(state) {
      state.open = !state.open;
    },
  },
  getters: {
    isOpen(state) {
      return state.open;
    },
  },
};

const store = createStore({
  modules: {
    SiteStore,
  },
});

export default store;
