import React from 'react';
import { fetchSongs } from '../../actions/song_actions';
import { connect } from 'react-redux';
import { logout, fetchCurrentUser } from '../../actions/session_actions';
import { selectAllSavedSongs, selectAllPlaylists } from '../../reducers/selectors';
import SongsIndexItem from './songs/songs_index_item';

const mapStateToProps = (state) => {

  const songs = selectAllSavedSongs(state);
  return {
    songs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentUser: (user) => dispatch(fetchCurrentUser(user)),
    fetchSongs: () => dispatch(fetchSongs()),
    logout: () => dispatch(logout())
  };
};


class SongsIndex extends React.Component {
  constructor(props){
      super(props);
  }

  componentDidMount() {
    this.props.fetchCurrentUser(window.currentUser);
    this.props.fetchSongs();
  }

  render(){
    const {songs} = this.props;

    if (!songs){return (<div className="no-results"> Nothing to see here...</div>);}

    let tracks = songs.map( (song) => {
      return (
        <SongsIndexItem key={song.id} song={song}/>
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
