import React from 'react';
import './Dashboard.css';
import { NavLink, withRouter } from 'react-router-dom';
import { getRecipes } from '../../api/apiCalls/getRecipes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMenuRecipes, clearMenuRecipes } from '../../actions';

const Dashboard = ({ inventory, addMenuRecipes, clearMenuRecipes }) => {

  const handleMenuClick = () => {
    clearMenuRecipes();
    inventory.forEach(async ingredient => {
      const recipes = await getRecipes('filter', 'i', ingredient);
      addMenuRecipes(recipes);
    });
  };

  return <aside className="dashboard-container">
    <NavLink to='/inventory'>
      <button>
        Inventory
      </button>
    </NavLink>
    <button onClick={handleMenuClick}>
      Menu
    </button>
  </aside>;
};

export const mapStateToProps = state => ({
  inventory: state.inventory
});

export const mapDispatchToProps = dispatch => ({
  addMenuRecipes: recipes => dispatch(addMenuRecipes(recipes)),
  clearMenuRecipes: () => dispatch(clearMenuRecipes())
});

Dashboard.propTypes = {
  inventory: PropTypes.array
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));