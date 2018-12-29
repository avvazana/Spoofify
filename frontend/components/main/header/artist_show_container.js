import React from 'react';
import { fetchArtist } from '../../../actions/artist_actions';
import { connect } from 'react-redux';
import GridShow from './grid_show';
import { logout } from '../../../actions/session_actions';
import { selectArtistSongs } from '../../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  debugger
  // const artist = Object.values(state.entities.remoteArtists)[ownProps.match.params.artistId] || ownProps.artists || [],
  const artist = state.entities.artists[ownProps.match.params.artistId] || { name: "", song_ids: [], photoUrl: "" };
  const songs = selectArtistSongs(state, artist);
  return {
    artist,
    artistId: ownProps.match.params.artistId,
    songs
  };
};

const mapDipatchToProps = (dispatch) => {
  return {
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(GridShow);
