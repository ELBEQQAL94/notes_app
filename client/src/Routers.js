import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

// Public Pages
import Header from "./components/Header";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

// Private Pages
import Dashboard from './pages/Dashboard';
import Notes from './pages/Notes';

import PageNotFound from "./pages/PageNotFound";

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