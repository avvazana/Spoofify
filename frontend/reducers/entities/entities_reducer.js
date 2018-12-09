import { combineReducers } from 'redux';

import playlistsReducer from './playlists_reducer';
import songsReducer from './songs_reducer';
import artistsReducer from './artists_reducer';
import albumsReducer from './albums_reducer';
import usersReducer from './users_reducer';

export default combineReducers({
  playlists: playlistsReducer,
  songs: songsReducer,
  artists: artistsReducer,
  albums: albumsReducer
});
