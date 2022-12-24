import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from "react";

let logoutTimer: NodeJS.Timeout;

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

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const expTime = localStorage.getItem("expTime");

  const remainingTime = calcRemainingTime(expTime!);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const tokenData = retrieveStoredToken();
  let initialToken = null;

  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  const isLoggedIn = !!token;

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const login = (recievedToken: string, expTime: string) => {
    setToken(recievedToken);
    localStorage.setItem("token", recievedToken);
    localStorage.setItem("expTime", expTime);

    const reminingTime = calcRemainingTime(expTime);

    logoutTimer = setTimeout(logout, reminingTime);
  };

  useEffect(() => {
    setTimeout(logout, tokenData?.duration);
  }, [logout, tokenData]);

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
