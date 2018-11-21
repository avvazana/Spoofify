import React from 'react';
import { PulseLoader } from 'react-spinners';
import { NavLink, withRouter } from 'react-router-dom';
import { openModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal, songId) => dispatch(openModal(modal, songId)),
  };
};


class SongsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
      const {song} = this.props;
      return (
        <div className="song-index-item">

          <div className="song-item">
            <label> {song.title}
              <audio src={song.trackUrl}>
              </audio>
            </label>
          </div>

          <div className="song-btns">
            <div className="song-btn-wide">

            </div>
            <button
              onClick={() => this.props.openModal('newPlaylistSong', `${song.id}`)}
              className="pl-btn">
              <img className="tripledot" src={window.tripledot}></img>
            </button>
          </div>

        </div>
      );
  }
}


export default withRouter(connect(null, mapDispatchToProps)(SongsIndexItem));



// let playButtonContainer = (
// <div className="play-btn-container">
//   <button onClick={this.handlePlay}><i className="fa fa-play"></i></button>
//   <i className="fa fa-music"></i>
// </div>
// )
