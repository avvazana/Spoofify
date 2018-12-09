import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../../actions/session_actions';
import { fetchPlaylists } from '../../../actions/playlist_actions';
import { fetchAlbums } from '../../../actions/album_actions';
import { fetchSavedSongs } from '../../../actions/song_actions';
import { selectAllAuthoredPlaylists, selectAllAssociatedAlbums, selectAllAssociatedArtists, selectAllSavedSongs, selectRandomAlbums} from '../../../reducers/selectors';
import MainContent from '../main_content';
// artists: selectAllAssociatedArtists(state),

const mapStateToProps = (state, ownProps) => ({
  playlists: selectAllAuthoredPlaylists(state),
  albums: selectRandomAlbums(state),
  navpath: "collection",
  path: ownProps.location.pathname
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchSavedSongs: () => dispatch(fetchSavedSongs())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
