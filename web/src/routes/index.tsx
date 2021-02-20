import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import UserSignIn from "../pages/SignIn/usersSignIn";
import UserWelcome from "../pages/Welcome/usersWelcome";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/users" component={UserSignIn} />
        <Route path="/users/:id" component={UserWelcome} />
        <Redirect to="/users" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
