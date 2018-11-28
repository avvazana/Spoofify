import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { createSongOnPlaylist, fetchPlaylists } from '../../../actions/playlist_actions';
import { selectAllAuthoredPlaylists } from '../../../reducers/selectors';

const mapStateToProps = state => {

  return {
    playlists: selectAllAuthoredPlaylists(state),
    songId: state.ui.modal.songId
  };
};

const mapDispatchToProps = dispatch => {

  return {
    closeModal: () => dispatch(closeModal()),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    createSongOnPlaylist: songOnPlaylist => dispatch(createSongOnPlaylist(songOnPlaylist))
  };
};

class PlaylistSongForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      song_id: "",
      playlist_id: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createSongOnPlaylist(
      {playlist_id: e.currentTarget.getAttribute('id'),
      song_id: this.props.songId}
    );
    this.props.closeModal();
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    return (
      <div className="playlist-song-form">
        <div>
          <button className="form-button x-button" onClick={this.props.closeModal}>X</button>
          <h1 className="playlist-form-header">Add to playlist</h1>
        </div>
        <form>
          <ul className="users-playlists">
            {this.props.playlists.map( playlist => {
              return (
                <button key={playlist.id} id={`${playlist.id}`} onClick={this.handleSubmit}>
                  <div className="song-form-container">
                    <div className="song-form-image-item">
                      <div>
                        <h3>{playlist.title}</h3>
                      </div>
                      <div className="song-form-image">
                        <img src={playlist.photoUrl}></img>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </ul>
        </form>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistSongForm);
