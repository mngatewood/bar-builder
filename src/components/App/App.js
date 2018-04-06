import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import { getAlcoholicRecipes } from '../../api/apiCalls/getAllRecipes';


export class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }

  async componentDidMount() {
    const recipes = await getAlcoholicRecipes();
    this.setState({ recipes: recipes });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to The Bar Builder</h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
