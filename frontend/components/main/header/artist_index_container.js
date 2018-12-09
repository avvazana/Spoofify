import React from 'react';
import {connect} from 'react-redux';
import GridIndex from './grid_index';

const mapStateToProps = (state, ownProps) => {
  
  return {
    path: "artist",
    navpath: ownProps.navpath,
    albums: ownProps.artists
  };
};

export default connect(
  mapStateToProps,
  null
)(GridIndex);
