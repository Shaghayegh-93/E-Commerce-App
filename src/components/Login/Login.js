import styles from "./Login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../common/Input";
import loginUser from "../../services/loginService";
import { useState } from "react";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";


const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Passwrd is required"),
});
const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setError(null);
      navigate("/");
     
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
        toast.error(error.response.data.message);
      }
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>SIGN IN</h1>
        <form onSubmit={formik.handleSubmit} className={styles.formControl}>
          <Input
            className={styles.input}
            formik={formik}
            name="email"
            placeholder="Email"
            type="email"
          />
          <Input
            className={styles.input}
            formik={formik}
            placeholder="Password"
            name="password"
            type="password"
          />
          <button disabled={!formik.isValid} className={styles.button}>
            LOGIN
          </button>
          <a className={styles.link}>DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a className={styles.link}>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
