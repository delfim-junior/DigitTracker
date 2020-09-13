import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'

import { FiArrowLeft, FiUser } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import { OutlinedInput } from '@material-ui/core';
import { Button, Select, TextField, MenuItem, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Loading from '../Spinners'
import Spinners from '../Spinners';



import 'react-toastify/dist/ReactToastify.css';
import './styles.css';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginRight: theme.spacing(1),
        width: 200,
    },
}));


function Details() {
    const params = useParams()
    const history = useHistory()
    const classes = useStyles();

    const [userDetails, setUserDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const [successMessage, setSuccessMessage] = useState(false)

    useEffect(() => {
        //Here is the ID:
        console.log(params.id)
        setTimeout(() => {
            const data = [
                {
                    id: params.id,
                    firstName: 'Amilcar',
                    middleName: 'Paco',
                    lastName: 'Paco',
                    gender: 'M',
                    birthday: '1998-05-24',
                    nationalId: '1111115555',
                    mobilePhone: '+2580993434',
                    professionalRole: 'Contact Tracer',
                    employeeId: '33333333312',
                    city: 'LA',
                    hospital: '',
                    email: 'amilcar.paco@pacoconsult.com',
                }
            ]
            setUserDetails(data)
            setLoading(false)
        }, 0)
        //You can Fetch request details from Database based on the ID
    }, [])

    function handleGoBack() {
        history.goBack()
    }

    function handleApprove(event) {
        event.preventDefault()
        toast.success('User Approved!')
        setTimeout(() => {
            history.goBack()
        },2000)
    }

    function handleReject() {
        toast.error('User Rejected!')
        setTimeout(() => {
            history.goBack()
        },2000)
    }

    return (
        <div className="details-container">
            <ToastContainer />
            {
                loading
                    ?
                    <h4>Loading...</h4>
                    :
                    <form onSubmit={handleApprove} className="professional-container">
                        <header>
                            <FiArrowLeft onClick={handleGoBack} size={30} color="#27AE60" />
                            <h6 onClick={handleGoBack}>Requests</h6>
                        </header>
                        <div className="icon">
                            <FiUser size={40} />

                            <h5>User Information</h5>
                        </div>
                        <fieldset className="field-container">
                            <legend>Personal Information</legend>

                            <TextField
                                className=''
                                label="Full Name"
                                variant="outlined"
                                margin="normal"
                                type='text'
                                fullWidth
                                name="fullName"
                                value={userDetails[0].firstName + " " + userDetails[0].middleName + " " + userDetails[0].lastName}
                                disabled
                            />
                            {/**Modify handleFormInput */}
                            <div className='gender' style={{ marginBottom: "10px" }}>
                                <span>Gender:</span>
                                &nbsp;
                                &nbsp;
                                <li style={{ fontWeight: 'normal', fontSize: '14pt', marginBottom: '15px' }}>{userDetails[0].gender === 'M' ? "Male" : "Female"}</li>

                            </div>

                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue={userDetails[0].birthday}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name="birthday"
                                disabled
                            />
                            <TextField
                                label="National ID"
                                variant="outlined"
                                margin="normal"
                                type='number'
                                fullWidth
                                name="nationalId"
                                value={userDetails[0].nationalId}
                                disabled
                            />
                            <TextField
                                label="Mobile Number"
                                variant="outlined"
                                margin="normal"
                                type='text'
                                name="mobilePhone"
                                value={userDetails[0].mobilePhone}
                                fullWidth
                                disabled
                            />
                        </fieldset>

                        <fieldset className="field-container">
                            <legend>Health Professional Information</legend>

                            <span style={{ fontWeight: 'bold', fontSize: '16pt' }}>Professional Role:</span>
                            <li style={{ fontWeight: 'normal', fontSize: '13pt' }}>{userDetails[0].professionalRole}</li>

                            <TextField
                                label="Employee ID"
                                variant="outlined"
                                margin="normal"
                                type='number'
                                name="employeeId"
                                value={userDetails[0].employeeId}
                                fullWidth
                                disabled
                            />
                            <div className="names">
                                <TextField
                                    className='firsname'
                                    label="City"
                                    variant="outlined"
                                    margin="normal"
                                    type='text'
                                    name="city"
                                    disabled
                                    value={userDetails[0].city}
                                />
                                {
                                    userDetails[0].professionalRole !== 'Contact Tracer' &&
                                    <TextField
                                        className='middlename'
                                        label="Middle Name"
                                        variant="outlined"
                                        margin="normal"
                                        type='text'
                                        name="hospital"
                                        disabled
                                        value={userDetails[0].hospital}
                                    />

                                }
                            </div>
                            <br />
                        </fieldset>

                        <fieldset className="field-container">
                            <legend>Credentials</legend>
                            <TextField
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                type='text'
                                name="email"
                                value={userDetails[0].email}
                                fullWidth
                                disabled
                            />
                        </fieldset>


                        <br />
                        <div className="names">
                            <Button
                                color='secondary'
                                component='button'
                                variant='contained'
                                className='firsname'
                                onClick={handleReject}
                            >
                                Reject
                            </Button>
                            <Button
                                color='primary'
                                component='button'
                                variant='contained'
                                className='middlename'
                                type='submit'
                            >
                                Approve
                            </Button>
                        </div>
                        <br />
                    </form>
            }
            {
                successMessage &&
                <Spinners action="success" />
            }
        </div>
    );
}

export default Details;