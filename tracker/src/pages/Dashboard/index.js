import React from 'react';
import { useHistory } from 'react-router-dom'

import './styles.css';

function Dashboard() {
    const history = useHistory()

    function handleNavigateToRequestsList() {
        history.push('/dashboard/admin/requests')
    }
    return (
        <main>

            <h1>Welcome John Doe!</h1>
            <h2 
                className='flash-message'
                onClick={handleNavigateToRequestsList}
            >
                You have N approval requests
            </h2>
        </main>
    )
}

export default Dashboard;