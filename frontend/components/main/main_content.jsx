import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
// import PlaylistIndex from './playlist_index_item';
import { NavLink, Redirect } from 'react-router-dom';
import NavBar from './navbar';
import Header from './header';
import Modal from './modal';

class MainContent extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   headerpath: props.headerpath
    // };
    this.fetchPlaylists = props.fetchPlaylists.bind(this);
    this.logout = props.logout.bind(this);
  }

  componentDidMount() {
    this.fetchPlaylists();
  }

  render() {
    const {playlists, navpath, show} = this.props;

    const index = (
      <div className="grid">
        <ul>
          {playlists.map(playlist => <PlaylistIndexItem playlist={playlist} navpath={navpath}/>)}
        </ul>
      </div>
    );

    let redirect = "";
    if (this.props.path === '/browse' || this.props.path === '/browse/'){
      redirect = <Redirect to={`/${navpath}/playlists`} />;
    }

    return (
      <div className="main-container">
        <div>
          <NavBar className="nav" logout={this.logout}/>
        </div>
        <div className="main-body">
          <div>
            <Header className="header"/>
          </div>
          <Modal />
          {index}
        </div>

        {redirect}
      </div>
    );
  }
}

export default MainContent;

// <div className="list">
//   <ul>
//     {songs.map(song => <SongIndexItem key={song.id} song={song} navpath={navpath} />)}
//   </ul>
// </div>
// <div className="list">
//   <ul>
//     {artists.map(song => <SongIndexItem key={song.id} song={song} navpath={navpath} />)}
//   </ul>
// </div>

// <Redirect to={`/${navpath}/${this.state.headerpath}`} />
// <PlaylistIndex playlists={playlists}/>
