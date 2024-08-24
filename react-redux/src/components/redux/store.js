import {applyMiddleware, createStore,} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './rootReducer'

export const store = createStore(rootReducer, applyMiddleware(logger, thunk.thunk))

export default store