import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../../actions/search_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
      return merge({}, state, action.albums );
    case RECEIVE_ALBUM:
      const otherNewState = merge({}, state);
      otherNewState[action.album.collectionName] = action.album;
      return otherNewState;
    default:
      return state;
  }
};
