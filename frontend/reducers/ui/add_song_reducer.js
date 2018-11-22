// import { PUT_TRACK_IN_STATE, REMOVE_TRACK_FROM_STATE } from '../actions/playlist_actions';
import { PUT_SONG_IN_STATE, REMOVE_SONG_FROM_STATE } from '../../actions/song_actions';

export default (state = null, action) => {
  switch (action.type) {
    case PUT_SONG_IN_STATE:
      return action.songId;
    case REMOVE_SONG_FROM_STATE:
      return null;
    default:
      return state;
  }
};
