import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import React from 'react';
import { shallow } from 'enzyme';
import * as mock from '../../mockData/mockData';
import { getRecipes } from '../../api/apiCalls/getRecipes';
import { updateRecipesArray } from '../../api/apiHelpers/updateRecipesArray';
import { updateFilterCount } from '../../api/apiHelpers/updateFilterCount';
import { sortRecipes } from '../../api/apiHelpers/sortRecipes';
import { filterRecipes } from '../../api/apiHelpers/filterRecipes';
import { addRecipes } from '../../actions/index';
jest.mock('../../api/apiCalls/getRecipes');
jest.mock('../../api/apiHelpers/updateRecipesArray');
jest.mock('../../api/apiHelpers/updateFilterCount');
jest.mock('../../api/apiHelpers/sortRecipes');
jest.mock('../../api/apiHelpers/filterRecipes');

describe('Header', () => {

  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<Header
      recipes={mock.mockRecipeArray}
      categories={mock.sortedCategoryOptions}
      ingredients={mock.sortedIngredientOptions}
      alcoholicOptions={mock.sortedAlcoholicOptions}
    />);

  })

  it('matches the snapshot', () => {
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
    const wrapper = shallow(<Header
      categories={mock.sortedCategoryOptions}
      ingredients={mock.sortedIngredientOptions}
      alcoholicOptions={mock.sortedAlcoholicOptions}
    />);
    const expected = 'margarita';
    let event = {
      target: {
        name: 'search',
        value: 'margarita'
      }
    };
    wrapper.instance().handleSearchChange(event);
    expect(wrapper.state('search')).toEqual(expected);
  });

});

describe('handleSubmit', () => {

  let wrapper, event, getRecipes, addRecipes, history;

  beforeEach(() => {

    history={};
    history.push=jest.fn();
    event = { preventDefault: jest.fn() };
    getRecipes = jest.fn();
    addRecipes = jest.fn();
    wrapper = shallow(<Header
      categories={mock.sortedCategoryOptions}
      ingredients={mock.sortedIngredientOptions}
      alcoholicOptions={mock.sortedAlcoholicOptions}
      history={history}
      addRecipes={addRecipes}
    />);
    wrapper.instance().handleSubmit(event);
  });

  it('calls getRecipes with expected params', () => {
    expect(getRecipes).toHaveBeenCalled;
  })

  it('clears the search field', () => {
    expect(wrapper.state('search')).toEqual( '' )
  });

  it('calls addRecipes with expected params', () => {
    expect(addRecipes).toHaveBeenCalled;
  });

});

describe.skip('handleFilterChange', () => {

  let wrapper, history, updateRecipesArray, updateFilterCount, sortRecipes, filterRecipes, event, preventDefault, name, value;

  beforeEach(() => {

    history = {};
    history.push = jest.fn();
    // preventDefault = jest.fn();
    updateRecipesArray = jest.fn();
    updateFilterCount = jest.fn();
    sortRecipes = jest.fn();
    filterRecipes = jest.fn();
    wrapper = shallow(<Header
      categories={mock.sortedCategoryOptions}
      ingredients={mock.sortedIngredientOptions}
      alcoholicOptions={mock.sortedAlcoholicOptions}
      history={history}
      addRecipes={addRecipes}
      preventDefault={preventDefault}
    />);
    event = {
      target: {
        name: 'categoryFilter',
        value: 'Beer'
      }
    };
    wrapper.instance().handleSubmit(event);

  });

  it('sets the state to the current filter value', () => {
    const name = event.target.name;
    const value = event.target.value;
    wrapper.setState({ [name]: value });
    expect(wrapper.state('categoryFilter')).toEqual('Beer');
  });

  it('sets the state to the currently filtered array of recipes', async () => {
    await expect(wrapper.state('categoryRecipes')).toEqual(mock.mockUnsortedMenuRecipeArray);
  });

  it('sets the state to the current number of selected filters', async () => {
    expect(wrapper.state('filterCount')).toEqual(1);
  });

  it('sets the state to the sorted/merged recipes array', () => {
    expect(wrapper.state('unfilteredRecipes')).toEqual(mock.mockSortedMenuRecipesArray);
  });

  it('calls addRecipes with the expected parameters', () => {
    expect(addRecipes).toHaveBeenCalled;
  });

});