import { merge } from 'lodash';
import { RECEIVE_CURRENT_SONG, PAUSE_CURRENT_SONG, REMOVE_CURRENT_SONG} from '../../actions/song_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      return merge({}, state,
        { id: action.songId, playlist: action.playlistId, playing: true });
    case PAUSE_CURRENT_SONG:
      return merge({}, state, { playing: false });
    case RECEIVE_CURRENT_SONG:
      return {};
    default:
      return state;
  }
};
