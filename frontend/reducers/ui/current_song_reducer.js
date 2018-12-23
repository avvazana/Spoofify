import { merge } from 'lodash';
import { RECEIVE_CURRENT_SONG, PAUSE_CURRENT_SONG, REMOVE_CURRENT_SONG} from '../../actions/song_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  debugger
  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      let newState = merge({}, state, { id: action.songId, [action.elementType]: action.elementId, playing: true });
      if (action.elementType === "album"){
        delete newState.playlist;
      } else if (action.elementType === "playlist") {
        delete newState.album;
      }
      return newState;
    case PAUSE_CURRENT_SONG:
      return merge({}, state, { playing: false });
    case REMOVE_CURRENT_SONG:
      return {};
    default:
      return state;
  }
};
