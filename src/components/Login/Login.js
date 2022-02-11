import styles from "./Login.module.css";
const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>SIGN IN</h1>
        <form className={styles.formControl}>
          <input className={styles.input} placeholder="username" />
          <input className={styles.input} placeholder="password" />
          <button className={styles.button}>LOGIN</button>
          <a className={styles.link}>DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a className={styles.link}>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
