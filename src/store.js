import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './redux/reducers/rootReducer'

const middleware = [thunk]

const persistedState = localStorage.getItem('ratesState')
    ? JSON.parse(localStorage.getItem('ratesState'))
    : {}

const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(...middleware)))


store.subscribe(() => {
    localStorage.setItem('ratesState', JSON.stringify(store.getState()))
})

export default store;