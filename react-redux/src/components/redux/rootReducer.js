import {combineReducers} from 'redux'
import {cakeReducer} from '../cake/cakeReducer'
import {reducer} from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    user: reducer
})

export default rootReducer