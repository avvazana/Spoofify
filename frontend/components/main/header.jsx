// import React from 'react';
// import { NavLink, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { openModal } from '../../actions/modal_actions';
//
// const mapDispatchToProps = dispatch => ({
//   openModal: (modal) => dispatch(openModal(modal))
// });
//
// class Header extends React.Component {
//
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//
//     return (
//       <ul className="nav-bar">
//         <div>
//           <NavLink
//             className="nav-bar-link"
//             activeClassName="active-nav-link"
//             to={`/${this.props.page}/albums`}
//           >ALBUMS</NavLink>
//
//           <NavLink
//             className="nav-bar-link"
//             activeClassName="active-nav-link"
//             to={`/${this.props.page}/artists`}
//           >ARTISTS</NavLink>
//
//           <NavLink
//             className="nav-bar-link"
//             activeClassName="active-nav-link"
//             to={`/${this.props.page}/playlists`}
//           >PLAYLISTS</NavLink>
//
//           <NavLink
//             className="nav-bar-link"
//             activeClassName="active-nav-link"
//             to={`/${this.props.page}/songs`}
//           >SONGS</NavLink>
//
//         </div>
//         <button
//           className="new-playlist-btn"
//           onClick={() => this.props.openModal('newPlaylist')}
//         >NEW PLAYLIST</button>
//
//       </ul>
//     )
//   }
//
// }
//
// export default withRouter(connect(null, mapDispatchToProps)(Header));
