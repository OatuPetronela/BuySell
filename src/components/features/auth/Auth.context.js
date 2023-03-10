import { createContext, useContext, useState } from "react";

const tokenStorageKey = "token";
const userStorgeKey = "user";

const getItemFromStorage = (key) => {
  const val = localStorage.getItem("key");
  if (val !== null) {
    try {
      return JSON.parse(val);
    } catch (error) {
      console.error(`Error parsing JSON for key "${key}"`, error);
      return null;
    }
  }
  return null;
};

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(() => getItemFromStorage(tokenStorageKey));
  const [user, setUser] = useState(() => getItemFromStorage(userStorgeKey));

  const login = (data) => {
    localStorage.setItem(tokenStorageKey, data.accessToken);
    localStorage.setItem(userStorgeKey, JSON.stringify(data.user));
    setToken(data.accessToken);
    setUser(data.user);
  };
  const logout = () => {
    localStorage.removeItem(tokenStorageKey);
    localStorage.removeItem(userStorgeKey);
    setToken(null);
    setUser(null);
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
