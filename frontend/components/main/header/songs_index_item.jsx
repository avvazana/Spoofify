import React from 'react';
import { PulseLoader } from 'react-spinners';
import { NavLink, withRouter } from 'react-router-dom';
import { openModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import { receiveCurrentSong, pauseCurrentSong, putSongInState } from '../../../actions/song_actions';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const mapStateToProps = state => {
  return {
    currentSong: state.ui.currentSong || {}
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openModal: (modal, songId) => dispatch(openModal(modal, songId)),
    pauseCurrentSong: () => dispatch(pauseCurrentSong()),
    receiveCurrentSong: (songId, elementId, elementType) => dispatch(receiveCurrentSong(songId, elementId, elementType)),
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
    if ((this.props.currentSong.playing) && (this.props.song.id  === this.props.currentSong.id || this.props.song.trackId === this.props.currentSong.id)) {
        this.setState({ playing: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props.song.id !== nextProps.currentSong.id) || (this.props.song.trackId !== nextProps.currentSong.id)) {
      this.setState({ playing: false });
    }
    else if (nextProps.currentSong.playing) {
      this.setState({ playing: true });
    }
    else {
      this.setState({ playing: false });
    }
  }

  togglePlay(songId, elementId, elementType) {

    if (this.state.playing) {
      this.props.pauseCurrentSong();
      this.setState({ playing: false });
    } else {
      debugger
      this.props.receiveCurrentSong(songId, elementId, elementType);
      this.setState({ playing: true });
    }
  }

  render () {

    const { putSongInState, openModal, song, playlist, album, artist } = this.props;
    let element = playlist || album || artist;
    let elementType = "playlist";

    if (element === album) {
      elementType = "album";
    }

    if (element === artist) {
      elementType = "artist";
    }

    let indexButton = this.state.playing ? (
        <div className="index-button-container">
          <p id="index-pause" className="material-icons" onClick={() => {
              this.togglePlay(song.id || song.trackId, element.id || element.collectionId, elementType);
            }}>pause_circle_outline
          </p>
        </div>
      ) : (
        <div className="index-button-container">
          <span className="material-icons">audiotrack</span>
          <p className="material-icons" onClick={() => {
              this.togglePlay(song.id || song.trackId, element.id || element.collectionId, elementType);
            }}>play_arrow
          </p>
        </div>
      );

    return (
    <div className="song-index-item">
      <div className={`song-index${song.id || song.trackId}`} onDoubleClick={ () => { this.togglePlay(song.id || song.trackId, element.id || element.collectionId, elementType); } }>
          { indexButton }
          <div className="song-index-title">{song.title || song.trackName}</div>
          <div className="song-index-album">{song.album || song.collectionName}</div>
        <button onClick={() => this.props.openModal('newPlaylistSong', `${song.id || song.trackId}`)}>
          <img className="tripledot" src={window.tripledot}></img>
        </button>
      </div>
    </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongsIndexItem);
