import React from 'react';
import { FiUserPlus, FiArrowLeft } from 'react-icons/fi'
import { OutlinedInput } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './styles.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

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

    function handleShowConfirmation() {
        setConfirmation(true)
    }

    function handleGoBack() {
        history.push('/')
    }

    return (
        <form className="user-container">
            <header>
                <FiArrowLeft onClick={handleGoBack} size={30} color="#27AE60" />
                <h6 onClick={handleGoBack}>Home</h6>
            </header>
            <div className="icon">
                <FiUserPlus size={80} />
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
            <div className='gender'>
                <span>Gender</span>
                &nbsp;
                &nbsp;
                <label htmlFor="male">
                    <input
                        type="radio" name="identify"
                        id="male"
                        value="user"
                    />&nbsp;
                    <span>Male</span>
                </label>
                <label htmlFor="female">
                    <input
                        type="radio"
                        name="identify"
                        id="female"
                        value="professional"
                    />&nbsp;
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
            />
            <OutlinedInput
                className=''
                placeholder="Email"
                type='text'
                name="Email"
                required
            />

            <div className="names">
                <OutlinedInput
                    className='firsname'
                    placeholder="Nationality"
                    type='text'
                    name="firtname"
                    required
                />
                <OutlinedInput
                    className='middlename'
                    placeholder="Province"
                    type='text'
                    name="middlename"
                    required
                />
            </div>
            <div>
                <OutlinedInput
                    className='first-line'
                    placeholder="City"
                    type='text'
                    name="city"
                    required
                />
                <OutlinedInput
                    className='first-line'
                    placeholder="House Number"
                    type='text'
                    name="housenumber"
                    required
                />
                <OutlinedInput
                    className=''
                    placeholder="Street Name"
                    type='text'
                    name="streetname"
                    required
                />
            </div>
            <fieldset className="idinfo">
                <legend>Addictional Information</legend>
                <div className="names">
                    <OutlinedInput
                        className='firsname'
                        placeholder="ID Type"
                        type='text'
                        name="firtname"
                        required
                    />
                    <OutlinedInput
                        className='middlename'
                        placeholder="ID Number"
                        type='text'
                        name="middlename"
                        required
                    />
                </div>
                <br />
                <div className="names">
                    <OutlinedInput
                        className='firsname'
                        placeholder="Phone Number"
                        type='text'
                        name="firtname"
                        required
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
            </div>
            <Button variant="contained" color="default">
                Confirm Location
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
                >
                    Register
                    </Button>
            </div>
        </form>
    )
}

export default UserTracker;