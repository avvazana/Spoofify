import React from 'react';
import {connect} from 'react-redux';
import GridIndex from './grid_index';

const mapStateToProps = (state, ownProps) => {
  return {
    path: "playlist",
    navpath: ownProps.navpath,
    playlists: ownProps.playlists
  };
};

export default connect(
  mapStateToProps,
  null
)(GridIndex);
