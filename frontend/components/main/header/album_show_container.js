import React from 'react';
import { fetchAlbum } from '../../../actions/album_actions';
import { connect } from 'react-redux';
import GridShow from './grid_show';
import { logout } from '../../../actions/session_actions';
import { selectAlbumSongs } from '../../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  const album = state.entities.albums[ownProps.match.params.albumId] || { title: "", song_ids: [], photoUrl: "" };
  const songs = selectAlbumSongs(state, album);
  return {
    album,
    albumId: ownProps.match.params.albumId,
    songs
  };
};

const mapDipatchToProps = (dispatch) => {
  return {
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(GridShow);
