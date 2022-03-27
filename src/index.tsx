import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import TodoReducer from "./store/todo/reducer";

const rootReducer = combineReducers({
  todos: TodoReducer,
});

const store = createStore(rootReducer);

const container = document.getElementById("root");

if (container) {
  const root = ReactDOMClient.createRoot(container);

  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}
