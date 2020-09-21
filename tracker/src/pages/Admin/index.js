import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

import Header from '../../components/Header/HeaderComponent';
import Footer from '../../components/Footer/FooterComponent';
import RoutesAdmin from '../../routes/routesAdmin';
import Spinners from '../Spinners';

function Admin() {
    const history = useHistory()

    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(async () => {
        setUserName('Amilcar Paco');
        setTimeout(() => {
            setLoading(false)
        }, 1000)

        /**
         Você vai fazer assim:
         
         const name = await app.auth().currentUser.displayName

         setUserName(name)
         setLoading(false)
         
         */
    }, [])

    function handleNavigateToInitialPage() {
        history.push('/')
    }

    return (
        <div className='main-container'>
            {
                loading
                    ?
                    <Spinners/>
                    :
                    <>
                        <Header userName={userName} handleNavigateToInitialPage={handleNavigateToInitialPage} />
                        <RoutesAdmin handleNavigateToInitialPage />
                        <Footer />
                    </>
            }
        </div>
    );
}

export default Admin;