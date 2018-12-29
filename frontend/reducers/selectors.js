import values from 'lodash/values';

export const selectAllAssociatedAlbums = state => {
  let associatedAlbums = [];
  let albums = state.entities.albums;

  Object.values(albums).forEach((album) => {
    if (state.session.currentUser.album_ids.includes(album.id)) {
      associatedAlbums.push(album);
    }
  });

  return associatedAlbums;
};

export const selectAllAssociatedArtists = state => {
  let associatedArtists = [];
  let artists = state.entities.artists;
  if (!state.session.currentUser.artist_ids){return null;}

  Object.values(artists).forEach((artist) => {
    if (state.session.currentUser.artist_ids.includes(artist.id)) {
      associatedArtists.push(artist);
    }
  });

  return associatedArtists;
};

export const selectAllSavedSongs = state => {
  let associatedSongs = [];
  let songs = state.entities.songs;
  if(!state.session.currentUser.song_ids){return null;}

  Object.values(songs).forEach((song) => {
    if (state.session.currentUser.song_ids.includes(song.id)) {
      associatedSongs.push(song);
    }
  });
  return associatedSongs;
};

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export const selectRandomAlbums = state => {
  let albums = Object.values(state.entities.albums);
  return albums;
  // let shuffledAlbums = shuffle(albums);
  // return shuffledAlbums.slice(0, 5);
};

export const selectRandomArtists = state => {
  let artists = Object.values(state.entities.artists);
  return artists;
  // let shuffledArtists = shuffle(artists);
  // return shuffledArtists.slice(0, 5);
};

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

export const selectArtistSongs = (state, artist) => {
  return artist ? artist.song_ids.map(id => state.entities.songs[id]) : [];
};

export const selectAlbumSongs = (state, album) => {

  return album ? album.song_ids.map(id => state.entities.songs[id]) : [];
};

export const selectAllSongs = state => Object.values(state.entities.songs);

export const getSongList = (state, currentSong) => {
  debugger
  if (!currentSong.id) {
    return [];
  }

  let currentListOfSongIds = "";

  if(state.ui.currentSong.playlist) {
    currentListOfSongIds = state.entities.playlists[parseInt(state.ui.currentSong.playlist)].song_ids;
  } else if (state.ui.currentSong.album) {
    currentListOfSongIds = Object.keys(state.entities.remoteSongs);
  } else if (state.ui.currentSong.artist) {
    currentListOfSongIds = state.entities.artists[parseInt(state.ui.currentSong.artist)].song_ids;
  }

  if (!currentListOfSongIds) {
    return [];
  }
  return currentListOfSongIds;
};
