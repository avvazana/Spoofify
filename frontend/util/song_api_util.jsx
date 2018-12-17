export const fetchSavedSongs = (props) => {
  
  return $.ajax({
      method: 'GET',
      url: '/api/songs',
      data: props
    });
};

// export const fetchSongs = () => {
//   return $.ajax({
//     method: 'GET',
//     url: '/api/songs'
//   });
// };
