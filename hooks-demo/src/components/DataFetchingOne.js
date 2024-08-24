import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const[loading,setLoading] = useState(true)
    const[err,setErr] = useState('')
    const[post, setPost] = useState([])
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setLoading(false)
            setPost(response.data)
            setErr('')
        })
        .catch(error => {
            setLoading(false)
            setPost({})
            setErr('Something Went Wrong!!')
        })
    },[])

  return (
    <div>
      {loading ? 'loading' : post.title}
      {err ? err : null}
    </div>
  )
}

export default DataFetchingOne
