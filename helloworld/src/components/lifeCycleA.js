import React, { Component } from 'react'
import LifeCycleB from './lifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'yuvraj'
      }
      console.log('A constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('A Derived State')
        return null
    }
    componentDidMount() {
        console.log('A DidMount')
    }

    shouldComponentUpdate() {
      console.log('A Update Component')
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('A Snapshot')
      return null
    }

    componentDidUpdate() {
      console.log('A component Did Update')
    }
    changeState = () => {
      this.setState({
        name: 'evolution'
      })
    }
    
  render() {
    console.log('A render()')
    return (
      <div>
        <div>LifeCycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />     
      </div>
    )
  }
}

export default LifeCycleA
