import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidos: [{ value: null, text: "선택하세요" }],
    guguns: [{ value: null, text: "선택하세요" }],
    houses: [],
    house: null,
  },
  mutations: {
    SET_SIDO_LIST(state, sidos) {
      sidos.forEach((sido) => {
        state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
      });
    },
    SET_GUGUN_LIST(state, guguns) {
      guguns.forEach((gugun) => {
        state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
      });
    },
    CLEAR_GUGUN_LIST(state) {
      state.guguns = [{ value: null, text: "선택하세요" }];
    },
    CLEAR_SIDO_LIST(state) {
      state.sidos = [{ value: null, text: "선택하세요" }];
    },
    SET_HOUSE_LIST(state, houses) {
      state.houses = houses;
    },
    SET_DETAIL_HOUSE(state, house) {
      state.house = house;
    },
  },
  actions: {
    getSido({ commit }) {
      http
        .get(`/map/sido`)
        .then((response) => {
          //console.log(data);
          // ! mutations한테 데이터 바꿔달라 요청하기
          commit("SET_SIDO_LIST", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getGugun({ commit }, sidoCode) {
      const params = { sido: sidoCode };
      http
        .get(`/map/gugun`, { params })
        .then((response) => {
          // console.log(commit, response);
          // !!! push만 계속 쓰면 데이터가 누적돼서 원하는 구군만을 나타낼 수 없으므로 초기화 필요!
          // ! mutations한테 데이터 바꿔달라 요청하기
          commit("SET_GUGUN_LIST", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getHouseList({ commit }, gugunCode) {
      const API_KEY = process.env.VUE_APP_APT_DEAL_API_KEY;
      // const API_KEY = "lY6GrpTi/pFVdyybPk6ebWXEVQqCybqvuVd0eycTKSxfXcFlcjD1B7tcYNnnRRtZpH0LJB+N1jkdQvVQ+nHoOA==";
      const SERVICE_URL =
        "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev";
      const params = {
        serviceKey: decodeURIComponent(API_KEY),
        pageNo: "1",
        numOfRows: "10",
        LAWD_CD: gugunCode,
        DEAL_YMD: "202110",
      };

      http
        .get(SERVICE_URL, { params })
        .then((response) => {
          console.log(commit, response);
          // !!! push만 계속 쓰면 데이터가 누적돼서 원하는 구군만을 나타낼 수 없으므로 초기화 필요!
          // ! mutations한테 데이터 바꿔달라 요청하기
          commit("SET_HOUSE_LIST", response.data.response.body.items.item);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    detailHouse({ commit }, house) {
      // 나중에 house 일련번호를 이용해 API 호출
      commit("SET_DETAIL_HOUSE", house);
    },
  },
  plugins: [createPersistedState()],
  modules: {},
});
