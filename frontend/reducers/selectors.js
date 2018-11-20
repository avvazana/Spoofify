import values from 'lodash/values';

export const selectAllPlaylists = state => Object.values(state.entities.playlists);

export const selectAllAuthoredPlaylists = state => {
  let authoredPlaylists = [];
  let playlists = state.entities.playlists;
  Object.values(playlists).forEach((playlist) => {
    
    if (playlist.author_id === state.session.currentUser.id){
      authoredPlaylists.push(playlist);
    }
  });
  return authoredPlaylists;
};

export const selectAllUnauthoredPlaylists = state => {
  let unauthoredPlaylists = [];
  let playlists = state.entities.playlists;
  Object.values(playlists).forEach((playlist) => {
    
    if (playlist.author_id != state.session.currentUser.id){
      unauthoredPlaylists.push(playlist);
    }
  });
  return unauthoredPlaylists;
};

export const selectPlaylistSongs = (state, playlist) => {

  return playlist ? playlist.song_ids.map(id => state.entities.songs[id]) : [];
};

export const selectAllSongs = state => Object.values(state.entities.songs);
