import React from 'react';
import {connect} from 'react-redux';
import GridIndex from './grid_index';
import { fetchArtists } from '../../../actions/artist_actions';
import { selectRandomArtists } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    path: "artist",
    navpath: ownProps.navpath,
    artists: ownProps.artists || selectRandomArtists(state) || []
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
