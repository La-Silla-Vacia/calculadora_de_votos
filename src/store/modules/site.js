import Vue from 'vue'
import * as types from '../mutation-types'

const state = {
  site: {},
  availableVotes: 19218882,
  loaded: false
}

const getters = {
  getItems: () => (uid, collection = state.site) => {
    return collection
  },
  getAvailableVotes: ()=> (uid, collection = state.availableVotes) => {
    return collection
  },
  isLoaded: () => (url, loaded = state.loaded) => {
    return loaded
  },
  getDataUri: (uid, collection = state.site) => {
    return collection.dataUri
  }
}

const actions = {
  fetchContent () {
    const data = [
      {
        name: 'Iván Duque',
        photo: 'http://archivo.lasillavacia.com/archivos/historias/candidatoscongreso2018/presidentes/11.jpg',
        votes: 7569693,
        passed: true
      },
      {
        name: 'Gustavo Petro',
        photo: 'http://archivo.lasillavacia.com/archivos/historias/candidatoscongreso2018/presidentes/2.jpg',
        votes: 4851254,
        passed: true
      },
      {
        name: 'Voto en blanco',
        photo: null,
        votes: 401219,
        passed: true
      },
      {
        name: 'Sergio Fajardo',
        photo: 'http://archivo.lasillavacia.com/archivos/historias/candidatoscongreso2018/presidentes/6.jpg',
        votes: 4589696,
        passed: false,
        color: '#267E3E'
      },
      {
        name: 'Humberto De La Calle',
        photo: 'http://archivo.lasillavacia.com/archivos/historias/candidatoscongreso2018/presidentes/5.jpg',
        votes: 399180,
        passed: false,
        color: '#C02238'
      },
      {
        name: 'Germán Vargas Lleras',
        photo: 'http://archivo.lasillavacia.com/archivos/historias/candidatoscongreso2018/presidentes/8.jpg',
        votes: 1407840,
        passed: false,
        color: '#7F44C3'
      }
    ]
    this.commit(types.RECEIVE_SITE, {site: data, loaded: true})
  }
}

const mutations = {
  [types.RECEIVE_SITE] (state, {site, loaded}) {
    state.loaded = loaded
    state.site = site
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
