import React from 'react';
import {connect} from 'react-redux';
import GridIndex from './grid_index';
import { fetchPlaylists } from '../../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    path: "playlist",
    navpath: ownProps.navpath,
    playlists: ownProps.playlists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridIndex);
