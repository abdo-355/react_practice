import React, { ReactNode, useState, useEffect } from "react";

interface IAuthState {
  isLoggedIn: boolean;
  onLogin?: (email: string, password: string) => void;
  onLogout?: () => void;
}

const AuthContext = React.createContext<IAuthState>({
  isLoggedIn: false,
});

interface Props {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginInformation = localStorage.getItem("isLoggedIn");

    if (loginInformation === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email: string, password: string) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
