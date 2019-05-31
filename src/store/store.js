import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      
        value: 0
    },
    getters: {
      
        value: state => {
            return state.value
        }
    },
    mutations: {
     
        updatedValue: (state, payload) => {
            state.value = payload
        }
    },
    actions: {
      
        updatedValue: ({ commit }, payload) => {
            commit('updatedValue', payload)
        }
    },
    modules: {
        counter
    }
})