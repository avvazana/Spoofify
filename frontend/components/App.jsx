import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import MainContentContainer from './main/main_content_container';
import Splash from './session/splash';

const App = (props) => {
  const splashOrMain = Boolean(props.store.getState().session.currentUserId) ? (
    <ProtectedRoute path="/" component={MainContentContainer} />
  ) : (
    <AuthRoute path="/" component={Splash} />
  )

  return (
    <div className="page">
      {splashOrMain}
    </div>
  )
};

export default App;
