import React, { Component } from 'react';
// import { NavLink, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { logOut, resetFavorites } from '../../actions';
import './Header.css';
import PropTypes from 'prop-types';

export const Header = (
  // categoryOptions, 
  // ingredientOptions, 
  // alcoholicOptions
) => {

  // const categorySelectOptions = categoryOptions.map(option => {
  //   return <option key={option.strCategory}>
  //     {option.strCategory}
  //   </option>;
  // });

  // const ingredientSelectOptions = ingredientOptions.map(option => {
  //   return <option key={option.strIngredient1}>
  //     {option.strIngredient1}
  //   </option>;
  // });

  // const alcoholicSelectOptions = alcoholicOptions.map(option => {
  //   return <option key={option.strAlcoholic}>
  //     {option.strAlcoholic}
  //   </option>;
  // });

  return <div className="header">
    <h1>The Bar Builder</h1>
{/*    <select>{categorySelectOptions}</select>
    <select>{ingredientSelectOptions}</select>
    <select>{alcoholicSelectOptions}</select> */}
  </div>;
};

// Header.propTypes = {
// };

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

