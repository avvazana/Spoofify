import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import PlaylistForm from './playlists/playlist_form';
import PlaylistSongForm from './playlists/playlist_song_form';

function Modal({ modal, closeModal} ) {
  
  if (!modal) {
    return null;
  }
  let component;
  switch(modal.type) {
      case 'newPlaylist':
        component = <PlaylistForm />;
        break;
      case 'newPlaylistSong':
        component = <PlaylistSongForm />
        break;
      default:
        return null;
    }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {

  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
