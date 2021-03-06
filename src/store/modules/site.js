import Vue from 'vue'
import * as types from '../mutation-types'

const state = {
  site: {},
  candidates: {},
  given: {
    'Sergio Fajardo': {'Iván Duque': 0, 'Gustavo Petro': 0, 'Voto en blanco': 0},
    'Humberto De La Calle': {'Iván Duque': 0, 'Gustavo Petro': 0, 'Voto en blanco': 0},
    'Germán Vargas Lleras': {'Iván Duque': 0, 'Gustavo Petro': 0, 'Voto en blanco': 0}
  },
  availableVotes: 19218882,
  loaded: false
}

const getters = {
  getItems: () => (uid, collection = state.site) => {
    return collection
  },
  getAvailableVotes: () => (uid, collection = state.availableVotes) => {
    return collection
  },
  getOtherVotes: (state) => ({from, splitted}, collection = state.given) => {
    const sergioPercentage = collection['Sergio Fajardo'][from]
    const sergioTotalVotes = state.candidates['Sergio Fajardo']
    const sergioVotes = sergioPercentage * sergioTotalVotes / 100

    const humbertoPercentage = collection['Humberto De La Calle'][from]
    const humbertoTotalVotes = state.candidates['Humberto De La Calle']
    const humbertoVotes = humbertoPercentage * humbertoTotalVotes / 100

    const germanPercentage = collection['Germán Vargas Lleras'][from]
    const germanTotalVotes = state.candidates['Germán Vargas Lleras']
    const germanVotes = germanPercentage * germanTotalVotes / 100
    if (splitted) {
      return {
        sergio: sergioVotes * 100 / state.availableVotes,
        humberto: humbertoVotes * 100 / state.availableVotes,
        german: germanVotes * 100 / state.availableVotes
      }
    }
    return sergioVotes + humbertoVotes + germanVotes
  },
  getGivenVoteCount: (state) => (from, collection = state.given) => {
    let amount = 0
    Object.keys(collection[from]).map((item) => {
      amount += collection[from][item]
    })
    const totalVotes = state.candidates[from]
    const total = amount * totalVotes / 100
    return total
  },
  getGivenVotes: () => (data, collection = state.given) => {
    const {from, to} = data
    return collection[from][to]
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

    for (let i = 0; i < site.length; i += 1) {
      const candidate = site[i]
      if (!candidate.passed) {
        state.candidates[candidate.name] = candidate.votes
      }
    }
  },
  [types.RECEIVE_VOTES] ({given}, {from, to, amount}) {
    const prevAmount = given[from][to]
    if (prevAmount > amount) {
      given[from][to] = amount
    } else {
      const total = given[from]['Iván Duque'] + given[from]['Gustavo Petro'] + given[from]['Voto en blanco']
      if (total - prevAmount + amount > 100) {
        alert('Ha elegido más del 100 por ciento de los votos de ' + from + ' para repartir. Puede reducir alguno de los que ya seleccionó para distribuir el porcentaje que acaba de elegir.')
      } else {
        given[from][to] = amount
      }
    }
  },
  [types.RECEIVE_RESET] (state) {
    state.given = {
      'Sergio Fajardo': {'Iván Duque': 0, 'Gustavo Petro': 0, 'Voto en blanco': 0},
      'Humberto De La Calle': {'Iván Duque': 0, 'Gustavo Petro': 0, 'Voto en blanco': 0},
      'Germán Vargas Lleras': {'Iván Duque': 0, 'Gustavo Petro': 0, 'Voto en blanco': 0}
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
