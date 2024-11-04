import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Focus from "./components/Focus";
import Colors from "./components/Colors";
import A from "./components/A";
import Transition from "./components/Transition";
import Images from "./components/Images";
import Red from "./components/Red";

const themes = {
  light: {
    color: "black",
    background: "white",
  },
  dark: {
    color: "white",
    background: "black",
  },
};

export const SiteTheme = createContext(themes.light);

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <div className="App">
      {/* <Home />
      <Focus />
      <Colors /> */}
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={() => setDarkMode(!darkMode)}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Dark mode
        </label>
      </div>
      <SiteTheme.Provider value={darkMode ? themes.dark : themes.light}>
        {/* components */}
        <A />
      </SiteTheme.Provider>
      <Transition />
      {/* <Images /> */}
      <Red />
    </div>
  );
}

export default App;
