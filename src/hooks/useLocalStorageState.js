import { useState, useEffect } from "react";

const updateStorage = (key, value) => {
  if (window?.localStorage) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

const retriveFromStorage = (key) => {
  const val = window.localStorage.getItem("key");
  if (window?.localStorage) {
    if (val !== null) {
      try {
        return JSON.parse(val);
      } catch (error) {
        console.error(`Error parsing JSON for key "${key}"`, error);
        return null;
      }
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
      let init = initialState;
      if (typeof initialState === "function") {
        init = initialState();
      }
      updateStorage(key, init);
      return init;
    }
    return null;
  });

  useEffect(() => {
    let handleStorageEvent = (e) => {
      if (e.key === key) {
        setState(JSON.parse(e.newValue));
      }
    };

    window?.addEventListener("storage", handleStorageEvent);

    return () => {
      window?.removeEventListener("storage", handleStorageEvent);
    };
  }, [key]);

  const handeleStateUpdate = (newState) => {
    let future = newState;
    if (typeof newState === "function") {
      future = newState(state);
    }
    updateStorage(key, future);
    setState(future);
  };

  const removeState = () => {
    window.localStorage.removeItem(key);
    setState(null);
  };

  return [state, handeleStateUpdate, removeState];
};

export default useLocalStorageState;
