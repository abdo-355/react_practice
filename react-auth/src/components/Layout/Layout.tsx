import { ReactNode } from "react";

import MainNavigation from "./MainNavigation";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
