import { createContext, useState, useMemo } from "react";

export const themeModeContext = createContext({
  toggleLoginMode: () => {},
});

export const useThemeMode = () => {
  const [theme, setTheme] = useState(false);

  useMemo(async () => {
    const themeLocal = window.localStorage.getItem("theme");
    console.log(themeLocal)
    if (themeLocal && themeLocal === "dark") {
      setTheme(true);
    }
  }, []);
  const themeMode = useMemo(
    () => ({
      toggleLoginMode: () => {
        setTheme(theme ? false : true)
        window.localStorage.setItem("theme", theme ? "light" : "dark");
      },
    }),
    [theme]
  );

  return [theme, themeMode];
};
