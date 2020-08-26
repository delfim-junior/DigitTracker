import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Identify from './Identify';
import UserTracker from './UserTracker';

// import { Container } from './styles';

function Register() {
  return (
    <Switch>
      <Route exact path='/register' component={Identify} />
      <Route exact path='/register/user' component={UserTracker} />
    </Switch>
  );
}

export default Register;