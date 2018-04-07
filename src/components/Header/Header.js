import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';
import PropTypes from 'prop-types';

export const Header = ({categories, ingredients, alcoholicOptions}) => {

  console.log(alcoholicOptions)
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

  const alcoholicSelectOptions = alcoholicOptions.map(option => {
    // console.log(option)
    // return <option key={option.strAlcoholic}>
    //   {option.strAlcoholic}
    // </option>;
  });

  return <div className="header">
    <h1>The Bar Builder</h1>
    <select>{alcoholicSelectOptions}</select>
  </div>;
};

export const mapStateToProps = state => ({
  categories: state.categories,
  ingredients: state.ingredients,
  alcoholicOptions: state.alcoholicOptions
});

Header.propTypes = {
  categories: PropTypes.object,
  ingredients: PropTypes.object,
  alcoholicOptions: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(Header));

