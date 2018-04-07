import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import { getRecipes } from '../../api/apiCalls/getRecipes';
import { getFilterOptions } from '../../api/apiCalls/getFilterOptions'
import RecipeContainer from '../RecipeContainer/RecipeContainer';
import { Header } from '../Header/Header';
import { connect } from 'react-redux';
import { addRecipes } from '../../actions';


export class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  async componentDidMount() {
    const recipes = await getRecipes("a", "Optional_alcohol");
    const categoryOptions = await getFilterOptions("c");
    const ingredientOptions = await getFilterOptions("i");
    const alcoholicOptions = await getFilterOptions("a");
    console.log(categoryOptions)
    console.log(ingredientOptions)
    console.log(alcoholicOptions)
    this.props.addRecipes(recipes);
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
  addRecipes: (recipes) => dispatch(addRecipes(recipes)),
  addCategoryOptions: (categoryOptions) => dispatch(addCategoryOptions(categoryOptions)),
  addIngredientOptions: (ingredientOptions) => dispatch(addIngredientOptions(ingredientOptions)),
  addAlcholicOptions: (alcoholicOptions) => dispatch(addAlcoholicOptions(alcoholicOptions)),
});

App.propTypes = {
  addRecipes: PropTypes.func
};

export default withRouter(connect(null, mapDispatchToProps)(App));
