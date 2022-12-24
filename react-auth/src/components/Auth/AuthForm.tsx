import { FormEventHandler, useState, useRef } from "react";

import styles from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler: FormEventHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current!.value;
    const enteredPassword = passwordRef.current!.value;

    // validation goes here

    setIsLoading(true);

    if (isLogin) {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsLoading(false);

      if (res.ok) {
        const data = await res.json();

        console.log(data);
      } else {
        const data = await res.json();
        let errorMessage = "Sign up failed!";

        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }

        alert(errorMessage);
      }
    } else {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsLoading(false);

      if (res.ok) {
        // TODO: use the returned data
      } else {
        const data = await res.json();
        let errorMessage = "Sign up failed!";

        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }

        alert(errorMessage);
      }
    }
  };

  return (
    <section className={styles.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailRef} type="email" id="email" required />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={passwordRef} type="password" id="password" required />
        </div>
        <div className={styles.actions}>
          {!isLoading && (
            <button type="submit">
              {isLogin ? "Login" : "Create Account"}
            </button>
          )}
          {isLoading && <p>Loading...</p>}
          <button
            type="button"
            className={styles.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;