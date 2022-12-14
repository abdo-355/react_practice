import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
