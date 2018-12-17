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
