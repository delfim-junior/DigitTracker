import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Requests from '../pages/Requests'
import Details from '../pages/Details'
import NormalUser from '../pages/NormalUser'
import Patients from '../pages/Patients'
import PatientDetails from '../pages/Patients/PatientDetails'


const RoutesAdmin = () => (
    <Switch>
        <Route exact path='/dashboard/admin' component={Dashboard} />
        <Route exact path='/dashboard/user' component={NormalUser} />
        <Route exact path='/dashboard/admin/requests' component={Requests} />
        <Route path='/dashboard/admin/requests/:id' component={Details} />
        <Route exact path='/dashboard/admin/patients' component={Patients} />
        <Route exact path='/dashboard/admin/patients/:id' component={PatientDetails} />
    </Switch>
)

export default RoutesAdmin