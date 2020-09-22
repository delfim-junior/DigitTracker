import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { FiArrowLeft, FiCheck, FiEye, FiTrash2 } from 'react-icons/fi'

import ReactTooltip from 'react-tooltip';

import './styles.css';

function Patients() {
    const history = useHistory()

    const [patiens, setPatients] = useState([])
    const [treatmentStatus, setTreatmentStatus] = useState([
        { name: 'Home Isolation' },
        { name: 'Quarentine' },
        { name: 'ICU' },
        { name: 'Ward' }
    ])

    const [currentStatus, setCurrentStatus] = useState([
        { name: 'Clear' },
        { name: 'Infected' },
        { name: 'Exposed' },
        { name: 'Recovered' }
    ])

    //Simulating data coming from database and filling requestsList state
    useEffect(() => {
        const data =
        {
            id: 1,
            name: 'XXX',
            gender: 'Male',
            birthdayDate: '12-12-89',
            admissionDate: 'JJJ',
            diagnosisDate: 'JJJ',
            treatmentStatus: 'Home Isolation',
            currentStatus: '1211221',
            address: 'Texas',
            quarentine: 'KKKK'
        }


        setPatients(data)
    }, [])


    function handleGoBack() {
        history.goBack()
    }

    function handleSeeDetails(id) {
        history.push(`/dashboard/admin/requests/${id}`)
    }


    return (

        <div className="patient-content">

            <div>
                <h3>Patient Details</h3>
                <table >
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Admission Date</th>
                        <th>Diagnosis Date</th>
                        <th>Treatment Status</th>
                        <th>Current Status</th>
                    </tr>
                    {
                        
                            <tr onClick={() => handleSeeDetails(patiens.id)}>
                                <td>{patiens.name}</td>
                                <td>{patiens.gender}</td>
                                <td>{patiens.birthdayDate}</td>
                                <td>{patiens.admissionDate}</td>
                                <td>{patiens.diagnosisDate}</td>
                                <td className="select-td">
                                    <select name="treatmentStatus" id="">
                                        {
                                            treatmentStatus.map(status => (
                                                <option value={status.name}>{status.name}</option>
                                            ))
                                        }
                                    </select>
                                </td>

                                <td className="select-td">
                                    <select name="currentStatus" id="">
                                        {
                                            currentStatus.map(status => (
                                                <option value={status.name}>{status.name}</option>
                                            ))
                                        }
                                    </select>
                                </td>
                            </tr>
                    }
                </table>
                <br />
                <fieldset>
                    <legend>Additional Information</legend>
                    <div className="additional-info">
                        <label htmlFor="address">Address</label>
                        <input type="text" value={patiens.address} />
                    </div>
                    <div className="additional-info">
                        <label htmlFor="quarentine">Quarentine</label>
                        <input type="text" value={patiens.quarentine} />
                    </div>
                    <div className="additional-info">
                        <label htmlFor="address">ICU</label>
                        <select name="currentStatus" id="">
                            {
                                currentStatus.map(status => (
                                    <option value={status.name}>{status.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="additional-info">
                        <label htmlFor="address">Ward</label>
                        <select name="currentStatus" id="">
                            {
                                currentStatus.map(status => (
                                    <option value={status.name}>{status.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </fieldset>
            </div>
        </div>

    )
}

export default Patients;