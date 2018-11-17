import React from 'react';
import PlaylistIndexItem from './playlist_index_item';

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

        <ul> Image Goes Here:

          {playlists.map(playlist => <PlaylistIndexItem key={playlist.id} playlist={playlist} />)}
        </ul>
      </div>
    );
  }
}

export default MainContent;
