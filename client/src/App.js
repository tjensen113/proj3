import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Manage from './pages/Manage'
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/manage" component={Manage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
