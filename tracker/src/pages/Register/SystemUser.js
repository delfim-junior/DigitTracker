import React, { useState, useEffect } from 'react';
import { FiUserPlus, FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import validator from 'validator'
import { OutlinedInput } from '@material-ui/core';
import { Button, Select, TextField, MenuItem, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';

import Spinners from '../Spinners/'

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

const cities = [
    {
        city: 'Chicago',
        hospitals: ['X', 'Y', 'Z']
    },
    {
        city: 'NYC',
        hospitals: ['K', 'W', 'Q']
    }
]

function SystemUser() {
    const classes = useStyles();
    const history = useHistory()

    const [successMessage, setSuccessMessage] = useState(false)
    const [loading, setLoading] = useState(false)
    const [hospitals, setHospitals] = useState([])
    const [professionalFields, setProfessionalFields] = useState(true)

    const [formInput, setFormInput] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        birthday: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
        city: '',
        nationalId: '',
        employeeId: '',
        medicalDescription: '',
        hospital: '',
        role: '',
        mobilePhone: '',
        gender: ''

    })

    useEffect(() => {
        if (formInput.role === 'contact-tracer') {
            setProfessionalFields(false)
        }
        else {
            setProfessionalFields(true)
        }
    }, [formInput.role])

    useEffect(() => {
        if (formInput.city !== '') {
            const auxHopitals = cities.filter(city => (
                city.city === formInput.city && city
            ))

            setHospitals(auxHopitals[0].hospitals)
        }

    }, [formInput.city])

    function handleGoBack() {
        history.push('/')
    }

    function handleFormInput(event) {
        const { name, value } = event.target
        setFormInput({ ...formInput, [name]: value })
        console.log(formInput)
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
            city,
            nationalId,
            employeeId,
            medicalDescription,
            hospital,
            mobilePhone
        } = formInput

        const isEmail = validator.isEmail(email)
        if (isEmail) {
            if (email === confirmEmail) {
                if (password.length >= 4) {
                    if (password === confirmPassword) {
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
                        toast.error('Not corresponding Passwords. Please, make sure that the entered passwords are equal')
                    }
                }
                else {
                    toast.warn('Passoword must have the minimum of 4 characters')
                }
            }
            else {
                toast.error('Not corresponding Emails. Please, verify')
            }

        }
        else {
            toast.error('The entered Email is not valid')
        }

    }

    function letters(e) {
        var letters = /^[a-z]*$/i;
        if (!e.target.value.match(letters)) {
            alert('Please input letters only');
        }
    }

    return (
        <>
            <ToastContainer />
            <form onSubmit={handleRegister} className="professional-container">
                <header>
                    <FiArrowLeft onClick={handleGoBack} size={30} color="#27AE60" />
                    <h6 onClick={handleGoBack}>Home</h6>
                </header>
                <div className="icon">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/digitracker-5ea27.appspot.com/o/FCMImages%2Flogo.png?alt=media&token=b15e6a20-58dc-4d76-b195-f26e1422ea98"
                        alt="logo image"
                        width="120px"
                        height="120px"
                    />
                    <br />
                    <h5>System User Registration</h5>
                </div>
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
                        className=''
                        label="Last Name"
                        variant="outlined"
                        margin="normal"
                        type='text'
                        fullWidth
                        name="lastName"
                        required
                        onChange={handleFormInput}
                    />
                    {/**Modify handleFormInput */}
                    <div className='gender' style={{ marginBottom: "10px" }}>
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
                            />
                            &nbsp;
                            <span>Female</span>
                        </label>
                    </div>

                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name="birthday"
                        required
                        onChange={handleFormInput}
                    />
                    <TextField
                        label="National ID"
                        variant="outlined"
                        margin="normal"
                        type='number'
                        fullWidth
                        name="nationalId"
                        required
                        onChange={handleFormInput}
                    />
                    <TextField
                        label="Mobile Number"
                        variant="outlined"
                        margin="normal"
                        type='number'
                        fullWidth
                        name="mobilePhone"
                        required
                        onChange={handleFormInput}
                    />
                </fieldset>

                <fieldset className="field-container">
                    <legend>Health Professional Information</legend>

                    <span>Professional Role</span>

                    <div className='professional-role' style={{ marginTop: "10px" }}>
                        <label htmlFor="doctor">
                            <input
                                type="radio" name="role"
                                id="doctor"
                                name="role"
                                value="doctor"
                                required
                                onChange={handleFormInput}
                            />&nbsp;
                            <span>Doctor</span>
                        </label>
                        <label htmlFor="nurse">
                            <input
                                type="radio"
                                name="role"
                                id="nurse"
                                value="nurse"
                                required
                                onChange={handleFormInput}
                            />&nbsp;
                            <span>Nurse</span>
                        </label>
                        <label htmlFor="contact-tracer">
                            <input
                                type="radio"
                                name="role"
                                id="contact-tracer"
                                value="contact-tracer"
                                required
                                onChange={handleFormInput}
                            />&nbsp;
                            <span>Contact Tracer</span>
                        </label>
                    </div>
                    <TextField
                        label="Employee ID"
                        variant="outlined"
                        margin="normal"
                        type='number'
                        fullWidth
                        name="mobilePhone"
                        required
                        onChange={handleFormInput}
                    />
                    <br />
                    <div className="names" style={{ marginTop: '25px' }}>

                        <div>
                            <InputLabel id="label">City</InputLabel>
                            <Select
                                style={{ width: '20rem' }}
                                labelId="label"
                                id="select"
                                name="city"
                                required
                                onChange={handleFormInput}
                            >
                                {
                                    cities.map(item => (
                                        <MenuItem value={item.city}>{item.city}</MenuItem>
                                    ))
                                }
                            </Select>
                        </div>
                        {
                            professionalFields &&
                            <div>

                                <InputLabel style={{ marginLeft: '20px' }} id="label">Hospital</InputLabel>
                                <Select
                                    style={{ width: '20rem', marginLeft: '20px' }}
                                    labelId="label"
                                    id="select"
                                    name="hospital"
                                    required
                                    onChange={handleFormInput}
                                    disabled={formInput.city !== '' ? false : true}
                                >
                                    {
                                        hospitals.map(item => (
                                            <MenuItem value={item}>{item}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </div>
                        }
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


                <br />
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
            </form>
            {
                successMessage &&
                <Spinners action="success" />
            }
            {
                loading &&
                <Spinners action="loading" />
            }
        </>
    )
}

export default SystemUser;