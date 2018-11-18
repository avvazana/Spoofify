import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
// import PlaylistIndex from './playlist_index_item';
import { NavLink, Redirect } from 'react-router-dom';
import NavBar from './navbar';

class MainContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playlists: []
    };
    this.fetchPlaylists = props.fetchPlaylists.bind(this);
    this.logout = props.logout.bind(this);
  }

  componentDidMount() {
    this.fetchPlaylists();
  }

  render() {
    const {playlists} = this.props;

    return (
      <div className="main-container">
        <NavBar logout={this.logout}/>
         <ul> Image Goes Here:
           {playlists.map(playlist => <PlaylistIndexItem key={playlist.id} playlist={playlist} />)}
          </ul>
        <Redirect to={`/${this.props.navpath}/playlists`} />
      </div>
    );
  }
}

export default MainContent;

// <PlaylistIndex playlists={playlists}/>
