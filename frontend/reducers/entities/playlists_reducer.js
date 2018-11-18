import { RECEIVE_ALL_PLAYLISTS, RECEIVE_SINGLE_PLAYLIST, DELETE_PLAYLIST } from '../../actions/playlist_actions';
import merge from 'lodash/merge';

const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_ALL_PLAYLISTS:
      return action.playlists;
    case RECEIVE_SINGLE_PLAYLIST:
      return merge({}, state, {[action.playlist.id]: action.playlist});
    case DELETE_PLAYLIST:
      newState = merge({}, state);
      delete newState[action.playlistId];
      return newState;
    default:
      return state;
  }
};

export default playlistsReducer;
