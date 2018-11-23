import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';
import { selectAllAuthoredPlaylists, selectAllAssociatedAlbums, selectAllAssociatedArtists, selectAllSavedSongs} from '../../reducers/selectors';
import MainContent from './main_content';

const mapStateToProps = (state, ownProps) => ({
  playlists: selectAllAuthoredPlaylists(state),
  albums: selectAllAssociatedAlbums(state),
  artists: selectAllAssociatedArtists(state),
  songs: selectAllSavedSongs(state),
  navpath: "collection",
  path: ownProps.location.pathname
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchSongs: () => dispatch(fetchSongs())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
