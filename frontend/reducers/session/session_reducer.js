import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
} from '../../actions/session_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../../actions/follow_actions';


const _nullUser = {
  currentUser: null
};

const sessionReducer = (state = _nullUser, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge({}, state, { currentUser });
    case RECEIVE_FOLLOW:
      const followedState = merge({}, state);
      if (action.follow.followable_type === 'Artist') {
        followedState["currentUser"].followed_artist_ids.push(action.follow.followable_id);
      } else if (action.follow.followable_type === 'Playlist') {
        followedState["currentUser"].followed_playlist_ids.push(action.follow.followable_id);
      }
      return followedState;
    case REMOVE_FOLLOW:
      const removedFollowState = merge({}, state);
      currentUser = action.currentUser;
      if (action.follow.followable_type === 'Artist') {
        const artistIdx = state["currentUser"].followed_artist_ids.indexOf(action.follow.followable_id);
        removedFollowState["currentUser"].followed_artist_ids.splice(artistIdx,1);
      } else if (action.follow.followable_type === 'Playlist') {
        const playlistIdx = state["currentUser"].followed_playlist_ids.indexOf(action.follow.followable_id);
        removedFollowState["currentUser"].followed_playlist_ids.splice(playlistIdx,1);
      }
        return removedFollowState;
    default:
      return state;
  }
};

export default sessionReducer;
