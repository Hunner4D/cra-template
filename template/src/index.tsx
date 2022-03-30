import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";

import App from "./react/app";
import "./styles/css/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <App />
    </Root>
  </React.StrictMode>,
  document.getElementById("root")
);
