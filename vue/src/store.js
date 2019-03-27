import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        messages: []
    },
    mutations: {
        MESSAGES_ADD(state, msg) {
            state.messages.push(msg);
        },
        MESSAGES_CLEAR(state) {
            state.messages = [];
        }
    },
    actions: {
        addMessage({ commit }, msg) {
            commit('MESSAGES_ADD', msg);
        },
        clearMessages({ commit }) {
            commit('MESSAGES_CLEAR');
        }
    }
});
