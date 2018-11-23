import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

export default (props) => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <img src={window.whiteLogoURL}></img>
        <h1>Spoofify</h1>
      </div>

      <div className="icon-holder">
        <span>
        <NavLink activeClassName="active-link" className="inactive-link" exact to ="/search/playlists">
            <img src={window.searchIcon}></img>
            <h2>Search</h2>
        </NavLink>
      </span>

        <br></br>

        <span>
        <NavLink activeClassName="active-link" className="inactive-link" exact to ="/browse/playlists">
            <img src={window.homeIcon}></img>
            <h2>Home</h2>
        </NavLink>
      </span>

        <br></br>

        <span>
        <NavLink activeClassName="active-link" className="inactive-link" exact to ="/collection/playlists">
            <img src={window.libraryIcon}></img>
            <h2>Your Library</h2>
        </NavLink>
      </span>
      </div>

      <div>
        <button className="logout" onClick={()=>props.logout()}>Logout</button>
      </div>
    </nav>
  );
};
