import React from 'react'
import Person from './person'

function NameList() {
    const persons = [
      {
        id: 1,
        name: 'yuvi'
      },
      {
        id: 2,
        name: 'ajay'
      },
      {
        id: 3,
        name: 'khush'
      },
      {
        id: 4,
        name: 'dinesh'
      },
      {
        id: 5,
        name: 'saru'
      }
    ]
    const personList = persons.map(person => <Person key = {person.id} person = {person}/>)
  return (
    <div>
      {personList}
    </div>
  )
}

export default NameList
