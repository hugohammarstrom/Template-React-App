import 'reset-css/reset.css';
import "./index.css"
import "./App.css"

import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

import { combineReducers } from 'redux'

import redux from './redux/reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import Navigation from './navigation'

import createHistory from 'history/createBrowserHistory'

import { routerReducer, routerMiddleware } from 'react-router-redux'


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ["navigation", "ui"]
}

const history = createHistory()
window.reactHistory = history
history.listen((location, action) => {})

let middleware = [thunk, routerMiddleware(history)]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
  ...redux, 
  router: routerReducer
}))

let store = createStore(persistedReducer, applyMiddleware(...middleware))
let persistor = persistStore(store)

window.purgeStore = () => {
  persistor.purge()
  console.warn("Store purged")
}

window.setTitle = (title) => {
  store.dispatch({
    type: "SET_TITLE",
    payload: title
  })
}

window.defaultColor = {
    gray: "#e8e5e5",
    grayDark: "#ccc7c7",
    default: "#ffffff",
}

window.addEventListener("resize", (e) => {
  window.setScreenSize()
})

document.addEventListener('DOMContentLoaded', () => {
  window.setScreenSize()
}, false);

window.setScreenSize = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  store.dispatch({
    type: "SET_SCREEN_SIZE",
    payload: {width, height}
  })

}

window.screenSizes = {
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 0,
}


render(
  <Navigation history={history} store={store} persistor={persistor}/>,
  document.getElementById('root')
)