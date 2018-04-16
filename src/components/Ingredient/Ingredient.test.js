import React from 'react';
import { shallow } from 'enzyme';
import { Ingredient } from './Ingredient';

describe("Ingredient", () => {

  it.skip('matches the snapshot', () => {
    const wrapper = shallow(<Ingredient />);
    expect(wrapper).toMatchSnapshot();
  });

});