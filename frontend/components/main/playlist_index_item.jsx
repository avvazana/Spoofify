import React from 'react';

const PlaylistIndexItem = ({ playlist }) => (
  <li className="playlist-index-item">
      <audio controls>
        <source src={playlist.trackUrl} type="audio/mpeg"></source>
      </audio>
  </li>
);

export default PlaylistIndexItem;
