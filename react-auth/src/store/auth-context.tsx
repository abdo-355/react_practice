import { createContext, ReactNode, useState } from "react";

interface IAuthContext {
  token: string;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({
  token: "",
  isLoggedIn: false,
  login: (token: string) => {},
  logout: () => {},
});

interface Props {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [token, setToken] = useState("");

  const isLoggedIn = !!token;

  const login = (recievedToken: string) => {
    setToken(recievedToken);
  };

  const logout = () => {
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
