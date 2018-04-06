import React, { Component } from 'react';
// import { NavLink, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { logOut, resetFavorites } from '../../actions';
import './Header.css';
import PropTypes from 'prop-types';

export default class Header extends Component {

  render() {
    return <div className="header">
      <h1>The Bar Builder</h1>
    </div>;
  }
}

// Header.propTypes = {
// };

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

