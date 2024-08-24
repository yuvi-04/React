import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
  render() {
    return (
        <UserConsumer>
            {(userName) => {
                return(
                    <div>
                        <h1>Hello {userName}</h1>
                    </div>
                )
            }}
        </UserConsumer>
    )
  }
}

export default ComponentF
