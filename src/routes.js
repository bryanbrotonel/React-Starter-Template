import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {Home} from "scenes/home";

export default() =>
<Switch>
  <Redirect from='/home' to='/'/>
  <Route exact={true} path='/' component={Home}></Route>
</Switch>;
