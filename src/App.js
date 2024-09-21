import React, { Suspense } from "react";

import {
  routerMain,
  routerHeader,
  routerHeaderMatch,
  routerFooter,
} from "./Config/Routes";
import { themeModeContext, useThemeMode } from "./Context/themeContext";
import { loginModeContext, useLoginMode } from "./Context/loginContext";
import TestCom from "./Pages/test";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderMatch from "./Components/Header/HeaderMatch";
import FuncyLoading from "./Components/Elements/FuncyLoading";

function App() {
  const [theme, themeMode] = useThemeMode();
  const [login, loginMode] = useLoginMode();
  return (
    <themeModeContext.Provider value={themeMode}>
      <loginModeContext.Provider value={loginMode}>
        <Router>
          <div
            className="relative bg-background_body dark:bg-transparent"
            data-mode={theme ? "dark" : "light"}
            data-theme="blue"
          >
            <Routes>
              <Route
                path={"/"}
                element={
                  <HeaderMatch open={theme ? "openHeaderMatch" : "close"} />
                }
              />
              <Route
                path={"/football"}
                element={
                  <HeaderMatch open={theme ? "openHeaderMatch" : "close"} />
                }
              />
              <Route
                path={"/football/laliga"}
                element={
                  <HeaderMatch open={theme ? "openHeaderMatch" : "close"} />
                }
              />
              <Route
                path={"/football/match"}
                element={
                  <HeaderMatch open={theme ? "openHeaderMatch" : "close"} />
                }
              />
            </Routes>
            <Routes>
              {routerHeader.map((route, index) => (
                <Route path={route.path} element={route.element} key={index} />
              ))}
            </Routes>
            <main className=" overflow-x-hidden relative bg-background_body dark:bg-transparent">
              <Suspense fallback={<FuncyLoading />}>
                <Routes>
                  {routerMain.map((route, index) => (
                    <Route
                      path={route.path}
                      element={route.element}
                      key={index}
                    />
                  ))}
                </Routes>
              </Suspense>
            </main>
            <TestCom open={theme ? "open" : "close"} />
            <div>
              <Routes>
                {routerFooter.map((route, index) => (
                  <Route
                    path={route.path}
                    element={route.element}
                    key={index}
                  />
                ))}
              </Routes>
            </div>
          </div>
        </Router>
      </loginModeContext.Provider>
    </themeModeContext.Provider>
  );
}

export default App;
