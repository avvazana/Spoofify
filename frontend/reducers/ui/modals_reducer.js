import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/modal_actions';
import merge from 'lodash/merge';

const modalsReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.payload;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};

export default modalsReducer;
