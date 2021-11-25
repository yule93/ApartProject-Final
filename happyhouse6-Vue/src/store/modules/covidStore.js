const covidStore = {
  namespaced: true,
  state: {
    gotoNowPos: false,
  },
  getters: {},
  mutations: {
    SET_NOW_POS_MAP: (state) => {
      state.gotoNowPos = !state.gotoNowPos;
    },
  },
  actions: {
    gotoCurrentLocation({ commit }) {
      commit("SET_NOW_POS_MAP");
    },
  },
};

export default covidStore;
