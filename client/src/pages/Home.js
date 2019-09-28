import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";

export default withAuth(
  class Home extends Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null };
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    }

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    async login() {
      this.props.auth.login("/");
    }

    async logout() {
      this.props.auth.logout("/");
    }

    render() {
      if (this.state.authenticated === null) return null;

      const button = this.state.authenticated ? (
        <button onClick={this.logout}>Logout</button>
      ) : (
        <button onClick={this.login}>Login</button>
      );

      return (
        <div className="container">
          <div className="title">
            <br />
            <h1>Project-3</h1>
            <br />

            <h3>About the Project</h3>
            <br />
            <h5>
              we will make an inventory app for small businesses new messages we
              will utilize redux/state management, mysql for authentication,
              react and node as well express
            </h5>
            <br />

            <h3>Technologies Used</h3>
            <br />
            <h5>Mongo</h5>
            <h5>Express</h5>
            <h5>React</h5>
            <h5>Node</h5>
          </div>
          <Link to="/" className="btn color-white">
            Home
          </Link>
          <br />
          <Link to="/dashboard" className="btn color-white">
            dashboard
          </Link>
          <br />
          <div className="btn">{button}</div>
        </div>
      );
    }
  }
);
