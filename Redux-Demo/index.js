const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

const cakeState = {
    numOfCakes: 10
}

const iceCreamState = {
    numOfIceCreams: 20
}

const cakeReducer = (state = cakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return (
            {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        )
        default: return state
    }
}

const iceCreamReducer = (state = iceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return (
            {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        )
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State', store.getState())
const unSubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unSubscribe()