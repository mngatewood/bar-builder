import React from 'react';
import { App, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { getRecipes } from '../../api/apiCalls/getRecipes';
jest.mock('../../api/apiCalls/getRecipes');
jest.mock('../../api/apiCalls/getFilterOptions');

describe('App', () => {

  let addRecipes, addCategories, addIngredients, addAlcoholicOptions, wrapper;

  beforeEach(() => {

    addRecipes = jest.fn();
    addCategories = jest.fn();
    addIngredients = jest.fn();
    addAlcoholicOptions = jest.fn();
    wrapper = shallow(
      <App
        addRecipes={addRecipes}
        addCategories={addCategories}
        addIngredients={addIngredients}
        addAlcoholicOptions={addAlcoholicOptions}
      />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls getRecipes with correct params on componentDidMount', async () => {
    wrapper;
    expect(getRecipes).toHaveBeenCalledWith("random");
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
