import React from 'react';
import { useHistory } from 'react-router-dom'

import './styles.css';
import Header from '../../components/Header/HeaderComponent';

function Admin() {
    const history = useHistory()

    function handleNavigateToInitialPage() {
        history.push('/')
    }

    return (
        <div className='main-container'>
            <Header handleNavigateToInitialPage={handleNavigateToInitialPage} />
            <main>
                <h1>Welcome John Doe!</h1>
                <h2 className='flash-message'>You have N approval requests</h2>
            </main>
            <footer>
                <h5>Copyright &copy; DigiTrack 2020</h5>
            </footer>
        </div>
    );
}

export default Admin;