import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Identify from './Identify';
import DeviceRegistration from './Device';
import SystemUser from './SystemUser';

function Register() {
  return (
    <Switch>
      <Route exact path='/register' component={Identify} />
      <Route path='/register/system-user' component={SystemUser} />
      <Route path='/register/device' component={DeviceRegistration} />
    </Switch>
  );
}

export default Register;