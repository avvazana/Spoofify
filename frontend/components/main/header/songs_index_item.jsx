import React from 'react';
import { PulseLoader } from 'react-spinners';
import { NavLink, withRouter } from 'react-router-dom';
import { openModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import { receiveCurrentSong, pauseCurrentSong, putSongInState } from '../../../actions/song_actions';

const mapStateToProps = state => {
  return {
    currentSong: state.ui.currentSong || {}
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openModal: (modal, songId) => dispatch(openModal(modal, songId)),
    pauseCurrentSong: () => dispatch(pauseCurrentSong()),
    receiveCurrentSong: (songId, playlistId) => dispatch(receiveCurrentSong(songId, playlistId)),
    putSongInState: (songId) => dispatch(putSongInState(songId))
  };
};

class SongsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount() {

    if ((this.props.currentSong.playing) && (this.props.song.id === this.props.currentSong.id)) {
        this.setState({ playing: true });
    }
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.song.id !== nextProps.currentSong.id) {
      this.setState({ playing: false });
    }
    else if (nextProps.currentSong.playing) {
      this.setState({ playing: true });
    }
    else {
      this.setState({ playing: false });
    }
  }

  togglePlay(songId, playlistId) {

    if (this.state.playing) {
      this.props.pauseCurrentSong();
      this.setState({ playing: false });
    } else {
      this.props.receiveCurrentSong(songId, playlistId);
      this.setState({ playing: true });
    }
  }

  render () {
    const { putSongInState, openModal, song, playlist } = this.props;
    
    let indexButton = this.state.playing ? (
        <div className="index-button-container">
          <p id="index-pause" className="material-icons" onClick={() => {
              this.togglePlay(song.id, playlist.id);
            }}>pause_circle_outline
          </p>
        </div>
      ) : (
        <div className="index-button-container">
          <p className="material-icons" onClick={() => {
              this.togglePlay(song.id, playlist.id);
            }}>play_arrow
          </p>
        </div>
      );

    return (
    <div className="song-index-item">
      <div className={`song-index${song.id}`} onDoubleClick={ () => { this.togglePlay(song.id, playlist.id); } }>
          { indexButton }
          <div className="song-index-title">{song.title}</div>
          <div className="song-index-album">{song.album}</div>
        <button onClick={() => this.props.openModal('newPlaylistSong', `${song.id}`)}>
          <img className="tripledot" src={window.tripledot}></img>
        </button>
      </div>
    </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongsIndexItem);
