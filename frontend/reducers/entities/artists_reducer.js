import { RECEIVE_ALL_ARTISTS, RECEIVE_SINGLE_ARTIST } from '../../actions/artist_actions';
import merge from 'lodash/merge';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_ARTISTS:
      return merge({}, state, action.artists );
    case RECEIVE_SINGLE_ARTIST:
      return merge({}, state, {[action.artist.id]: action.artist} );
    default:
      return state;
  }
};

export default artistsReducer;
