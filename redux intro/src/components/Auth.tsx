import { FormEventHandler } from "react";
import { useDispatch } from "react-redux";

import { login } from "../store/slices/authSlice";
import styles from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();

  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();

    dispatch(login());
  };

  return (
    <main className={styles.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
