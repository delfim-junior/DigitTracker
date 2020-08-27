import React, { useState } from 'react';
import { FiUserPlus, FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import validator from 'validator'

import { OutlinedInput } from '@material-ui/core';
import { Button, Select, TextField, MenuItem, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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

function MedicalProfessional() {
    const classes = useStyles();
    const history = useHistory()

    const [successMessage, setSuccessMessage] = useState(false)
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
        role: ''

    })


    function handleGoBack() {
        history.push('/')
    }

    function handleFormInput(event) {
        const { name, value } = event.target
        setFormInput({ ...formInput, [name]: value })
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
        } = formInput

        const isEmail = validator.isEmail(email)
        if (isEmail) {
            if (email === confirmEmail) {
                if (password.length >= 4) {
                    if (password === confirmPassword) {
                        //Backend...
                        setSuccessMessage(true)
                        setTimeout(() => {
                            history.push('/')
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

    return (
        <>
            <ToastContainer />
            <form onSubmit={handleRegister} className="professional-container">
                <header>
                    <FiArrowLeft onClick={handleGoBack} size={30} color="#27AE60" />
                    <h6 onClick={handleGoBack}>Home</h6>
                </header>
                <div className="icon">
                    <FiUserPlus size={80} />
                    <h5>Medical Professional</h5>
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
                <OutlinedInput
                    placeholder="Email"
                    type='text'
                    name="email"
                    required
                    onChange={handleFormInput}
                />
                <OutlinedInput
                    placeholder="Confirm your email"
                    type='text'
                    name="confirmEmail"
                    required
                    onChange={handleFormInput}
                />

                <div className="names">
                    <OutlinedInput
                        className='firsname'
                        placeholder="Passoword"
                        type='password'
                        name="password"
                        required
                        onChange={handleFormInput}
                    />
                    <OutlinedInput
                        className='middlename'
                        placeholder="Confirm your Password"
                        type='password'
                        name="confirmPassword"
                        required
                        onChange={handleFormInput}
                    />
                </div>
                <br />
                <InputLabel id="label">City</InputLabel>
                <Select
                    onChange={handleFormInput}
                    labelId="label"
                    id="select"
                    name='city'
                    required
                >
                    <MenuItem value="10">Chicago</MenuItem>
                    <MenuItem value="20">NYC</MenuItem>
                </Select>
                <fieldset className="idinfo">
                    <legend>Professional Information</legend>
                    <div className="names">
                        <OutlinedInput
                            className='firsname'
                            placeholder="National ID"
                            type='number'
                            name="nationalId"
                            required
                            onChange={handleFormInput}
                        />
                        <OutlinedInput
                            className='middlename'
                            placeholder="Employee ID"
                            type='number'
                            name="employeeId"
                            required
                            onChange={handleFormInput}
                        />
                    </div>
                    <br />
                    <span>Professional Role</span>
                    <div className='professional-role'>
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
                    </div>

                    <br />
                    <div className="names">
                        <OutlinedInput
                            className='firsname'
                            placeholder="Medical Designation"
                            type='text'
                            name="medicalDescription"
                            required
                            onChange={handleFormInput}
                        />
                        <div>
                            <InputLabel style={{ marginLeft: '' }} id="label">Hospital</InputLabel>
                            <Select
                                style={{ width: '15rem' }}
                                labelId="label"
                                id="select"
                                name="hospital"
                                required
                                onChange={handleFormInput}
                            >
                                <MenuItem value="10">Chicago</MenuItem>
                                <MenuItem value="20">NYC</MenuItem>
                            </Select>
                        </div>
                    </div>

                </fieldset>
                <br />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Register
            </Button>
            </form>
            {
                successMessage &&
                <Loading />
            }
        </>
    )
}

export default MedicalProfessional;