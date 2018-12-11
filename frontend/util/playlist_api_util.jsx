export const fetchPlaylists = (props) => {
  return $.ajax({
      method: 'GET',
      url: '/api/playlists',
      data: props
    });
};

export const fetchPlaylist = (id) => {
  return $.ajax({
      method: 'GET',
      url: `/api/playlists/${id}`
    });
};

// export const fetchPlaylistSongs = (id) => {
//   return $.ajax({
//       method: 'GET',
//       url: `/api/playlists/${id}`
//     });
// };

export const createPlaylist = (playlist) => {
  return $.ajax({
      method: 'POST',
      url: `/api/playlists`,
      data: { playlist }
    });
};

export const updatePlaylist = (playlist) => {
  return $.ajax({
      method: 'PATCH',
      url: `/api/playlists/${playlist.id}`,
      data: { playlist }
    });
};

export const deletePlaylist = (id) => {
  return $.ajax({
      method: 'DELETE',
      url: `/api/playlists/${id}`
    });
};

export const createSongOnPlaylist = songPlaylist => (
  $.ajax({
    method: 'POST',
    url: 'api/song_playlists',
    data: { song_playlist: songPlaylist }
  })
);
