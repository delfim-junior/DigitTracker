import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiUserPlus, FiArrowLeft } from 'react-icons/fi'
import { OutlinedInput } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import validator from 'validator'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './styles.css';


import Loading from '../Loading';

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

function UserTracker() {
    const classes = useStyles();
    const history = useHistory()

    const [confirmation, setConfirmation] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)
    const [location, setLocation] = useState({
        latitude: '',
        longitude: ''
    })
    const [formInput, setFormInput] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        birthday: '',
        email: '',
        nationality: '',
        province: '',
        city: '',
        houseNumber: '',
        streetName: '',
        idType: '',
        idNumber: '',
        phoneNumber: '',

    })

    function handleShowConfirmation() {
        setConfirmation(true)
    }

    function handleGoBack() {
        history.push('/')
    }

    function handleFormInput(event) {
        const { name, value } = event.target
        setFormInput({ ...formInput, [name]: value })
    }

    function handleLocationConfirm() {
        setLocation({ ...location, latitude: -25.919488, longitude: 32.5484544 })
        toast.success('Location sucessfully confirmed')
    }

    function handleRegister(event) {
        event.preventDefault()
        //data ready to use in the backend
        const {
            firstName,
            middleName,
            lastName,
            gender,
            birthday,
            email,
            nationality,
            province,
            city,
            houseNumber,
            streetName,
            idType,
            idNumber,
            phoneNumber
        } = formInput

        const { latitude, longitude } = location

        const isEmail = validator.isEmail(email)
        if (isEmail) {
            if (latitude !== '' && longitude !== '') {
                //Backend...
                setSuccessMessage(true)
                setTimeout(() => {
                    history.push('/')
                }, 3000)
            }
            else {
                toast.warn('Please, confirm your location!')
            }
        }
        else {
            toast.error('The entered Email is not valid')
        }

    }

    return (
        <>
            <ToastContainer />
            <form onSubmit={handleRegister} className="user-container">
                <header>
                    <FiArrowLeft onClick={handleGoBack} size={30} color="#27AE60" />
                    <h6 onClick={handleGoBack}>Home</h6>
                </header>
                <div className="icon">
                    <FiUserPlus size={80} />
                    <h5>User Tracker</h5>
                </div>
                <div className="names">
                    <OutlinedInput
                        className='firsname'
                        placeholder="First Name"
                        type='text'
                        name="firstName"
                        required
                        onChange={handleFormInput}
                    />
                    <OutlinedInput
                        className='middlename'
                        placeholder="Middle Name"
                        type='text'
                        name="middleName"
                        required
                        onChange={handleFormInput}
                    />
                </div>
                <OutlinedInput
                    className=''
                    placeholder="Last Name"
                    type='text'
                    name="lastName"
                    required
                    onChange={handleFormInput}
                />
                <div className='gender'>
                    <span>Gender</span>
                &nbsp;
                &nbsp;
                <label htmlFor="male">
                        <input
                            type="radio" name="identify"
                            id="male"
                            name="gender"
                            value="M"
                            onChange={handleFormInput}
                            required
                        />&nbsp;
                    <span>Male</span>
                    </label>
                    <label htmlFor="female">
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="F"
                            onChange={handleFormInput}
                            required
                        />&nbsp;
                    <span>Female</span>
                    </label>
                </div>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    name="birthday"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                    onChange={handleFormInput}
                />
                <OutlinedInput
                    className=''
                    placeholder="Email"
                    type='text'
                    name="email"
                    required
                    onChange={handleFormInput}
                />

                <div className="names">
                    <OutlinedInput
                        className='firsname'
                        placeholder="Nationality"
                        type='text'
                        name="nationality"
                        required
                        onChange={handleFormInput}
                    />
                    <OutlinedInput
                        className='middlename'
                        placeholder="Province"
                        type='text'
                        name="province"
                        required
                        onChange={handleFormInput}
                    />
                </div>
                <div>
                    <OutlinedInput
                        className='first-line'
                        placeholder="City"
                        type='text'
                        name="city"
                        required
                        onChange={handleFormInput}
                    />
                    <OutlinedInput
                        className='first-line'
                        placeholder="House Number"
                        type='number'
                        name="houseNumber"
                        required
                        onChange={handleFormInput}
                    />
                    <OutlinedInput
                        className=''
                        placeholder="Street Name"
                        type='text'
                        name="streetName"
                        required
                        onChange={handleFormInput}
                    />
                </div>
                <fieldset className="idinfo">
                    <legend>Addictional Information</legend>
                    <div className="names">
                        <OutlinedInput
                            className='firsname'
                            placeholder="ID Type"
                            type='text'
                            name="idType"
                            required
                            onChange={handleFormInput}
                        />
                        <OutlinedInput
                            className='middlename'
                            placeholder="ID Number"
                            type='number'
                            name="idNumber"
                            required
                            onChange={handleFormInput}
                        />
                    </div>
                    <br />
                    <div className="names">
                        <OutlinedInput
                            className='firsname'
                            placeholder="Phone Number"
                            type='text'
                            name="phoneNumber"
                            required
                            onChange={handleFormInput}
                        />
                        <Button
                            color='primary'
                            component='button'
                            variant='contained'
                            className='middlename'
                            onClick={handleShowConfirmation}
                        >
                            Confirm
                    </Button>
                    </div>
                    <br />
                    {
                        confirmation &&
                        <div className="names">
                            <h6
                                className='firsname'
                            >
                                Verify the mobile phone number through SMS
                        </h6>
                            <OutlinedInput
                                className='middlename'
                                placeholder="Confirmation Code"
                                type='text'
                                name="middlename"
                                required
                            />
                        </div>
                    }
                </fieldset>
                <div className="maps">
                    MAPS
                    <br />
                    {
                        location.latitude && location.longitude
                            ?
                            <>
                                <h3>Latitude: {location.latitude}</h3>
                                <br />
                                <h3>Longitude: {location.longitude}</h3>
                            </>
                            :
                            <h3>Location Not Confirmed!</h3>
                    }
                </div>
                <Button
                    onClick={handleLocationConfirm}
                    variant={
                        location.latitude && location.longitude
                            ? 'disabled'
                            : 'contained'
                    }
                    color="default"
                >
                    {
                        location.latitude && location.longitude
                            ? 'Your location where confirmed!'
                            : 'Confirm Location'
                    }
                </Button>
                <div className="names">
                    <Button
                        color='secondary'
                        component='button'
                        variant='contained'
                        className='firsname'
                        onClick={() => history.goBack()}
                    >
                        Cancel
                    </Button>
                    <Button
                        color='primary'
                        component='button'
                        variant='contained'
                        className='middlename'
                        type='submit'

                    >
                        Register
                    </Button>
                </div>
                <br />
                {
                    successMessage &&
                    <Loading />
                }
            </form>
        </>
    )
}

export default UserTracker;