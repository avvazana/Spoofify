import React from 'react';

class MainContent extends React.Component {

  render() {
    return (
      <div className="main-container">
        <nav className="nav-bar">
          <button onClick={()=>this.props.logout()}>Logout</button>
        </nav>
      </div>
    );
  }
}

export default MainContent;
