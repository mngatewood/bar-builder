import React from 'react';
import { shallow } from 'enzyme';
import { Welcome, mapStateToProps } from './Welcome';
import * as mock from '../../mockData/mockData';

describe("Welcome", () => {

  it('matches the snapshot', () => {
    const recipes = mock.mockRecipeArray;
    const wrapper = shallow(
      <Welcome
        recipes={recipes}
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('maps to the store', () => {
    const mockStore = {
      recipes: mock.mockRecipeArray
    };
    const mapped = mapStateToProps(mockStore);
    expect(mapped).toEqual(mockStore);
  });

});