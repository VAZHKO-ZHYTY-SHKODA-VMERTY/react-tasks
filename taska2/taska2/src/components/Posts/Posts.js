import React from 'react'
import {useState, useEffect} from 'react'

import Post from './Post/Post'

const Posts = ()=>{
    let [posts,setPosts] = useState([]) 
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(posts=>posts.json())
        .then(posts=>setPosts(posts))
    },[])
    return(
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    )
}

export default Posts