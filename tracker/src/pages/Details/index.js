import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'

import './styles.css';
import { FiArrowLeft } from 'react-icons/fi';


function Details() {
    const params = useParams()
    const history = useHistory()

    const [userDetails, setUserDetails] = useState('')

    useEffect(() => {
        //Here is the ID:
        console.log(params.id)
        //You can Fetch request details from Database based on the ID
    }, [])

    function handleGoBack() {
        history.goBack()
    }

    return (
        <div className="details-container">
            <header>
                <FiArrowLeft onClick={handleGoBack} size={30} color="#27AE60" />
                <h6 onClick={handleGoBack}>Back</h6>
            </header>
            <br />
            Request Details Page
        </div>
    );
}

export default Details;