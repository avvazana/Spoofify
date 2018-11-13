import {
  RECEIVE_SIGNIN_ERRORS
} from '../../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_SIGNIN_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default sessionErrorsReducer;
