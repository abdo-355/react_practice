import { useRef, useContext, FormEventHandler } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import styles from "./ProfileForm.module.css";

const ProfileForm = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const { token } = useContext(AuthContext);

  const history = useHistory();

  const submitHandler: FormEventHandler = async (e) => {
    e.preventDefault();

    const newPassword = passwordRef.current!.value;

    // validation goes here

    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          password: newPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.ok) {
      history.replace("/");
    } else {
      const data = await res.json();
      let errorMessage = "updating the password failed!";

      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
      }

      alert(errorMessage);
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          ref={passwordRef}
          type="password"
          minLength={7}
          id="new-password"
        />
      </div>
      <div className={styles.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
