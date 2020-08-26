import React from 'react';
import { useState } from 'react';
import { OutlinedInput } from '@material-ui/core';
import validator from 'validator'

import logo from '../../assets/images/icon.JPG'

import './styles.css';


function PasswordRecovery() {
  const [email, setEmail] = useState()

  function handleRecovery(event) {
    event.preventDefault()
    if(email !=='') {
      const isEmail = validator.isEmail(email)
      if(isEmail) {
        alert('Backend')
      }
      else {
        alert('Invalid Email')
      }
    }
    else {
      alert('Please, enter your email!')
    }
  }

  return (
    <div className="container">
      <header className='forgot-header'>
        <img src={logo} alt="logo" width="120px" height="120px" />
        <h5>Oops, you forgot your password! Don't worry, access recovery is simple&#128522;</h5>
      </header>

      <form onSubmit={handleRecovery}>
        <OutlinedInput 
          className='forgot-input' 
          placeholder="enter your email" 
          type='text'
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        
        <footer>
          <button type="submit">
            Recover Access
          </button>
        </footer>
      </form>
    </div>
  );
}

export default PasswordRecovery;