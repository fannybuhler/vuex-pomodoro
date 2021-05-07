import { createStore } from "vuex";

export default createStore({
  state: {
    breakLength: 60 * 5,
    sessionLength: 60 * 10,
    duration: 0,
    isStarted: false
  },

  getters: {
    getBreakLength: state => state.breakLength,
    getSessionLength: state => state.sessionLength,
    getDuration: state => state.duration,
    getIsStarted: state => state.isStarted,
    
    getDurationTime(state) {
      return state.duration % (state.breakLength + state.sessionLength)
    },
    
    getIsSession(state) {
      const durationTime = state.duration % (state.breakLength + state.sessionLength)
      return durationTime < state.sessionLength
    }
  },

  actions: {
    increment(context) {
      context.commit('increment')
    },

    toggleIsStarted(context) {
      context.commit('toggleIsStarted')
    }
  },

  mutations: {
    toggleIsStarted(state) {
      state.isStarted = !state.isStarted 
    },

    changeSessionLength(state, value) {
      state.sessionLength += (value * 60) 
    },

    changeBreakLength(state, value) {
      state.breakLength += (value * 60)
    },

    increment (state) {
      state.duration++
    }
  },

  modules: {}
});
