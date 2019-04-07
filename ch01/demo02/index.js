const Vue = require('vue')
const Vuex = require('vuex')

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