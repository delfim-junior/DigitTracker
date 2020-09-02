import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { OutlinedInput } from '@material-ui/core';
import validator from 'validator'

import logo from '../../assets/images/icon.JPG'

import './styles.css';
import Spinners from '../Spinners';



function PasswordRecovery() {
  const history = useHistory()

  const [email, setEmail] = useState()
  const [successMessage, setSuccessMessage] = useState(false)

  function handleRecovery(event) {
    event.preventDefault()
    if (email !== '') {
      const isEmail = validator.isEmail(email)
      if (isEmail) {
        setSuccessMessage(true)
      }
      else {
        alert('Invalid Email')
      }
    }
    else {
      alert('Please, enter your email!')
    }
  }

  function handleLogin() {
    history.push('/')
  }

  return (
    <div className="container">
      <header className='forgot-header'>

        {

          successMessage
            ?
            <img src={logo} alt="logo" width="400px" height="400px" />
            :
            <>
              <img src={logo} alt="logo" width="120px" height="120px" />
              <h5> Oops, you forgot your password! Don't worry, access recovery is simple&#128522;</h5>
            </>


        }
      </header>

      {
        !successMessage &&
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
      }
      {
        successMessage &&
        <Spinners action="success" recovery={true} handleLogin={handleLogin} />
      }
    </div >
  );
}

export default PasswordRecovery;