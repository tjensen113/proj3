import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../App.css";

import Float from "../../components/Float/Float.js";
import { withAuth } from "@okta/okta-react";
import OktaAuth from '@okta/okta-auth-js';

import { Security, ImplicitCallback } from "@okta/okta-react";


export default withAuth(class LoginForm extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      sessionToken: null,
      username: '',
      password: ''
    }
    this.oktaAuth = new OktaAuth({ url: props.baseUrl });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => this.setState({
        sessionToken: res.sessionToken
      }))
      .catch(err => console.log('Found an error', err));
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }


  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      return null;
    }
    return (

      <Router>
        <div className="page-container">
          <form className="form-container" onSubmit={this.handleSubmit}>
            <Float />
            <div className="userInput">

              <label className="form-lable">Username</label>
              <input
                className="user"
                name="username"
                placeholder="email or username"
                id="username" type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
              <label className="form-lable">Password</label>
              <input
                className="pass"
                name="password"
                placeholder="password"
                id="password" type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />

              <input className="login-btn"  id="submit" type="submit" value="Submit" />

            </div>
          </form>
        </div>
      </Router>
    );
  }
});
