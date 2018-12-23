import { RECEIVE_ALBUM } from '../../actions/search_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {


  switch (action.type) {
    case RECEIVE_ALBUM:
      const newState = merge({}, state);
      action.songs.map((song) => newState[song.trackId] = song );
      return newState;
    default:
      return state;
  }
};
