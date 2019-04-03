import 'es6-promise/auto'
import vue from 'vue';
import Vuex from 'Vuex';

Vue.use(Vuex)
const store = new Store({
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