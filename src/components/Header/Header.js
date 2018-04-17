import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';
import PropTypes from 'prop-types';
import { getRecipes } from '../../api/apiCalls/getRecipes';
import { addRecipes } from '../../actions/';
import { filterRecipes } from '../../api/apiHelpers/filterRecipes';
import { sortRecipes } from '../../api/apiHelpers/sortRecipes';
import { updateRecipesArray } from '../../api/apiHelpers/updateRecipesArray';
import { updateFilterCount } from '../../api/apiHelpers/updateFilterCount';
import { sortCategories } from '../../api/apiHelpers/sortCategories';
import { sortIngredients } from '../../api/apiHelpers/sortIngredients';
import { sortAlcoholicOptions } from '../../api/apiHelpers/sortAlcoholicOptions';
import { getCategoryOptions } from '../../api/apiHelpers/getCategoryOptions';
import { getIngredientOptions } from '../../api/apiHelpers/getIngredientOptions';
import { getAlcoholicOptions } from '../../api/apiHelpers/getAlcoholicOptions';

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
    // event.preventDefault();
    this.props.history.push('/recipes');
    const value = this.state.search;
    const recipes = await getRecipes('search', 's', value);
    this.setState({ search: '' });
    this.props.addRecipes(recipes);
    window.scrollTo(0, 0);
  }
  
  handleFilterChange = async (event) => {
    // const { filterCount, categoryRecipes, ingredientRecipes, alcoholicRecipes, unfilteredRecipes} = this.state;
    this.props.history.push('/recipes');
    const { name, value } = event.target;
    this.setState({ [name]: value });
    const type = event.target.id;
    this.setState(await updateRecipesArray(name, type, value));
    this.setState(await updateFilterCount(this.state));
      // this.state.categoryRecipes, 
      // this.state.ingredientRecipes, 
      // this.state.alcoholicRecipes));
    this.setState(await sortRecipes(this.state));
      // this.state.categoryRecipes, 
      // this.state.ingredientRecipes, 
      // this.state.alcoholicRecipes));
    this.props.addRecipes(await filterRecipes(this.state));
      // this.state.filterCount, 
      // this.state.categoryRecipes, 
      // this.state.ingredientRecipes, 
      // this.state.alcoholicRecipes, 
      // this.state.unfilteredRecipes));
  }

  handleRedirect = () => {
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
        <Link to="/" onClick={this.handleRedirect}><h1>The Bar Builder&nbsp;&nbsp;&nbsp;&nbsp;</h1></Link>
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
      </nav>
    </div>;
  }
}
  
export const mapStateToProps = state => ({
  recipes: state.recipes,
  categories: state.categories,
  ingredients: state.ingredients,
  alcoholicOptions: state.alcoholicOptions,
  clearRecipes: state.clearRecipes
});

export const mapDispatchToProps = dispatch => ({
  addRecipes: recipes => dispatch(addRecipes(recipes))
});

Header.propTypes = {
  addRecipes: PropTypes.func,
  recipes: PropTypes.array,
  categories: PropTypes.array,
  ingredients: PropTypes.array,
  alcoholicOptions: PropTypes.array,
  history: PropTypes.object,
  clearRecipes: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

