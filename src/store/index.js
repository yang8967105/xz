import { createStore } from 'vuex'

export default createStore({
  state: {
    currentDesignInfo:{}
  },
  getters: {
  },
  mutations: {
    saveDesignInfo(state,obj){
      state.currentDesignInfo=obj
    }
  },
  actions: {
    saveDesignAsc(context,params){
      context.commit('saveDesignInfo',params)
    }
  },
  modules: {
  }
})
