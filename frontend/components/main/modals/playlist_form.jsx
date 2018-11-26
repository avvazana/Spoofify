import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { createPlaylist } from '../../../actions/playlist_actions';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      user_id: this.props.currUserId
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
      <div className="playlist-form">

        <button
          className="x-button"
          onClick={this.props.closeModal}>x</button>

        <h1 className="playlist-form-header">Create new playlist</h1>

        <form className="playlist-name-field">
          <div className="input-box">
            <div className="content-spacing">
              <h4 className="input-box-label">Playlist Name</h4>
              <input type='text'
                className="input-box-input"
                placeholder="Start typing..."
                onChange={this.handleChange()}>
              </input>
            </div>
          </div>
        </form>

        <div className="playlist-btns">
            <button
              onClick={this.props.closeModal}
              className="cancel-button-div"
              >CANCEL</button>
            <button className="create-button-div" onClick={this.handleSubmit}>CREATE</button>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  currUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);
