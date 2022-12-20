import { MouseEventHandler } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IRootState } from "../store";
import { increment, increase, decrement } from "../store/slice";
import styles from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state: IRootState) => state.count);

  const incrementHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(increment());
  };

  const increaseHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(increase(5));
  };

  const decrementHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(decrement());
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      <div className={styles.value}>{count}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
