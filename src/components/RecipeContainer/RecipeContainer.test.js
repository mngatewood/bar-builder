import React from 'react';
import { shallow } from 'enzyme';
import { RecipeContainer, mapStateToProps } from './RecipeContainer';
import * as mock from '../../mockData/mockData';

describe("Recipe Container", () => {

  it('matches the snapshot', () => {
    const recipes = mock.mockRecipeArray;
    const wrapper = shallow(
      <RecipeContainer
        recipes={recipes}
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('maps to the store', () => {
    const mockStore = {
      recipes: mock.mockRecipesArray
    };
    const mapped = mapStateToProps(mockStore);
    expect(mapped).toEqual(mockStore);
  });

});