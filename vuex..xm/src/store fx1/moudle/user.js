export default {
  namespaced: true,
  state: {
    name: 'lilei'
  },
  getters: {
    mname(state) {
      return state.name.toUpperCase()
    }
  }
}
