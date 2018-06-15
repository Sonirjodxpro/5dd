import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
Vue.use(Vuex)
export default {
  namespaced:true,
  state:{
    s_hotsearch:[],
    s_indexdata:[],
    s_indexkey:'',
  },
  mutations:{
    change_shs(state,n){
      state.s_hotsearch= n
    },
    change_sid(state,n){
      state.s_indexdata= n
    },
    change_key(state,n){
      state.s_indexkey= n;
    },
  },
  actions:{
    get_hotsearch({commit,state}){
      let url = '/pa'+'/search/recommend_list';
      axios.get(url).then(function (data) {
        commit('change_shs',data.data.data)
        console.log(data.data.data.search_keyword)
      })
    },
    get_searchindex({commit,state}){
      // http://t1.restful.5lux.com.cn/rpcsearchnew/getkey?pid=2&search=a
      let url = '/paa'+'/rpcsearchnew/getkey?pid=2&search='+state.s_indexkey;
      axios.get(url,{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(function (data) {
        console.log(url);
        console.log(data)
        // commit('change_sid',data.data.data)
      })
    },

  }

}
