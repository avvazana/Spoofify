import React from 'react';
import { fetchSavedSongs } from '../../../actions/song_actions';
import { fetchPlaylist } from '../../../actions/playlist_actions';
import { connect } from 'react-redux';
import { logout, fetchCurrentUser } from '../../../actions/session_actions';
import { selectPlaylistSongs, selectAllSavedSongs, selectAllPlaylists } from '../../../reducers/selectors';
import SongsIndexItem from './songs_index_item';

const mapStateToProps = (state) => {
  const playlist = state.entities.playlists[500];
  const songs = selectPlaylistSongs(state, playlist);
  const playlistId = 500;
  return {
    songs,
    playlist,
    playlistId
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    fetchCurrentUser: (user) => dispatch(fetchCurrentUser(user)),
    fetchSavedSongs: () => dispatch(fetchSavedSongs()),
    logout: () => dispatch(logout())
  };
};

class SongsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId);
    // this.props.fetchCurrentUser(window.currentUser);
  }

  render(){
    const {songs, playlist } = this.props;
    if (!playlist){return (<div className="no-results"></div>);}
    if (!songs[songs.length-1]){return (<div className="no-results"></div>);}

    let tracks = songs.map( (song) => {
      return (
        <SongsIndexItem key={song.id} song={song} playlist={playlist}/>
      );
    });

    return(
      <div className="tracks-index">
        {tracks}
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsIndex);
