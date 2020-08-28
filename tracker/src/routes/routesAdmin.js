import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Requests from '../pages/Requests'
import Details from '../pages/Details'


const RoutesAdmin = () => (
    <Switch>
        <Route exact path='/admin' component={Dashboard} />
        <Route exact path='/admin/requests' component={Requests} />
        <Route path='/admin/requests/:id' component={Details} />
    </Switch>
)

export default RoutesAdmin