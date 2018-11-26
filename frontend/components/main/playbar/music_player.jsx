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
    this.toggleMute = this.toggleMute.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.printTime = this.printTime.bind(this);
    this.seekProgress = this.seekProgress.bind(this);

  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.currentSong.playing) {
      setTimeout(() => this.audio.play(), 50);
    } else if (nextProps.currentSong.playing === false) {
      this.audio.pause();
    }
  }

  setVolume(val) {

    this.audio.volume = val / 100;
    this.setState( { volume: val });
  }

  toggleMute() {

    const volumeControl = document.getElementById("volume-control");

    if (this.audio.volume > 0) {
      this.setState( { lastVolume: this.audio.volume, volume: 0 });
      this.audio.volume = 0;
      volumeControl.value = 0;
    } else {
      this.audio.volume = this.state.lastVolume;
      volumeControl.value = this.audio.volume * 100;
      this.setState( { volume: this.audio.volume * 100 });
    }
  }

  printTime(time) {
    if (!this.audio.duration) {
      return "-:--";
    }
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    seconds >= 10 ? seconds = seconds : seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
  }

  updateProgress() {
    this.setState({ progress: this.audio.currentTime / this.audio.duration })
  }

  seekProgress(pos, offset, width) {

    const clickedVal = (pos - offset) / width;
    this.audio.currentTime = this.audio.duration * clickedVal;
  }

  nextSong(currentSongId) {

    const songList = this.props.songList;
    const nextIndex = songList.indexOf(currentSongId) + 1;

    if (songList.length === 0) {
      return;
    } else if (nextIndex >= songList.length) {
      this.audio.pause();
      this.props.removeCurrentSong();
    } else {
      this.props.receiveCurrentSong(songList[nextIndex]);
    }
  }

  prevSong(currentSongId) {

    if (this.audio.currentTime >= 3) { this.audio.currentTime = 0; return }
    const songList = this.props.songList;
    const prevIndex = songList.indexOf(currentSongId) - 1;

    if (prevIndex < 0) { return }

    this.props.receiveCurrentSong(songList[prevIndex]);
  }

  playButton(currentSongId) {

    if (currentSongId === undefined) {
      return;
    } else {
      this.props.receiveCurrentSong(currentSongId);
    }
  }

  render() {

    const { songInfo, currentSong, loggedIn, putSongInState, openModal,
      pauseCurrentSong, receiveCurrentSong } = this.props;

    if (!loggedIn) { return null };

    return (
      <footer className="playbar">

        <div className="playbar-left">
          {
            currentSong.id ? (
              <div className="now-playing-container">
                <div className="now-playing-info">
                  <img className="song-index-photo" src={ songInfo.photoUrl }></img>
                  <div className="now-playing-song">{ songInfo.title }</div>
                </div>

                <div className="now-playing-add-button-container">
                  <div className="now-playing-add-button"
                    onClick={ () => {
                      openModal('newPlaylistSong');
                      putSongInState(currentSong.id);
                    }}>
                    <i id="add-save" className="material-icons">add</i>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )
          }

        </div>

        <div className="playbar-center">
          <div className="playbar-controls">
            <div className="playbar-control-buttons">
              <div className="skip-song-container">
                <i id="prev-song" className="material-icons"
                  onClick={ () => this.prevSong(currentSong.id) }>skip_previous</i>
              </div>

              <div className="play-pause-container">
                {
                  currentSong.playing ?
                  <i id="pause-circle"
                    className="material-icons"
                    onClick={ () => pauseCurrentSong() }>pause_circle_filled</i>
                  :
                  <i id="play-circle"
                    className="material-icons"
                    onClick={ () => this.playButton(currentSong.id) }>play_circle_outline</i>
                }
              </div>

              <div className="skip-song-container">
                <i id="next-song" className="material-icons"
                  onClick={ () => this.nextSong(currentSong.id) }>skip_next</i>
              </div>
            </div>

            <div className="playbar-control-bar">
              {
                currentSong.id ? (
                  <div className="progress-bar">
                    <input id="elapsed-time" type="text"
                      readOnly
                      value={ this.printTime(this.audio.currentTime) } />
                    <progress id="progress-control" max="1"
                      readOnly
                      value={ this.state.progress || '' }
                      onClick={ (e) => this.seekProgress(
                        e.pageX,
                        e.currentTarget.offsetLeft,
                        e.currentTarget.offsetWidth)
                      }>
                    </progress>
                    <input id="remaining-time" type="text"
                      readOnly
                      value={ this.printTime(this.audio.duration - this.audio.currentTime) } />
                  </div>
                ) : (
                  <div></div>
                )
              }
            </div>

            <audio
              id="playbar-audio"
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
          <div className="extra-controls">

              { this.state.volume > 0 ? (
                <i id="volume" className="material-icons"
                  onClick={ () => this.toggleMute() }>volume_up</i>
              ) : (
                <i id="volume" className="material-icons"
                  onClick={ () => this.toggleMute() }>volume_off</i>
              )
              }

            <input id="volume-control" type="range"
              min="0" max="100" step="1"
              defaultValue="100"
              onChange={ (e) => this.setVolume(e.currentTarget.value) }>
            </input>
          </div>
        </div>

      </footer>
    );
  }
}

const msp = state => {

  return {
    loggedIn: Boolean(state.session.currentUser),
    songInfo: state.entities.songs[state.ui.currentSong.id] || {},
    currentSong: state.ui.currentSong,
    songList: getSongList(state, state.ui.currentSong) || {}
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

// <i id="queue" className="material-icons">playlist_play</i>
// <i id="device" className="material-icons">speaker</i>
