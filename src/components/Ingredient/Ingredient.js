import React, { Component } from 'react';
import './Ingredient.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addIngredient, removeIngredient } from '../../actions';

export class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
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
    const value = this.props.value;
    return <li
      className="ingredient">
      <input
        type="checkbox"
        value={value}
        onChange={this.handleChange} />
      <span>
        &nbsp;{value}
      </span>
    </li>
  }

};

export const mapDispatchToProps = (dispatch) => ({
  addIngredient: ingredient =>
    dispatch(addIngredient(ingredient)), 
  removeIngredient: ingredient =>
    dispatch(removeIngredient(ingredient)) 
});

Ingredient.propTypes = {
  value: PropTypes.string,
  ingredient: PropTypes.object,
  addIngredient: PropTypes.func,
  removeIngredient: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Ingredient);
