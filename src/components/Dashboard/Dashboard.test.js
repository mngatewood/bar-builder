import Dashboard from './Dashboard';
import { shallow} from 'enzyme';
import React from 'react';
// import { addMenuRecipes, clearMenuRecipes } from '../../actions';
// import { getMenuRecipes } from '../../api/apiHelpers/getMenuRecipes';


describe("Dashboard", () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
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
