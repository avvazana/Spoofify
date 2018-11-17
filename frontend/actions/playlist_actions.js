import * as APIUtil from '../util/playlist_api_util'

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';

const receivePlaylists = (playlists) => {
  return {
    type: RECEIVE_ALL_PLAYLISTS,
    playlists
  };
};

export const fetchPlaylists = () => dispatch => {
  return (
    APIUtil.fetchPlaylists().then(
      res => dispatch(receivePlaylists(res))
    ));
};
