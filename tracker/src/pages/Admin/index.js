import React from 'react';
import { useHistory } from 'react-router-dom'

import Header from '../../components/Header/HeaderComponent';
import Footer from '../../components/Footer/FooterComponent';
import RoutesAdmin from '../../routes/routesAdmin';

function Admin() {
    const history = useHistory()

    function handleNavigateToInitialPage() {
        history.push('/')
    }

    return (
        <div className='main-container'>
            <Header handleNavigateToInitialPage={handleNavigateToInitialPage} />
            <RoutesAdmin handleNavigateToInitialPage />
            <Footer />
        </div>
    );
}

export default Admin;