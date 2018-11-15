import React from 'react';
import { Link } from 'react-router-dom';
import Browse from '../browse/browse';
import { withRouter, Route, Redirect } from 'react-router-dom';


const sessionLinks = () => (
  <div className="splash-page">

    <nav className="splash-nav">
      <div className="logo">
            <img src={window.whiteLogoURL}></img>
            <h1>Spoofify</h1>
      </div>
      <div className="login-signup">
        <Link className='splash-session-link' to="/signup">Sign up</Link>
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        <Link className='splash-session-link' to="/login">Log in</Link>
      </div>
    </nav>

    <div className="splash-body">
      <h1>Music for everyone.</h1>
    </div>

    <footer>
      <div className="footer-div">

      </div>
    </footer>
  </div>
);

const personalGreeting = (currentUser, logout) => {

  return (
      <Redirect to="/browse" />
  )
};

const Splash = (props) => {

  if (!props.currentUser) return sessionLinks();
  return personalGreeting(props.currentUser, props.logout);
};

export default Splash;
