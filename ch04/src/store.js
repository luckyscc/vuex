import Vuex from 'vuex'

function createStore() {
    return new Vuex.Store({
        state: {
            count: 50,
            msg: 'Hello Vuex&webpack'
        },
        mutations: {
            add(state) {
                state.count++ 
            }
        }
    })
}

export default createStore;
