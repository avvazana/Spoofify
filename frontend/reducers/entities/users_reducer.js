import { RECEIVE_CURRENT_USER, RECEIVE_USER} from '../../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = {[action.user.id]: action.user}
      return Object.assign({}, state, currentUser);
    case RECEIVE_USER:
      const newUser = {[action.user.id]: action.user}
      return Object.assign({}, state, newUser)
    default:
      return state
  }
}

export default usersReducer;
