const covidStore = {
  namespaced: true,
  state: {
    gotoNowPos: false,
  },
  getters: {},
  mutations: {
    SET_NOW_POS_MAP: (state) => {
      state.gotoNowPos = !this.gotoNowPos;
    },
  },
  actions: {},
};

export default covidStore;
