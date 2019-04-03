const Counter = {
    template: `<div>{{ count }} {{msg}}</div>`,
    computed: {
        count: (state) => state.count,
        msg: (state) => state.msg
    }
}

export default Counter;