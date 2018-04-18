import { Dashboard, mapStateToProps, mapDispatchToProps } from './Dashboard';
import { shallow } from 'enzyme';
import React from 'react';
import * as mock from '../../mockData/mockData';
import { getMenuRecipes } from '../../api/apiHelpers/getMenuRecipes';
jest.mock('../../api/apiHelpers/getMenuRecipes');

describe("Dashboard", () => {

  it('matches the snapshot', () => {
    const addMenuRecipes = jest.fn();
    const clearMenuRecipes = jest.fn();
    const wrapper = shallow(<Dashboard
      addMenuRecipes={addMenuRecipes}
      clearMenuRecipes={clearMenuRecipes}/>);

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

  it('calls the functions with expected params', () => {
    const addMenuRecipes = jest.fn();
    const clearMenuRecipes = jest.fn();
    const history = {};
    history.push = jest.fn();
    const wrapper = shallow(<Dashboard
      addMenuRecipes={addMenuRecipes}
      clearMenuRecipes={clearMenuRecipes}
      getMenuRecipes={getMenuRecipes}
      history={history} />);

    wrapper.instance().handleMenuClick();
    expect(clearMenuRecipes).toHaveBeenCalled;
    expect(getMenuRecipes).toHaveBeenCalled;
    expect(addMenuRecipes).toHaveBeenCalled;
  });

});
