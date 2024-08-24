const redux = require('redux')
const thunkMiddleware = require("redux-thunk")
const axios = require('axios')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const logger = reduxLogger.createLogger()
const thunk = thunkMiddleware.thunk
const applyMiddleware = redux.applyMiddleware

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST: return (
            {
                ...state,
                loading: true
            }
        )
        case FETCH_USERS_SUCCESS: return (
            {
                ...state,
                users: action.payload,
                error: ''
            }
        )
        case FETCH_USERS_FAILURE: return (
            {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        )
    }
}

const fetchUser = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data//.map(user => user.id)
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            dispatch(fetchUserFailure(error.message))
        })
    }
}

const store =  createStore(reducer, applyMiddleware(thunk,logger))
const unSubscribe = store.subscribe(() => {})
store.dispatch(fetchUser())