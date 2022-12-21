import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../store";
import {
  increment,
  increase,
  decrement,
  toggle,
} from "../store/slices/counterSlice";
import styles from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state: RootState) => state.counter.count);
  const isVisible = useSelector((state: RootState) => state.counter.isVisible);

  const incrementHandler = () => {
    dispatch(increment());
  };

  const increaseHandler = () => {
    dispatch(increase(5));
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(toggle());
  };

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      {isVisible && <div className={styles.value}>{count}</div>}
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
