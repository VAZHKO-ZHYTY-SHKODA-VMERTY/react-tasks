import React from "react";

const PostDetails=({post})=>{
    const {id, title,body}=post
    return(
        <div className="details">
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    )
}

export default PostDetails