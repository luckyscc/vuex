import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add(state) {
            state.count++ 
        }
    }
})
console.log(store.state.count)
store.commit('add')
console.log(store.state.count)