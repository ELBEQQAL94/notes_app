import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// public pages
import Header from "./components/Header";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

const Routers = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routers;