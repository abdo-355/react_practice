import React from "react";

interface IAuthState {
  isLoggedIn: boolean;
  onLogin?: (email: string, password: string) => void;
  onLogout?: () => void;
}

const AuthContext = React.createContext<IAuthState>({
  isLoggedIn: false,
});

export default AuthContext;
