import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'

import {
  detailMovie,
  visibilityModal,
  posterUrl
} from './reducers'

const reducers = combineReducers({
  detail: detailMovie,
  isVisible: visibilityModal,
  url: posterUrl
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store
