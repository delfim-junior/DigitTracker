import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Identify from './Identify';
import UserTracker from './UserTracker';
import MedicalProfessional from './MedicalProfessional';

// import { Container } from './styles';

function Register() {
  return (
    <Switch>
      <Route exact path='/register' component={Identify} />
      <Route path='/register/user' component={UserTracker} />
      <Route path='/register/professional' component={MedicalProfessional} />
    </Switch>
  );
}

export default Register;