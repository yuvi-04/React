import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from './redux'

function HookCakeContainer() {
    const numOfCakes = useSelector((state) => state.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>numOfCakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())} >BUY_CAKE</button>
    </div>
  )
}

export default HookCakeContainer
