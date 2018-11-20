import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_SINGLE_PLAYLIST = 'RECEIVE_SINGLE_PLAYLIST';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';

const receivePlaylists = (playlists) => {
  return {
    type: RECEIVE_ALL_PLAYLISTS,
    playlists
  };
};

const receivePlaylist = ({playlist, songs}) => {
  return {
    type: RECEIVE_SINGLE_PLAYLIST,
    playlist,
    songs
  };
};

const removePlaylist = playlistId => {
  return {
    type: DELETE_PLAYLIST,
    playlistId
  };
};

export const fetchPlaylists = () => dispatch => {
  return (
    APIUtil.fetchPlaylists().then(
      res => dispatch(receivePlaylists(res))
    ));
};

export const fetchPlaylist = (id) => dispatch => {
  return (
    APIUtil.fetchPlaylist(id).then(res => {
      
        dispatch(receivePlaylist(res));
      }
    ));
};

export const createPlaylist = (title) => dispatch => {
  return (
    APIUtil.createPlaylist(title).then(
      res => dispatch(receivePlaylist(res))
    ));
};

export const updatePlaylist = (playlist) => dispatch => {
  return (
    APIUtil.updatePlaylist(playlist).then(
      res => dispatch(receivePlaylist(res))
    ));
};

export const deletePlaylist = (id) => dispatch => {
  return (
    APIUtil.deletePlaylist(id).then(
      () => dispatch(removePlaylist(id))
    ));
};
