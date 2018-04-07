import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';
import PropTypes from 'prop-types';
import { getRecipes } from '../../api/apiCalls/getRecipes';
import { addRecipes } from '../../actions/';


export const Header = ({addRecipes, categories, ingredients, alcoholicOptions}) => {

  const categorySelectOptions = categories.map(option => {
    return <option key={option.strCategory} value={option.strCategory}>
      {option.strCategory}
    </option>;
  });

  const ingredientSelectOptions = ingredients.map(option => {
    return <option key={option.strIngredient1} value={option.strIngredient1}>
      {option.strIngredient1}
    </option>;
  });

  const alcoholicSelectOptions = alcoholicOptions.map(option => {
    return <option key={option.strAlcoholic} value={option.strAlcoholic}>
      {option.strAlcoholic}
    </option>;
  });

  const handleChange = async (event) => {
    const value = event.target.value;
    const type = event.target.id;
    const recipes = await getRecipes(type, value);
    addRecipes(recipes);
  };

  return <div className="header">
    <h1>The Bar Builder</h1>
    <nav>
      <select name="category-select" id="c" onChange={handleChange}>
        <option>All Categories</option>
        {categorySelectOptions}
      </select>
      <select name="ingredient-select" id="i" onChange={handleChange}>
        <option>All Ingredients</option>
        {ingredientSelectOptions}
      </select>
      <select name="alcoholic-select" id="a" onChange={handleChange}>
        <option>All Alcoholic Content</option>
        {alcoholicSelectOptions}
      </select>
    </nav>
  </div>;
};

export const mapStateToProps = state => ({
  // recipes: state.recipes,
  categories: state.categories,
  ingredients: state.ingredients,
  alcoholicOptions: state.alcoholicOptions
});

export const mapDispatchToProps = (dispatch) => ({
  addRecipes: recipes => dispatch(addRecipes(recipes))
});

Header.propTypes = {
  addRecipes: PropTypes.func,
  categories: PropTypes.array,
  ingredients: PropTypes.array,
  alcoholicOptions: PropTypes.array
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

