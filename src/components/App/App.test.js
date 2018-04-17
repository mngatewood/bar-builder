import React from 'react';
import App, { mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
// import { getRecipes } from '../../api/apiCalls/getRecipes';
// import { getFilterOptions } from '../../api/apiCalls/getFilterOptions'
// jest.mock('../../api/apiCalls/getRecipes');
// jest.mock('../../api/apiCalls/getFilterOptions');

describe('App', () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('calls getRecipes with the correct params on componentDidMount ', async () => {
    // const getFilterOptions = jest.fn();
    const getRecipes = jest.fn();
    shallow(<App />);
    expect(getRecipes).toHaveBeenCalled();
  });

  it('calls dispatch function when using mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addRecipes();
    mapped.addCategories();
    mapped.addIngredients();
    mapped.addAlcoholicOptions();
    expect(mockDispatch).toHaveBeenCalled();
  });

});
