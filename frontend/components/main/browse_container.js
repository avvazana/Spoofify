import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { selectAllUnauthoredPlaylists } from '../../reducers/selectors';
import MainContent from './main_content';

const mapStateToProps = (state, ownProps) => {

  return {
    playlists: selectAllUnauthoredPlaylists(state),
    navpath: "browse",
    path: ownProps.location.pathname
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchPlaylists: () => dispatch(fetchPlaylists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
