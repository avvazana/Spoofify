import * as APIUtil from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_SINGLE_SONG = 'RECEIVE_SINGLE_SONG';

const receiveSongs = (songs) => {
  return {
    type: RECEIVE_ALL_SONGS,
    songs
  };
};

const receiveSong = (song) => {
  return {
    type: RECEIVE_SINGLE_SONG,
    song
  };
};

export const fetchSongs = () => dispatch => {
  return (
    APIUtil.fetchSongs().then(
      res => dispatch(receiveSongs(res))
    ));
};

export const fetchSong = (id) => dispatch => {
  return (
    APIUtil.fetchSong(id).then(
      res => dispatch(receiveSong(res))
    ));
};
