import styles from "./input.module.css";
const Input = ({ formik, name, type = "text" }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        name={name}
        placeholder={name}
        {...formik.getFieldProps({name})}
        type={type}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className={styles.error}>{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
