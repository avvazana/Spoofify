import React from 'react';
// import ArtistIndex from '../util/artists/artist_container';
import AlbumIndexContainer from '../album_index_container';
import ArtistIndexContainer from '../artist_index_container';
import PlaylistIndexContainer from '../playlist_index_container';
import SongsIndex from '../songs_index';
// import TrackIndex from '../util/tracks/track_container';
// import PlaylistIndex from '../util/playlists/playlist_container';
import { withRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchResults extends React.Component {

  render () {
    const navpath = "browse";
    const section = this.props.match.params.section;
    // <div className="search-nav">
    //   <ul className="search-nav-list">
    //     <li className="search-list-item">
    //       <Link to={`/search/top`}
    //         className={"search-link" + ((section === 'top') ? ' active' : '')}>
    //         Top Results
    //       </Link>
    //     </li>
    //     <li className="search-list-item">
    //       <Link to={`/search/artists`}
    //         className={"search-link" + ((section === 'artists') ? ' active' : '')}>
    //         Artists
    //       </Link>
    //     </li>
    //     <li className="search-list-item">
    //       <Link to={`/search/tracks`}
    //         className={"search-link" + ((section === 'tracks') ? ' active' : '')}>
    //         Tracks
    //       </Link>
    //     </li>
    //     <li className="search-list-item">
    //       <Link to={`/search/albums`}
    //         className={"search-link" + ((section === 'albums') ? ' active' : '')}>
    //         Albums
    //       </Link>
    //     </li>
    //     <li className="search-list-item">
    //       <Link to={`/search/playlists`}
    //         className={"search-link" + ((section === 'playlists') ? ' active' : '')}>
    //         Playlists
    //       </Link>
    //     </li>
    //   </ul>
    // </div>
    debugger
    return (
      <div className="search-results">
        <div className="search-section">
            <h2>Top Results</h2>
            <h3>Albums</h3>
            <AlbumIndexContainer searchTerm={this.props.searchTerm} navpath={navpath} />
            <h3>Playlists</h3>
            <PlaylistIndexContainer searchTerm={this.props.searchTerm} navpath={navpath}/>
            <h3>Artists</h3>
            <ArtistIndexContainer searchTerm={this.props.searchTerm} navpath={navpath}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

export default withRouter(connect(mapStateToProps)(SearchResults));
//
// <h3>Songs</h3>
// <SongsIndex searchTerm={this.props.searchTerm} navpath={navpath} />
