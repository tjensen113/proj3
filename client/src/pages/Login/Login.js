import React from "react";
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";
import "../App.css";
import Float from "../../components/Float/Float.js";
import { withAuth } from "@okta/okta-react";
import { useAuth } from "../../auth";
import { Security, ImplicitCallback } from "@okta/okta-react";


  const App = withAuth(({ auth }) => {
    const [authenticated] = useAuth(auth);
  

  return (
   
    <Router>
      <div className="page-container">
        <Security
          issuer={`https://dev-452273.okta.com/oauth2/default`}
          client_id={`0oa1eykgpbSTQSDkg357`}
          redirect_uri={`https://dev-452273.okta.com/oauth2/default`}
        ></Security>

        <form className="form-container">
        <Float />
          <div className="userInput">
          
            <label className="form-lable">Username</label>
            <input
              className="user"
              name="username"
              type="text"
              placeholder="email or username"
            />
            <label className="form-lable">Password</label>
            <input
              className="pass"
              name="password"
              type="text"
              placeholder="password"
            />
         
              <button 
                
                onClick={() => (authenticated ? auth.logout() : auth.login())}
                className="login-btn"
              >
                Log {authenticated ? "out" : "in"}
              </button>

            <div className="routeToSignUpPage">
              Don't Have an Account <br></br><Link to={"/signup"}>Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    </Router>
  );
});


export default App;
