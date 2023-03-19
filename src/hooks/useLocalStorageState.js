import { useState, useEffect, useCallback } from "react";

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

  const handeleStateUpdate = useCallback(
    (newState) => {
      setState((oldState) => {
        let future = newState;
        if (typeof newState === "function") {
          future = newState(oldState);
        }
        updateStorage(key, future);
        return future;
      });
    },
    [key]
  );

  const removeState = useCallback(() => {
    window.localStorage.removeItem(key);
    setState(null);
  }, [key]);

  return [state, handeleStateUpdate, removeState];
};

export default useLocalStorageState;
