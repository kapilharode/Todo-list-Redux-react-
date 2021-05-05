import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Vs from "./Vs";
const Ad = () => {
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/App" component={App} />
      </Switch>
    </BrowserRouter>
  </div>;
};
export default Ad;
