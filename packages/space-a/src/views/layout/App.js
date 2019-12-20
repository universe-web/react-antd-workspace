import React from "react";
import logo from "@root/assets/logo.svg";
import styles from "./App.module.css";
import FormateDate from "@root/views/ui/date";
import { stringifyNowTime } from "public-js";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />

        <span>React</span>

        <FormateDate value={stringifyNowTime()} type="all" />
      </header>
    </div>
  );
}

export default App;
