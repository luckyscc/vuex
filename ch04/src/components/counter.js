import Vuex from 'vuex'

const Counter = {
    template: `<div>{{count}} {{msg}} {{totalCount}} {{sayHi}}</div>`,
    data() {
        return {
            a: 5
        }
    },
    computed: {
        sayHi() {return "Hi"},
        ...Vuex.mapState({
            count: (state) => state.count,
            msg: function(state) {
                return state.msg
            },
            totalCount: function(state) {
                return this.a + state.count
            }
        })
    }
}

export default Counter;