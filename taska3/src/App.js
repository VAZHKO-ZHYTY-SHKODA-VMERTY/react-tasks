import React from 'react'
import {useState, useEffect} from 'react'
import Users from './components/Users/Users'

function App() {
  const [users,setUsers]=useState([])
  useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/users').then(users=>users.json())
                                                                    .then(users=>setUsers(users))},[])

  return (
    <div>
      <Users users={users}/>
    </div>
  );
}

export default App;
