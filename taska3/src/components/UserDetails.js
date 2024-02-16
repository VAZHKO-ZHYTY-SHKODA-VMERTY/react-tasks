import React from 'react'

const UserDetails=({inf})=>{
    const {id,name,username,email,phone,website}=inf
    return(
        <div>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    )
}

export default UserDetails