import React from "react";
import ReactDOM from "react-dom";
import { PlayerProvider } from "./utils/PlayerContext";

import App from "./App";

ReactDOM.render(
  <PlayerProvider>
    <App />
  </PlayerProvider>,
  document.getElementById("root")
);
