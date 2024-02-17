import React from "react";
import { useEffect, useState } from "react"
import Post from './Post'


const Posts=({userId})=>{
    const [posts, setPosts]=useState([]);

    useEffect(()=>{fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                    .then(post=>post.json())
                    .then(post=>setPosts(post))},[userId])
    return(
        <>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </>
    )
}

export default Posts