import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { themeModeContext, useThemeMode } from "./Context/themeContext";
import TestCom from "./Pages/test";

function App() {
  const [theme, themeMode] = useThemeMode();
  return (
    <themeModeContext.Provider value={themeMode}>
      <div className="  text-5xl p-24 "
       data-mode={theme ? "dark" : "light"}>
      <Header />
        <p className="text-black dark:text-white text11  ">

        The World’s Best Creators Are On Behance
        </p>
        <h6 className=" text-black dark:text-white text11">
          Amir
        </h6>
        <Button />
        <TestCom open={theme ? 'open' : 'close' } />
      <Footer />
      </div>
    </themeModeContext.Provider>
  );
}

export default App;
