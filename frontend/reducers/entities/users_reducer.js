import { RECEIVE_CURRENT_USER, RECEIVE_USER} from '../../actions/session_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../../actions/follow_actions';
import { merge } from 'lodash';


const usersReducer = ( state = {}, action ) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, { currentUser });
    default:
      return state;
  }
};

export default usersReducer;
