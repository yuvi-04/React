import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMsg: ''
      }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(response)
            this.setState({
                posts: response.data
            })
        })
        .catch((error) => {
            console.log(error)
            this.setState({
                errorMsg: 'Error Retreiving Data'
            })
        })
    }
    
  render() {
    const {posts, errorMsg} = this.state
    return (
      <div>
        <h1>List Of Posts</h1>
        {
            posts.length ?
            posts.map((post) => { 
               return (
                <div key={post.id}> {post.title} </div>
               )
            }) :
            <h1>{errorMsg}</h1>
        }
      </div>
    )
  }
}

export default PostList
