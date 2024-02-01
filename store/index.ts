
import dashboard from './dashboard';
import youtube from "./youtubeItem";
import login from "./login";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default () => new Vuex.Store({
  state: () => ({}),
  mutations: {},
  actions: {},
  modules: {
     dashboard,
     youtube,
     login
  }
})