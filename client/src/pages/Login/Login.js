import React from 'react'
import {
  withRouter,
  Link
} from 'react-router-dom'
import './app.css'


function Login(props) {
  
  const signIn = () => {
    props.history.push('/dashboard')
  }

  return (
    <div className="page-container">
      <form className="form-container">
        <div className="userInput">
          <label className="form-lable">Username</label>
        <input className="user" name="username" type="text" placeholder="email or username" />
          <label className="form-lable">Password</label>
        <input className="pass" name="password" type="text" placeholder="password"  />
        <button className="login-btn" onClick={signIn}>Sign In</button>
        <div className="routeToSignUpPage">Don't Have an Account <Link to={'/signup'}>Sign Up</Link></div>
        </div>
      </form>
    </div>
  )
}

export default withRouter(Login)