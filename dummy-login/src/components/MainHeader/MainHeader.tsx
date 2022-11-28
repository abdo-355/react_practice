import { MouseEventHandler } from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

interface Props {
  isAuthenticated: boolean;
  onLogout: MouseEventHandler;
}

const MainHeader: React.FC<Props> = ({ isAuthenticated, onLogout }) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
