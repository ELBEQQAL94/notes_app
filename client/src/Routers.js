import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

// Public Routes
import Header from "./components/Header";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import LogIn from "./views/LogIn";

// Private Routes
import Dashboard from './views/Dashboard';
import Notes from './views/Notes';

import PageNotFound from "./views/PageNotFound";

const Routers = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <PublicRoutes restricted={false} component={Home} path="/" exact />
        <PublicRoutes restricted={true} component={SignUp} path="/signup" exact />
        <PublicRoutes restricted={true} component={LogIn} path="/login" exact />
        <PrivateRoutes component={Dashboard} path="/dashboard" exact />
        <PrivateRoutes component={Notes} path="/dashboard/notes" />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routers;