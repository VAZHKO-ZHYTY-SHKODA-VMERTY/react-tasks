import React from 'react'
import {useState, useEffect} from 'react'
import UserComponent from './UserComponent' 

const UsersComponent=({setId})=>{
    const [users, setUsers]=useState([])

    useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/users')
                    .then(users=>users.json())
                    .then(users=>setUsers(users))},[])

    return(
        <div>
            {users.map(user=><UserComponent key={users.id} users={users} setId={setId} />)}
        </div>
    )
}

export default UsersComponent
