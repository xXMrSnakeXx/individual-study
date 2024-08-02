import UserItem from "../UserItem/UserItem"
import styles from './UserList.module.css'

const UserList = ({users}) => {
  return (
    <div className={styles.container}>
    <h2 className={styles.heading}>User List</h2>
    <ul className={styles.userList}>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  </div>
  )
}

export default UserList