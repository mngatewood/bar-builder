import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import { getRecipes } from '../../api/apiCalls/getRecipes';
import { getFilterOptions } from '../../api/apiCalls/getFilterOptions'
import RecipeContainer from '../RecipeContainer/RecipeContainer';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { addRecipes, addCategories, addIngredients, addAlcoholicOptions } from '../../actions';


export class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  async componentDidMount() {
    const recipes = await getRecipes("random");
    const categories = await getFilterOptions("c");
    const ingredients = await getFilterOptions("i");
    const alcoholicOptions = await getFilterOptions("a");
    this.props.addRecipes(recipes);
    this.props.addCategories(categories);
    this.props.addIngredients(ingredients);
    this.props.addAlcoholicOptions(alcoholicOptions);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={RecipeContainer} />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addRecipes: recipes => dispatch(addRecipes(recipes)),
  addCategories: categories => dispatch(addCategories(categories)),
  addIngredients: ingredients => dispatch(addIngredients(ingredients)),
  addAlcoholicOptions: alcoholicOptions => dispatch(addAlcoholicOptions(alcoholicOptions))
});

App.propTypes = {
  addRecipes: PropTypes.func,
  addCategories: PropTypes.func,
  addIngredients: PropTypes.func,
  addAlcoholicOptions: PropTypes.func
};

export default withRouter(connect(null, mapDispatchToProps)(App));
