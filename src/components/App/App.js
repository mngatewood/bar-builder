import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import { getRecipes } from '../../api/apiCalls/getRecipes';
import RecipeContainer from '../RecipeContainer/RecipeContainer';
import Header from '../Header/Header';
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
  addRecipes: (recipes) => dispatch(addRecipes(recipes))
});

App.propTypes = {
  addRecipes: PropTypes.func
};

export default withRouter(connect(null, mapDispatchToProps)(App));
