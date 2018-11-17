import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './splash/splash_container';
import BrowseContainer from './main/browse_container';

const App = () => {
    return (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/browse" component={BrowseContainer}/>
      <Route path="/" component={SplashContainer}/>
    </Switch>
  </div>
)
};

export default App;


// <ProtectedRoute exact path="/browse/albums" component={BrowseContainer}/>
// <ProtectedRoute exact path="/browse/artists" component={BrowseContainer}/>
// <ProtectedRoute exact path="/browse/songs" component={BrowseContainer}/>
// <ProtectedRoute exact path="/search" component={SearchContainer}/>
// <ProtectedRoute exact path="/search/albums" component={SearchContainer}/>
// <ProtectedRoute exact path="/search/artists" component={SearchContainer}/>
// <ProtectedRoute exact path="/search/songs" component={SearchContainer}/>
// <ProtectedRoute exact path="/search/playlists" component={SearchContainer}/>
// <ProtectedRoute exact path="/collection" component={CollectionContainer}/>
// <ProtectedRoute exact path="/collection/albums" component={CollectionContainer}/>
// <ProtectedRoute exact path="/collection/artists" component={CollectionContainer}/>
// <ProtectedRoute exact path="/collection/songs" component={CollectionContainer}/>
// <ProtectedRoute exact path="/collection/playlists" component={CollectionContainer}/>
