import React from 'react';

import { Link, useHistory } from 'react-router-dom'

import './styles.css';

function Login() {

  const history =  useHistory()

  function autenticate() {
    //Autenticate the user and take him to the dashboard page that he belong...
    //As an example I will take him to Normal User Dashboard:
    history.push('/dashboard/admin')
  }

  return (
    <div className="container">
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Passowrd" />
      <Link to='/forgot-password'>forgot Passowrd</Link>
      <Link to='/register/user-register'>sign-up</Link>
      <Link onClick={autenticate}>Login</Link>
    </div>
  )
}

export default Login;