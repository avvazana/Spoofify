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
          <button onClick={()=>this.props.logout()}>Logout</button>
        </nav>
      </div>
    );
  }
}

export default MainContent;
