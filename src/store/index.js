import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		title:'1111',
		headList:[],
		Clist:[]
	},
	mutations:{
		get_head(state){
			axios.post('/api/ajax/v7/home/head').then(res => {
//				console.log(res.data)
				state.headList = res.data.data.primary_filter;
//				console.log(res.data.data.primary_filter)
			})
		},
		get_list(state){
			axios.post('/api/ajax/v6/poi/filter?lat=39.912911&lng=116.626799&_token=eJx9T11rg0AQ/C/70JeK3qk9e4KEgqFY1GLP+NBSil8xa6Mpem2Nof+9FxBCX7oszOwww7AnGIIKXErUcA3kqLjNmWkSwqhpMw3Kv5plOxoUQ+aD+2I5NxpjzutZeFL3Rbgw01Z7dgTKADspP1zDQP07xy5HvatRfua9Xh46Y3fo6tU+l57FdU5NTunVvm88SpnOTOZwDtq/+aLGFvtmVaI8vmGlgkS9Baq7S1W3wvcF8wXlgiM2PbhQP0ypwClI19c0ztJQiOMUF8VmnBMytsn69isURULieZtGbTRHobCy5H7AyIjFBuXoPyd3lU8et43nwc8vRk5k2A==').then(res =>{
				console.log(res.data)
				state.Clist = res.data.data.poilist
			})
		}
	},
	actions:{
		GET_HEAD(context){
			context.commit('get_head')
		},
		GET_LIST(context){
			context.commit('get_list')
		}
	}
})
export default store 
