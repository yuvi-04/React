import React, { useState } from 'react'

const initState = ['Bruce', 'Wayne']
const ArrayUseState = () => {

    const [persons, setPersons] = useState(initState)

    const handleClick = () => {
        const newPersons = [...persons]
        newPersons.push('clark')
        setPersons(newPersons)
    }
    console.log('ArrayUseState Render')
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {
        persons.map((person) => {
            return (
                <div key={person}>{person}</div>
            )
        })
      }
    </div>
  )
}

export default ArrayUseState
