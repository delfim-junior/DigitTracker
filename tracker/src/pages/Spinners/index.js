import React from 'react'

import success from '../../assets/images/success.gif'
import spinner from '../../assets/images/spinner.svg'

import './styles.css'

const style = {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    top: 0,
    top: 0,
    zIndex: 1000,
    background: 'rgba(0,0,0,.5)',
    height: '100vh',
    width: '100vw',
    position: 'fixed'
}

const Spinners = ({ recovery, handleLogin, action, withoutBackground }) => {
    return (
        <div style={withoutBackground ? null : style}>
            {
                action === 'success'
                    ?
                    <>
                        <img src={success} />
                        {
                            recovery
                                ?
                                <>
                                    <h3 style={{ color: '#FFF' }}>Your Access were successfully Recovered</h3>
                                    <button className="loading-button" onClick={() => handleLogin()}>
                                        Login
                                </button>
                                </>
                                :
                                <h3 style={{ color: '#FFF' }}>successfully registered</h3>
                        }
                    </>
                    :
                    <div style={style}>
                        <img src={spinner} />
                    </div>
            }
        </div>
    )
}

export default Spinners

