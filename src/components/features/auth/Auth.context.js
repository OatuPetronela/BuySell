import useLocalStorageState from "../../../hooks/useLocalStorageState";
import { createContext, useContext } from "react";

const tokenStorageKey = "token";
const userStorgeKey = "user";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [token, setToken, removeToken] = useLocalStorageState(tokenStorageKey);
  const [user, setUser, removeUser] = useLocalStorageState(userStorgeKey);

  const login = (data) => {
    setToken(data.accessToken);
    setUser(data.user);
  };
  const logout = () => {
    removeToken();
    removeUser();
  };
  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const value = useContext(AuthContext);

  if (value === null) {
    throw new Error(
      "Please wrap yoour componente s in the AuthContextProvider"
    );
  }
  return value;
};
