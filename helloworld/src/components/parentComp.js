import React, { Component, PureComponent } from 'react'
import PureComp from './pureComp'
import RegularComp from './regularComp'
import MemoComp from './memoComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'yuvii'
      }
    }
     
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'yuvii'
            })
        }, 2000)
    }
    
  render() {
    console.log('Parent component render()')
    return (
      <div>
        Parent Component
        <MemoComp name = {this.state.name}></MemoComp>
        {/* <RegularComp name = {this.state.name}></RegularComp>
        <PureComp name = {this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComp
