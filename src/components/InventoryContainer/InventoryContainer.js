import React from 'react';
import './InventoryContainer.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const InventoryContainer = ({ingredients}) => {
  console.log(ingredients)
  const displayIngredient = ingredients.map(ingredient => {
    return (
      <p 
        key={ingredient.strIngredient1}
        className="ingredient">
        <input
          type="checkbox"
          name={ingredient.strIngredient1}
          value={ingredient.strIngredient1} />
        <span>
          &nbsp;{ingredient.strIngredient1}
        </span>
      </p>
    );
  });

  return (
    <div className="inventory-container">
      <form>
        {displayIngredient}
      </form>
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
