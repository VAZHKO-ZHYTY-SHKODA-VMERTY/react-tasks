import React from "react";

const UserComponent=({users, setId})=>{
    const {id, name, username}=users
    return(
        <div>
            <p>Id:{id}</p>
            <p>Name:{name}</p>
            <p>Username:{username}</p>
            <button onClick={()=>setId(id)}>Publications</button>
        </div>
    )   
}

export default UserComponent