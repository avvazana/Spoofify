import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { selectAllAuthoredPlaylists } from '../../reducers/selectors';  //selectAllAssociatedAlbums, selectAllAssociatedArtists
import MainContent from './main_content';

const mapStateToProps = (state, ownProps) => ({
  playlists: selectAllAuthoredPlaylists(state),
  // albums: selectAllAssociatedAlbums,
  // artists: selectAllAssociatedArtists,
  navpath: "collection",
  path: ownProps.location.pathname
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchPlaylists: () => dispatch(fetchPlaylists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
