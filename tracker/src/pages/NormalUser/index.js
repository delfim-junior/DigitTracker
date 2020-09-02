import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { FiTablet, FiEdit } from 'react-icons/fi'

import './styles.css';
import { Button } from '@material-ui/core';

function NormalUser() {

  const history = useHistory()

  const [device, setDevice] = useState({})
  useEffect(() => {
    //Fetch device info from Database here
    setDevice({
      imei: '12131213',
      deviceName: 'IPhone 7',
      status: 'clear'
    })
  }, [])

  function handleDeleteDevice(e) {
    e.preventDefault()
    setDevice(null)
  }

  function handleDeviceRegister() {
    history.push('/register/device-register')
  }

  return (
    <div className="normalUser-Container">
      {
        device === null
          ?
          <>
            <h1>You have no Active Devices</h1>
            <Button
              color='primary'
              component='button'
              variant='contained'
              type='submit'
              onClick={handleDeviceRegister}

            >
              Add New Device &nbsp; <FiEdit />
            </Button>
          </>
          :
          <>
            <header>
              <h4>Your Active Device</h4>
              <FiTablet size={30} />
            </header>
            <br />
            <form onSubmit={handleDeleteDevice}>
              <div>
                <label htmlFor="imei">Device IMEI</label>
                <input
                  type='text'
                  name="imei"
                  value={device.imei}
                  disabled
                />
              </div>

              <div>
                <label htmlFor="deviceName">Device Name</label>
                <input
                  type='text'
                  name="deviceName"
                  value={device.deviceName}
                  disabled
                />
              </div>

              <div>
                <label htmlFor="infection">Infection Status</label>
                <input
                  type='text'
                  name="infection"
                  value={device.status}
                  disabled
                />
              </div>
              <br />
              <Button
                color='secondary'
                component='button'
                variant='contained'
                type='submit'

              >
                Remove Device
              </Button>
            </form>
          </>
      }
    </div>

  );
}

export default NormalUser;