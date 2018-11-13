import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../../actions/session_actions';

const empty = { currentUserId: null }

const sessionReducer = (state = empty, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUserId: action.user.id};
    case LOGOUT_CURRENT_USER:
      return empty;
    default:
      return state;
  }
};

export default sessionReducer;
