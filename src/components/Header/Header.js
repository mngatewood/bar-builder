import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';
import PropTypes from 'prop-types';
import { getRecipes } from '../../api/apiCalls/getRecipes';
import { addRecipes } from '../../actions/';


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
    this.setState({ search: '' })
    this.props.addRecipes(recipes);
    window.scrollTo(0, 0);
  }
  
  handleFilterChange = (event) => {
    this.props.history.push('/recipes');
    const { name, value } = event.target;
    this.setState({ [name]: value });
    const type = event.target.id;
    this.updateRecipesArray(name, type, value)
  }

  updateRecipesArray = async (name, type, value) => {
    console.log(value.slice(0, 3));
    const newRecipes = value.slice(0, 3) === 'All' || null ?
      [] :
      await getRecipes('filter', type, value);
    switch (name) {
    case 'categoryFilter':
      this.setState({ categoryRecipes: [...newRecipes] });
      break;
    case 'ingredientFilter':
      this.setState({ ingredientRecipes: [...newRecipes] });
      break;
    case 'alcoholicFilter':
      this.setState({ alcoholicRecipes: [...newRecipes] });
      break;
    }
    this.filterRecipes();
  }

  filterRecipes = () => {
    const { categoryRecipes, ingredientRecipes, alcoholicRecipes} = this.state;
    const newRecipes = categoryRecipes.filter((categoryRecipe) => {
      let match = false;
      ingredientRecipes.forEach((ingredientRecipe) => {
        if (categoryRecipe.idDrink === ingredientRecipe.idDrink) {
          match = true;
        } 
      });
      return match;
    });
    this.props.addRecipes(newRecipes);
  }
  
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
        <Link to="/"><h1>The Bar Builder</h1></Link>
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

