import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Body from "./components/Body";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Body />
  </StrictMode>,
  rootElement
);
