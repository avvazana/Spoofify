import React from 'react';
 const PlaylistIndexItem = ({ playlist }) => (
  <li className="playlist-index-item">
      <img src={playlist.photoUrl}></img>
  </li>
);
 export default PlaylistIndexItem;


// <audio controls>
//   <source src={playlist.trackUrl} type="audio/mpeg"></source>
// </audio>
