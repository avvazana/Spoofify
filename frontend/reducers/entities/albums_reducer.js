import { RECEIVE_ALL_ALBUMS, RECEIVE_SINGLE_ALBUM } from '../../actions/album_actions';
import merge from 'lodash/merge';

const albumsReducer = (state = {}, action) => {
  
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_ALBUMS:
      return merge({}, state, action.albums );
    case RECEIVE_SINGLE_ALBUM:
      return merge({}, state, {[action.album.id]: action.album} );
    default:
      return state;
  }
};

export default albumsReducer;
