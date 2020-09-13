import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from '../pages/Login'
import PasswordRecovery from '../pages/PasswordRecovery'
import Device from '../pages/Register/Device'
import SystemUser from '../pages/Register/SystemUser'
import Admin from '../pages/Admin'
import Forwarder from '../pages/Forwarder'


const Routes = () => (
    <BrowserRouter>
        <Route exact path='/' component={Forwarder} />
        <Route path='/login' component={Login} />
        <Route path='/forgot-password' component={PasswordRecovery} />
        <Route path='/register'>
            <Route path='/register/device-register' component={Device}/>
            <Route path='/register/user-register' component={SystemUser}/>
        </Route>
        <Route path='/dashboard/admin' component={Admin} />
    </BrowserRouter>
)

export default Routes