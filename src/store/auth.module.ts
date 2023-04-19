/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import AuthService from "../services/auth.service";

const user = JSON.parse(localStorage.getItem("user")!);
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }: any, user: { username: any; password: any }) {
      return AuthService.login(user).then(
        (user) => {
          commit("loginSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },
    // @ts-ignore
    logout({ commit }) {
      AuthService.logout();
      commit("logout");
    },
    register(
      { commit }: any,
      user: { username: any; email: any; password: any }
    ) {
      return AuthService.register(user).then(
        (response) => {
          commit("registerSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("registerFailure");
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    loginSuccess(
      state: { status: { loggedIn: boolean }; user: any },
      user: any
    ) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state: { status: { loggedIn: boolean }; user: null }) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state: { status: { loggedIn: boolean }; user: null }) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state: { status: { loggedIn: boolean } }) {
      state.status.loggedIn = false;
    },
    registerFailure(state: { status: { loggedIn: boolean } }) {
      state.status.loggedIn = false;
    },
  },
};
