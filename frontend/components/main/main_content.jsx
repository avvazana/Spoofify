import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import NavBar from './navbar/navbar';
import Header from './header/header';
import Modal from './modals/modal';
import MusicPlayer from './playbar/music_player';
import SongsIndex from './header/songs_index';
import PlaylistIndexContainer from './header/playlist_index_container';
import AlbumIndexContainer from './header/album_index_container';
import ArtistIndexContainer from './header/artist_index_container';
import Search from './header/search/search';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.fetchPlaylists = props.fetchPlaylists.bind(this);
    this.fetchAlbums = props.fetchAlbums.bind(this);
    this.fetchArtists = props.fetchArtists.bind(this);
    this.logout = props.logout.bind(this);
  }

  componentDidMount() {
    this.fetchPlaylists();
    this.fetchAlbums();
    this.fetchArtists();
  }

  render() {
    const {playlists, navpath, show, path, artists, albums} = this.props;

    let index = "";

    if (!path || path.includes("playlists")) {
      index = (
        <div className="grid">
          <PlaylistIndexContainer playlists={playlists} navpath={navpath}/>
        </div>
      );

    } else if (path.includes("artists")) {
      index = (
        <div className="grid">
          <ArtistIndexContainer artists={artists} navpath={navpath}/>
        </div>
      );

    } else if (path.includes("albums")) {
      index = (
        <div className="grid">
          <AlbumIndexContainer albums={albums} navpath={navpath}/>
        </div>
      );

    } else if (path.includes("songs")) {
      index = (
        <SongsIndex className="main-songs-index"/>
      );
    }

    let redirect = "";
    if (this.props.path === '/browse' || this.props.path === '/browse/'){
      redirect = <Redirect to={`/${navpath}/playlists`} />;
    }

    let header = '';

    // if (this.props.navpath.includes("search")){
    //   header = ( <Search/> );
    // } else {
      header = ( <Header className="header" navpath={navpath}/> );
    // }

    return (
      <div className="main-container">
        <div className="main-body">
          <div className="main-padding">
          </div>
          <div>
            {header}
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






// <Redirect to={`/${navpath}/${this.state.headerpath}`} />
// <PlaylistIndex playlists={playlists}/>
