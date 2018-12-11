import React from 'react';
// import ArtistIndex from '../util/artists/artist_container';
import AlbumIndexContainer from '../album_index_container';
// import TrackIndex from '../util/tracks/track_container';
// import PlaylistIndex from '../util/playlists/playlist_container';
import { withRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchResults extends React.Component {
  render () {
    const section = this.props.match.params.section;
    return (
      <div className="search-results">
        <div className="search-section">
            <h2>Top Results</h2>
            <AlbumIndexContainer searchTerm={this.props.searchTerm} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

export default withRouter(connect(mapStateToProps)(SearchResults));
