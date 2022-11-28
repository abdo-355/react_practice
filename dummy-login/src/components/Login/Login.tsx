import { useEffect, useReducer, ChangeEvent, FormEvent, Reducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

interface Props {
  onLogin: (a: string, b: string) => void;
}

interface FormState {
  email: { value: string; isValid: boolean | null };
  password: { value: string; isValid: boolean | null };
  isValid: boolean;
}

enum actionTypes {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  FORM_IS_VALID,
}

interface ReducerAction {
  type: actionTypes;
  payload?: any;
}

const formReducer: Reducer<FormState, ReducerAction> = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_EMAIL:
      return {
        ...state,
        email: {
          value: action.payload!,
          isValid: action.payload!.includes("@"),
        },
      };

    case actionTypes.UPDATE_PASSWORD:
      return {
        ...state,
        password: {
          value: action.payload!,
          isValid: action.payload!.trim().length > 6,
        },
      };

    case actionTypes.FORM_IS_VALID:
      return {
        ...state,
        isValid: action.payload!,
      };
  }
};

const Login: React.FC<Props> = ({ onLogin }) => {
  const formInitialState: FormState = {
    email: { value: "", isValid: null },
    password: { value: "", isValid: null },
    isValid: false,
  };

  const [formState, dispatchForm] = useReducer(formReducer, formInitialState);

  const { isValid: emailIsValid } = formState.email;
  const { isValid: passwordIsValid } = formState.password;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatchForm({
        type: actionTypes.FORM_IS_VALID,
        payload: emailIsValid && passwordIsValid,
      });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchForm({
      type: actionTypes.UPDATE_EMAIL,
      payload: event.target.value,
    });
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchForm({
      type: actionTypes.UPDATE_PASSWORD,
      payload: event.target.value,
    });
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    onLogin(formState.email.value, formState.password.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            formState.email.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={formState.email.value}
            onChange={emailChangeHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            formState.password.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formState.password.value}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!formState.isValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
