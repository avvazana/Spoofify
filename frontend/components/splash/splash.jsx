import React from 'react';
import { Link } from 'react-router-dom';

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
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  )
};

const Splash = (props) => {

  if (!props.currentUser) return sessionLinks();
  return personalGreeting(props.currentUser, props.logout);
};

export default Splash;
