import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { getMenuRecipes } from '../../api/apiHelpers/getMenuRecipes';
import { connect } from 'react-redux';
import { addMenuRecipes, clearMenuRecipes } from '../../actions';
import PropTypes from 'prop-types';
import './Dashboard.css';

export class Dashboard extends Component {

  handleMenuClick = async () => {
    const { 
      inventory, 
      ingredients, 
      clearMenuRecipes, 
      addMenuRecipes, 
      history } = this.props;
    await clearMenuRecipes();
    const menuRecipes = await getMenuRecipes(inventory, ingredients);
    await addMenuRecipes(menuRecipes);
    history.push('/menu');
  };

  render() {

    return <aside className="dashboard-container">
      <NavLink to='/inventory'>
        <button>
          Update My Inventory
        </button>
      </NavLink>
      <button onClick={this.handleMenuClick}>
          View My Bar Menu
      </button>
    </aside>;

  }

}

export const mapStateToProps = state => ({
  inventory: state.inventory,
  ingredients: state.ingredients
});

export const mapDispatchToProps = dispatch => ({
  addMenuRecipes: recipes => dispatch(addMenuRecipes(recipes)),
  clearMenuRecipes: () => dispatch(clearMenuRecipes())
});

Dashboard.propTypes = {
  inventory: PropTypes.array,
  ingredients: PropTypes.array,
  addMenuRecipes: PropTypes.func,
  clearMenuRecipes: PropTypes.func
};

export default 
withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));