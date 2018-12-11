import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../../actions/session_actions';
import { fetchPlaylists } from '../../../actions/playlist_actions';
import { selectAllPlaylists } from '../../../reducers/selectors';
import MainContent from '../main_content';

const mapStateToProps = state => ({
  navpath: "search",
  path: ownProps.location.pathname
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
