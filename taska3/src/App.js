import React from 'react'
import {useState, useEffect} from 'react'
import Users from './components/Users/Users'
import UsersComponent from './components/task2Users/UsersComponent'
import Posts from './components/task2Users/Posts/Posts'

function App() {
  const [users,setUsers]=useState([])
  useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/users').then(users=>users.json())
                                                                    .then(users=>setUsers(users))},[])
  
  const [userId, setId]=useState(null)
  return (
    <div>
      {/* <Users users={users}/> */}
      <UsersComponent setId={setId}/>
      {userId&&<Posts id={userId}/>}
    </div>
  );
}

export default App;
