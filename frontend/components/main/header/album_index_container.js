import React from 'react';
import {connect} from 'react-redux';
import GridIndex from './grid_index';
import { fetchAlbums } from '../../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    path: "album",
    navpath: ownProps.navpath,
    albums: ownProps.albums
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridIndex);
