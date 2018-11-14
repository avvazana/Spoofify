import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './splash/splash_container';
// import Browse from './splash/splash';

const App = () => {
    return (
  <div>
    <header>
      <h1>Spoofify</h1>
      <SplashContainer/>
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
)
};
// <ProtectedRoute exact path="/browse" component={Browse}/>

export default App;
