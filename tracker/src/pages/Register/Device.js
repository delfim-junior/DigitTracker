import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiUserPlus, FiArrowLeft, FiSearch } from 'react-icons/fi'
import { OutlinedInput, InputLabel, Select, MenuItem } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import validator from 'validator'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './styles.css';


import Spinners from '../Spinners/'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginRight: theme.spacing(1),
        width: 200,
    },
    margin: {
        margin: theme.spacing(1),
    },

}));

function DeviceRegister() {
    const classes = useStyles();
    const history = useHistory()

    const [confirmation, setConfirmation] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)
    const [loading, setLoading] = useState(false)
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
        confirmEmail: '',
        password: '',
        confirmPassword: '',
        nationality: '',
        province: '',
        city: '',
        area: '',
        houseNumber: '',
        streetName: '',
        idType: '',
        idNumber: '',
        phoneNumber: '',
        confirmationCode: '',
        emergencyNumber1: '',
        emergencyNumber2: '',
        searchInput: '',
        deviceName: '',
        imei: ''


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
        console.log(formInput)
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
            confirmEmail,
            password,
            confirmPassword,
            nationality,
            province,
            city,
            area,
            houseNumber,
            streetName,
            idType,
            idNumber,
            confirmationCode,
            emergencyNumber1,
            emergencyNumber2,
            phoneNumber,
            searchInput,
            deviceName,
            imei
        } = formInput

        const { latitude, longitude } = location

        const isEmail = validator.isEmail(email)
        if (isEmail) {
            if (latitude !== '' && longitude !== '') {
                if (confirmation) {
                    //Backend...
                    setLoading(true)
                    setTimeout(() => {
                        setLoading(false)
                        setSuccessMessage(true)
                        setTimeout(() => {
                            history.push('/')
                        }, 3000)
                    }, 3000)
                }
                else {
                    toast.warn('Please, confirm your phone number!')
                }
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
                    <h6 onClick={handleGoBack}>Back</h6>
                </header>
                <div className="icon">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/digitracker-5ea27.appspot.com/o/FCMImages%2Flogo.png?alt=media&token=b15e6a20-58dc-4d76-b195-f26e1422ea98"
                        alt="logo image"
                        width="120px"
                        height="120px"
                    />
                    <br />
                    <h5>Device Registration</h5>
                </div>
                <fieldset className="field-container">
                    <legend>Device Information</legend>
                    <TextField
                        label="Enter you device name"
                        variant="outlined"
                        margin="normal"
                        type='text'
                        name="deviceName"
                        fullWidth
                        required
                        onChange={handleFormInput}
                    />
                    <TextField
                        label="Enter you device IMEI"
                        variant="outlined"
                        margin="normal"
                        type='text'
                        name="imei"
                        fullWidth
                        required
                        onChange={handleFormInput}
                    />
                </fieldset>

                <fieldset className="field-container">
                    <legend>Personal Information</legend>
                    <div className="names">
                        <TextField
                            className='firsname'
                            label="First Name"
                            variant="outlined"
                            margin="normal"
                            type='text'
                            name="firstName"
                            required
                            onChange={handleFormInput}
                        />
                        <TextField
                            className='middlename'
                            label="Middle Name"
                            variant="outlined"
                            margin="normal"
                            type='text'
                            name="middleName"
                            required
                            onChange={handleFormInput}
                        />
                    </div>
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        margin="normal"
                        type='text'
                        name="lastName"
                        fullWidth
                        required
                        onChange={handleFormInput}
                    />
                    <div className='gender' style={{ marginBottom: "15px" }}>
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
                                id="female"
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

                    <div style={{ marginTop: '1.5rem' }}>
                        <InputLabel id="label">Nationality</InputLabel>
                        <Select
                            style={{ width: '25rem' }}
                            labelId="label"
                            id="select"
                            name="nationality"
                            required
                            onChange={handleFormInput}
                        >
                            <MenuItem value="10">Chicago</MenuItem>
                            <MenuItem value="20">NYC</MenuItem>
                        </Select>
                    </div>

                    <fieldset className="field-container">
                        <legend>Contacts</legend>
                        <TextField
                            className=''
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            type='text'
                            name="email"
                            fullWidth
                            required
                            onChange={handleFormInput}
                        />

                        <div className="names">
                            <OutlinedInput
                                className='firsname'
                                placeholder="Saudi Mobile Number"
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
                                <h6 className='firsname'>
                                    Verify the mobile phone number through SMS
                                </h6>
                                <TextField
                                    className='middlename'
                                    label="Confirmation Code"
                                    variant="outlined"
                                    margin="normal"
                                    type='number'
                                    name="confirmationCode"
                                    required
                                />
                            </div>
                        }
                        <h5>Emergency Numbers</h5>
                        <div className="names" style={{ marginTop: "15px" }}>
                            <TextField
                                className='firsname'
                                label="First Number"
                                variant="outlined"
                                type='text'
                                name="emergencyNumber1"
                                required
                                onChange={handleFormInput}
                            />
                            <TextField
                                className='middlename'
                                label="Second Number"
                                variant="outlined"
                                type='text'
                                name="emergencyNumber2"
                                required
                                onChange={handleFormInput}
                            />
                        </div>
                    </fieldset>

                    <br />
                    <div className="names" style={{ marginTop: '15px' }}>
                        <div>
                            <InputLabel id="label">Identity Type</InputLabel>
                            <Select
                                style={{ width: '20rem', marginRight: '1rem', marginTop: '20px' }}
                                labelId="label"
                                id="select"
                                name="idType"
                                required
                                onChange={handleFormInput}
                            >
                                <MenuItem value="10">Chicago</MenuItem>
                                <MenuItem value="20">NYC</MenuItem>
                            </Select>
                        </div>

                        <TextField
                            label="idNumber"
                            variant="outlined"
                            margin="normal"
                            type='text'
                            name="idNumber"
                            fullWidth
                            required
                            onChange={handleFormInput}
                        />
                    </div>
                </fieldset>

                <fieldset className="field-container">
                    <legend>GPS Location</legend>

                    <TextField
                        label="search for an address on the map"
                        variant="filled"
                        margin="normal"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FiSearch />
                                </InputAdornment>
                            ),
                        }}
                        type='text'
                        id="input-with-icon-textfield"
                        name="searchInput"
                        required
                        onChange={handleFormInput}
                    />
                    <div className="maps" style={{ marginTop: '15px' }}>
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
                        fullWidth
                        variant={
                            location.latitude && location.longitude
                                ? 'disabled'
                                : 'contained'
                        }
                        color="default"
                    >
                        {
                            location.latitude && location.longitude
                                ? 'Your location were confirmed!'
                                : 'Confirm Location'
                        }
                    </Button>

                    <div className="names">
                        <TextField
                            className='firsname'
                            label="Province"
                            variant="outlined"
                            margin="normal"
                            type='text'
                            name="province"
                            required
                            onChange={handleFormInput}
                        />
                        <TextField
                            className='middlename'
                            label="City"
                            variant="outlined"
                            margin="normal"
                            type='text'
                            name="city"
                            required
                            onChange={handleFormInput}
                        />
                    </div>
                    <TextField
                        className=''
                        label="Area"
                        variant="outlined"
                        margin="normal"
                        type='text'
                        name="area"
                        fullWidth
                        required
                        onChange={handleFormInput}
                    />
                    <div className="names">
                        <TextField
                            className='firsname'
                            label="Street Name"
                            variant="outlined"
                            margin="normal"
                            type='text'
                            name="streetName"
                            required
                            onChange={handleFormInput}
                        />
                        <TextField
                            className='middlename'
                            label="House Number"
                            variant="outlined"
                            margin="normal"
                            type='number'
                            name="houseNumber"
                            required
                            onChange={handleFormInput}
                        />
                    </div>
                </fieldset>

                <fieldset className="field-container">
                    <legend>Credentials</legend>
                    <TextField
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        type='text'
                        name="email"
                        fullWidth
                        required
                        onChange={handleFormInput}
                    />
                    <TextField
                        label="Confirm your Email"
                        variant="outlined"
                        margin="normal"
                        type='text'
                        name="confirmEmail"
                        fullWidth
                        required
                        onChange={handleFormInput}
                    />

                    <div className="names">
                        <TextField
                            className='firsname'
                            label="Passoword"
                            variant="outlined"
                            margin="normal"
                            type='password'
                            name="password"
                            required
                            onChange={handleFormInput}
                        />
                        <TextField
                            className='middlename'
                            label="Confirm Your Passoword"
                            variant="outlined"
                            margin="normal"
                            type='password'
                            name="confirmPassword"
                            required
                            onChange={handleFormInput}
                        />
                    </div>
                </fieldset>


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
                    <Spinners action="success" />
                }
                {
                    loading &&
                    <Spinners action="loading" />
                }
            </form>
        </>
    )
}

export default DeviceRegister;