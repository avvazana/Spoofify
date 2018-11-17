import React from 'react';

class MainContent extends React.Component {

  render() {
    return (
      <div className="main-container">
        <nav className="nav-bar">
          <div className="logo">
            <img src={window.whiteLogoURL}></img>
            <h1>Spoofify</h1>
          </div>
          <div className="icon-holder">
            <span>
              <img src={window.searchIcon}></img>
              <h2>Search</h2>
            </span>
            <br></br>
            <span>
              <img src={window.homeIcon}></img>
              <h2>Home</h2>
            </span>
            <br></br>
            <span>
              <img src={window.libraryIcon}></img>
              <h2>Your Library</h2>
            </span>
          </div>
          <div>
            <button className="logout" onClick={()=>this.props.logout()}>Logout</button>
          </div>
        </nav>
      </div>
    );
  }
}

export default MainContent;
