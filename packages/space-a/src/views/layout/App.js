import React from "react";
import logo from "@root/assets/logo.svg";
import "./App.css";
import FormateDate from "@root/views/ui/date";
import { stringifyNowTime } from "public-js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <FormateDate value={stringifyNowTime()} type="all" />
      </header>
    </div>
  );
}

export default App;
