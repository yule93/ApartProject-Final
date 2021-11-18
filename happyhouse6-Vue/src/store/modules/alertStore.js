const alertStore = {
  state: {
    showSuccess: false,
  },
  mutations: {
    SET_SUCCESS_VIEW(state) {
      state.showSuccess = !state.showSuccess;
    },
  },
  actions: {
    showSuccessAlert({ commit }) {
      commit("SET_SUCCESS_VIEW");
    },
  },
};

export default alertStore;
