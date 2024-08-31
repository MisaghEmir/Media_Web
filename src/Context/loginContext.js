import { createContext, useState, useMemo } from "react";

export const loginModeContext = createContext({
  toggleLoginMode: () => {},
});

export const useLoginMode = () => {
  const [login, setLogin] = useState(false);

  useMemo(async () => {
    const loginLocal = window.localStorage.getItem("login");
    console.log(loginLocal)
    if (loginLocal && loginLocal === 'true') {
      setLogin(true);
    }
  }, []);
  const loginMode = useMemo(
    () => ({
      toggleLoginMode: () => {
        setLogin(login ? false : true)
        window.localStorage.setItem("login", login);
      },
    }),
    [login]
  );

  return [login, loginMode];
};
