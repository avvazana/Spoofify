import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './splash/splash_container';
import BrowseContainer from './main/navbar/browse_container';
import SearchContainer from './main/navbar/search_container';
import CollectionContainer from './main/navbar/collection_container';
import PlaylistShowContainer from './main/header/playlist_show_container';
import AlbumShowContainer from './main/header/album_show_container';
import ArtistShowContainer from './main/header/artist_show_container';
import MusicPlayer from './main/playbar/music_player';
import NavBarContainer from './main/navbar/navbar_container';
import { logout } from '../actions/session_actions';
import { connect } from 'react-redux';

const App = () => {
    return (
  <div>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/browse" component={BrowseContainer}/>
    <ProtectedRoute exact path="/browse/playlists" component={BrowseContainer}/>
    <ProtectedRoute exact path="/browse/playlists/:playlistId" component={PlaylistShowContainer}/>
    <ProtectedRoute exact path="/browse/songs" component={BrowseContainer}/>
    <ProtectedRoute exact path="/browse/albums" component={BrowseContainer}/>
    <ProtectedRoute exact path="/browse/artists" component={BrowseContainer}/>
    <ProtectedRoute exact path="/browse/albums/:albumId" component={AlbumShowContainer}/>
    <ProtectedRoute exact path="/browse/artists/:artistId" component={ArtistShowContainer}/>
    <ProtectedRoute exact path="/search" component={SearchContainer}/>
    <ProtectedRoute exact path="/search/playlists" component={SearchContainer}/>
    <ProtectedRoute exact path="/collection" component={CollectionContainer}/>
    <ProtectedRoute exact path="/collection/playlists" component={CollectionContainer}/>
    <ProtectedRoute exact path="/collection/albums" component={CollectionContainer}/>
    <ProtectedRoute exact path="/collection/artists" component={CollectionContainer}/>
    <ProtectedRoute exact path="/collection/songs" component={CollectionContainer}/>
    <ProtectedRoute exact path="/collection/playlists/:playlistId" component={PlaylistShowContainer}/>
    <ProtectedRoute exact path="/collection/albums/:albumId" component={AlbumShowContainer}/>
    <ProtectedRoute exact path="/collection/artists/:artistId" component={ArtistShowContainer}/>
    <Route exact path="/" component={SplashContainer}/>
    <ProtectedRoute path="/" component={NavBarContainer}/>
    <ProtectedRoute path="/" component={MusicPlayer}/>
  </div>
  );
  };

export default App;

// <ProtectedRoute exact path="/browse/artists" component={BrowseContainer}/>
// <ProtectedRoute exact path="/search/albums" component={SearchContainer}/>
// <ProtectedRoute exact path="/search/artists" component={SearchContainer}/>
// <ProtectedRoute exact path="/search/songs" component={SearchContainer}/>
// <ProtectedRoute exact path="/collection/albums" component={CollectionContainer}/>
// <ProtectedRoute exact path="/collection/artists" component={CollectionContainer}/>
