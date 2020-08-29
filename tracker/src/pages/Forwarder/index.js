import React from 'react';

import { FiTablet, FiLogIn } from 'react-icons/fi'
import './styles.css';
import { useHistory } from 'react-router-dom';

function Forwarder() {
    const history = useHistory()
    function handleNavigate(event) {
        const value = event.target.value
        if (value === 'login') {
            setTimeout(() => {
                history.push('/login')
            }, 0)
        }
        else {
            setTimeout(() => {
                history.push('/register/device-register')
            }, 0)

        }
    }
    return (
        <div className="idenfy-container">
            <h1>Let us know what you need:</h1>
            <div className='radios-group'>
                <label htmlFor="login">
                    <input
                        onClick={handleNavigate}
                        type="radio"
                        name="login"
                        id="login"
                        value="login"
                    />
                    <div className="radio-icon">
                        <span>Login</span>
                        <FiLogIn size={30} />
                    </div>
                </label>

                <label htmlFor="device">
                    <input
                        onClick={handleNavigate}
                        type="radio"
                        name="device"
                        id="device"
                        value="device"
                    />
                    <div className="radio-icon">
                        <span>Device Registration</span>
                        <FiTablet size={30} />
                    </div>
                </label>
            </div>
        </div>
    );
}

export default Forwarder;