import React, { Suspense } from "react";

import {
  routerMain,
  routerHeader,
  routerHeaderMatch,
  routerFooter,
} from "./Config/Routes";
import { themeModeContext, useThemeMode } from "./Context/themeContext";
import TestCom from "./Pages/test";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderMatch from "./Components/Header/HeaderMatch";

function App() {
  const [theme, themeMode] = useThemeMode();
  return (
    <themeModeContext.Provider value={themeMode}>
      <Router>
        <div
          className=" "
          data-mode={theme ? "dark" : "light"}
          data-theme="blue"
        >
          <Routes>
              <Route
                path={'/'}
                element={<HeaderMatch open={theme ? "openHeaderMatch" : "close"} />}
              />
              <Route
                path={'/football'}
                element={<HeaderMatch open={theme ? "openHeaderMatch" : "close"} />}
              />
           
          </Routes>
          <Routes>
            {routerHeader.map((route, index) => (
              <Route path={route.path} element={route.element} key={index} />
            ))}
          </Routes>
          <main className="pb-20 overflow-hidden">
            <Suspense fallback={"<Loading />"}>
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
                <Route path={route.path} element={route.element} key={index} />
              ))}
            </Routes>
          </div>
        </div>
      </Router>
    </themeModeContext.Provider>
  );
}

export default App;
