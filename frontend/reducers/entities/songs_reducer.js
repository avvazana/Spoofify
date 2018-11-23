import { RECEIVE_SINGLE_PLAYLIST } from '../../actions/playlist_actions';
import { RECEIVE_SINGLE_ALBUM } from '../../actions/album_actions';
import { RECEIVE_SINGLE_ARTIST } from '../../actions/artist_actions';
import { RECEIVE_ALL_SONGS } from '../../actions/song_actions';
import merge from 'lodash/merge';

const songsReducer = (state = {}, action) => {

  Object.freeze(state);
  let songs;
  switch(action.type){
    case RECEIVE_SINGLE_PLAYLIST:
    case RECEIVE_SINGLE_ALBUM:
    case RECEIVE_SINGLE_ARTIST:
      songs = action.songs;
      return merge({}, state, songs);
    case RECEIVE_ALL_SONGS:
      return merge({}, state, action.songs );
    default:
      return state;
  }
};

export default songsReducer;
