import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import SignUp from "./pages/SignUp/index";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard";
import Manage from "./pages/Manage";
import NoMatch from "./pages/NoMatch";
import Home from './pages/Home.js'

function onAuthRequired({history}) {
  history.push('/login');
}

class App extends Component {
  render() {
  return (
    
      <Router>
        <Security issuer='https://dev-218780.okta.com/oauth2/default'
                  clientId='0oa1fkjavvFHJZzKK357'
                  redirectUri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired}
                  pkce={true} >
            <Route path='/' exact={true} component={Home} />
            <Route path='/login' render={() => <Login baseUrl='https://dev-218780.okta.com' />} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/manage" component={Manage} />

            <Route path='/implicit/callback' component={ImplicitCallback} />
        </Security>
      </Router>
  );
}
}

export default App;
