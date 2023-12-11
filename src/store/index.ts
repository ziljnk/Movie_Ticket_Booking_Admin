import { createStore } from 'vuex'
import actions from "./actions";

export default createStore({
  state: {
    userData:null,
    movie:null,
    schedule:null,

  },
  getters: {
  },
  mutations: {
    setUserData(state, payload) {
      state.userData = payload;
    },
    setMovie(state, payload) {
      state.movie = payload;
    },
    setSchedule(state, payload) {
      state.schedule = payload;
    },
  },
  actions: actions,
  modules: {
  }
})
