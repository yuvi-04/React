import React,{Component} from "react"

const UpdatedComponent = (OrignalComponent, incrementNumber) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          incrementCount = () => {
              this.setState((prevState) => {
                  return {count: prevState.count + incrementNumber}
              })
          }
        render() {
            return <OrignalComponent
                count = {this.state.count}
                incrementCount = {this.incrementCount}
                {...this.props}>
            </OrignalComponent>
        }
    }
    return NewComponent
}

export default UpdatedComponent 