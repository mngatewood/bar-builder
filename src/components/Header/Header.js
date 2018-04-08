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
    };
  }
  
  handleSearchChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push('/');
    const value = this.state.search;
    const recipes = await getRecipes('search', 's', value);
    this.setState({ search: '' })
    this.props.addRecipes(recipes);
  }
  
  handleFilterChange = async (event) => {
    const value = event.target.value;
    const type = event.target.id;
    const recipes = await getRecipes('filter', type, value);
    this.props.addRecipes(recipes);
    this.props.history.push('/');
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
      <div className="title">
        <h1>The Bar Builder</h1>
      </div>
      <form onSubmit={this.handleSubmit}>
        <input 
          className="search"
          name="search"
          value={this.state.search}
          onChange={this.handleSearchChange}
          placeholder="Search for a cocktail">
        </input>
        <button 
          className="submit"
          name="submit"
          type="submit">
          Submit
        </button>
      </form>
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
  alcoholicOptions: PropTypes.array,
  history: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

