import axios from 'axios'

export const actions = {
  clickSearch ({ commit }) {
    console.log('searchAction')
    commit('clickSearch')
  },
  increment (context) {
    context.commit('increment')
  }
}
export const incrementIfOdd = ({ commit, state }) => {
  if ((state.count + 1) % 2 === 0) {
    commit('increment')
  }
}
