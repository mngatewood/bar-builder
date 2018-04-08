import React from 'react';
import './InventoryContainer.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ingredient from '../Ingredient/Ingredient';

const InventoryContainer = ({ingredients}) => {
  console.log(ingredients)
  const displayIngredient = ingredients.map(ingredient => {
    return <Ingredient 
      key={ingredient.strIngredient1}
      value={ingredient.strIngredient1} />
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
  ingredients: state.ingredients
});

InventoryContainer.propTypes = {
  ingredients: PropTypes.array
};

export default connect(mapStateToProps)(InventoryContainer);
