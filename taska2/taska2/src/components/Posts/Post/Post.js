import React from 'react'
import {useState} from 'react'

import PostDetails from '../PostDetails'
import './Post.css'

const Post=({post})=>{
    const [details, setDetails]=useState(false)

    const {id,title}=post
    return(
        <div className='post'>
            <div>{id}. {title}</div>
            <div><button onClick={()=>setDetails(!details)}>{details?'Hide':'Show details'}</button></div>
            {details&& <PostDetails post={post}/>}
        </div>
    )
}

export default Post