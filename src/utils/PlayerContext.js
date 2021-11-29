import React from 'react';
import {Provider} from "react-redux"

// Initialize new context for players
import store from "./store"

// The provider is responsible for holding our state, updating the state, and persisting values to the children
export const PlayerProvider = (props) => {

  // The value prop expects an initial state object
  return (
    <Provider
      store={store} {...props}
    />
     
  );
};
