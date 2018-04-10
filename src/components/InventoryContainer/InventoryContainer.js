import React from 'react';
import './InventoryContainer.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ingredient from '../Ingredient/Ingredient';

const InventoryContainer = ({ingredients, inventory}) => {
  
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
      <h2>Select your ingredients</h2>
      <div className="ingredients-columns">
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
  inventory: PropTypes.array
};

export default connect(mapStateToProps)(InventoryContainer);
