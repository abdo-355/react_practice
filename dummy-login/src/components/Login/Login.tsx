import {
  useEffect,
  useReducer,
  ChangeEvent,
  FormEvent,
  Reducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../context/auth-context";
import Input from "../UI/Input/Input";

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

const Login = () => {
  const formInitialState: FormState = {
    email: { value: "", isValid: null },
    password: { value: "", isValid: null },
    isValid: false,
  };

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { onLogin } = useContext(AuthContext);

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

    if (formState.isValid) {
      onLogin!(formState.email.value, formState.password.value);
    } else if (!emailIsValid) {
      emailRef.current?.focus();
    } else {
      passwordRef.current?.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          data={formState.email}
          id="email"
          label="E-Mail"
          type="email"
          ChangeHandler={emailChangeHandler}
        />
        <Input
          ref={passwordRef}
          data={formState.password}
          id="password"
          label="Password"
          type="password"
          ChangeHandler={passwordChangeHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
