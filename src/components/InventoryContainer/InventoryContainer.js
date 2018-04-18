import React from 'react';
import { connect } from 'react-redux';
import Ingredient from '../Ingredient/Ingredient';
import PropTypes from 'prop-types';
import './InventoryContainer.css';

export const InventoryContainer = ({ingredients, inventory}) => {
  
  const displayIngredient = ingredients.map(ingredient => {
    let inInventory = false;
    inventory.forEach(onHandIngredient => {
      if (onHandIngredient === ingredient.strIngredient1) {
        inInventory = true;
      }
    });
    return <Ingredient 
      key={ingredient.strIngredient1}
      value={ingredient.strIngredient1} 
      inInventory={inInventory}/>;
  });

  return (
    <div className="inventory-container">
      <div className="page-title-wrapper">
        <div className="page-title">
          <h2>My Inventory</h2>
        </div>
      </div>
      <div>
        <h3>Select your ingredients:</h3>
      </div>
      <div className="ingredients-container">
        <form>
          {displayIngredient}
        </form>
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  ingredients: state.ingredients,
  inventory: state.inventory
});

InventoryContainer.propTypes = {
  ingredients: PropTypes.array,
  inventory: PropTypes.array,
  strIngredient1: PropTypes.string
};

export default connect(mapStateToProps)(InventoryContainer);
