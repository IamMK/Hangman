import Vue from'vue'
import Vuex from 'vuex'
import state from './State'
import getters from './Getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state,
    getters
})