import Dashboard, { mapStateToProps, mapDispatchToProps } from './Dashboard';
import { shallow} from 'enzyme';
import React from 'react';
import { addMenuRecipes, clearMenuRecipes } from '../../actions';
import { getMenuRecipes } from '../../api/apiHelpers/getMenuRecipes';
import * as mock from '../../mockData/mockData';

describe("Dashboard", () => {

  it.skip('matches the snapshot', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('maps to the store', () => {
    const mockStore = { inventory: mock.mockInventory };
    const mapped = mapStateToProps(mock.mockStore);
    expect(mapped).toEqual(mock.mockStore);
  });

  it.skip('calls dispatch function when using mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mock.mockDispatch);
    mapped.addMenuRecipes();
    mapped.clearMenuRecipes();
    expect(mockDispatch).toHaveBeenCalled();
  });

});

describe("handleMenuClick", () => {

  let wrapper;
  let clearMenuRecipes;
  let getMenuRecipes;
  let addMenuRecipes;

  beforeEach(() => {

    wrapper = shallow(<Dashboard />);
    clearMenuRecipes = jest.fn();
    getMenuRecipes = jest.fn();
    addMenuRecipes = jest.fn();

  });

  it.skip('calls clearMenuRecipes', () => {
    console.log(wrapper)
    wrapper.instance().handleMenuClick();
    expect(clearMenuRecipes).toHaveBeenCalled;
  });

  it.skip('calls getMenuRecipes with expected parameters', () => {
    wrapper.instance().handleMenuClick();
    expect(getMenuRecipes).toHaveBeenCalled;
  });

  it.skip('calls addMenuRecipes with expected parameters', () => {
    wrapper.instance().handleMenuClick();
    expect(addMenuRecipes).toHaveBeenCalled;
  });

});
