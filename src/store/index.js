import {randomGifs, searchGifs, favorite} from './modules';

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    value: ""
  },
  mutations: {
    setValue: (state, value) => state.value = value
  },
  actions: {
    setValue: ({commit}, value) => {
      commit("setValue", value);
    }
  },
  modules: {
    randomGifs,
    searchGifs,
    favorite
  }
})
