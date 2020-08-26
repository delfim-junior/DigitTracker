import React from 'react';

import { FiBriefcase, FiUser } from 'react-icons/fi'
import './styles.css';
import { useHistory } from 'react-router-dom';

function Identify() {
    const history = useHistory()
    function handleNavigate(event) {
        const value = event.target.value
        if (value === 'user') {
            history.push('/register/user')
        }
        else {
            history.push('/register/professional')
        }
    }
    return (
        <div className="idenfy-container">
            <h1>Let us know who you are:</h1>
            <div className='radios-group'>
                <label htmlFor="user">
                    <input
                        onClick={handleNavigate}
                        type="radio" name="identify"
                        id="user"
                        value="user"
                    />&nbsp;&nbsp;
                    <span>User Tracker&nbsp;<FiUser size={30} /></span>
                </label>
                <label htmlFor="professional">
                    <input
                        onClick={handleNavigate}
                        type="radio"
                        name="identify"
                        id="professional"
                        value="professional"
                    />&nbsp;&nbsp;
                    <span>Medical Professional&nbsp;<FiBriefcase size={30} /></span>
                </label>
            </div>
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    );
}

export default Identify;