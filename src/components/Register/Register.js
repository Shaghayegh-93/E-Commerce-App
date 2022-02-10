import styles from "./Register.module.css";
const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
        <form className={styles.formControl}>
          <input placeholder="name" />
          <input placeholder="last name" />
          <input placeholder="username" />
          <input placeholder="email" />
          <input placeholder="password" />
          <input placeholder="confirm password" />
          <span className={styles.aggrement}>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className={styles.button}>CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
