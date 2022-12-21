import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../store";
import { logout } from "../store/slices/authSlice";
import styles from "./Header.module.css";

const Header = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className={styles.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
