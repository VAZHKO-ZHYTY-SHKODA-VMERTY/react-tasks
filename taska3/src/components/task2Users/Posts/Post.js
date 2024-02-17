

const Post=({post})=>{
    const {id, userId, title, body}=post
    return(
        <div>
            <p>id: {id}</p>
            <p>UserId: {userId}</p>
            <p>Title: {title}</p>
            <p>body: {body}</p>
        </div>
    )
}

export default Post