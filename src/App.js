import React, { useState } from "react";
import "./styles.css";
import reducer from "./reducer/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddTodo from "./components/AddTodo/AddTodo";

import TodoApp from "./components/TodoApp/TodoApp";
import Vs from "./Vs";
import Visibilityfilter from "./components/Visibilityfilter/Visibilityfilter";

const initState = {
  todoDetails: [],
  login: []
};

const store = createStore(reducer, initState);

function App() {
  return (
    <div className="App">
      <h1> Login to todolist</h1>

      <Provider store={store}>
        <TodoApp />
      </Provider>
    </div>
  );
}

export default App;
