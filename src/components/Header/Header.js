import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecipes } from '../../api/apiCalls/getRecipes';
import { addRecipes, clearRecipes } from '../../actions/';
import { filterRecipes } from '../../api/apiHelpers/filterRecipes';
import { sortRecipes } from '../../api/apiHelpers/sortRecipes';
import { updateRecipesArray } from '../../api/apiHelpers/updateRecipesArray';
import { updateFilterCount } from '../../api/apiHelpers/updateFilterCount';
import { sortCategories } from '../../api/apiHelpers/sortCategories';
import { sortIngredients } from '../../api/apiHelpers/sortIngredients';
import { getCategoryOptions } from '../../api/apiHelpers/getCategoryOptions';
import { getAlcoholicOptions } from '../../api/apiHelpers/getAlcoholicOptions';
import { sortAlcoholicOptions } 
  from '../../api/apiHelpers/sortAlcoholicOptions';
import { getIngredientOptions } 
  from '../../api/apiHelpers/getIngredientOptions';
import PropTypes from 'prop-types';
import './Header.css';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      filterCount: 0,
      categoryFilter: 'All Categories',
      ingredientFilter: 'All Ingredients',
      alcoholicFilter: 'All Alcoholic Content',
      categoryRecipes: [],
      ingredientRecipes: [],
      alcoholicRecipes: [],
      unfilteredRecipes: []
    };
  }
  
  handleSearchChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.history.push('/recipes');
    const value = this.state.search;
    const recipes = await getRecipes('search', 's', value);
    this.setState({ search: '' });
    this.props.addRecipes(recipes);
    window.scrollTo(0, 0);
  }
  
  handleFilterChange = async (event) => {
    this.props.history.push('/recipes');
    const { name, value } = event.target;
    this.setState({ [name]: value });
    const type = event.target.id;
    this.setState(await updateRecipesArray(name, type, value));
    const { 
      categoryRecipes, 
      ingredientRecipes, 
      alcoholicRecipes } = this.state;
    const filterCount = await updateFilterCount(
      categoryRecipes, 
      ingredientRecipes, 
      alcoholicRecipes);
    this.setState({ filterCount });
    const sortedRecipes = await sortRecipes(
      categoryRecipes, 
      ingredientRecipes, 
      alcoholicRecipes);
    const filteredRecipes = await filterRecipes(filterCount, 
      categoryRecipes, 
      ingredientRecipes, 
      alcoholicRecipes, 
      sortedRecipes);
    this.props.addRecipes(filteredRecipes);
  }

  handleRedirect = async () => {
    const resetState = {
      search: '',
      filterCount: 0,
      categoryFilter: 'All Categories',
      ingredientFilter: 'All Ingredients',
      alcoholicFilter: 'All Alcoholic Content',
      categoryRecipes: [],
      ingredientRecipes: [],
      alcoholicRecipes: [],
      unfilteredRecipes: []
    };
    this.setState(resetState);
    this.props.clearRecipes();
    const recipes = await getRecipes("random");
    this.props.addRecipes(recipes);
  }

  render() {

    const {categories, ingredients, alcoholicOptions} = this.props;

    const sortedCategories = categories.sort(sortCategories);
    const sortedIngredients = ingredients.sort(sortIngredients);
    const sortedAlcoholicOptions = alcoholicOptions.sort(sortAlcoholicOptions);

    const categorySelectOptions = getCategoryOptions(sortedCategories);
    const ingredientSelectOptions = getIngredientOptions(sortedIngredients);
    const alcoholicSelectOptions = getAlcoholicOptions(sortedAlcoholicOptions);

    return <div className="header">
      <div className="title">
        <Link to="/" onClick={this.handleRedirect}>
          <h1>The Bar Builder</h1>
        </Link>
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
        </button>
      </form>
      <nav>
        <div className="nav-title">
          <h3>Filters:</h3>
        </div>
        <div className="nav-selects">
          <select 
            name="categoryFilter" 
            id="c"
            value={this.state.categoryFilter}
            onChange={this.handleFilterChange}>
            <option>All Categories</option>
            {categorySelectOptions}
          </select>
          <select 
            name="ingredientFilter" 
            id="i"
            value={this.state.ingredientFilter}
            onChange={this.handleFilterChange}>
            <option>All Ingredients</option>
            {ingredientSelectOptions}
          </select>
          <select 
            name="alcoholicFilter" 
            id="a" 
            value={this.state.alcoholicFilter}
            onChange={this.handleFilterChange}>
            <option>All Alcoholic Content</option>
            {alcoholicSelectOptions}
          </select>
        </div>
      </nav>
    </div>;
  }
}
  
export const mapStateToProps = state => ({
  recipes: state.recipes,
  categories: state.categories,
  ingredients: state.ingredients,
  alcoholicOptions: state.alcoholicOptions
});

export const mapDispatchToProps = dispatch => ({
  addRecipes: recipes => dispatch(addRecipes(recipes)),
  clearRecipes: () => dispatch(clearRecipes())
});

Header.propTypes = {
  recipes: PropTypes.array,
  categories: PropTypes.array,
  ingredients: PropTypes.array,
  alcoholicOptions: PropTypes.array,
  addRecipes: PropTypes.func,
  clearRecipes: PropTypes.func,
  history: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

