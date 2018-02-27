import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);


const store = new Vuex.Store({
	state:{
        banner:[],
        zxlist:[],
        team:[],
        clunm:[]
	},
	mutations:{
    get_banner(state,data){
        state.banner = data;
    },
    get_list(state,data){
        state.zxlist = data
    },
    get_team(state,data){
        state.team = data
    },
    get_clunm(state,data){
        state.clunm = data
    }
	},
  getters:{
      top:state =>{
        return state.clunm.filter(item =>item.title)
      }
  },
	actions:{
    GET_BANNER(context){
      axios.get('api/static/pages/news/phone/c13_list_1.shtml').then(res=>{
        context.commit('get_banner',res.data.list)
      })
    },
    GET_LIST(context){
      axios.get('api/php_cgi/news/php/varcache_getnews.php?id=12&page=0&plat=ios&version=33').then(res=>{
        context.commit('get_list',res.data)
      })
    },
    GET_TEAM(context){
      axios.get('api//php_cgi/lol_mobile/club/varcache_team_entrancev2.php?version=248454&plat=ios').then(res=>{
        context.commit('get_team',res.data.clubs)
      })
    },
    GET_CLUNM(context){
      axios.get('api/static/pages/news/discovery/c21_index.js ').then(res=>{
        context.commit('get_clunm',res.data.list);
      });
    }
	}
});
export default store
