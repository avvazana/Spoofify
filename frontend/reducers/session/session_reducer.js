import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
} from '../../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const id = action.currentUser.id;
      return merge({}, state, { id });
    default:
      return state;
  }
};

export default sessionReducer;
