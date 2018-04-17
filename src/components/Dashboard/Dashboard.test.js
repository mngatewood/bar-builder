import Dashboard, { mapStateToProps, mapDispatchToProps } from './Dashboard';
import { shallow } from 'enzyme';
import React from 'react';
import * as mock from '../../mockData/mockData';

describe("Dashboard", () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });

  it('maps to the store', () => {
    const mockStore = { 
      inventory: mock.mockInventory,
      ingredients: mock.sortedIngredientOptions };
    const mapped = mapStateToProps(mockStore);
    expect(mapped).toEqual(mockStore);
  });

  it('calls dispatch function when using mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addMenuRecipes();
    mapped.clearMenuRecipes();
    expect(mockDispatch).toHaveBeenCalled();
  });

});

describe("handleMenuClick", () => {

  it.skip('calls clearMenuRecipes, getMenuRecipes, addMenuRecipes with expected params', () => {
    const wrapper = shallow(<Dashboard />);
    const clearMenuRecipes = jest.fn();
    const getMenuRecipes = jest.fn();
    const addMenuRecipes = jest.fn();

    wrapper.instance().handleMenuClick();
    expect(clearMenuRecipes).toHaveBeenCalled;
    expect(getMenuRecipes).toHaveBeenCalled;
    expect(addMenuRecipes).toHaveBeenCalled;
  });

});
