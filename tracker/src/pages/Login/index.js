import React from 'react';

import { Link } from 'react-router-dom'

import './styles.css';

function Login() {
  return (
    <div className="container">
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Passowrd" />
      <Link to='/forgot-password'>forgot Passowrd</Link>
      <Link to='/register'>sign-up</Link>
      <Link to='/admin'>Login</Link>
    </div>
  )
}

export default Login;