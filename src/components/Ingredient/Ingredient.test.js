import React from 'react';
import { shallow } from 'enzyme';
import { Ingredient } from './Ingredient';

describe("Ingredient", () => {

  let addIngredient, removeIngredient, wrapper;

  beforeEach(() => {

    addIngredient = jest.fn();
    removeIngredient = jest.fn();
    wrapper = shallow(
      <Ingredient
        inInventory="false"
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />);

  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls addIngredient if it is selected', () => {
    wrapper.instance().handleChange();
    expect(addIngredient).toHaveBeenCalled;
  });

  it('calls removeIngredient if it is deselected', () => {
    wrapper = shallow(
      <Ingredient
        inInventory="true"
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />);

    wrapper.instance().handleChange();
    expect(removeIngredient).toHaveBeenCalled;
  });

});