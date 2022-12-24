import { createContext, ReactNode, useState } from "react";

interface IAuthContext {
  token: string | null;
  isLoggedIn: boolean;
  login: (token: string, expTime: string) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({
  token: "",
  isLoggedIn: false,
  login: (token: string, expTime: string) => {},
  logout: () => {},
});

interface Props {
  children: ReactNode;
}

const calcRemainingTime = (exp: string) => {
  const currentTime = new Date().getTime();
  const adjExperationTime = new Date(exp).getTime();

  return adjExperationTime - currentTime;
};

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const isLoggedIn = !!token;

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const login = (recievedToken: string, expTime: string) => {
    setToken(recievedToken);
    localStorage.setItem("token", recievedToken);

    const reminingTime = calcRemainingTime(expTime);

    setTimeout(logout, reminingTime);
  };

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
