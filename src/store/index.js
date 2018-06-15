import Vue from 'vue'
import Vuex from 'vuex'
import Homestore from './Homestore'
import Searchstore from './Searchstore'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Homestore:Homestore,
    Searchstore:Searchstore
    
  },
})
