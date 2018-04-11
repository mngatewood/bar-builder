import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import { getRecipes } from '../../api/apiCalls/getRecipes';
import { getFilterOptions } from '../../api/apiCalls/getFilterOptions';
import RecipeContainer from '../RecipeContainer/RecipeContainer';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import Dashboard from '../Dashboard/Dashboard';
import InventoryContainer from '../InventoryContainer/InventoryContainer';
import MenuContainer from '../MenuContainer/MenuContainer';
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
        <header>
          <Header />
        </header>
        <main>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/recipes' component={RecipeContainer} />
          <Route exact path='/inventory' component={InventoryContainer} />
          <Route exact path='/menu' component={MenuContainer} />
        </main>
        <footer>
          <Dashboard />
        </footer>
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
