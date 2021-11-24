import jwt_decode from "jwt-decode";
import {
  login,
  registerMember,
  deleteMember,
  findById,
  idCheck,
  modifyMember,
} from "@/api/member.js";

const memberStore = {
  namespaced: true,
  state: {
    isLogin: false,
    isLoginError: false,
    userInfo: null,
    isLogout: false,
    isRegister: false,
    isRegisterError: false,
    isDeleted: false,
    isDuplicated: false,
    isModified: false,
  },
  getters: {
    checkUserInfo: function (state) {
      return state.userInfo;
    },
  },
  mutations: {
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
      state.isRegister = false;
      state.isDeleted = false;
    },
    SET_IS_LOGIN_ERROR: (state, isLoginError) => {
      state.isLoginError = isLoginError;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.isLogin = true;
      state.userInfo = userInfo;
    },
    SET_LOGOUT: (state, isLogout) => {
      state.isLogout = isLogout;
      state.isLogin = false;
    },
    SET_REGISTER: (state, isRegister) => {
      state.isRegister = isRegister;
    },
    SET_REGISTER_ERROR: (state, isRegisterError) => {
      state.isRegisterError = isRegisterError;
    },
    DELETE_USER: (state, isDeleted) => {
      state.isDeleted = isDeleted;
    },
    CHECK_DUPLICATE_ID: (state, isDuplicated) => {
      state.isDuplicated = isDuplicated;
    },
    MODIFY_USER: (state, isModified) => {
      state.isModified = isModified;
    },
  },
  actions: {
    async userConfirm({ commit }, user) {
      await login(
        user,
        (response) => {
          if (response.data.message === "success") {
            console.log("success");
            let token = response.data["access-token"];
            commit("SET_IS_LOGIN", true);
            commit("SET_IS_LOGIN_ERROR", false);
            sessionStorage.setItem("access-token", token);
          } else {
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_LOGIN_ERROR", true);
          }
        },
        () => {}
      );
    },
    userRegister({ commit }, user) {
      registerMember(
        user,
        (response) => {
          if (response.data === "success") {
            commit("SET_REGISTER", true);
            commit("SET_REGISTER_ERROR", false);
          } else {
            commit("SET_REGISTER", false);
            commit("SET_REGISTER_ERROR", true);
          }
        },
        () => {}
      );
    },
    async idCheck({ commit }, typing) {
      await idCheck(
        typing,
        (response) => {
          //console.log(response);
          if (response.data === "duplicated") {
            commit("CHECK_DUPLICATE_ID", true);
          } else {
            commit("CHECK_DUPLICATE_ID", false);
          }
        },
        () => {}
      );
    },
    async userDelete({ commit }, userid) {
      await deleteMember(
        userid,
        (response) => {
          console.log(response);
          if (response.data === "success") {
            console.log("delete success");
            commit("DELETE_USER", true);
          } else {
            console.log(response.data);
            commit("DELETE_USER", false);
          }
        },
        () => {}
      );
    },
    async userModify({ commit }, user) {
      await modifyMember(user, (response) => {
        console.log(response);
        if (response.data == "success") {
          commit("MODIFY_USER", true);
        } else {
          commit("MODIFY_USER", false);
        }
      });
    },
    getUserInfo({ commit }, token) {
      let decode_token = jwt_decode(token);
      findById(
        decode_token.userid,
        (response) => {
          if (response.data.message === "success") {
            commit("SET_USER_INFO", response.data.userInfo);
          } else {
            console.log("유저 정보 없음!!");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default memberStore;
