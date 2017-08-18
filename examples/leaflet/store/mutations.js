import Leaflet from 'leaflet'

export const mapInit = state => {
  state.history.push('loadMap')
}
export const state = {
  map: null,
  a: null,
  mapid: 'map',
  mapCenter: [51.505, -0.09],
  mapZoom: 13,
  mapUrl: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
  mapConfig: {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
  },
  popCenter: [51.5, -0.09],
  popContent: '<b>Hello world!</b><br />I am a popup.',
  count: 0
}
export const mutations = {
  testa (state) {
    state.a = 1
    console.log(state.a)
  },
  mapInit (state) {
    state.map = L.map(state.mapid).setView(state.mapCenter, state.mapZoom)
    L.tileLayer(state.mapUrl, state.mapConfig).addTo(state.map)
  },
  popMaker (state) {
    L.marker(state.popCenter).addTo(state.map).bindPopup(state.popContent)
  },
  clickSearch (state) {
    console.log('mutation search')
  },
  increment (state) {
    state.count++
    console.log(state.count)
  }
}
