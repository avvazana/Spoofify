import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { createPlaylist } from '../../../actions/playlist_actions';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      user_id: this.props.curretUserId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPlaylist(this.state);
    this.props.closeModal();
  }

  handleChange() {
    return e => {
      this.setState({title: e.target.value});
    };
  }

  render() {

    return (
      <div className="playlist-form-container">

        <button className="x-button" onClick={this.props.closeModal}>x</button>

        <h1 className="playlist-form-header">Create new playlist</h1>

        <form className="playlist-form">
          <div className="playlist-input">
            <div>
              <h4 className="playlist-input-label">Playlist Name</h4>
              <input className="playlist-input-text" placeholder="Start typing..." type='text'
                onChange={this.handleChange()}>
              </input>
            </div>
          </div>
        </form>

        <div className="playlist-buttons">
          <button className="create-button" onClick={this.handleSubmit}>CREATE</button>
          <button className="cancel-button" onClick={this.props.closeModal} >CANCEL</button>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  curretUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);
