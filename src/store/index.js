import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [],
  },
  getters: {
  },
  mutations: {
    storeTodos(state, todos) {
      state.todos = todos
    },
  },
  actions: {
    async getTodos({ commit }) {
      return await fetch('http://localhost:3000/todos')
        .then(res => res.json())
        .then(todos => commit('storeTodos', todos))
        .catch(err => console.error(err))
    }
  },
  modules: {
  }
})
