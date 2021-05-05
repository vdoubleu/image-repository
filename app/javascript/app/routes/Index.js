import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/pages/home";
import Upload from "../components/pages/upload";
import Login from "../components/pages/login";

export default (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/upload' exact component={Upload} />
      <Route path='/login' exact component={Login} />
    </Switch>
  </Router>
);
