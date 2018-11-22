import { combineReducers } from 'redux';

import modalsReducer from './modals_reducer';
import currentSongReducer from './current_song_reducer';
import addSongReducer from './add_song_reducer';

export default combineReducers({
  modal: modalsReducer,
  addSong: addSongReducer,
  currentSong: currentSongReducer
});
