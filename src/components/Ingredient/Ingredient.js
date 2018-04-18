import React, { Component } from 'react';
import './Ingredient.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addIngredient, removeIngredient } from '../../actions';

export class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.inInventory
    };
  }

  handleChange = () => {
    const value = this.props.value;
    this.state.selected ?
      this.props.removeIngredient(value) :
      this.props.addIngredient(value);
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return <li
      className="ingredient">
      <input
        type="checkbox"
        value={this.props.value}
        checked={this.state.selected}
        onChange={this.handleChange} />
      <span>
        &nbsp;{this.props.value}
      </span>
    </li>;
  }

}

export const mapDispatchToProps = (dispatch) => ({
  addIngredient: ingredient => dispatch(addIngredient(ingredient)), 
  removeIngredient: ingredient => dispatch(removeIngredient(ingredient)) 
});

Ingredient.propTypes = {
  addIngredient: PropTypes.func,
  removeIngredient: PropTypes.func,
  ingredient: PropTypes.object,
  value: PropTypes.string,
  inInventory: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
};

export default connect(null, mapDispatchToProps)(Ingredient);
