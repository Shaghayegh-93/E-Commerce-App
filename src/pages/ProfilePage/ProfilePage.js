import { useAuth } from "../../context/AuthProvider";
import styles from "./profilePage.module.css";
import Layout from "../../Layout/Layout";
const ProfilePage = () => {
  const userData = useAuth();
  return (
    <Layout>
      <div className={styles.profileContainer}>
        <div className={styles.profileWrapper}>
          <ul>
            <label htmlFor="name">Name</label>
            <li id="name">{userData.name}</li>
            <label htmlFor="phoneNumber">Phone Number</label>
            <li id="phoneNumber">{userData.phoneNumber}</li>
            <label htmlFor="email">Email</label>
            <li id="email">{userData.email}</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
