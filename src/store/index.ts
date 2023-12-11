import { createStore } from 'vuex'
import actions from "./actions";

export default createStore({
  state: {
    userData:null,
    movie:null,
    schedule:null,
    chosenNews: null
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
    setChosenNews(state, payload) {
        state.chosenNews = payload;
    }
  },
  actions: actions,
  modules: {
  }
})
