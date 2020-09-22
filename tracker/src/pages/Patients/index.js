import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { FiArrowLeft, FiCheck, FiEye, FiTrash2 } from 'react-icons/fi'

import ReactTooltip from 'react-tooltip';

import './styles.css';

function Patients() {
  const history = useHistory()

  const [patiens, setPatients] = useState([])

  //Simulating data coming from database and filling requestsList state
  useEffect(() => {
    const data = [
      {
        id: 1,
        name: 'Amil',
        age: 'Paco',
        infectionStatus: 'kkk',
        RiskFactorIndex: 'JJJ',
        statusInHospital: 'GGGG',
        AdmittedDateAct: '1211221'
      },
      {
        id: 2,
        name: 'João',
        age: 'Paco',
        infectionStatus: 'kkk',
        RiskFactorIndex: 'JJJ',
        statusInHospital: 'GGGG',
        AdmittedDateAct: '1211221'
      },
      {
        id: 3,
        name: 'José',
        age: 'Paco',
        infectionStatus: 'kkk',
        RiskFactorIndex: 'JJJ',
        statusInHospital: 'GGGG',
        AdmittedDateAct: '1211221'
      },

    ]

    setPatients(data)
  }, [])


  function handleGoBack() {
    history.goBack()
  }

  function handleSeeDetails(id) {
    history.push(`/dashboard/admin/patients/${id}`)
  }


  return (

    <div className="patient-content">

      <div>
        <input type='text' name="" id="" placeholder="search patient" />
        <table >
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Infection Status</th>
            <th>Risk Factor Index</th>
            <th>Status in hospital</th>
            <th>Admitted date action</th>
          </tr>
          {
            patiens.map(request => (
              <tr onClick={() => handleSeeDetails(request.id)}>
                <td>{request.name}</td>
                <td>{request.age}</td>
                <td>{request.infectionStatus}</td>
                <td>{request.RiskFactorIndex}</td>
                <td>{request.statusInHospital}</td>
                <td>{request.AdmittedDateAct}</td>
              </tr>
            ))
          }


        </table>
      </div>
    </div>

  )
}

export default Patients;