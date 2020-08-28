import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { FiArrowLeft, FiCheck, FiEye, FiFileText } from 'react-icons/fi'

import ReactTooltip from 'react-tooltip';
import './styles.css';

function Requests() {
    const history = useHistory()

    const [requestsList, setRequestsList] = useState([])

    //Simulating data coming from database and filling requestsList state
    useEffect(() => {
        const data = [
            {
                id: 1,
                firstname: 'Amilcar',
                lasname: 'Paco'
            },
            {
                id: 2,
                firstname: 'Delfim',
                lasname: 'uqueio jr'
            },
            {
                id: 3,
                firstname: 'Mary',
                lasname: 'Maria'
            },
        ]

        setRequestsList(data)
    },[])

    function handleGoBack() {
        history.goBack()
    }

    function handleSeeDetails(id) {
        history.push(`/admin/requests/${id}`)
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
                    {
                        requestsList.map(request => (
                            <tr>
                                <td>{request.id}</td>
                                <td>{request.firstname}</td>
                                <td>{request.lasname}</td>
                                <td className="buttons">
                                    <FiEye
                                        data-tip="Details"
                                        className='action'
                                        color="#2E86C1"
                                        style={{ marginRight: '20px', cursor: 'pointer' }}
                                        size={32}
                                        onClick={() => handleSeeDetails(request.id)}
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
                        ))
                    }


                </table>
            </div>
        </div>

    )
}

export default Requests;