import { useEffect, useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import axios from 'axios'
import UserFrom from './components/UserFrom'

function App() {
  const [userList, setUserList] = useState([])
  const [userSelected, setUserSelected] = useState(null)
  


  useEffect(() =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUserList(res.data))
  },[])

  const getUsers = ()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUserList(res.data))
  }

  const selectedUser = (user) =>{
    setUserSelected(user)
  }

  const deleteUser = (id) =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers())
  }
  const deselectedUser = () => setUserSelected(null)

  console.log(userList)

  return (
    <div className="App">
      <UserList
        userList={userList}
        selectedUser={selectedUser}
        deleteUser={deleteUser}
       />

       <UserFrom 
        getUsers={getUsers}
        userSelected={userSelected}
        deselectedUser={deselectedUser}
       />
    </div>
  )
}

export default App
