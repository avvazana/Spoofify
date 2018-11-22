import { RECEIVE_SINGLE_PLAYLIST } from '../../actions/playlist_actions';
import merge from 'lodash/merge';

const songsReducer = (state = {}, action) => {

  Object.freeze(state);
  let songs;
  switch(action.type){
    case RECEIVE_SINGLE_PLAYLIST:
      songs = action.songs;
      return merge({}, state, songs);
    default:
      return state;
  }
};

export default songsReducer;
