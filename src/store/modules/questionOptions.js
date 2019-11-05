import henry from '@/api/henry'

const state = {
  all: []
}

// Getters
const getters = {
  questionOptionById: (state) => (id) => {
    return state.all.find(x => Number.parseInt(x.id) === Number.parseInt(id))
  }
}

// Actions
const actions = {
  async actionAllQuestionOptions ({ commit }) {
    commit('setQuestionOptions', await henry.getQuestionOptionsByQuestionId())
  }
}

// Mutations
const mutations = {
  setQuestionOptions (state, questionOptions) {
    state.all = questionOptions
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}