import React from "react";
import { withRouter, Link } from "react-router-dom";
import Float from "../../components/Float/Float"

class SignUp extends React.Component {

  render() {
    return (
      <div className="page-container">
        
        <form className="form-container">
        <Float />
          <div className="userInput">
            <label className="form-lable">Name</label>
            <input
              className="user"
              name="username"
              type="text"
              placeholder="Name (required)"
            />
            <label className="form-lable">Username</label>
            <input
              className="user"
              name="username"
              type="text"
              placeholder="email (required)"
            />
            <label className="form-lable">Password</label>
            <input
              className="pass"
              name="password"
              type="text"
              placeholder="password (required)"
            />
            <button className="login-btn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
