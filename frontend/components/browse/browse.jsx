import React from 'react';

class Browse extends React.Component {

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

export default Browse;
