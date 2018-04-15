import React from 'react';
import { getIngredientOptions } from '../getIngredientOptions'
import { shallow } from 'enzyme';

describe("getIngredientOptions", () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<getIngredientOptions />);
    expect(wrapper).toMatchSnapshot();
  });

});