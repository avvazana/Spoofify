import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSongList } from '../../../reducers/selectors';
import { openModal } from '../../../actions/modal_actions';
import { putSongInState } from '../../../actions/song_actions';
import {
  receiveCurrentSong,
  pauseCurrentSong,
  removeCurrentSong
} from '../../../actions/song_actions';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { progress: 0,
                  lastVolume: 100,
                  volume: 100 };

    this.playButton = this.playButton.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.returnTime = this.returnTime.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentSong.playing) {
      this.audio.play();
    } else {
      if(this.audio){
        this.audio.pause();
      }
    }
  }

  setVolume(vol) {
    this.audio.volume = vol / 100;
    this.setState( { volume: vol });
  }

  updateProgress() {
    this.setState({ progress: this.audio.currentTime / this.audio.duration });
  }

  returnTime(time) {
    if (!this.audio.duration) {
      return "-:--";
    }
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    seconds = seconds >= 10 ? seconds : `0${seconds}`;
    return `${minutes}:${seconds}`;
  }

  prevSong(currentSongId) {
    if (this.audio.currentTime >= 1) {
      this.audio.currentTime = 0;
      return;
    }
    const songList = this.props.songList;
    const previousIndex = songList.indexOf(currentSongId) - 1;

    if (previousIndex < 0) {
      return;
    }

    this.props.receiveCurrentSong(songList[previousIndex]);
  }

  nextSong(currentSongId) {
    const songList = this.props.songList;
    let nextIndex = songList.indexOf(currentSongId) + 1;

    if (songList.length === 0) {
      return;
    } else if (nextIndex >= songList.length) {
      nextIndex = 0;
    }
    this.props.receiveCurrentSong(songList[nextIndex]);
  }


  playButton(currentSongId) {
    if (currentSongId) {
      this.props.receiveCurrentSong(currentSongId);
    } else {
      return;
    }
  }

  render() {
    debugger
    const { songInfo, currentSong, loggedIn, putSongInState, openModal,
      pauseCurrentSong, receiveCurrentSong } = this.props;

    let currentlyPlaying = currentSong.id ? (
      <div className="playbar-container">
        <div className="playing-container">
          <img className="song-photo" src={ songInfo.photoUrl }></img>
          <div className="playing-song">{ songInfo.title }</div>
        </div>
        <div className="add-to-playlist-container">
          <div className="add-to-playlist-button"
            onClick={ () => {
              putSongInState(currentSong.id);
              openModal('newPlaylistSong'); }}>
            <i id="add-to-playlist" className="material-icons">add</i>
          </div>
        </div>
      </div>
    ) : (
      <p></p>
    );

    let playOrPause = currentSong.playing ?
    (<i id="pause-circle" className="material-icons"
      onClick={ () => pauseCurrentSong() }>pause_circle_filled</i>)
    :
    (<i id="play-circle" className="material-icons"
      onClick={ () => this.playButton(currentSong.id) }>play_circle_outline</i>);

    let playbar = currentSong.id ? (
      <div className="progress-bar">
        <input id="time-passed" type="text"
          readOnly
          value={ this.returnTime(this.audio.currentTime) } />
        <progress id="progress-control" max="1"
          readOnly
          value={ this.state.progress || '' }>
        </progress>
        <input id="time-left" type="text"
          readOnly
          value={ this.returnTime(this.audio.duration - this.audio.currentTime) } />
      </div>
    ) : (
      <p></p>
    );

    return (
      <footer className="playbar">

        <div className="playbar-left">
          { currentlyPlaying }
        </div>

        <div className="playbar-middle">
          <div className="playbar-controls">

            <div className="playbar-control-buttons">

              <div className="skip">
                <i id="prev-song" className="material-icons"
                  onClick={ () => this.prevSong(currentSong.id) }>skip_previous</i>
              </div>
              <div className="play-pause-container">
                { playOrPause }
              </div>

              <div className="skip">
                <i id="next-song" className="material-icons"
                onClick={ () => this.nextSong(currentSong.id) }>skip_next</i>
              </div>
            </div>

            <div className="playbar-control-bar">
              { playbar }
            </div>

            <audio
              ref={ tag => this.audio = tag }
              autoPlay
              src={ songInfo.trackUrl }
              onTimeUpdate={ this.updateProgress }
              volume={ this.state.volume }
              onEnded={ () => this.nextSong(currentSong.id) }>
            </audio>
          </div>
        </div>

        <div className="playbar-right">
        </div>

      </footer>
    );
  }
}

const msp = state => {
  return {
    currentSong: state.ui.currentSong,
    songInfo: state.entities.songs[state.ui.currentSong.id] || {},
    songList: getSongList(state, state.ui.currentSong) || {},
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mdp = (dispatch) => {
  return {
    pauseCurrentSong: () => dispatch(pauseCurrentSong()),
    receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
    removeCurrentSong: () => dispatch(removeCurrentSong()),
    openModal: () => dispatch(openModal('newPlaylistSong')),
    putSongInState: currentSongId => dispatch(putSongInState(currentSongId))
  };
};

export default connect(msp, mdp)(MusicPlayer);
