import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ButtonCount: 0
    },
    mutations: {
        addCountEvent(state, data) {
            state.ButtonCount++
        },
    },
    actions: {},
    getters: {
        ButtonCount: state => {
            return state.ButtonCount
        }
    },
    modules: {}
})
