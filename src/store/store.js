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
      const body = document.body;
      state.open = !state.open;

      if (state.open) body.style.overflow = "hidden";
      else body.style.overflow = "auto";
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
