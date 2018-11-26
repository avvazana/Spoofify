import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { createSongOnPlaylist, fetchPlaylists } from '../../../actions/playlist_actions';
import { selectAllAuthoredPlaylists } from '../../../reducers/selectors';

const mapStateToProps = state => {

  return {
    playlists: selectAllAuthoredPlaylists(state),
    currUserId: state.session.id,
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
      song_id: null,
      playlist_id: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {

    e.preventDefault();
    this.props.createSongOnPlaylist(
      {playlist_id: e.currentTarget.getAttribute('playlist-id'), song_id: this.props.songId}
    );
    this.props.closeModal();
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  // titleInitials(title) {
  //   return title.split(' ')
  //     .map( word => word[0].toUpperCase()).join('');
  // }

  render() {
    return (
      <div className="playlist-song-form">
        <button className="x-btn form-button" onClick={this.props.closeModal}>X</button>

        <h1 className="playlist-form-header">Add to playlist</h1>


        <form>
          <ul className="item-rows user-playlists">
            {this.props.playlists.map( playlist => {
              return (
                <button
                  playlist-id={`${playlist.id}`}
                  onClick={this.handleSubmit}
                  className="form-button"
                  key={playlist.id}
                >
                  <div className="collection-index-item">

                    <div className="collection-image-container">
                      <div className="playlist-img">
                        <h4 className="playlist-img-title">{playlist.title}</h4>
                      </div>
                      <div className="image-overlay">
                        <img className='collection-img-overlay' src={playlist.photoUrl}></img>
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
