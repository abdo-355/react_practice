import { ReactNode } from "react";

import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
