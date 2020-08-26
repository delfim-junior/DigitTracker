import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from '../pages/Login'
import PasswordRecovery from '../pages/PasswordRecovery'
import Register from '../pages/Register'
import Admin from '../pages/Admin'


const Routes = () => (
    <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route path='/forgot-password' component={PasswordRecovery} />
        <Route path='/register' component={Register} />
        <Route path='/admin' component={Admin} />
    </BrowserRouter>
)

export default Routes