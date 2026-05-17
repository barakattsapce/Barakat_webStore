import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  // persist login state
  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  // login
  const login = (newToken) => {

    localStorage.setItem("token", newToken);

    setToken(newToken);
  };

  // logout
  const logout = () => {

    localStorage.removeItem("token");

    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;