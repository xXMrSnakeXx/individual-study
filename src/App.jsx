import Todos from './components/Todos/Todos'
import UserList from './components/UserList/UserList'
import users from './data/users.json'

const App = () => {
  return (
    <>
    
    
    <UserList users={users}/>
    <Todos/>
    </>
  )
}

export default App
