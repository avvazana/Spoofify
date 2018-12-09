export const fetchSavedSongs = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/songs'
    });
};
