import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idButton, setButtonId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idButton])

    const handleClick = () => {
        setButtonId(id)
    }
  return (
    <div>
        <input type='text' value={id} onChange={(e) => setId(e.target.value)}/>
        <button type='button' onClick={handleClick}>Fetch Post</button><br></br>
        {post.title}
        {/* <ul>
            {
                posts.map((post) => {
                    return (<li key={post.id}>{post.title}</li>)
                })
            }
        </ul> */}
    </div>
  )
}

export default DataFetching
