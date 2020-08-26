import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Requests from '../pages/Requests'


const RoutesAdmin = () => (
    <Switch>
        <Route exact path='/admin' component={Dashboard} />
        <Route path='/admin/requests' component={Requests} />
    </Switch>
)

export default RoutesAdmin