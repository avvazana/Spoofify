import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../../actions/session_actions';
import { fetchPlaylists } from '../../../actions/playlist_actions';
import { fetchSavedSongs } from '../../../actions/song_actions';
import { selectAllAuthoredPlaylists, selectAllAssociatedAlbums, selectAllAssociatedArtists, selectAllSavedSongs} from '../../../reducers/selectors';
import MainContent from '../main_content';

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
    fetchSavedSongs: () => dispatch(fetchSavedSongs())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
