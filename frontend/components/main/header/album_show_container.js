import React from 'react';
import { connect } from 'react-redux';
import GridShow from './grid_show';
import { selectAlbumSongs } from '../../../reducers/selectors';
import { fetchAlbum } from '../../../actions/album_actions';
import { logout } from '../../../actions/session_actions';
import { requestSingleAlbum } from '../../../actions/search_actions';


const mapStateToProps = (state, ownProps) => {
  const album = state.entities.albums[ownProps.match.params.albumId] || Object.values(state.entities.remoteAlbums)[0] || { title: "", song_ids: [], photoUrl: "" };
  const songs = Object.values(state.entities.remoteSongs) || selectAlbumSongs(state, album);
  
  return {
    album,
    albumId: ownProps.match.params.albumId,
    songs
  };
};

const mapDipatchToProps = (dispatch) => {
  return {
    requestSingleAlbum: (id) => dispatch(requestSingleAlbum(id)),
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(GridShow);
