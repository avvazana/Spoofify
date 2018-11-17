import { combineReducers } from 'redux';

import playlistsReducer from './playlists_reducer';

export default combineReducers({
  playlists: playlistsReducer
});
