import styles from "./UserItem.module.css";
const UserItem = ({ user }) => {
    
  return (
    <li className={styles.userItem}>
      <img
        src={user.avatar}
        alt={`${user.name}'s avatar`}
        className={styles.avatar}
      />
      <div className={styles.details}>
        <span className={styles.name}>{user.name}</span>
        <span className={styles.email}>{user.email}</span>
      </div>
    </li>
  );
};

export default UserItem;
