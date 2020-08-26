import React from 'react';
import { FiUserPlus, FiArrowLeft } from 'react-icons/fi'
import { OutlinedInput } from '@material-ui/core';
import { Button, Select, TextField, MenuItem, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './styles.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
    function handleGoBack() {
        history.push('/')
    }

    function handleRegister() {
        setSuccessMessage(true)
        setTimeout(() => {
            history.push('/')
        }, 3000)
    }

    return (
        <>
            <form className="professional-container">
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
                        name="firtname"
                        required
                    />
                    <OutlinedInput
                        className='middlename'
                        placeholder="Middle Name"
                        type='text'
                        name="middlename"
                        required
                    />
                </div>
                <OutlinedInput
                    className=''
                    placeholder="Last Name"
                    type='text'
                    name="lastname"
                    required
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
                />
                <OutlinedInput
                    placeholder="Email"
                    type='text'
                    name="Email"
                    required
                />
                <OutlinedInput
                    placeholder="Confirm your email"
                    type='text'
                    name="Email"
                    required
                />

                <div className="names">
                    <OutlinedInput
                        className='firsname'
                        placeholder="Passoword"
                        type='text'
                        name="firtname"
                        required
                    />
                    <OutlinedInput
                        className='middlename'
                        placeholder="Confirm your Password"
                        type='text'
                        name="middlename"
                        required
                    />
                </div>
                <br />
                <InputLabel id="label">City</InputLabel>
                <Select labelId="label" id="select">
                    <MenuItem value="10">Chicago</MenuItem>
                    <MenuItem value="20">NYC</MenuItem>
                </Select>
                <fieldset className="idinfo">
                    <legend>Professional Information</legend>
                    <div className="names">
                        <OutlinedInput
                            className='firsname'
                            placeholder="National ID"
                            type='text'
                            name="nationalid"
                            required
                        />
                        <OutlinedInput
                            className='middlename'
                            placeholder="Employee ID"
                            type='text'
                            name="employeeid"
                            required
                        />
                    </div>
                    <br />
                    <div className='professional-role'>
                        <span>Professional Role</span>
                    &nbsp;
                    &nbsp;
                    <label htmlFor="doctor">
                            <input
                                type="radio" name="role"
                                id="doctor"
                                value="doctor"
                            />&nbsp;
                    <span>Male</span>
                        </label>
                        <label htmlFor="nurse">
                            <input
                                type="radio"
                                name="role"
                                id="nurse"
                                value="nurse"
                            />&nbsp;
                    <span>Female</span>
                        </label>
                    </div>
                    <br />
                    <div className="names">
                        <OutlinedInput
                            className='firsname'
                            placeholder="Medical Designation"
                            type='text'
                            name="designation"
                            required
                        />
                        <InputLabel id="label">City</InputLabel>
                        <Select className='middlename' labelId="label" id="select">
                            <MenuItem value="10">Chicago</MenuItem>
                            <MenuItem value="20">NYC</MenuItem>
                        </Select>
                    </div>

                </fieldset>
                <br />
                <Button 
                    onClick={handleRegister} 
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