import React from 'react';
import { useHistory } from 'react-router-dom'
import { FiArrowLeft, FiCheck, FiEye, FiFileText } from 'react-icons/fi'

import { Table } from 'react-bootstrap'
import './styles.css';
import { Tooltip } from '@material-ui/core';

function Requests() {
    const history = useHistory()

    function handleGoBack() {
        history.goBack()
    }

    return (
        <div className="request-content">
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
                            <Tooltip title="details">
                                <FiEye className='action' color="#2E86C1" style={{ marginRight: '20px', cursor: 'pointer' }} size={32} />
                            </Tooltip>
                            <Tooltip title="approve">
                                <FiCheck className='action' color="#2ECC71" style={{ marginRight: '20px', cursor: 'pointer' }} size={32} />
                            </Tooltip>
                            <Tooltip title="archive">
                                <FiFileText className='action' color="#641E16 " style={{ cursor: 'pointer' }} size={32} />
                            </Tooltip>
                        </td>
                    </tr>

                </table>
            </div>
        </div>

    )
}

export default Requests;