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

    this.toggleMute = this.toggleMute.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.seekProgress = this.seekProgress.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.playButton = this.playButton.bind(this);
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

  toggleMute() {
    const volumeControl = document.getElementById("volume-control");
    if (this.audio.volume > 0) {
     this.setState( { lastVolume: this.audio.volume, volume: 0 });
     volumeControl.value = 0;
     this.audio.volume = 0;
   } else {
     this.setState( { volume: this.audio.volume * 100 });
     volumeControl.value = this.audio.volume * 100;
     this.audio.volume = this.state.lastVolume;
   }
 }

  setVolume(vol) {
    this.audio.volume = vol / 100;
    this.setState( { volume: vol });
  }

  seekProgress(location, difference, width) {
   const clickedNum = (location - difference) / width;
   this.audio.currentTime = this.audio.duration * clickedNum;
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
    debugger
    let songList = this.props.songList;
    songList = songList.map((el) => {
      return parseInt(el);
    });
    let nextIndex = songList.indexOf(currentSongId) + 1;

    if (songList.length === 0) {
      return;
    } else if (nextIndex >= songList.length) {
      this.audio.pause();
      this.props.removeCurrentSong();
    } else {
      this.props.receiveCurrentSong(songList[nextIndex]);
    }
  }

  playButton(currentSongId) {
    if (currentSongId) {
      this.props.receiveCurrentSong(currentSongId);
    } else {
      return;
    }
  }

  render() {
    const { songInfo, currentSong, loggedIn, putSongInState, openModal,
      pauseCurrentSong, receiveCurrentSong } = this.props;

    let currentlyPlaying = currentSong.id ? (
      <div className="playbar-container">
        <div className="playing-container">
          <img className="song-photo" src={ songInfo.photoUrl || songInfo.artworkUrl100 }></img>
          <div className="playing-song">{ songInfo.title || songInfo.trackName}</div>
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

    let playbar = (currentSong.id && this.audio) ? (
      <div className="progress-bar">
        <input id="time-passed" type="text"
          readOnly
          value={ this.returnTime(this.audio.currentTime) } />
        <progress id="progress-control" max="1"
          readOnly
          value={ this.state.progress || '' }
          onClick={ (e) => this.seekProgress(
            e.pageX,
            e.currentTarget.offsetLeft,
            e.currentTarget.offsetWidth)
          }>
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

            <audio id="testing"
              ref={ tag => this.audio = tag }
              autoPlay
              src={ songInfo.trackUrl || songInfo.previewUrl}
              onTimeUpdate={ this.updateProgress }
              volume={ this.state.volume }
              onEnded={ () => this.nextSong(currentSong.id) }>
            </audio>
          </div>
        </div>

        <div className="playbar-right">
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
           onInput={ (e) => this.setVolume(e.currentTarget.value) }
           onChange={ (e) => this.setVolume(e.currentTarget.value) }>
         </input>
        </div>

      </footer>
    );
  }
}

const msp = state => {

  return {
    currentSong: state.ui.currentSong,
    songInfo: state.entities.songs[state.ui.currentSong.id] || state.entities.remoteSongs[state.ui.currentSong.id] || {},
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
