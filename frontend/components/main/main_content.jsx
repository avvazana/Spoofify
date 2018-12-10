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

    // const index = (
    //   <div className="grid">
    //     <ul>
    //       {albums.map(album => <AlbumIndexItem album={album} navpath={navpath}/>)}
    //     </ul>
    //   </div>
    // );
    //
    // const index = (
    //   <div className="grid">
    //     <ul>
    //       {artists.map(artist => <ArtistIndexItem artist={artist} navpath={navpath}/>)}
    //     </ul>
    //   </div>
    // );

    let redirect = "";
    if (this.props.path === '/browse' || this.props.path === '/browse/'){
      redirect = <Redirect to={`/${navpath}/playlists`} />;
    }
    //
    // <div>
    //   <NavBar className="nav" logout={this.logout}/>
    // </div>
    return (
      <div className="main-container">
        <div className="main-body">
          <div className="main-padding">
          </div>
          <div>
            <Header className="header" navpath={navpath}/>
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
