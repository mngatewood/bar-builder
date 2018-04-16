import React from 'react';
import App, { mapDispatchToProps } from './App';
import { shallow, mount } from 'enzyme';
import { getRecipes } from '../../api/apiCalls/getRecipes';
jest.mock('../../api/apiCalls/getRecipes');

describe('App', () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('calls getRecipes with the correct params on componentDidMount ', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().componentDidMount();
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
