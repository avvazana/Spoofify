import React from 'react';
import { fetchArtist } from '../../../actions/artist_actions';
import { connect } from 'react-redux';
import GridShow from './grid_show';
import { logout } from '../../../actions/session_actions';
import { selectArtistSongs } from '../../../reducers/selectors';
import { createFollow, deleteFollow } from '../../../actions/follow_actions';


const mapStateToProps = (state, ownProps) => {

  // const artist = Object.values(state.entities.remoteArtists)[ownProps.match.params.artistId] || ownProps.artists || [],
  const artist = state.entities.artists[ownProps.match.params.artistId] || { name: "", song_ids: [], photoUrl: "" };
  const songs = selectArtistSongs(state, artist);

  // const currentUser = state.entities.users[state.session.currentUserId];
  const currentUser = state.session.currentUser;
  return {
    artist,
    artistId: ownProps.match.params.artistId,
    songs,
    currentUser
  };
};

const mapDipatchToProps = (dispatch) => {
  return {
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    logout: () => dispatch(logout()),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (follow) => dispatch(deleteFollow(follow))
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(GridShow);
