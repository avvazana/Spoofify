import { RECEIVE_ALL_SONGS } from '../../actions/song_actions';
import { RECEIVE_SINGLE_PLAYLIST } from '../../actions/playlist_actions';
import merge from 'lodash/merge';

const songsReducer = (state = {}, action) => {

  Object.freeze(state);
  let songs;
  switch(action.type){
    case RECEIVE_ALL_SONGS:
      return merge({}, state, action.songs );
    case RECEIVE_SINGLE_PLAYLIST:
      songs = action.songs;
      return merge({}, state, songs);
    default:
      return state;
  }
};

export default songsReducer;
