import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';

const mapDispatchToProps = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal))
});

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="header-bar">

        <div className="header-navs">
          <NavLink activeClassName="active-header-link" className="header-bar-link"
            to={`/${this.props.navpath}/albums`}>ALBUMS</NavLink>

          <NavLink activeClassName="active-header-link" className="header-bar-link"
            to={`/${this.props.navpath}/artists`}>ARTISTS</NavLink>

          <NavLink activeClassName="active-header-link" className="header-bar-link"
            to={`/${this.props.navpath}/playlists`}>PLAYLISTS</NavLink>

          <NavLink className="header-bar-link" activeClassName="active-header-link"
            to={`/${this.props.navpath}/songs`}>SONGS</NavLink>
        </div>

        <button className="new-playlist-button"
          onClick={() => this.props.openModal('newPlaylist')}>NEW PLAYLIST</button>
    </div>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Header));
