import Vue from 'vue'
import * as types from '../mutation-types'

const state = {
  tablet: false,
  phone: false
}

const getters = {
  isTablet: () => (url, tablet = state.tablet) => {
    return tablet
  },
  isMobile () {
    return state.mobile
  }
}

const actions = {}

const mutations = {
  [types.UPDATE_APP] (state, {field, value}) {
    Vue.set(state, field, value)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
