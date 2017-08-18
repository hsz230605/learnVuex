// import Leaflet from 'leaflet'
import Vuex from 'vuex'
import Vue from 'vue'
import { actions } from './actions'
import { state, mutations } from './mutations'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions
})
export default store
