import React from 'react';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { connect } from 'react-redux';
import ShowBoxContent from './show_box_content';
import { logout } from '../../actions/session_actions';
import { selectPlaylistSongs } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  const playlist = state.entities.playlists[ownProps.match.params.playlistId] || { title: "", song_ids: [], photoUrl: "" };
  const songs = selectPlaylistSongs(state, playlist);
  return {
    playlist,
    playlistId: ownProps.match.params.playlistId,
    songs
  };
};

const mapDipatchToProps = (dispatch) => {
  return {
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(ShowBoxContent);
