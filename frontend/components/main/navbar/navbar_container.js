import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import NavBar from './navbar';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(null, mapDispatchToProps)(NavBar);
