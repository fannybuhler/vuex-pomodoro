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
    },

    reset(context){
      context.commit('reset')
    },
    
    changeSessionLength(context, payload) {
      payload = payload * 60 //60 seconds
      context.commit('changeSessionLength', payload)
    },

    changeBreakLength(context, payload) {
      payload = payload * 60 //60 seconds
      context.commit('changeBreakLength', payload)
    }
  }, 

  mutations: {
    toggleIsStarted(state) {
      state.isStarted = !state.isStarted 
    },

    changeSessionLength(state, payload) {
      state.sessionLength += payload 
    },

    changeBreakLength(state, payload) {
      state.breakLength += payload
    },

    increment (state) {
      state.duration++
    },

    reset(state) {
      state.duration = 0
      state.isStarted = false 
    }
  },

  modules: {}
});
