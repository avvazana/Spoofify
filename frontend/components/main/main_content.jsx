import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import { NavLink, Redirect } from 'react-router-dom';

class MainContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playlists: []
    };
    this.fetchPlaylists = props.fetchPlaylists.bind(this);
  }

  componentDidMount() {
    this.fetchPlaylists();
  }

  render() {
    const {playlists} = this.props;

    return (
      <div className="main-container">
        <nav className="nav-bar">
          <div className="logo">
            <img src={window.whiteLogoURL}></img>
            <h1>Spoofify</h1>
          </div>

          <div className="icon-holder">
            <NavLink activeClassName="active-link" exact to ="/search/playlists">
              <span>
                <img src={window.searchIcon}></img>
                <h2>Search</h2>
              </span>
            </NavLink>

            <br></br>

            <NavLink activeClassName="active-link" exact to ="/browse/playlists">
              <span>
                <img src={window.homeIcon}></img>
                <h2>Home</h2>
              </span>
            </NavLink>

            <br></br>

            <NavLink activeClassName="active-link" exact to ="/collection/playlists">
              <span>
                <img src={window.libraryIcon}></img>
                <h2>Your Library</h2>
              </span>
            </NavLink>
          </div>

          <div>
            <button className="logout" onClick={()=>this.props.logout()}>Logout</button>
          </div>
        </nav>
        <Redirect to={`/${this.props.path}/playlists`} />
      </div>
    );
  }
}

export default MainContent;
