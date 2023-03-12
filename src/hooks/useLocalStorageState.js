import { useState } from "react";

const updateStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const retriveFromStorage = (key) => {
  const val = window.localStorage.getItem("key");
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

const useLocalStorageState = (key, initialState) => {
  const [state, setState] = useState(() => {
    const val = retriveFromStorage(key);

    if (val !== null) {
      return val;
    }
    if (initialState !== undefined) {
      updateStorage(key, initialState);
      return initialState;
    }
    return null;
  });

  const handeleStateUpdate = (newState) => {
    updateStorage(key, newState);
    setState(newState);
  };

  const removeState = () => {
    window.localStorage.removeItem(key);
    setState(null);
  };

  return [state, handeleStateUpdate, removeState];
};

export default useLocalStorageState;
