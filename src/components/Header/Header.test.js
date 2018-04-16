import Header, { mapStateToProps, mapDispatchToProps } from './Header';
import React from 'react';
import { shallow } from 'enzyme';
import * as mock from '../../mockData/mockData';
import { getRecipes } from '../../api/apiCalls/getRecipes';
import { updateRecipesArray } from '../../api/apiHelpers/updateRecipesArray';
import { updateFilterCount } from '../../api/apiHelpers/updateFilterCount';
import { sortRecipes } from '../../api/apiHelpers/sortRecipes';
import { filterRecipes } from '../../api/apiHelpers/filterRecipes';
import { addRecipes } from '../../actions/index'
jest.mock('../../api/apiHelpers/updateRecipesArray');
jest.mock('../../api/apiHelpers/updateFilterCount');
jest.mock('../../api/apiHelpers/sortRecipes');
jest.mock('../../api/apiHelpers/filterRecipes');

describe('Header', () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('loads with the correct initial state', () => {
    expect(wrapper.state('search')).toEqual('');
    expect(wrapper.state('filterCount')).toEqual(0);
    expect(wrapper.state('categoryFilter')).toEqual('All Categories');
    expect(wrapper.state('ingredientFilter')).toEqual('All Ingredients');
    expect(wrapper.state('alcoholicFilter')).toEqual('All Alcoholic Content');
    expect(wrapper.state('categoryRecipes')).toEqual([]);
    expect(wrapper.state('ingredientRecipes')).toEqual([]);
    expect(wrapper.state('alcoholicRecipes')).toEqual([]);
    expect(wrapper.state('unfilteredRecipes')).toEqual([]);
  });


  it('maps to the store', () => {
    const mockStore = {
      recipes: mock.mockRecipeArray,
      categories: mock.sortedCategoryOptions,
      ingredients: mock.sortedIngredientOptions,
      alcoholicOptions: mock.sortedAlcoholicOptions
    };
    const mapped = mapStateToProps(mockStore);
    expect(mapped).toEqual(mockStore);
  });

  it('calls dispatch function when using mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addRecipes();
    expect(mockDispatch).toHaveBeenCalled();
  });

});

describe('handleSearchChange', () => {

  it('updates the state as the user types', () => {
    const expected = {
      search: 'margarita',
    };
    const event = {
      target: {
        name: 'search',
        value: 'margarita'
      }
    };
    wrapper.instance().handleSearchChange(event);
    expect(wrapper.state()).toEqual(expected);
  });

});

describe('handleSubmit', () => {

  let wrapper;
  let getRecipes;
  let addRecipes;

  beforeEach(() => {

    wrapper = shallow(<Header />);
    getRecipes = jest.fn();
    addRecipes = jest.fn();
    wrapper.instance().handleSubmit(event);

  });

  it('calls getRecipes with expected params', () => {
    expect(getRecipes).toHaveBeenCalled;
  })

  it('clears the search field', () => {
    expect(wrapper.state).toEqual({ state: '' })
  });

  it('calls addRecipes with expected params', () => {
    expect(addRecipes).toHaveBeenCalled;
  });

});

describe('handleFilterChange', () => {

  let wrapper;
  let updateRecipesArray;
  let updateFilterCount;
  let sortRecipes;
  let filterRecipes;

  beforeEach(() => {

    wrapper = shallow(<Header />);
    updateRecipesArray = jest.fn();
    updateFilterCount = jest.fn();
    sortRecipes = jest.fn();
    filterRecipes = jest.fn();
    const event = {
      target: {
        name: 'categoryFilter',
        value: 'Beer'
      }
    };
    wrapper.instance().handleSubmit(event);

  })

  it('sets the state to the current filter value', () => {
    expect(wrapper.state('categoryFilter')).toEqual('Beer');
  });

  it('sets the state to the currently filtered array of recipes', () => {
    expect(wrapper.state('categoryRecipes')).toEqual(mock.mockUnsortedMenuRecipeArray);
  });

  it('sets the state to the current number of selected filters', () => {
    expect(wrapper.state('filterCount')).toEqual(1);
  });

  it('sets the state to the sorted/merged recipes array', () => {
    expect(wrapper.state('unfilteredRecipes')).toEqual(mock.mockSortedMenuRecipesArray);
  });

  it('calls addRecipes with the expected parameters', () => {
    expect(addRecipes).toHaveBeenCalled;
  });

});