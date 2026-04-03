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
    storeTodo(state, todo) {
      state.todos.push(todo)
    },

    completedTodo(state, todo) {
      const index = state.todos.findIndex(t => t.id === todo.id)
      if (index !== -1) {
        state.todos[index] = todo
      }
    },

    deleteTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    }
  },


  actions: {
    async getTodos({ commit }) {
      return await fetch('http://localhost:3000/todos')
        .then(res => res.json())
        .then(todos => commit('storeTodos', todos))
        .catch(err => console.error(err))
    },

    async addTodo({ commit }, todo) {
      return await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      })
        .then((res) => res.json())
        .then((result) => commit('storeTodo', result))
        .catch(err => console.error(err))
    },
     
    async updateTodo(ctx, todo) {
      return await fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      })
        .then((res) => res.json())
        .then((result) => console.log(result))
        .catch(err => console.error(err))
    },

    async completedTodo(ctx, todo) {
      return await fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      })
        .then((res) => res.json())
        .then((result) => console.log(result))
        .then((result) => ctx.commit('completedTodo', result))
        .catch(err => console.error(err))
    }, 

    async deleteTodo(ctx, id) {
      return await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE',
      })
        .then(() => ctx.commit('deleteTodo', id))
        .catch(err => console.error(err))
    }
  },
  modules: {
  }
})
