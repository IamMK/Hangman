import Vue from'vue'
import Vuex from 'vuex'
import state from './State'
import getters from './Getters'

Vue.use(Vuex)

if (module.hot) {
    module.hot.accept([
      './Getters',
    ], () => {
      store.hotUpdate({
        getters: require('./Getters'),
      })
    })
  }

export const store = new Vuex.Store({
    state,
    getters
})