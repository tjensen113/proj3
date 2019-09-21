import React from 'react'
import {
  withRouter
} from 'react-router-dom'


function Login(props) {
  
  const signIn = () => {
    props.history.push('/dashboard')
  }

  return (
    <form>
      <input name="username" type="text" />
      <input name="password" type="text" />
      <button onClick={signIn}>Sign In</button>
    </form>
  )
}

export default withRouter(Login)