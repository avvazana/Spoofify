import React from 'react';
import {connect} from 'react-redux';
import GridIndex from './grid_index';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    path: "album",
    navpath: ownProps.navpath,
    albums: ownProps.albums
  };
};

export default connect(
  mapStateToProps,
  null
)(GridIndex);
