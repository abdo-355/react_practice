import { MouseEventHandler } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IRootState, actionTypes } from "../store";
import styles from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state: IRootState) => state.count);

  const incrementHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch({ type: actionTypes.INCREMENT });
  };

  const decrementHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch({ type: actionTypes.DECREMENT });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      <div className={styles.value}>{count}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
