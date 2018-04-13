import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';
import PropTypes from 'prop-types';
import { getRecipes } from '../../api/apiCalls/getRecipes';
import { addRecipes } from '../../actions/';
import bar from '../../assets/bar.svg';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      categoryFilter: 'All Categories',
      ingredientFilter: 'All Ingredients',
      alcoholicFilter: 'All Alcoholic Content',
      categoryRecipes: [],
      ingredientRecipes: [],
      alcoholicRecipes: []
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
  
  handleFilterChange = (event) => {
    this.props.history.push('/recipes');
    const { name, value } = event.target;
    this.setState({ [name]: value });
    const type = event.target.id;
    this.updateRecipesArray(name, type, value);
  }

  updateRecipesArray = async (name, type, value) => {
    const newRecipes = value.slice(0, 3) === 'All' || null ?
      [] :
      await getRecipes('filter', type, value);
    const sortedRecipes = newRecipes.sort((drinkA, drinkB) => 
      drinkA.idDrink - drinkB.idDrink);
    switch (name) {
    case 'categoryFilter':
      this.setState({ categoryRecipes: sortedRecipes });
      break;
    case 'ingredientFilter':
      this.setState({ ingredientRecipes: sortedRecipes });
      break;
    case 'alcoholicFilter':
      this.setState({ alcoholicRecipes: sortedRecipes });
      break;
    default:
      break;
    }
    this.filterRecipes();
  }

  filterRecipes = () => {
    const { categoryRecipes, ingredientRecipes, alcoholicRecipes} = this.state;
    const unfilteredRecipes = [...categoryRecipes, ...ingredientRecipes, ...alcoholicRecipes];
    const sortedRecipes = unfilteredRecipes.sort((drinkA, drinkB) =>
      drinkA.idDrink - drinkB.idDrink);
    let numberOfArrays = 0;
    if (categoryRecipes.length > 0) { numberOfArrays++; }
    if (ingredientRecipes.length > 0) { numberOfArrays++; }
    if (alcoholicRecipes.length >0) { numberOfArrays++; }
    if (numberOfArrays === 1) {
      if (categoryRecipes.length > 0) { this.props.addRecipes(categoryRecipes); }
      if (ingredientRecipes.length > 0) { this.props.addRecipes(ingredientRecipes); }
      if (alcoholicRecipes.length > 0) { this.props.addRecipes(alcoholicRecipes); }
    } else {
      let filteredRecipes = [];
      let lastRecipeID = 0;
      sortedRecipes.forEach((thisRecipe) => {
        if (thisRecipe.idDrink === lastRecipeID) {
          filteredRecipes.push(thisRecipe);
        }
        lastRecipeID = thisRecipe.idDrink;
      }); 
      this.props.addRecipes(filteredRecipes);
    } 
    if (numberOfArrays > 2) {
      let filteredRecipes = [];
      let lastRecipeID = 0;
      let sortedRecipes = [...this.state.recipes];
      sortedRecipes.forEach((thisRecipe) => {
        if (thisRecipe.idDrink === lastRecipeID) {
          filteredRecipes.push(thisRecipe);
        }
        lastRecipeID = thisRecipe.idDrink;
      });
      this.props.addRecipes(filteredRecipes);
    } 
  }
  
  render() {

    const {categories, ingredients, alcoholicOptions} = this.props;

    const sortCategories = (a, b) => {
      if (a.strCategory < b.strCategory)
        return -1;
      if (a.strCategory > b.strCategory)
        return 1;
      return 0;
    }
    const sortedCategories = categories.sort(sortCategories);
    const categorySelectOptions = sortedCategories.map(option => {
      if (option.strCategory !== null) {
        return <option
          key={option.strCategory}
          value={option.strCategory}>
          {option.strCategory}
        </option>;
      }
    });

    const sortIngredients = (a, b) => {
      if (a.strIngredient1 < b.strIngredient1)
        return -1;
      if (a.strIngredient1 > b.strIngredient1)
        return 1;
      return 0;
    }
    const sortedIngredients = ingredients.sort(sortIngredients);
    const ingredientSelectOptions = sortedIngredients.map(option => {
      if (option.strIngredient1 !== null) {    
        return <option
          key={option.strIngredient1}
          value={option.strIngredient1}>
          {option.strIngredient1}
        </option>;
      }
    });

    const sortAlcoholicOptions = (a, b) => {
      if (a.strCategory < b.strCategory)
        return -1;
      if (a.strCategory > b.strCategory)
        return 1;
      return 0;
    }
    const sortedAlcoholicOptions = alcoholicOptions.sort(sortAlcoholicOptions);
    const alcoholicSelectOptions = sortedAlcoholicOptions.map(option => {
      if (option.strAlcoholic !== null) {
        return <option
          key={option.strAlcoholic}
          value={option.strAlcoholic}>
          {option.strAlcoholic}
        </option>;
      }
    });

    return <div className="header">
      <div className="title">
        <Link to="/"><h1>The Bar Builder&nbsp;&nbsp;&nbsp;&nbsp;</h1></Link>
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
  };
}
  
export const mapStateToProps = state => ({
  recipes: state.recipes,
  categories: state.categories,
  ingredients: state.ingredients,
  alcoholicOptions: state.alcoholicOptions
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
  history: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

