import React from 'react';
import {connect} from 'react-redux';
import GridIndex from './grid_index';
import { fetchArtists } from '../../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    path: "artist",
    navpath: ownProps.navpath,
    albums: ownProps.artists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtists: () => dispatch(fetchArtists()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridIndex);
