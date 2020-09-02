import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Requests from '../pages/Requests'
import Details from '../pages/Details'
import NormalUser from '../pages/NormalUser'


const RoutesAdmin = () => (
    <Switch>
        <Route exact path='/dashboard/admin' component={Dashboard} />
        <Route exact path='/dashboard/user' component={NormalUser} />
        <Route exact path='/dashboard/admin/requests' component={Requests} />
        <Route path='/dashboard/admin/requests/:id' component={Details} />
    </Switch>
)

export default RoutesAdmin