import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'


import './styles.css';

function Patients() {
    const history = useHistory()
    const params = useParams()

    const [patiens, setPatients] = useState({})
    const [treatmentStatusSelect, setTreatmentStatusSelect] = useState('')
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
    const [icu, setIcu] = useState([
        {
            name: 'MICU',
            name: 'SICU',
            name: 'PICU',
            name: 'ICU-1',
            name: 'ICU-2',
            name: 'ICU-3'
        }
    ])

    const [ward, setWard] = useState([
        {
            name: '1A',
            name: '2A',
            name: '3A',
            name: '4A',
            name: '5A',
            name: '6A',
            name: '7A',
            name: '8A',
            name: '9A',
            name: '10A',
            name: '11A',
            name: '12A',
            name: '13A',
            name: '14A',
            name: '15A',
        }
    ])

    //Simulating data coming from database and filling requestsList state
    useEffect(() => {
        //Here is the ID:
        console.log(params.id)
        
        const data =
        {
            id: 1,
            name: 'XXX',
            gender: 'Male',
            birthdayDate: '12-12-89',
            admissionDate: 'JJJ',
            diagnosisDate: 'JJJ',
            treatmentStatus: 'Home Isolation',
            currentStatus: 'Infected',
            address: 'Texas Nr 1223',
            quarentine: 'Avenue Hospital',
            icu: 'MICU',
            ward: '1A'
        }

        setPatients(data);
        setTreatmentStatusSelect(data.treatmentStatus);
    }, [])

    //SAVE ON DATA BASE ANY MODIFICATION HERE:
    useEffect(() => {
        if(patiens.id) {
            //API CALL HERE
        }
    }, [patiens])

    function handleSelection(event) {
        const selectedName = event.target.name
        const selectedValue = event.target.value
        

        if (selectedName == 'treatmentStatus')
        {
            setTreatmentStatusSelect(selectedValue)
            setPatients({...patiens, treatmentStatus: selectedValue});
        }
            
        if (selectedName == 'currentStatus')
            setPatients({...patiens, currentStatus: selectedValue});

        if (selectedName == 'icu')
            setPatients({...patiens, icu: selectedValue});

        if (selectedName == 'ward')
            setPatients({...patiens, ward: selectedValue});
    }


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
                                <select onChange={handleSelection} name="treatmentStatus" id="">
                                    <option value={patiens.treatmentStatus}>{patiens.treatmentStatus}</option>
                                    {
                                        treatmentStatus.map(status => (
                                            status.name !== patiens.treatmentStatus
                                            &&
                                            <option value={status.name}>{status.name}</option>
                                        ))
                                    }
                                </select>
                            </td>

                            <td className="select-td">
                                <select onChange={handleSelection} name="currentStatus" id="">
                                    <option value={patiens.currentStatus}>{patiens.currentStatus}</option>
                                    {
                                        currentStatus.map(status => (
                                            status.name !== patiens.currentStatus
                                            &&
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
                    {
                        treatmentStatusSelect == 'Home Isolation'
                        &&
                        <div className="additional-info">
                            <label htmlFor="address">Address</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" value={patiens.address} />
                        </div>
                    }
                    {
                        treatmentStatusSelect == 'Quarentine'
                        &&
                        <div className="additional-info">
                            <label htmlFor="quarentine">Quarentine</label>
                            <input type="text" value={patiens.quarentine} />
                        </div>
                    }
                    {
                        treatmentStatusSelect == 'ICU'
                        &&
                        <div className="additional-info">
                            <label htmlFor="icu">ICU</label>
                            &nbsp;&nbsp;&nbsp;
                            <select onChange={handleSelection} name="icu" id="">
                                {
                                    currentStatus.map(status => (
                                        status.name !== patiens.icu
                                        &&
                                        <option value={status.name}>{status.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    }
                    {
                        treatmentStatusSelect == 'Ward'
                        &&
                        <div className="additional-info">
                            <label htmlFor="ward">Ward</label>
                            <select onChange={handleSelection} name="ward" id="">
                                <option value={patiens.ward}>{patiens.ward}</option>
                                {

                                    currentStatus.map(status => (
                                        status.name !== patiens.ward
                                        &&
                                        <option value={status.name}>{status.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    }
                </fieldset>

            </div>
        </div>

    )
}

export default Patients;