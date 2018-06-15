import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default {
  state:{
    home_page:1,
    home_lbdata:[],
    home_data:[],
    home_SK:[],
    home_content:[],
    home_content_top:[],
    home_content_article:[],
    home_content_shangou:[],
    home_content_ads_info:[]
  },
  namespaced: true,
  mutations:{
    change_hp:function (state,n) {
      state.home_page = n;
    },
    change_hl:function (state,n) {
      state.home_lbdata = n;
    },
    change_hd:function (state,n) {
      state.home_data = n;
    },
    change_hs:function (state,n) {
      state.home_SK = n;
    },
    change_hc:function (state,n) {
      state.home_content = n;
    },
    change_hctas:function (state) {
      let arr = [];
      arr.push(state.home_content.five_example.ads_info);
      state.home_content_top=state.home_content_top.concat(state.home_content.new_register,state.home_content.vip_member,arr,state.home_content.buy_list);
      state.home_content_article= state.home_content.article_list;
      state.home_content_shangou=state.home_content.flash_sales;
    },
    change_hcai:function (state,n) {
      state.home_content_ads_info=n
    }
  },
  actions:{
    get_homelb({state,commit}){
      let url = '/pa'+'/index/index_slider';
      axios.get(url).then(function (data) {
        commit('change_hl',data.data.data);
      })
    },
    get_homebtn({state,commit}){
      let url = '/pa'+'/index/index_button';
      axios.get(url).then(function (data) {
        commit('change_hd',data.data.data.list);
      })
    },
    get_homeSK({state,commit}){
      let url = '/pa'+'/index/columu_recommend';
      axios.get(url).then(function (data) {
        commit('change_hs',data.data.data)
      })
    },
    get_homecontent({state,commit}){
      let url = '/pa'+'/index/other_advert';
      axios.get(url).then(function (data) {
        commit('change_hc',data.data.data);
        commit('change_hctas');
      })
    },
    get_home_ads({state,commit}){
      let url = '/pa'+'/index/article_list_ads?page='+state.home_page;
      axios.get(url).then(function (data) {
        commit('change_hcai',data.data.data.ads_info);
        commit('change_hp',data.data.data.next_page);
      })
    }
  },
}
