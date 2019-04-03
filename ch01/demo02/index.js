const Vue  = require('vue');
const Vuex  = require('Vuex');

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
        state.count++
        }
    }
})
console.log(store.state.count);
store.commit('increment');
console.log(store.state.count);
// 使用node index.js启动