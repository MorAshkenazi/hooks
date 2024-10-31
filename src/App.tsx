import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Focus from "./components/Focus";
import Colors from "./components/Colors";

function App() {
  return (
    <div className="App">
      <Home />
      <Focus />
      <Colors />
    </div>
  );
}

export default App;
