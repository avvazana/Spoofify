import React from 'react';
import { Link } from 'react-router-dom';

 const PlaylistIndexItem = ({ playlist, navpath}) => (
  <li className="playlist-item" key={playlist.id}>
    <Link to={`/${navpath}/playlists/${playlist.id}`}>
      <div className="playlist-item-image">
        <img src={playlist.photoUrl}></img>
      </div>
      <div className="playlist-subtext">
        <p>{playlist.title}</p>
        <span>{playlist.author}</span>
      </div>
    </Link>
  </li>
);
 export default PlaylistIndexItem;
