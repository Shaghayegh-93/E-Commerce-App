import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import Input from "../../common/Input";
import registerUser from "../../services/registerService";
import styles from "./Register.module.css";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth, useAuthAction } from "../../context/AuthProvider";
import { useQuery } from "../../hooks/useQuery";

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name length is not valid"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .required("phoneNumber is required")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number"),
  password: Yup.string()
    .required("Passwrd is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirmation: Yup.string()
    .required("Password Confirmation is Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
const Register = () => {
  const [error, setError] = useState(null);

  const setAuth = useAuthAction();
  const auth = useAuth();
  const query = useQuery();
  const redirect = query.get("redirect") || "/";

  const navigate = useNavigate();

  useEffect(() => {
    if (auth) navigate(redirect);
  }, [auth, redirect]);
  const onSubmit = async (values) => {
    try {
      const { name, email, phoneNumber, password } = values;
      const userData = {
        name,
        email,
        password,
        phoneNumber,
      };
      const { data } = await registerUser(userData);
      setAuth(data);

      setError(null);
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data.message)
        setError(error.response.data.message);
      toast.error(error.response.data.message);
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
        <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
        <form onSubmit={formik.handleSubmit} className={styles.formControl}>
          <Input
            className={styles.input}
            formik={formik}
            name="name"
            placeholder="Name"
          />
          <Input
            className={styles.input}
            formik={formik}
            name="lastName"
            placeholder="lastName"
          />
          <Input
            className={styles.input}
            formik={formik}
            name="phoneNumber"
            placeholder="phone Number"
            type="tel"
          />
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
            name="password"
            placeholder="password"
            type="password"
          />
          <Input
            className={styles.input}
            formik={formik}
            name="passwordConfirmation"
            placeholder="passwordConfirmation"
            type="password"
          />

          <span className={styles.aggrement}>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button
            type="submit"
            disabled={!formik.isValid}
            className={styles.button}
          >
            CREATE
          </button>
        </form>
        <NavLink
          className={styles.redirectLink}
          to={`/login?redirect=${redirect}`}
        >
          <p>Already Login?</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
