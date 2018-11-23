import * as APIUtil from '../util/song_api_util';

export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const REMOVE_CURRENT_SONG = "REMOVE_CURRENT_SONG";
export const PAUSE_CURRENT_SONG = "PAUSE_CURRENT_SONG";
export const PUT_SONG_IN_STATE = "PUT_SONG_IN_STATE";
export const REMOVE_SONG_FROM_STATE = "REMOVE_SONG_FROM_STATE";
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';


const receiveSongs = (songs) => {
  return {
    type: RECEIVE_ALL_SONGS,
    songs
  };
};

export const fetchSongs = () => dispatch => {
  return (
    APIUtil.fetchSongs().then(
      res => dispatch(receiveSongs(res))
    ));
};

export const putSongInState = songId => {
  return {
    type: PUT_SONG_IN_STATE,
    songId
  };
};

export const removeSongFromState = () => {
  return {
    type: REMOVE_SONG_FROM_STATE
  };
};


export const receiveCurrentSong = (songId, playlistId) => {
  return {
    type: RECEIVE_CURRENT_SONG,
    songId: songId,
    playlistId: playlistId
  };
};

export const removeCurrentSong = () => {
  return {
    type: REMOVE_CURRENT_SONG
  };
};

export const pauseCurrentSong = () => {
  return {
    type: PAUSE_CURRENT_SONG
  };
};
