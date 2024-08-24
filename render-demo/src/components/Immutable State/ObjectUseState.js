import React, {useState} from 'react'

const initialState = {
    fname: 'Bruce',
    lname: 'Wayne'
}
const ObjectUseState = () => {
    const [person, setPerson] = useState(initialState)

    const changeNmae = () => {
      const newPerson = {...person}
      
      newPerson.fname = 'Clark'
      newPerson.lname = 'Kent'
      setPerson(newPerson)
    }

    console.log('ObjectUseState Render')
  return (
    <div>
      <button onClick={changeNmae}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjectUseState
