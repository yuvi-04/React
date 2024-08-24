import React, { useReducer } from 'react'

const initialState = 0
const reducer = (currentState, action) => {
    switch(action) {
        case 'increment':
            return currentState + 1
        case 'decrement':
            return currentState - 1
        case 'reset':
            return initialState
        default:
            return currentState
    }
}

function CounterThree() {

    const [count, dispatch] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)
  return (
    <div>
        Count - {count} Count2 - {count2}<br></br>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>

      <button onClick={() => dispatch2('increment')}>Increment2</button>
      <button onClick={() => dispatch2('decrement')}>Decrement2</button>
      <button onClick={() => dispatch2('reset')}>Reset</button>
    </div>
  )
}

export default CounterThree
