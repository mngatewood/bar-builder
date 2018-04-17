import React from 'react';
import { shallow } from 'enzyme';
import { Recipe } from './Recipe';

describe("Recipe", () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(
      <Recipe
        forceDetails={false}
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('toggles recipe details', () => {
    const wrapper = shallow(
      <Recipe
        forceDetails={false}
      />);
    wrapper.instance().toggleRecipeDetails();
    expect(wrapper.state('detailsHidden')).toEqual(false);
    wrapper.instance().toggleRecipeDetails();
    expect(wrapper.state('detailsHidden')).toEqual(true);
  })

});