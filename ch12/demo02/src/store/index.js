import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

export default function createStore() {
    return new Vuex.Store({
        strict: process.env.NODE_ENV !== 'production',
        state: {
            count: 0
        },
        mutations: {
            increment(state) {
                state.count++
            } 
        },
        plugins: [
            createLogger()
        ]
    })
}