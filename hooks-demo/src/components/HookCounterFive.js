import React, { useState, useEffect } from 'react'

function HookCounterFive() {
    const [count, setCount] = useState(0)
    const [name, setname] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `Clicked ${count} times`
    },[count])
  return (
    <div>
        <input type='text' value={name} onChange={e => setname(e.target.value)} />
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounterFive
