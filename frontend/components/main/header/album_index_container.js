import React from 'react';
import {connect} from 'react-redux';
import GridIndex from './grid_index';
import { fetchAlbums } from '../../../actions/album_actions';
import { selectRandomAlbums } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    path: "album",
    navpath: ownProps.navpath,
    albums: ownProps.albums || selectRandomAlbums(state) || [],
    searchTerm: ownProps.searchTerm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbums: (props) => dispatch(fetchAlbums(props)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridIndex);
