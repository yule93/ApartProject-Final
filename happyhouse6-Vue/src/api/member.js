import { apiInstance } from "./index.js";

const api = apiInstance();

async function login(user, success, fail) {
  await api.post(`/user/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/user/info/${userid}`).then(success).catch(fail);
}

async function registerMember(user, success, fail) {
  await api
    .post(`/user/register`, JSON.stringify(user))
    .then(success)
    .catch(fail);
}

async function deleteMember(userid, success, fail) {
  await api.delete(`/user/${userid}`).then(success).catch(fail);
}

async function idCheck(typing, success, fail) {
  await api
    .post(`/user/idcheck`, JSON.stringify(typing))
    .then(success)
    .catch(fail);
}
// function logout(success, fail)

export { login, findById, registerMember, deleteMember, idCheck };
