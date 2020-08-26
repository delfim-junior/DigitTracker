import React from 'react';
import { useHistory } from 'react-router-dom'
import { FiArrowLeft, FiCheck, FiEye, FiFileText } from 'react-icons/fi'

import ReactTooltip from 'react-tooltip';
import './styles.css';

function Requests() {
    const history = useHistory()

    function handleGoBack() {
        history.goBack()
    }

    return (
        <div className="request-content">
            <ReactTooltip className="tooltip" />
            <header>
                <FiArrowLeft onClick={handleGoBack} size={30} color="#27AE60" />
                <h6 onClick={handleGoBack}>dashboard</h6>
            </header>
            <div>
                <input type='text' name="" id="" placeholder="search by date of birth, ID or lastname" />
                <table >
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>Lastname</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td className="buttons">
                            <FiEye
                                data-tip="Details"
                                className='action'
                                color="#2E86C1"
                                style={{ marginRight: '20px', cursor: 'pointer' }}
                                size={32}
                            />

                            <FiCheck
                                data-tip="Approve" 
                                className='action' 
                                color="#2ECC71" 
                                style={{ marginRight: '20px', cursor: 'pointer' }} 
                                size={32} 
                            />

                            <FiFileText
                                data-tip="Archive"
                                className='action'
                                color="#641E16 "
                                style={{ cursor: 'pointer' }}
                                size={32}
                            />

                        </td>
                    </tr>

                </table>
            </div>
        </div>

    )
}

export default Requests;