import Vuex from 'vuex'

function createStore() {
    return new Vuex.Store({
        state: {
            count: 50,
            msg: "Hello World",
        },
        mutations: {
            increment(state) {
                state.count++
            }
        }
    })
}

export default createStore;
