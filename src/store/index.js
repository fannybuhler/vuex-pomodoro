import { createStore } from "vuex";

export default createStore({
  state: {
    breakLength: 5,
    sessionLength: 10,
    duration: 0,
  },

  getters: {
    getBreakLength: state => state.breakLength,
    getSessionLength: state => state.sessionLength,
    getDuration: state => state.duration
  },

  actions: {
    increment (context) {
      context.commit('increment')
    }
  },

  mutations: {
    setSessionLength(state, payload) {
      state.sessionLength = payload;
    },

    increment (state) {
      state.duration++
    }
  },

  modules: {}
});
