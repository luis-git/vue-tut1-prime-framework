export default {
  namespaced: true,
  state: {
    visible: false
  },
  getters: {},
  mutations: {
    SET_DRAWER_VISIBLE(state){
      state.visible = !state.visible
    }
  },
  actions: {
    setDrawerVisible({commit}){
      commit(this.SET_DRAWER_VISIBLE())
    }
  }
};
