import React from 'react';
import { shallow } from 'enzyme';
import { MenuContainer } from './MenuContainer';

describe("Welcome", () => {

  it.skip('matches the snapshot', () => {
    const wrapper = shallow(<MenuContainer />);
    expect(wrapper).toMatchSnapshot();
  });

});