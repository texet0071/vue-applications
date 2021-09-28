export default {
    namespaced: true,
    state() {
        return {
            token: null
        }
    },
    mutations: {
      setToken(state, token) {
          state.token = token
          localStorage.setItem('jwt-token', token)
      }
    },
    actions: {
      async login({commit}) {
        commit('setToken','TEST TOKEN' )
      }
    },
    getters:{
        token(state) {
            return state.token
        },
        isAuthenticated(state) {
            return !!state.token
        }
    }
}