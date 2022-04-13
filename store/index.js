const state = () => ({
  token: null,
  user_id: null,
  username: null,

  todos: [],
})

const getters = {}

const mutations = {
  setUser(state, data) {
    state.token = data.token
    state.user_id = data.id
    state.username = data.username
  },

  setList(state, data) {
    state.todos = data
  },

  createTodo(state, data) {
    state.todos.unshift(data)
  },
}

const actions = {
  async login({ commit }, data) {
    const res = await this.$axios.post('user/login', data)
    commit('setUser', res.data)
    this.$axios.setHeader('Authorization', 'Bearer ' + res.data.token)
  },

  async getAllTodos({ commit, state }) {
    const res = await this.$axios.get('todo')
    commit('setList', res.data)
  },

  async createTodo({ commit, state }, data) {
    const res = await this.$axios.post('todo', data)
    commit('createTodo', res.data)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
