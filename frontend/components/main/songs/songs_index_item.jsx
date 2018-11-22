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

    if ((this.props.currentSong.playing) &&
        (this.props.song.id === this.props.currentSong.id)) {
        this.setState({ playing: true });
    }
  }

  componentWillReceiveProps(nextProps) {

    if (!this.props.song) {
      return null;
    }

    if (this.props.song.id !== nextProps.currentSong.id) {
      this.setState({ playing: false });
    }
    else if (nextProps.currentSong.playing === false) {
      this.setState({ playing: false });
    }
    else if ((nextProps.currentSong.id === this.props.song.id)) {
        this.setState({ playing: true });
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
    let playlistId = playlist.id;

    return (
    <div id={`track-index-highlight-${song.id}`}
      className={`track-index-highlight-${song.id}`}
      onDoubleClick={ () => { this.togglePlay(song.id, playlistId); } }>
      {
        this.state.playing ? (
          <div className="index-button-container">
            <i id="index-pause" className="material-icons" onClick={() => {
                this.togglePlay(song.id, playlistId);
              }}>volume_up
            </i>
          </div>
        ) : (
          <div className="index-button-container">
            <i id="index-play" className="material-icons" onClick={() => {
                this.togglePlay(song.id, playlistId);
              }}>play_arrow
            </i>
          </div>
        )
      }
    </div>
  );
}
}





export default connect(mapStateToProps, mapDispatchToProps)(SongsIndexItem);
