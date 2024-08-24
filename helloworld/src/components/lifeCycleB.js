import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'yuvraj'
      }
      console.log('B constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('B Derived State')
        return null
    }
    componentDidMount() {
        console.log('B DidMount')
    }

    shouldComponentUpdate() {
      console.log('B Update Component')
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('B Snapshot')
      return null
    }

    componentDidUpdate() {
      console.log('B component Did Update')
    }
    
  render() {
    console.log('B render()')
    return (
      <div>
        LifeCycle B     
      </div>
    )
  }
}

export default LifeCycleB
