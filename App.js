import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer, { initialState } from "./src/store/reducer";
import { Game } from "./src/screens";

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider {...{ store }}>
      <Game />
    </Provider>
  );
}
