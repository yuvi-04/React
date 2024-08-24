import React, { useState } from 'react'

const UseState = () => {

    const [count, setcount] = useState(0)

    console.log('UseState render')
  return (
    <div>
      <button onClick={() => setcount(c => c+1)}>Count - {count}</button>
      <button onClick={() => setcount(0)}>Count to 0</button>
      <button onClick={() => setcount(5)}>Count to 5</button>
    </div>
  )
}

export default UseState
