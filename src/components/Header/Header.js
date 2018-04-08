import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';
import PropTypes from 'prop-types';
import { getRecipes } from '../../api/apiCalls/getRecipes';
import { addRecipes } from '../../actions/';


export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }
  
  handleSearchChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  
  handleFilterChange = async (event) => {
    const value = event.target.value;
    const type = event.target.id;
    const recipes = await getRecipes('filter', type, value);
    this.props.addRecipes(recipes);
  };
  
  render() {

    const {categories, ingredients, alcoholicOptions} = this.props;
  
    const categorySelectOptions = categories.map(option => {
      return <option
        key={option.strCategory}
        value={option.strCategory}>
        {option.strCategory}
      </option>;
    });

    const ingredientSelectOptions = ingredients.map(option => {
      return <option
        key={option.strIngredient1}
        value={option.strIngredient1}>
        {option.strIngredient1}
      </option>;
    });

    const alcoholicSelectOptions = alcoholicOptions.map(option => {
      return <option
        key={option.strAlcoholic}
        value={option.strAlcoholic}>
        {option.strAlcoholic}
      </option>;
    });

    return <div className="header">
      <h1>The Bar Builder</h1>
      <input 
        name="search"
        onChange={this.handleSearchChange}
        placeholder="Search for a cocktail">
      </input>
      <nav>
        <select 
          name="category-select" 
          id="c" 
          onChange={this.handleFilterChange}>
          <option>All Categories</option>
          {categorySelectOptions}
        </select>
        <select 
          name="ingredient-select" 
          id="i" 
          onChange={this.handleFilterChange}>
          <option>All Ingredients</option>
          {ingredientSelectOptions}
        </select>
        <select 
          name="alcoholic-select" 
          id="a" 
          onChange={this.handleFilterChange}>
          <option>All Alcoholic Content</option>
          {alcoholicSelectOptions}
        </select>
      </nav>
    </div>;
  };
}
  
const mapStateToProps = state => ({
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

