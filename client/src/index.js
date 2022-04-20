import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./route";

import "bootstrap/dist/css/bootstrap.min.css";
import "./common.css";

import management_state from "./management_state";

export const HandleContext = createContext();

ReactDOM.render(
  <React.StrictMode>
    <HandleContext.Provider value={management_state}>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </HandleContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
