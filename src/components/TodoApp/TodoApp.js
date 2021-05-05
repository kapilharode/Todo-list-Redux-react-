import React from "react";
import { connect } from "react-redux";
import Loginrequest from "./Login";
import Visibilityfilter from "../Visibilityfilter/Visibilityfilter";
import Hader from "../Hader/Hader";

import { BrowserRouter, Route, Switch } from "react-router-dom";
const TodoApp = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Loginrequest} />
        <Route path="/Hader" component={Hader} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default TodoApp;
