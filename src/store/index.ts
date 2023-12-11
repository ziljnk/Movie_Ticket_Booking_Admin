import { createStore } from 'vuex'
import actions from "./actions";

export default createStore({
  state: {
    userData:null,
    movie:null,
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
    setChosenNews(state, payload) {
        state.chosenNews = payload;
    }
  },
  actions: actions,
  modules: {
  }
})
